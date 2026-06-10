import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Center,
  Html,
  Points,
  PointMaterial,
  QuadraticBezierLine,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import * as THREE from "three";

function SkillNode({ title, percent, color }) {
  return (
    <motion.div
      animate={{
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      style={{
        textAlign: "center",
        userSelect: "none",
      }}
    >
      <div
        style={{
          color,
          fontWeight: "700",
          fontSize: "12px",
          textShadow: `
            0 0 10px ${color},
            0 0 20px ${color},
            0 0 40px ${color}
          `,
        }}
      >
        {title}
      </div>

      <div
        style={{
          color,
          fontWeight: "700",
          fontSize: "14px",
          textShadow: `
            0 0 10px ${color},
            0 0 20px ${color},
            0 0 40px ${color}
          `,
        }}
      >
        {percent}
      </div>
    </motion.div>
  );
}

function BrainPoint({ color }) {
  return (
    <div
      style={{
        width: "16px",
        height: "16px",
        borderRadius: "50%",
        background: color,
        boxShadow: `
          0 0 30px ${color},
          0 0 60px ${color},
          0 0 120px ${color}
        `,
      }}
    />
  );
}

function Particles() {
  const positions = useMemo(() => {
    const arr = new Float32Array(2000 * 3);

    for (let i = 0; i < 2000; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }

    return arr;
  }, []);

  return (
    <Points positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#4da6ff"
        size={0.015}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

function BrainModel() {
  const { scene } = useGLTF("/models/brain.glb");

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshPhysicalMaterial({
        color: "#4da6ff",
        transparent: true,
        opacity: 0.002,
        transmission: 1,
        emissive: "#4da6ff",
        emissiveIntensity: 12,
        roughness: 0,
        metalness: 1,
        clearcoat: 1,
      });
    }
  });

  return (
    <Center>
      <primitive object={scene} scale={2.0} />
    </Center>
  );
}
function NeuralLine({
  start,
  end,
  mid,
  color,
}) {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.material.opacity =
        0.12 +
        Math.abs(
          Math.sin(clock.elapsedTime * 2)
        ) *
          0.2;
    }
  });

  return (
    <QuadraticBezierLine
      ref={ref}
      start={start}
      end={end}
      mid={mid}
      color={color}
      lineWidth={1.5}
      transparent
      opacity={0.2}
    />
  );
}

export default function Brain3D() {
  const skills = {
  // good already
  programming: [3.0, 2.0, 0],

  // move upward to red circle
  analytical: [0.1, 2.45, 0],

  // move further left
  communication: [-3.7, 0.2, 0],

  // move upper-left
  uiux: [-3.0, 2.0, 0],

  // move directly below
  database: [0.4, -2.8, 0],

  // good already
  leadership: [3.4, -1.2, 0],

  // move slightly right
  core: [0.25, 0.6, 0],
 };

  return (
    <Canvas
      camera={{
        position: [0, 0, 13],
        fov: 40,
      }}
    >
      <ambientLight intensity={2} />

      <pointLight
        position={[0, 0, 5]}
        intensity={25}
        color="#4da6ff"
      />

      <pointLight
        position={[4, 4, 4]}
        intensity={15}
        color="#4da6ff"
      />

      <Particles />

      <BrainModel />

       {/* Neural Connections */}

    <NeuralLine
     start={[
     skills.programming[0],
     skills.programming[1],
     0.3,
    ]}
    end={[
     skills.core[0],
     skills.core[1],
     0.3,
    ]}
     mid={[2.5, 1.5, 0.3]}
     color="#55b3ff"
    />

    <NeuralLine
     start={[
     skills.analytical[0],
     skills.analytical[1],
     0.3,
    ]}
    end={[
     skills.core[0],
     skills.core[1],
     0.3,
     ]}
     mid={[1, 2, 0.3]}
     color="#b7ff8a"
     />

    <NeuralLine
      start={[
      skills.communication[0],
      skills.communication[1],
      0.3,
    ]}
     end={[
     skills.core[0],
     skills.core[1],
     0.3,
     ]}
    mid={[-2.5, 1.2, 0.3]}
    color="#d58cff"
    />

    <NeuralLine
     start={[
     skills.uiux[0],
     skills.uiux[1],
     0.3,
    ]}
    end={[
     skills.core[0],
     skills.core[1],
     0.3,
    ]}
    mid={[-2, 2.5, 0.3]}
    color="#86f7ff"
    />

    <NeuralLine
     start={[
     skills.database[0],
     skills.database[1],
     0.3,
    ]}
     end={[
     skills.core[0],
     skills.core[1],
     0.3,
    ]}
     mid={[-1, -2, 0.3]}
     color="#7ef9ff"
     />

    <NeuralLine
     start={[
     skills.leadership[0],
     skills.leadership[1],
     0.3,
     ]}
     end={[
     skills.core[0],
     skills.core[1],
     0.3,
    ]}
     mid={[2, -2, 0.3]}
     color="#ff7ab8"
    />
      {/* Glow Points */}

      <Html position={skills.programming}>
        <BrainPoint color="#55b3ff" />
      </Html>

      <Html position={skills.analytical}>
        <BrainPoint color="#b7ff8a" />
      </Html>

      <Html position={skills.communication}>
        <BrainPoint color="#d58cff" />
      </Html>

      <Html position={skills.leadership}>
        <BrainPoint color="#ff7ab8" />
      </Html>

      <Html position={skills.uiux}>
        <BrainPoint color="#86f7ff" />
      </Html>

      <Html position={skills.database}>
        <BrainPoint color="#7ef9ff" />
      </Html>

      <Html position={skills.core}>
        <BrainPoint color="#ffd76d" />
      </Html>

      {/* Labels */}

      <Html position={[2.5, 1.55, 0]}>
        <SkillNode
          title="Programming"
          percent="90%"
          color="#55b3ff"
        />
      </Html>

      <Html position={[0.15, 2.1, 0]}>
        <SkillNode
          title="Analytical"
          percent="82%"
          color="#b7ff8a"
        />
      </Html>

      <Html position={[-3.35, -0.15, 0]}>
        <SkillNode
          title="Communication"
          percent="75%"
          color="#d58cff"
        />
      </Html>

      <Html position={[2.75, -1.55, 0]}>
        <SkillNode
          title="Leadership"
          percent="70%"
          color="#ff7ab8"
        />
      </Html>

      <Html position={[-2.80, 1.75, 0]}>
        <SkillNode
          title="UI / UX"
          percent="65%"
          color="#86f7ff"
        />
      </Html>

      <Html position={[0.2, -2.25, 0]}>
        <SkillNode
          title="Database"
          percent="60%"
          color="#7ef9ff"
        />
      </Html>

      <Html position={[0.15, 0.25, 0]}>
        <SkillNode
          title="Core"
          percent="85%"
          color="#ffd76d"
        />
      </Html>

      <OrbitControls
        autoRotate
        autoRotateSpeed={0.12}
        enableZoom={false}
        enablePan={false}
      />

      <EffectComposer>
        <Bloom
          intensity={5}
          luminanceThreshold={0}
          luminanceSmoothing={0.8}
        />
      </EffectComposer>
    </Canvas>
  );
}