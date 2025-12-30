import { Canvas } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshWobbleMaterial, Icosahedron, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedCube = ({ position, color }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <MeshWobbleMaterial
          color={color}
          attach="material"
          factor={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const GeometricShapes = () => {
  return (
    <>
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <Icosahedron args={[0.4]} position={[-2, 1, -1]}>
          <MeshWobbleMaterial color="#06b6d4" factor={0.2} speed={3} />
        </Icosahedron>
      </Float>
      
      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.5}>
        <Octahedron args={[0.5]} position={[2.5, -1, -2]}>
          <MeshWobbleMaterial color="#10b981" factor={0.25} speed={2.5} />
        </Octahedron>
      </Float>
    </>
  );
};

const SkillsCubes = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#60a5fa" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#a855f7" />
        
        <AnimatedCube position={[-3, 2, 0]} color="#3b82f6" />
        <AnimatedCube position={[3, -1, 0]} color="#8b5cf6" />
        <AnimatedCube position={[-2, -2, 0]} color="#06b6d4" />
        <AnimatedCube position={[2, 2, 0]} color="#10b981" />
        
        <GeometricShapes />
      </Canvas>
    </div>
  );
};

export default SkillsCubes;