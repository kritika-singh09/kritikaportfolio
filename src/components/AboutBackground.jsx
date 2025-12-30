import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const WaveGeometry = () => {
  const meshRef = useRef();
  const geometry = new THREE.PlaneGeometry(20, 20, 50, 50);

  useFrame((state) => {
    if (meshRef.current) {
      const positions = meshRef.current.geometry.attributes.position.array;
      const time = state.clock.elapsedTime;
      
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        positions[i + 2] = Math.sin(x * 0.3 + time) * Math.cos(y * 0.3 + time) * 0.5;
      }
      
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
      <primitive object={geometry} />
      <meshStandardMaterial
        color="#3b82f6"
        wireframe
        transparent
        opacity={0.1}
      />
    </mesh>
  );
};

const AboutBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
        <ambientLight intensity={0.2} />
        <WaveGeometry />
      </Canvas>
    </div>
  );
};

export default AboutBackground;