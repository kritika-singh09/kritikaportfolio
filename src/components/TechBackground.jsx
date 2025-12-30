import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Laptop = () => {
  const laptopRef = useRef();

  useFrame((state) => {
    if (laptopRef.current) {
      laptopRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      laptopRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <group ref={laptopRef} position={[3, 0, 0]}>
      {/* Laptop Base */}
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[2, 0.1, 1.5]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>
      {/* Laptop Screen */}
      <mesh position={[0, 0.6, -0.7]} rotation={[-0.2, 0, 0]}>
        <boxGeometry args={[1.8, 1.2, 0.05]} />
        <meshStandardMaterial color="#111827" />
      </mesh>
      {/* Screen Content */}
      <mesh position={[0, 0.6, -0.68]} rotation={[-0.2, 0, 0]}>
        <planeGeometry args={[1.6, 1]} />
        <meshStandardMaterial color="#3b82f6" emissive="#1e40af" emissiveIntensity={0.3} />
      </mesh>
    </group>
  );
};

const CodeSymbols = () => {
  const symbolsRef = useRef();

  useFrame((state) => {
    if (symbolsRef.current) {
      symbolsRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={symbolsRef} position={[-3, 0, 0]}>
      {/* Brackets */}
      <mesh position={[-0.5, 0.5, 0]}>
        <torusGeometry args={[0.3, 0.05, 8, 16]} />
        <meshStandardMaterial color="#10b981" wireframe />
      </mesh>
      <mesh position={[0.5, -0.5, 0]}>
        <torusGeometry args={[0.2, 0.03, 8, 16]} />
        <meshStandardMaterial color="#8b5cf6" wireframe />
      </mesh>
      {/* Code Block */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.8, 0.8, 0.1]} />
        <meshStandardMaterial color="#1f2937" wireframe />
      </mesh>
    </group>
  );
};

const TechBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} />
        <Laptop />
        <CodeSymbols />
      </Canvas>
    </div>
  );
};

export default TechBackground;