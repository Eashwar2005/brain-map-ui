import { useState } from "react";

// Localized skill details database
const SKILL_DETAILS = {
  programming: {
    title: "Programming",
    percent: "90%",
    mastery: 90,
    color: "#55b3ff",
    description: "Building scalable software solutions and writing clean, efficient code.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "20px", height: "20px" }}>
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    subskills: [
      { name: "Python", percent: "100%", status: "completed" },
      { name: "Data Structures", percent: "90%", status: "completed" },
      { name: "Algorithms", percent: "80%", status: "completed" },
      { name: "OOP Concepts", percent: "85%", status: "completed" },
      { name: "Testing & Debugging", percent: "70%", status: "inprogress" },
      { name: "Git & Version Control", percent: "60%", status: "inprogress" },
      { name: "Clean Code", percent: "50%", status: "inprogress" },
      { name: "System Design", percent: "30%", status: "locked" }
    ],
    milestone: {
      title: "Build a RESTful API with authentication",
      progress: "0 / 1",
      xp: "+150 XP"
    }
  },
  analytical: {
    title: "Analytical Thinking",
    percent: "82%",
    mastery: 82,
    color: "#b7ff8a",
    description: "Deconstructing complex systems, analyzing data patterns, and drawing logical, actionable insights.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "20px", height: "20px" }}>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </svg>
    ),
    subskills: [
      { name: "Critical Thinking", percent: "90%", status: "completed" },
      { name: "Data Interpretation", percent: "85%", status: "completed" },
      { name: "Statistical Inference", percent: "75%", status: "completed" },
      { name: "Hypothesis Testing", percent: "80%", status: "completed" },
      { name: "Pattern Recognition", percent: "70%", status: "inprogress" },
      { name: "Logic Optimization", percent: "60%", status: "inprogress" },
      { name: "Quantitative Modeling", percent: "40%", status: "locked" }
    ],
    milestone: {
      title: "Solve 10 complex diagnostic case studies",
      progress: "0 / 1",
      xp: "+120 XP"
    }
  },
  communication: {
    title: "Communication",
    percent: "75%",
    mastery: 75,
    color: "#d58cff",
    description: "Conveying ideas clearly, active listening, and collaborating across multidisciplinary teams.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "20px", height: "20px" }}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
    subskills: [
      { name: "Technical Writing", percent: "95%", status: "completed" },
      { name: "Public Speaking", percent: "80%", status: "completed" },
      { name: "Active Listening", percent: "85%", status: "completed" },
      { name: "Conflict Resolution", percent: "70%", status: "inprogress" },
      { name: "Negotiation", percent: "65%", status: "inprogress" },
      { name: "Cross-functional Alignment", percent: "50%", status: "locked" }
    ],
    milestone: {
      title: "Conduct a system architecture design review session",
      progress: "0 / 1",
      xp: "+100 XP"
    }
  },
  leadership: {
    title: "Leadership",
    percent: "70%",
    mastery: 70,
    color: "#ff7ab8",
    description: "Guiding teams, mentoring engineers, defining product visions, and driving project completion.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "20px", height: "20px" }}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      </svg>
    ),
    subskills: [
      { name: "Team Mentorship", percent: "90%", status: "completed" },
      { name: "Strategic Planning", percent: "80%", status: "completed" },
      { name: "Resource Allocation", percent: "75%", status: "completed" },
      { name: "Agile Methodologies", percent: "85%", status: "completed" },
      { name: "Delegation & Trust", percent: "70%", status: "inprogress" },
      { name: "Performance Reviews", percent: "50%", status: "locked" }
    ],
    milestone: {
      title: "Lead the launch of the next major product cycle",
      progress: "0 / 1",
      xp: "+200 XP"
    }
  },
  writing: {
    title: "Writing",
    percent: "55%",
    mastery: 55,
    color: "#86f7ff",
    description: "Creating detailed technical documentation, API specs, developer guides, and engineering blogs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "20px", height: "20px" }}>
        <path d="M12 20h9"></path>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
      </svg>
    ),
    subskills: [
      { name: "Markdown & Documentation", percent: "90%", status: "completed" },
      { name: "API Specifications", percent: "85%", status: "completed" },
      { name: "Technical Blogs", percent: "75%", status: "completed" },
      { name: "Edit & Peer Review", percent: "70%", status: "inprogress" },
      { name: "UX Copywriting", percent: "60%", status: "inprogress" },
      { name: "Whitepapers", percent: "30%", status: "locked" }
    ],
    milestone: {
      title: "Write and publish the developer migration guide",
      progress: "0 / 1",
      xp: "+120 XP"
    }
  },
  database: {
    title: "Databases",
    percent: "60%",
    mastery: 60,
    color: "#7ef9ff",
    description: "Designing optimized database schemas, writing high-performance queries, and tuning indexing profiles.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "20px", height: "20px" }}>
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
      </svg>
    ),
    subskills: [
      { name: "SQL Query Design", percent: "95%", status: "completed" },
      { name: "Schema Normalization", percent: "90%", status: "completed" },
      { name: "Database Indexing", percent: "75%", status: "completed" },
      { name: "NoSQL Solutions", percent: "80%", status: "completed" },
      { name: "Query Optimization", percent: "70%", status: "inprogress" },
      { name: "ACID Transactions", percent: "60%", status: "inprogress" },
      { name: "Sharding & Replication", percent: "40%", status: "locked" }
    ],
    milestone: {
      title: "Optimize slow-running analytical query execution times",
      progress: "0 / 1",
      xp: "+150 XP"
    }
  },
  emotional_intelligence: {
    title: "Emotional Intelligence",
    percent: "68%",
    mastery: 68,
    color: "#d58cff",
    description: "Self-awareness, empathy, motivation, and cultivating positive professional relationships.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "20px", height: "20px" }}>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    ),
    subskills: [
      { name: "Empathy & Support", percent: "90%", status: "completed" },
      { name: "Self-Regulation", percent: "80%", status: "completed" },
      { name: "Social Awareness", percent: "85%", status: "completed" },
      { name: "Motivation Coaching", percent: "70%", status: "inprogress" },
      { name: "Sentiment Analysis", percent: "50%", status: "locked" }
    ],
    milestone: {
      title: "Organize a team-building open feedback workshop",
      progress: "0 / 1",
      xp: "+100 XP"
    }
  },
  ds_algo: {
    title: "Data Structures & Algorithms",
    percent: "80%",
    mastery: 80,
    color: "#ffaa66",
    description: "Mastering core computer science foundations, memory spaces, and time complexities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "20px", height: "20px" }}>
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
      </svg>
    ),
    subskills: [
      { name: "Arrays & Hash Tables", percent: "100%", status: "completed" },
      { name: "Trees & Graphs", percent: "90%", status: "completed" },
      { name: "Dynamic Programming", percent: "75%", status: "completed" },
      { name: "Sorting & Searching", percent: "85%", status: "completed" },
      { name: "Big O Notation", percent: "90%", status: "completed" },
      { name: "Graph Search (BFS/DFS)", percent: "70%", status: "inprogress" },
      { name: "Greedy Algorithms", percent: "50%", status: "locked" }
    ],
    milestone: {
      title: "Solve 20 hard algorithmic challenges",
      progress: "0 / 1",
      xp: "+180 XP"
    }
  },
  uiux: {
    title: "UI/UX Design",
    percent: "65%",
    mastery: 65,
    color: "#86f7ff",
    description: "Creating interactive wireframes, component design systems, and responsive user flows.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "20px", height: "20px" }}>
        <rect x="3" y="3" width="7" height="9"></rect>
        <rect x="14" y="3" width="7" height="5"></rect>
        <rect x="14" y="12" width="7" height="9"></rect>
        <rect x="3" y="16" width="7" height="5"></rect>
      </svg>
    ),
    subskills: [
      { name: "Wireframing & Prototyping", percent: "90%", status: "completed" },
      { name: "Figma Design Systems", percent: "85%", status: "completed" },
      { name: "Typography & Color Theory", percent: "80%", status: "completed" },
      { name: "User Journey Mapping", percent: "75%", status: "completed" },
      { name: "Micro-interactions", percent: "65%", status: "inprogress" },
      { name: "Accessibility Standards", percent: "50%", status: "locked" }
    ],
    milestone: {
      title: "Create high-fidelity design specs for the dashboard UI",
      progress: "0 / 1",
      xp: "+130 XP"
    }
  },
  problem_solving: {
    title: "Problem Solving",
    percent: "85%",
    mastery: 85,
    color: "#ffd76d",
    description: "Troubleshooting edge cases, root-causing system outages, and identifying structural architectural bottlenecks.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "20px", height: "20px" }}>
        <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z"></path>
      </svg>
    ),
    subskills: [
      { name: "Debugging & Stack Traces", percent: "95%", status: "completed" },
      { name: "Incident Response", percent: "85%", status: "completed" },
      { name: "Bottleneck Analysis", percent: "80%", status: "completed" },
      { name: "Logic Proofs", percent: "75%", status: "completed" },
      { name: "Failure Mode Analysis", percent: "70%", status: "inprogress" },
      { name: "Prevention Systems", percent: "50%", status: "locked" }
    ],
    milestone: {
      title: "Perform root cause analysis on the recent database lag",
      progress: "0 / 1",
      xp: "+150 XP"
    }
  }
};

// Connected nodes map for related skills lookup
const RELATED_MAP = {
  programming: ["UI/UX Design", "Analytical Thinking", "Problem Solving"],
  analytical: ["Communication", "Programming", "Problem Solving"],
  communication: ["Leadership", "Analytical Thinking", "Problem Solving"],
  leadership: ["Writing", "Communication", "Problem Solving"],
  writing: ["Emotional Intelligence", "Leadership", "Databases", "Problem Solving"],
  database: ["Data Structures & Algorithms", "Emotional Intelligence", "Writing", "Problem Solving"],
  emotional_intelligence: ["Databases", "Writing", "Data Structures & Algorithms", "Problem Solving"],
  ds_algo: ["UI/UX Design", "Databases", "Emotional Intelligence", "Problem Solving"],
  uiux: ["Programming", "Data Structures & Algorithms", "Problem Solving"],
  problem_solving: ["Programming", "Analytical Thinking", "Communication", "Leadership", "Writing", "Databases", "Emotional Intelligence", "Data Structures & Algorithms", "UI/UX Design"]
};

export default function SkillPanel({ activeSkill, setActiveSkill, focusMode }) {
  const [activeTab, setActiveTab] = useState("subskills");

  // Fallback to programming if activeSkill not matched
  const currentSkill = SKILL_DETAILS[activeSkill] || SKILL_DETAILS.programming;
  const { title, percent, mastery, color, description, icon, subskills, milestone } = currentSkill;

  return (
    <div
      className="glass-panel custom-scrollbar"
      style={{
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        width: "340px",
        padding: "24px 20px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        zIndex: 10,
        transform: `translate3d(${!activeSkill ? "340px" : "0px"}, 0, 0)`,
        transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Top Close Button */}
      <button
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          background: "none",
          border: "none",
          color: "#7f8da8",
          fontSize: "18px",
          cursor: "pointer",
          transition: "color 0.2s",
        }}
        onClick={() => setActiveSkill("")}
      >
        ✕
      </button>

      {/* Main Skill Glowing Badge */}
      <div
        style={{
          width: "74px",
          height: "74px",
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(3,6,17,0.7) 0%, rgba(3,6,17,0.95) 100%)`,
          border: `1.5px solid ${color}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "24px auto 0",
          boxShadow: `0 0 20px ${color}40, inset 0 0 6px ${color}20`,
          color: color,
        }}
      >
        {icon}
      </div>

      {/* Title & Mastery level */}
      <h2
        style={{
          textAlign: "center",
          marginTop: "16px",
          fontSize: "20px",
          fontWeight: "600",
          fontFamily: "'Outfit', sans-serif",
          letterSpacing: "0.2px",
        }}
      >
        {title}
      </h2>

      <p
        style={{
          textAlign: "center",
          color: color,
          fontSize: "12px",
          fontWeight: "500",
          fontFamily: "'Inter', sans-serif",
          marginTop: "6px",
        }}
      >
        {percent} Mastery
      </p>

      {/* Glow Progress bar */}
      <div
        style={{
          marginTop: "18px",
          height: "6px",
          background: "rgba(255,255,255,0.03)",
          borderRadius: "10px",
          overflow: "visible",
          position: "relative",
          border: "1px solid rgba(255,255,255,0.02)",
        }}
      >
        <div
          style={{
            width: `${mastery}%`,
            height: "100%",
            background: `linear-gradient(90deg, ${color}cc, ${color})`,
            borderRadius: "10px",
            position: "relative",
            boxShadow: `0 0 10px ${color}`,
          }}
        >
          {/* Progress Dot */}
          <div
            style={{
              position: "absolute",
              right: "-4px",
              top: "-3px",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              boxShadow: `0 0 12px #ffffff, 0 0 6px ${color}`,
            }}
          />
        </div>
      </div>

      {/* Brief description */}
      <p
        style={{
          color: "#7f8da8",
          fontSize: "13px",
          fontWeight: "300",
          lineHeight: "1.5",
          textAlign: "center",
          marginTop: "18px",
          padding: "0 8px",
        }}
      >
        {description}
      </p>

      {/* Related Skills */}
      {activeSkill && (
        <div style={{ marginTop: "16px", padding: "0 8px" }}>
          <h4
            style={{
              fontSize: "11px",
              color: "#7f8da8",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              marginBottom: "8px",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Related Skills
          </h4>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
              justifyContent: "center",
            }}
          >
            {RELATED_MAP[activeSkill]?.map((relName) => (
              <span
                key={relName}
                style={{
                  fontSize: "11px",
                  color: "#ffffff",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  padding: "3px 8px",
                  borderRadius: "12px",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {relName}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Tab Switchers (Subskills vs Milestones) */}
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
          marginTop: "32px",
          paddingBottom: "1px",
        }}
      >
        <button
          onClick={() => setActiveTab("subskills")}
          style={{
            flex: 1,
            background: "none",
            border: "none",
            color: activeTab === "subskills" ? "#ffffff" : "#7f8da8",
            fontSize: "13px",
            fontWeight: "500",
            paddingBottom: "10px",
            cursor: "pointer",
            borderBottom: activeTab === "subskills" ? `2.5px solid ${color}` : "2.5px solid transparent",
            transition: "all 0.3s ease",
            textShadow: activeTab === "subskills" ? `0 0 10px ${color}30` : "none",
          }}
        >
          Subskills
        </button>
        <button
          onClick={() => setActiveTab("milestones")}
          style={{
            flex: 1,
            background: "none",
            border: "none",
            color: activeTab === "milestones" ? "#ffffff" : "#7f8da8",
            fontSize: "13px",
            fontWeight: "500",
            paddingBottom: "10px",
            cursor: "pointer",
            borderBottom: activeTab === "milestones" ? `2.5px solid ${color}` : "2.5px solid transparent",
            transition: "all 0.3s ease",
            textShadow: activeTab === "milestones" ? `0 0 10px ${color}30` : "none",
          }}
        >
          Milestones
        </button>
      </div>

      {/* Tab Contents */}
      <div style={{ flex: 1, marginTop: "20px" }}>
        {activeTab === "subskills" ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            {subskills.map((sub, idx) => (
              <div
                key={sub.name + idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "13px",
                  color: sub.status === "locked" ? "#52637f" : "#d6dcee",
                }}
              >
                {/* Name of subskill */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      backgroundColor: sub.status === "locked" ? "#52637f" : color,
                      boxShadow: sub.status === "locked" ? "none" : `0 0 6px ${color}`,
                    }}
                  />
                  <span>{sub.name}</span>
                </div>

                {/* Status indicator / mastery */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "11px", color: sub.status === "locked" ? "#52637f" : "#7f8da8" }}>
                    {sub.percent}
                  </span>
                  
                  {sub.status === "completed" && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                  {sub.status === "inprogress" && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                  )}
                  {sub.status === "locked" && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#52637f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Milestone Card */}
            <div
              className="glass-card"
              style={{
                padding: "16px",
                borderRadius: "14px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {/* Card Header */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7f8da8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                  <line x1="4" y1="22" x2="4" y2="15"></line>
                </svg>
                <span style={{ fontSize: "12px", color: "#7f8da8", fontWeight: "500" }}>Next Milestone</span>
              </div>

              {/* Title description */}
              <div
                style={{
                  fontSize: "13px",
                  lineHeight: "1.5",
                  color: "#ffffff",
                  fontWeight: "400",
                }}
              >
                {milestone.title}
              </div>

              {/* Progress and Reward */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "4px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: 1 }}>
                  <span style={{ fontSize: "11px", color: "#7f8da8", fontFamily: "'Inter', sans-serif" }}>
                    {milestone.progress}
                  </span>
                  
                  {/* Small progress bar */}
                  <div
                    style={{
                      height: "4px",
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: "10px",
                      flex: 1,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: "0%", // In progress
                        height: "100%",
                        backgroundColor: color,
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                </div>

                <span
                  style={{
                    fontSize: "11px",
                    color: color,
                    fontWeight: "600",
                    marginLeft: "12px",
                  }}
                >
                  {milestone.xp}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
