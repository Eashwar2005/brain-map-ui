export default function SkillPanel() {
  return (
    <div
      style={{
        width: "260px",
        background: "#071126",
        borderLeft: "1px solid rgba(255,255,255,0.08)",
        padding: "20px",
        color: "white",
      }}
    >
      <div
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          border: "2px solid #4da6ff",
          margin: "0 auto",
          boxShadow: "0 0 20px rgba(77,166,255,0.4)",
        }}
      />

      <h2
        style={{
          textAlign: "center",
          marginTop: "15px",
          fontSize: "28px",
        }}
      >
        Programming
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#aab4cc",
          marginTop: "6px",
        }}
      >
        90% Mastery
      </p>

      <div
        style={{
          marginTop: "15px",
          height: "8px",
          background: "#1d2740",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "90%",
            height: "100%",
            background: "#4da6ff",
          }}
        />
      </div>

      <h3
        style={{
          marginTop: "35px",
          marginBottom: "15px",
        }}
      >
        Sub Skills
      </h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div>Python — 100%</div>
        <div>Data Structures — 95%</div>
        <div>Algorithms — 88%</div>
        <div>OOP Concepts — 92%</div>
        <div>Testing & Debugging — 70%</div>
      </div>

      <h3
        style={{
          marginTop: "35px",
          marginBottom: "15px",
        }}
      >
        Next Milestone
      </h3>

      <div
        style={{
          padding: "15px",
          borderRadius: "14px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.06)",
          color: "#d0d6e6",
          lineHeight: "1.5",
        }}
      >
        Build a REST API with Authentication
      </div>
    </div>
  );
}
