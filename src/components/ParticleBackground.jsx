import { Canvas } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Trail, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const Particles = () => {
  const meshRef = useRef();
  const particleCount = 150;

  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25;
      
      const color = new THREE.Color();
      color.setHSL(0.6 + Math.random() * 0.2, 0.8, 0.6);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
      
      scales[i] = Math.random() * 0.5 + 0.5;
    }
    
    return { positions, colors, scales };
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      const positions = meshRef.current.geometry.attributes.position.array;
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(state.clock.elapsedTime * 2 + i * 0.1) * 0.005;
        positions[i3] += Math.cos(state.clock.elapsedTime * 1.5 + i * 0.05) * 0.003;
      }
      
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const FloatingShapes = () => {
  const shapes = useRef([]);

  useFrame((state) => {
    shapes.current.forEach((shape, i) => {
      if (shape) {
        shape.rotation.x = state.clock.elapsedTime * (0.2 + i * 0.1);
        shape.rotation.y = state.clock.elapsedTime * (0.3 + i * 0.05);
      }
    });
  });

  return (
    <>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={3}>
        <mesh ref={(el) => (shapes.current[0] = el)} position={[-8, 2, -5]}>
          <octahedronGeometry args={[0.6]} />
          <meshStandardMaterial 
            color="#3b82f6" 
            wireframe 
            transparent 
            opacity={0.4}
            emissive="#1e40af"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>
      
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh ref={(el) => (shapes.current[1] = el)} position={[8, -2, -3]}>
          <tetrahedronGeometry args={[0.8]} />
          <meshStandardMaterial 
            color="#8b5cf6" 
            wireframe 
            transparent 
            opacity={0.4}
            emissive="#7c3aed"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>
      
      <Float speed={1.8} rotationIntensity={1.8} floatIntensity={2.5}>
        <mesh ref={(el) => (shapes.current[2] = el)} position={[-6, -3, -4]}>
          <dodecahedronGeometry args={[0.5]} />
          <meshStandardMaterial 
            color="#06b6d4" 
            wireframe 
            transparent 
            opacity={0.4}
            emissive="#0891b2"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>
      
      <Float speed={2.2} rotationIntensity={2.2} floatIntensity={1.8}>
        <mesh ref={(el) => (shapes.current[3] = el)} position={[6, 3, -6]}>
          <icosahedronGeometry args={[0.7]} />
          <meshStandardMaterial 
            color="#10b981" 
            wireframe 
            transparent 
            opacity={0.4}
            emissive="#059669"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>
    </>
  );
};

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 12], fov: 75 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#60a5fa" />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#a855f7" />
        <spotLight position={[0, 10, 0]} intensity={0.3} color="#06b6d4" />
        
        <Particles />
        <FloatingShapes />
        <Sparkles count={50} scale={20} size={2} speed={0.5} color="#60a5fa" />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;