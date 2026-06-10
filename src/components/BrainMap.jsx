import Brain3D from "./Brain3D";

export default function BrainMap() {
  return (
    <div
      style={{
        flex: 1,
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at center, #10254f 0%, #050816 70%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "30px",
          left: "40px",
          zIndex: 100,
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "32px",
            fontWeight: "300",
            letterSpacing: "6px",
          }}
        >
          YOUR BRAIN MAP
        </h1>

        <p
          style={{
            color: "#8fa3d1",
            marginTop: "8px",
          }}
        >
          Visualize your skills. Expand your potential.
        </p>
      </div>

      <Brain3D />
    </div>
  );
}