import Navbar from "../components/Navbar";

const team = [
  {
    name: "Vaibhav",
    role: "ML Architect",
    oneLiner: "Designed and trained the CNN+LSTM & Vision Transformer models for deepfake detection.",
    emoji: "🧠",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Nehanshu",
    role: "Mobile Engineer",
    oneLiner: "Built the Flutter mobile app that brings real-time deepfake detection to your pocket.",
    emoji: "📱",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Krishna",
    role: "Cloud & Backend",
    oneLiner: "Architected the FastAPI server, database, and cloud deployment pipeline.",
    emoji: "☁️",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Aryan",
    role: "Web Developer",
    oneLiner: "Built the Next.js web platform and integrated it with the detection backend.",
    emoji: "💻",
    linkedin: "https://www.linkedin.com/in/aryan-singh-7b4b0b2b0",
  },
  {
    name: "Saksham",
    role: "UI/UX & Documentation",
    oneLiner: "Crafted the design system, user experience, and wrote technical documentation.",
    emoji: "🎨",
    linkedin: "https://linkedin.com",
  },
];

const techStack = [
  { category: "Frontend", techs: ["Next.js", "React", "TypeScript"] },
  { category: "Backend", techs: ["FastAPI", "Python", "PostgreSQL"] },
  { category: "AI / ML", techs: ["CNN", "LSTM", "ViT", "PyTorch"] },
  { category: "Mobile", techs: ["Flutter", "Dart"] },
];

const steps = [
  { icon: "📤", step: "01", title: "Upload Video", desc: "User uploads a video file via drag & drop or file picker. Supports MP4, MOV, AVI formats.", side: "left" },
  { icon: "🧠", step: "02", title: "AI Analysis", desc: "Our CNN + LSTM model analyzes spatial and temporal features frame by frame to detect manipulation.", side: "right" },
  { icon: "📊", step: "03", title: "Get Results", desc: "Confidence score and REAL/DEEPFAKE verdict is displayed with detailed analysis breakdown.", side: "left" },
];

export default function About() {
  return (
    <main style={{ minHeight: "100vh", background: "transparent", color: "#fff", overflow: "hidden" }}>
      <Navbar />

      <section style={{ position: "relative", zIndex: 10, maxWidth: "960px", margin: "0 auto", marginTop: "64px", padding: "0 24px 96px" }}>

        {/* ── Hero ─────────────────────────────────── */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(14,36,100,0.4)", border: "1px solid rgba(56,120,200,0.5)",
            color: "#93c5fd", fontSize: "0.75rem", padding: "6px 16px",
            borderRadius: "9999px", marginBottom: "24px",
          }}>
            <span style={{ width: "6px", height: "6px", background: "#22d3ee", borderRadius: "50%", animation: "pulse 2s infinite" }} />
            About Veritas.ai
          </div>

          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 3.75rem)", fontWeight: "800", marginBottom: "24px", lineHeight: 1.1, letterSpacing: "-0.04em" }}>
            Fighting{" "}
            <span style={{ background: "linear-gradient(135deg, #60a5fa, #22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Misinformation
            </span>
            <br />with AI
          </h1>

          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.1rem", maxWidth: "640px", margin: "0 auto", lineHeight: "1.7" }}>
            <span style={{ color: "#fff", fontWeight: "600" }}>Veritas</span> means &quot;Truth&quot; in Latin. We use cutting-edge deep
            learning to detect AI-generated and manipulated videos — helping users make informed decisions in a world
            full of deepfakes.
          </p>
        </div>

        {/* ── Problem Statement ─────────────────────── */}
        <div style={{
          position: "relative", background: "linear-gradient(135deg, rgba(14,30,100,0.5), rgba(0,0,0,0.3))",
          borderRadius: "24px", padding: "32px", border: "1px solid rgba(56,100,200,0.35)",
          marginBottom: "24px", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: 0, right: 0, width: "160px", height: "160px", background: "#3b82f6", borderRadius: "50%", filter: "blur(60px)", opacity: 0.08, pointerEvents: "none" }} />
          <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
            <div style={{ width: "48px", height: "48px", background: "rgba(14,30,100,0.6)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", flexShrink: 0 }}>
              🎯
            </div>
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "12px", letterSpacing: "-0.02em" }}>Problem Statement</h2>
              <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: "1.7" }}>
                With the rise of AI-generated videos, digitally vulnerable users are increasingly exposed to misinformation
                and fraud. Veritas.ai analyzes videos and estimates the likelihood of manipulation, helping users stay
                informed and protected.
              </p>
            </div>
          </div>
        </div>

        {/* ── How It Works ──────────────────────────── */}
        <div style={{
          background: "rgba(255,255,255,0.02)", borderRadius: "24px",
          padding: "32px", border: "1px solid rgba(255,255,255,0.06)",
          backdropFilter: "blur(12px)", marginBottom: "24px",
        }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "40px", textAlign: "center", letterSpacing: "-0.02em" }}>How It Works</h2>

          <div style={{ position: "relative" }}>
            {/* Center line */}
            <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "1px", background: "linear-gradient(to bottom, #2563eb, #06b6d4)", opacity: 0.3 }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              {steps.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "32px", flexDirection: item.side === "right" ? "row-reverse" : "row" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: "16px", padding: "24px",
                      textAlign: item.side === "right" ? "right" : "left",
                      transition: "border-color 0.2s ease",
                    }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(56,120,200,0.5)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; }}
                    >
                      <span style={{ color: "#3b82f6", fontSize: "0.7rem", fontWeight: "700", letterSpacing: "0.12em" }}>STEP {item.step}</span>
                      <h3 style={{ fontSize: "1.05rem", fontWeight: "700", margin: "6px 0 8px" }}>{item.title}</h3>
                      <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.875rem", lineHeight: "1.6" }}>{item.desc}</p>
                    </div>
                  </div>

                  <div style={{
                    width: "56px", height: "56px", flexShrink: 0,
                    background: "linear-gradient(135deg, #2563eb, #06b6d4)",
                    borderRadius: "16px", display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: "1.5rem",
                    boxShadow: "0 8px 24px rgba(37,99,235,0.3)",
                  }}>
                    {item.icon}
                  </div>

                  <div style={{ flex: 1 }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tech Stack ────────────────────────────── */}
        <div style={{
          background: "rgba(255,255,255,0.02)", borderRadius: "24px",
          padding: "32px", border: "1px solid rgba(255,255,255,0.06)",
          backdropFilter: "blur(12px)", marginBottom: "24px",
        }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "24px", letterSpacing: "-0.02em" }}>Tech Stack</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
            {techStack.map((group) => (
              <div key={group.category} style={{ background: "rgba(0,0,0,0.3)", borderRadius: "16px", padding: "20px", border: "1px solid rgba(255,255,255,0.06)" }}>
                <p style={{ color: "#22d3ee", fontSize: "0.7rem", fontWeight: "700", letterSpacing: "0.12em", marginBottom: "12px" }}>{group.category.toUpperCase()}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {group.techs.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        background: "rgba(37,99,235,0.2)", border: "1px solid rgba(37,99,235,0.4)",
                        color: "#93c5fd", padding: "4px 12px", borderRadius: "9999px", fontSize: "0.75rem",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Team ──────────────────────────────────── */}
        <div style={{
          background: "rgba(255,255,255,0.02)", borderRadius: "24px",
          padding: "32px", border: "1px solid rgba(255,255,255,0.06)",
          backdropFilter: "blur(12px)",
        }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "6px", letterSpacing: "-0.02em" }}>Meet the Team</h2>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.875rem", marginBottom: "32px" }}>5 builders on a mission to make truth verifiable.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "20px" }}>
            {team.map((member) => (
              <div
                key={member.name}
                style={{
                  background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "16px", padding: "24px", display: "flex",
                  flexDirection: "column", alignItems: "center", textAlign: "center",
                  transition: "border-color 0.2s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(6,182,212,0.5)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; }}
              >
                {/* Avatar */}
                <div style={{
                  width: "80px", height: "80px",
                  background: "linear-gradient(135deg, #2563eb, #06b6d4)",
                  borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.875rem", marginBottom: "16px",
                  boxShadow: "0 8px 24px rgba(37,99,235,0.25)",
                  transition: "transform 0.2s ease",
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                >
                  {member.emoji}
                </div>

                <h3 style={{ fontWeight: "700", color: "#fff", fontSize: "1.05rem" }}>{member.name}</h3>
                <p style={{ color: "#22d3ee", fontSize: "0.7rem", marginTop: "4px", marginBottom: "12px", letterSpacing: "0.1em", fontWeight: "600" }}>
                  {member.role.toUpperCase()}
                </p>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem", lineHeight: "1.6", marginBottom: "16px" }}>{member.oneLiner}</p>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    fontSize: "0.75rem", color: "#60a5fa",
                    border: "1px solid rgba(37,99,235,0.4)",
                    padding: "6px 16px", borderRadius: "9999px",
                    textDecoration: "none", transition: "all 0.15s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#22d3ee"; e.currentTarget.style.borderColor = "rgba(6,182,212,0.6)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#60a5fa"; e.currentTarget.style.borderColor = "rgba(37,99,235,0.4)"; }}
                >
                  <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}