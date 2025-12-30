import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Database = ({ position }) => {
  const dbRef = useRef();

  useFrame((state) => {
    if (dbRef.current) {
      dbRef.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <group ref={dbRef} position={position}>
      {/* Database Cylinders */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.1, 16]} />
        <meshStandardMaterial color="#10b981" />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.1, 16]} />
        <meshStandardMaterial color="#059669" />
      </mesh>
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.1, 16]} />
        <meshStandardMaterial color="#047857" />
      </mesh>
    </group>
  );
};

const Server = ({ position }) => {
  const serverRef = useRef();

  useFrame((state) => {
    if (serverRef.current) {
      serverRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={serverRef} position={position}>
      {/* Server Rack */}
      <mesh>
        <boxGeometry args={[0.8, 1.2, 0.4]} />
        <meshStandardMaterial color="#374151" />
      </mesh>
      {/* Server Lights */}
      <mesh position={[-0.3, 0.4, 0.21]}>
        <sphereGeometry args={[0.03]} />
        <meshStandardMaterial color="#ef4444" emissive="#dc2626" />
      </mesh>
      <mesh position={[-0.1, 0.4, 0.21]}>
        <sphereGeometry args={[0.03]} />
        <meshStandardMaterial color="#22c55e" emissive="#16a34a" />
      </mesh>
      <mesh position={[0.1, 0.4, 0.21]}>
        <sphereGeometry args={[0.03]} />
        <meshStandardMaterial color="#3b82f6" emissive="#2563eb" />
      </mesh>
    </group>
  );
};

const API = ({ position }) => {
  const apiRef = useRef();

  useFrame((state) => {
    if (apiRef.current) {
      apiRef.current.rotation.z = state.clock.elapsedTime * 0.3;
      apiRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group ref={apiRef} position={position}>
      {/* API Connection Lines */}
      <mesh>
        <torusGeometry args={[0.5, 0.02, 8, 32]} />
        <meshStandardMaterial color="#8b5cf6" wireframe />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.3, 0.02, 8, 32]} />
        <meshStandardMaterial color="#06b6d4" wireframe />
      </mesh>
    </group>
  );
};

const ExperienceBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} />
        <Database position={[-4, 1, -2]} />
        <Server position={[4, -1, -3]} />
        <API position={[0, 2, -4]} />
        <API position={[-2, -2, -2]} />
      </Canvas>
    </div>
  );
};

export default ExperienceBackground;