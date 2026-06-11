import Brain3D from "./Brain3D";

export default function BrainMap({ activeSkill, setActiveSkill, focusMode, setFocusMode }) {
  return (
    <div
      style={{
        flex: 1,
        position: "relative",
        overflow: "hidden",
        background: "radial-gradient(circle at 50% 50%, #0c1a3a 0%, #030611 80%)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Left Title Section */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          left: focusMode ? "40px" : "280px",
          zIndex: 100,
          transition: "left 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <h1
          style={{
            color: "#ffffff",
            fontSize: "18px",
            fontWeight: "400",
            letterSpacing: "4px",
            fontFamily: "'Outfit', sans-serif",
            textTransform: "uppercase",
            opacity: 0.95,
          }}
        >
          YOUR BRAIN MAP
        </h1>

        <p
          style={{
            color: "#5c6b8c",
            fontSize: "13px",
            marginTop: "8px",
            fontWeight: "300",
          }}
        >
          Visualize your skills. Expand your potential.
        </p>
      </div>

      {/* Right Focus Mode button */}
      <button
        className="glass-card"
        onClick={() => setFocusMode(!focusMode)}
        style={{
          position: "absolute",
          top: "40px",
          right: focusMode ? "40px" : "380px",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          padding: "8px 16px",
          borderRadius: "30px",
          color: focusMode ? "#ffffff" : "#d6dcee",
          fontSize: "12px",
          fontWeight: "500",
          cursor: "pointer",
          border: focusMode 
            ? "1px solid rgba(77, 166, 255, 0.6)" 
            : "1px solid rgba(255,255,255,0.06)",
          background: focusMode 
            ? "rgba(77, 166, 255, 0.18)" 
            : "rgba(255, 255, 255, 0.02)",
          boxShadow: focusMode ? "0 0 15px rgba(77, 166, 255, 0.3)" : "none",
          transition: "all 0.3s ease, right 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          backdropFilter: "blur(8px)",
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ marginRight: "8px" }}
        >
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
        Focus Mode
      </button>

      {/* 3D Canvas component */}
      <Brain3D activeSkill={activeSkill} setActiveSkill={setActiveSkill} focusMode={focusMode} />

      {/* Bottom Controls Section */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          zIndex: 100,
        }}
      >
        {/* Left Filter button */}
        <button
          className="glass-card"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#7f8da8",
            cursor: "pointer",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            background: "rgba(255, 255, 255, 0.02)",
            transition: "all 0.3s ease",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="21" x2="4" y2="14"></line>
            <line x1="4" y1="10" x2="4" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12" y2="3"></line>
            <line x1="20" y1="21" x2="20" y2="16"></line>
            <line x1="20" y1="12" x2="20" y2="3"></line>
            <line x1="1" y1="14" x2="7" y2="14"></line>
            <line x1="9" y1="8" x2="15" y2="8"></line>
            <line x1="17" y1="16" x2="23" y2="16"></line>
          </svg>
        </button>

        {/* Center Add Skill button */}
        <button
          className="glass-card"
          style={{
            display: "flex",
            alignItems: "center",
            padding: "12px 28px",
            borderRadius: "30px",
            color: "#ffffff",
            fontSize: "14px",
            fontWeight: "400",
            cursor: "pointer",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            background: "rgba(255, 255, 255, 0.03)",
            transition: "all 0.3s ease",
            letterSpacing: "0.2px",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginRight: "8px" }}
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Add New Skill
        </button>

        {/* Right Network Layout button */}
        <button
          className="glass-card"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#7f8da8",
            cursor: "pointer",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            background: "rgba(255, 255, 255, 0.02)",
            transition: "all 0.3s ease",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 3a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3zM6 15a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3zm12 0a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3zm-9.3-4.3l4.6 2.6m.7-5.2l-4.6 2.6"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}