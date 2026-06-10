export default function Sidebar() {
  const items = [
    "Brain Map",
    "Progress",
    "Skills",
    "Goals",
    "Insights",
    "Achievements",
    "Focus",
    "Settings",
  ];

  return (
    <div
      style={{
        width: "180px",
        background: "#071126",
        borderRight: "1px solid rgba(255,255,255,0.08)",
        padding: "20px 15px",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          color: "#4da6ff",
          fontSize: "24px",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        MindOS
      </h1>

      {items.map((item) => (
        <div
          key={item}
          style={{
            padding: "12px 14px",
            marginBottom: "8px",
            borderRadius: "12px",
            cursor: "pointer",
            fontSize: "15px",
            color: "#d6dcee",
            background:
              item === "Brain Map"
                ? "rgba(77,166,255,0.12)"
                : "transparent",
            transition: "0.3s",
          }}
        >
          {item}
        </div>
      ))}

      <div
        style={{
          marginTop: "auto",
          padding: "15px",
          borderRadius: "14px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div
          style={{
            fontSize: "12px",
            color: "#7f8da8",
            marginBottom: "8px",
          }}
        >
          Overall Progress
        </div>

        <div
          style={{
            fontSize: "28px",
            fontWeight: "600",
          }}
        >
          78%
        </div>

        <div
          style={{
            marginTop: "8px",
            fontSize: "12px",
            color: "#7f8da8",
          }}
        >
          26 / 33 Skills Mastered
        </div>
      </div>
    </div>
  );
}