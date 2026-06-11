import { useState } from "react";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Brain Map");

  const items = [
    { name: "Brain Map", icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2.5"></circle>
        <circle cx="5" cy="12" r="2.5"></circle>
        <circle cx="19" cy="12" r="2.5"></circle>
        <circle cx="12" cy="19" r="2.5"></circle>
        <line x1="12" y1="7.5" x2="12" y2="16.5"></line>
        <line x1="7.2" y1="10.8" x2="16.8" y2="13.2"></line>
        <line x1="7.2" y1="13.2" x2="16.8" y2="10.8"></line>
      </svg>
    )},
    { name: "Progress", icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
      </svg>
    )},
    { name: "Skills", icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    )},
    { name: "Goals", icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
    )},
    { name: "Insights", icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34M12 2a5 5 0 0 0-5 5v4h10V7a5 5 0 0 0-5-5z"></path>
      </svg>
    )},
    { name: "Achievements", icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
    )},
    { name: "Focus", icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    )},
    { name: "Settings", icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
    )}
  ];

  return (
    <div
      className="glass-sidebar"
      style={{
        width: "240px",
        padding: "24px 16px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        zIndex: 10,
      }}
    >
      {/* MindOS Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "36px",
          paddingLeft: "8px",
        }}
      >
        <div
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            border: "2.5px solid #4da6ff",
            boxShadow: "0 0 8px #4da6ff",
          }}
        />
        <h1
          style={{
            fontSize: "20px",
            fontWeight: "500",
            letterSpacing: "0.5px",
            color: "#ffffff",
          }}
        >
          MindOS
        </h1>
      </div>

      {/* Navigation list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {items.map((item) => {
          const isActive = activeItem === item.name;
          return (
            <div
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 16px",
                borderRadius: "12px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "400",
                color: isActive ? "#ffffff" : "#7f8da8",
                background: isActive
                  ? "radial-gradient(100% 100% at 0% 0%, rgba(77, 166, 255, 0.15) 0%, rgba(77, 166, 255, 0.03) 100%)"
                  : "transparent",
                border: isActive
                  ? "1px solid rgba(77, 166, 255, 0.2)"
                  : "1px solid transparent",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: isActive ? "0 4px 15px rgba(77, 166, 255, 0.05)" : "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span
                  style={{
                    color: isActive ? "#4da6ff" : "#7f8da8",
                    display: "flex",
                    alignItems: "center",
                    transition: "color 0.3s",
                  }}
                >
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </div>
              {isActive && (
                <div
                  style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    backgroundColor: "#4da6ff",
                    boxShadow: "0 0 6px #4da6ff",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Overall Progress Card */}
      <div
        className="glass-card"
        style={{
          marginTop: "auto",
          padding: "16px",
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <div
            style={{
              fontSize: "11px",
              color: "#7f8da8",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Overall Progress
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: "600",
              color: "#ffffff",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            78%
          </div>
          <div
            style={{
              fontSize: "11px",
              color: "#7f8da8",
              marginTop: "4px",
            }}
          >
            Skills Mastered
          </div>
          <div
            style={{
              fontSize: "13px",
              fontWeight: "500",
              color: "#ffffff",
            }}
          >
            26 <span style={{ color: "#7f8da8", fontSize: "11px" }}>/ 33</span>
          </div>
          <div
            style={{
              fontSize: "11px",
              color: "#7f8da8",
              marginTop: "4px",
            }}
          >
            Hours Invested
          </div>
          <div
            style={{
              fontSize: "13px",
              fontWeight: "500",
              color: "#ffffff",
            }}
          >
            212h
          </div>
        </div>

        {/* Circular Progress Ring */}
        <div style={{ position: "relative", width: "64px", height: "64px" }}>
          <svg width="64" height="64" viewBox="0 0 36 36" style={{ transform: "rotate(-90deg)" }}>
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="rgba(255, 255, 255, 0.03)"
              strokeWidth="2.8"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="url(#blue-grad)"
              strokeWidth="2.8"
              strokeDasharray="78, 100"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4da6ff" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Footer message */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 4px",
        }}
      >
        <div
          style={{
            fontSize: "11px",
            color: "#46587c",
            width: "80%",
            lineHeight: "1.4",
          }}
        >
          Every connection makes you stronger.
        </div>
        <div
          style={{
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            border: "1px dashed rgba(77, 166, 255, 0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              backgroundColor: "#4da6ff",
              boxShadow: "0 0 8px #4da6ff",
            }}
          />
        </div>
      </div>
    </div>
  );
}