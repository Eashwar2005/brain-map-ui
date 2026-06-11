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
import * as THREE from "three";

// 3D coordinates distributed inside the brain mesh volume (X: [-2.1, 2.0], Y: [-1.6, 1.6], Z: [-0.8, 0.5])
const SKILLS_DATA = {
  programming: {
    id: "programming",
    title: "Programming",
    percent: "90%",
    color: "#55b3ff",
    pos: [-1.8, 1.0, -0.5],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    )
  },
  analytical: {
    id: "analytical",
    title: "Analytical Thinking",
    percent: "82%",
    color: "#b7ff8a",
    pos: [-0.2, 1.6, 0.3],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </svg>
    )
  },
  communication: {
    id: "communication",
    title: "Communication",
    percent: "75%",
    color: "#d58cff",
    pos: [1.8, 1.1, -0.6],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        <circle cx="9" cy="10" r="1" fill="currentColor"></circle>
        <circle cx="12" cy="10" r="1" fill="currentColor"></circle>
        <circle cx="15" cy="10" r="1" fill="currentColor"></circle>
      </svg>
    )
  },
  leadership: {
    id: "leadership",
    title: "Leadership",
    percent: "70%",
    color: "#ff7ab8",
    pos: [2.0, -0.2, 0.5],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      </svg>
    )
  },
  writing: {
    id: "writing",
    title: "Writing",
    percent: "55%",
    color: "#86f7ff",
    pos: [1.3, -1.0, -0.4],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <path d="M12 20h9"></path>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
      </svg>
    )
  },
  database: {
    id: "database",
    title: "Databases",
    percent: "60%",
    color: "#7ef9ff",
    pos: [-0.3, -0.8, -0.8],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
      </svg>
    )
  },
  emotional_intelligence: {
    id: "emotional_intelligence",
    title: "Emotional Intelligence",
    percent: "68%",
    color: "#d58cff",
    pos: [0.2, -1.6, 0.4],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    )
  },
  ds_algo: {
    id: "ds_algo",
    title: "Data Structures\n& Algorithms",
    percent: "80%",
    color: "#ffaa66",
    pos: [-1.4, -1.1, 0.5],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
    )
  },
  uiux: {
    id: "uiux",
    title: "UI/UX Design",
    percent: "65%",
    color: "#86f7ff",
    pos: [-2.1, -0.1, -0.4],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <rect x="3" y="3" width="7" height="9"></rect>
        <rect x="14" y="3" width="7" height="5"></rect>
        <rect x="14" y="12" width="7" height="9"></rect>
        <rect x="3" y="16" width="7" height="5"></rect>
      </svg>
    )
  },
  problem_solving: {
    id: "problem_solving",
    title: "Problem Solving",
    percent: "85%",
    color: "#ffd76d",
    pos: [0.1, 0.2, 0.2],
    isCenter: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z"></path>
      </svg>
    )
  }
};

// 3D Skill Node Component
function SkillNode3D({ skill, isActive, onClick }) {
  const { id, title, percent, color, icon, isCenter } = skill;
  return (
    <Html position={skill.pos} center distanceFactor={22} style={{ pointerEvents: "auto" }}>
      <div
        onClick={onClick}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
          userSelect: "none",
          transform: `scale(${isActive ? 1.05 : 0.95})`,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          width: isCenter ? "80px" : "64px",
        }}
      >
        {/* Glow Node Circle */}
        <div
          style={{
            width: isCenter ? "22px" : "16px",
            height: isCenter ? "22px" : "16px",
            borderRadius: "50%",
            background: isActive
              ? `radial-gradient(circle, ${color} 0%, rgba(3, 6, 17, 0.95) 100%)`
              : "rgba(3, 6, 17, 0.85)",
            border: `1.0px solid ${color}`,
            boxShadow: isActive
              ? `0 0 12px ${color}, 0 0 20px ${color}50, inset 0 0 3px ${color}`
              : `0 0 4px ${color}15, inset 0 0 1px ${color}05`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: isActive ? "#ffffff" : color,
            padding: isCenter ? "5px" : "3px",
            transition: "all 0.3s ease",
          }}
        >
          {icon}
        </div>

        {/* Labels underneath node */}
        <div
          style={{
            marginTop: "4px",
            textAlign: "center",
            lineHeight: "1.2",
          }}
        >
          <div
            style={{
              color: "#ffffff",
              fontSize: isCenter ? "8px" : "6.5px",
              fontWeight: isCenter ? "600" : "500",
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: "0.2px",
              whiteSpace: "pre-line",
            }}
          >
            {title}
          </div>
          <div
            style={{
              color: color,
              fontSize: isCenter ? "7.5px" : "6px",
              fontWeight: "700",
              fontFamily: "'Inter', sans-serif",
              marginTop: "2px",
            }}
          >
            {percent}
          </div>
        </div>
      </div>
    </Html>
  );
}

// Particle field
function Particles({ count = 1500, color = "#4da6ff", size = 0.015 }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 22;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }
    return arr;
  }, [count]);

  return (
    <Points positions={positions} stride={3}>
      <PointMaterial
        transparent
        color={color}
        size={size}
        sizeAttenuation
        depthWrite={false}
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Brain 3D Mesh
function BrainModel() {
  const { scene } = useGLTF("/models/brain.glb");

  useMemo(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: "#162e70",
          transparent: true,
          opacity: 0.12,
          wireframe: true,
          emissive: "#1d4ed8",
          emissiveIntensity: 0.6,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });
      }
    });
  }, [scene]);

  return (
    <Center>
      <primitive object={scene} scale={2.0} />
    </Center>
  );
}

// Neural connection bezier line
function NeuralLine({ start, end, mid, color }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (ref.current?.material) {
      ref.current.material.opacity =
        0.18 + Math.abs(Math.sin(clock.elapsedTime * 2.5)) * 0.35;
    }
  });

  return (
    <QuadraticBezierLine
      ref={ref}
      start={start}
      end={end}
      mid={mid}
      color={color}
      lineWidth={1.2}
      transparent
      opacity={0.3}
      depthTest={false}
      renderOrder={999}
    />
  );
}

export default function Brain3D({ activeSkill, setActiveSkill }) {
  // Connections map
  const connections = useMemo(() => {
    const list = [
      // Problem Solving (center) connected to all other 9 nodes
      { start: "problem_solving", end: "programming", color: "#ffd76d" },
      { start: "problem_solving", end: "analytical", color: "#ffd76d" },
      { start: "problem_solving", end: "communication", color: "#ffd76d" },
      { start: "problem_solving", end: "leadership", color: "#ffd76d" },
      { start: "problem_solving", end: "writing", color: "#ffd76d" },
      { start: "problem_solving", end: "database", color: "#ffd76d" },
      { start: "problem_solving", end: "ds_algo", color: "#ffd76d" },
      { start: "problem_solving", end: "uiux", color: "#ffd76d" },

      // Outer ring connections
      { start: "programming", end: "uiux", color: "#55b3ff" },
      { start: "uiux", end: "ds_algo", color: "#86f7ff" },
      { start: "ds_algo", end: "database", color: "#ffaa66" },
      { start: "database", end: "emotional_intelligence", color: "#7ef9ff" },
      { start: "emotional_intelligence", end: "writing", color: "#d58cff" },
      { start: "writing", end: "leadership", color: "#86f7ff" },
      { start: "leadership", end: "communication", color: "#ff7ab8" },
      { start: "communication", end: "analytical", color: "#d58cff" },
      { start: "analytical", end: "programming", color: "#b7ff8a" },

      // Additional cross neural links
      { start: "ds_algo", end: "emotional_intelligence", color: "#ffaa66" },
      { start: "database", end: "writing", color: "#7ef9ff" }
    ];

    return list.map((conn) => {
      const startNode = SKILLS_DATA[conn.start];
      const endNode = SKILLS_DATA[conn.end];

      if (!startNode || !endNode) return null;

      // Calculate midpoint curved slightly outward
      const mx = (startNode.pos[0] + endNode.pos[0]) / 2;
      const my = (startNode.pos[1] + endNode.pos[1]) / 2;
      const mz = (startNode.pos[2] + endNode.pos[2]) / 2;
      
      // Arc curvature based on distance
      const dist = Math.sqrt(
        Math.pow(startNode.pos[0] - endNode.pos[0], 2) +
        Math.pow(startNode.pos[1] - endNode.pos[1], 2)
      );

      const offset = dist > 3 ? 0.4 : 0.2;

      return {
        id: `${conn.start}-${conn.end}`,
        start: startNode.pos,
        end: endNode.pos,
        mid: [mx * 1.05, my * 1.05, mz + offset],
        color: conn.color
      };
    }).filter(Boolean);
  }, []);

  return (
    <Canvas
      camera={{
        position: [0, 0, 15.0],
        fov: 40,
      }}
      style={{ flex: 1, pointerEvents: "auto" }}
    >
      <ambientLight intensity={1.5} />

      <pointLight position={[0, 4, 6]} intensity={15} color="#4da6ff" />
      <pointLight position={[-6, -4, 4]} intensity={10} color="#8b5cf6" />

      {/* Group containing all 3D map elements shifted slightly upward to clear bottom controls */}
      <group position={[0, 0.4, 0]}>
        {/* Render local colored point lights on the brain wireframe at node locations */}
        {Object.values(SKILLS_DATA).map((node) => {
          const isSelected = activeSkill === node.id;
          return (
            <pointLight
              key={`light-${node.id}`}
              position={[node.pos[0], node.pos[1], node.pos[2] - 0.2]}
              intensity={isSelected ? 6 : 1.5}
              distance={3.5}
              color={node.color}
            />
          );
        })}

        {/* Dense fine background particle fields */}
        <Particles count={1400} color="#55b3ff" size={0.015} />
        <Particles count={1000} color="#d58cff" size={0.012} />

        {/* Translucent brain mesh */}
        <BrainModel />

        {/* Curved Neural Connection Lines */}
        {connections.map((conn) => (
          <NeuralLine
            key={conn.id}
            start={conn.start}
            end={conn.end}
            mid={conn.mid}
            color={conn.color}
          />
        ))}

        {/* Interactive 3D HTML skill nodes */}
        {Object.values(SKILLS_DATA).map((skill) => (
          <SkillNode3D
            key={skill.id}
            skill={skill}
            isActive={activeSkill === skill.id}
            onClick={() => setActiveSkill(skill.id)}
          />
        ))}
      </group>

      <OrbitControls
        autoRotate
        autoRotateSpeed={0.08}
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 2.2}
      />
    </Canvas>
  );
}