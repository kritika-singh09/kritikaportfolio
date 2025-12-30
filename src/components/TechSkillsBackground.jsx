import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const ReactLogo = ({ position }) => {
  const reactRef = useRef();

  useFrame((state) => {
    if (reactRef.current) {
      reactRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group ref={reactRef} position={position}>
      {/* React Atom Core */}
      <mesh>
        <sphereGeometry args={[0.1]} />
        <meshStandardMaterial color="#61dafb" emissive="#0ea5e9" />
      </mesh>
      {/* Electron Orbits */}
      <mesh rotation={[0, 0, 0]}>
        <torusGeometry args={[0.5, 0.02, 8, 32]} />
        <meshStandardMaterial color="#61dafb" wireframe />
      </mesh>
      <mesh rotation={[Math.PI / 3, 0, Math.PI / 3]}>
        <torusGeometry args={[0.5, 0.02, 8, 32]} />
        <meshStandardMaterial color="#61dafb" wireframe />
      </mesh>
      <mesh rotation={[-Math.PI / 3, 0, -Math.PI / 3]}>
        <torusGeometry args={[0.5, 0.02, 8, 32]} />
        <meshStandardMaterial color="#61dafb" wireframe />
      </mesh>
    </group>
  );
};

const NodeJS = ({ position }) => {
  const nodeRef = useRef();

  useFrame((state) => {
    if (nodeRef.current) {
      nodeRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      nodeRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={nodeRef} position={position}>
      {/* Node.js Hexagon */}
      <mesh>
        <cylinderGeometry args={[0.4, 0.4, 0.1, 6]} />
        <meshStandardMaterial color="#68a063" />
      </mesh>
      <mesh position={[0, 0, 0.06]}>
        <cylinderGeometry args={[0.3, 0.3, 0.02, 6]} />
        <meshStandardMaterial color="#8cc84b" />
      </mesh>
    </group>
  );
};

const MongoDB = ({ position }) => {
  const mongoRef = useRef();

  useFrame((state) => {
    if (mongoRef.current) {
      mongoRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      mongoRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.1;
    }
  });

  return (
    <group ref={mongoRef} position={position}>
      {/* MongoDB Leaf Shape */}
      <mesh>
        <sphereGeometry args={[0.3, 8, 16]} />
        <meshStandardMaterial color="#4db33d" />
      </mesh>
      <mesh position={[0, 0.2, 0]} scale={[0.8, 1.2, 0.8]}>
        <sphereGeometry args={[0.2, 8, 16]} />
        <meshStandardMaterial color="#3fa037" />
      </mesh>
    </group>
  );
};

const TechSkillsBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} />
        <ReactLogo position={[-3, 2, -2]} />
        <NodeJS position={[3, -1, -3]} />
        <MongoDB position={[-2, -2, -1]} />
        <ReactLogo position={[2, 2, -4]} />
      </Canvas>
    </div>
  );
};

export default TechSkillsBackground;