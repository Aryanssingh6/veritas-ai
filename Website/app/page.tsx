"use client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FadeIn from "./components/FadeIn";
import Link from "next/link";

// Removed ScrollProgress and CursorGlow for performance.
const GridIcon = ({ path, color = "#38bdf8" }: { path: string; color?: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d={path} />
  </svg>
);

const EnsembleDiagram = () => (
  <div style={{
    position: 'relative', height: '400px', width: '100%',
    background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '24px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: '0 20px 40px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)',
    willChange: 'transform, opacity',
    transform: 'translateZ(0)'
  }}>
    <svg width="100%" height="100%" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Arrow Marker */}
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="rgba(56,189,248,0.5)" />
        </marker>
      </defs>

      {/* Input Arrow */}
      <path d="M20 150 L100 150 M80 135 L105 150 L80 165" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <text x="60" y="125" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">Input</text>

      {/* Grouping Bracket */}
      <path d="M150 50 L140 50 L140 250 L150 250" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
      <text x="135" y="150" fill="#a1a1aa" fontSize="10" textAnchor="middle" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg) translate(0, 105px)' }}>Open-Source Pretrained Models</text>

      {/* Model Nodes (5 Circles) */}
      {[50, 100, 150, 200, 250].map((y, i) => (
        <g key={i}>
          <circle cx="180" cy={y} r="18" fill="rgba(14,165,233,0.1)" stroke="#0ea5e9" strokeWidth="1.5" />
          <text x="180" y={y + 4} fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">{`M${i + 1}`}</text>
          {/* Connection to Ensemble Box */}
          <path d={`M198 ${y} L315 ${110 + i * 20}`} stroke="rgba(56,189,248,0.5)" strokeWidth="1.2" markerEnd="url(#arrowhead)" />
          {i === 0 && <text x="180" y="25" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">CNN+LSTM</text>}
        </g>
      ))}

      {/* Ensemble Method Box */}
      <rect x="320" y="100" width="100" height="100" rx="8" fill="rgba(14,165,233,0.15)" stroke="#38bdf8" strokeWidth="2" />
      <text x="370" y="145" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">Ensemble</text>
      <text x="370" y="160" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">Method</text>

      {/* Output Arrow */}
      <path d="M420 150 L470 150 M460 140 L475 150 L460 160" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <text x="450" y="185" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">Final Predictions</text>
    </svg>
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
  </div>
);

const TemporalDiagram = () => (
  <div style={{
    position: 'relative', height: '400px', width: '100%',
    background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '24px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: '0 20px 40px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)',
    willChange: 'transform, opacity',
    transform: 'translateZ(0)'
  }}>
    <svg width="100%" height="100%" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="80" width="55" height="75" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
      <rect x="42" y="92" width="55" height="75" rx="4" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" />
      <rect x="54" y="104" width="55" height="75" rx="4" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" />
      <text x="54" y="200" fill="#a1a1aa" fontSize="9" textAnchor="middle">Video Sequence</text>
      
      <path d="M115 140 L145 140" stroke="rgba(56,189,248,0.3)" strokeWidth="1.5" strokeDasharray="3 3" />
      
      <rect x="145" y="105" width="70" height="70" rx="10" fill="rgba(14,165,233,0.1)" stroke="#0ea5e9" strokeWidth="1.5" />
      <text x="180" y="135" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">CNN</text>
      <text x="180" y="152" fill="#a1a1aa" fontSize="7" textAnchor="middle">Spatial Features</text>
      
      <path d="M215 140 L245 140" stroke="rgba(56,189,248,0.3)" strokeWidth="1.5" strokeDasharray="3 3" />
      
      <rect x="245" y="105" width="70" height="70" rx="10" fill="rgba(147,51,234,0.1)" stroke="#9333ea" strokeWidth="1.5" />
      <text x="280" y="135" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">LSTM</text>
      <text x="280" y="152" fill="#a1a1aa" fontSize="7" textAnchor="middle">Temporal Logic</text>

      <path d="M315 140 L345 140" stroke="rgba(56,189,248,0.3)" strokeWidth="1.5" strokeDasharray="3 3" />

      <rect x="345" y="105" width="70" height="70" rx="10" fill="rgba(236,72,153,0.1)" stroke="#ec4899" strokeWidth="1.5" />
      <text x="380" y="135" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">FCNN</text>
      <text x="380" y="152" fill="#a1a1aa" fontSize="7" textAnchor="middle">Classification</text>

      <path d="M415 140 L445 140" stroke="rgba(56,189,248,0.3)" strokeWidth="1.5" strokeDasharray="3 3" />

      <circle cx="460" cy="140" r="8" fill="#10b981" />
      <text x="460" y="165" fill="#10b981" fontSize="9" textAnchor="middle">Verdict</text>
    </svg>
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(147,51,234,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
  </div>
);

const gridFeatures = [
  { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", title: "Ensemble Detection System", desc: "Combine multiple deepfake models using a meta-learning approach to improve accuracy and robustness." },
  { icon: "M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z", title: "CNN + LSTM (Spatial + Temporal Analysis)", desc: "CNN detects frame-level artifacts and LSTM analyzes temporal inconsistencies across frames." },
  { icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z", title: "Explainable AI (XAI)", desc: "Provide visual explanations and highlight manipulated regions along with predictions." },
];

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", color: "#fff", position: "relative" }}>
      <style>{`
        @keyframes slideMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scrolling-tech-stack {
          display: flex;
          width: max-content;
          animation: slideMarquee 20s linear infinite;
        }
        .scrolling-tech-stack:hover {
          animation-play-state: paused;
        }
      `}</style>
      <Navbar />
      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          paddingTop: "100px",
          paddingBottom: "80px",
          overflow: "hidden",
        }}
      >

        <div style={{ position: "relative", zIndex: 10, maxWidth: "1000px", margin: "0 auto", textAlign: "center", padding: "0 24px" }}>
          
          <FadeIn delay={0}>
            <div
              className="animate-float"
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "9999px", padding: "8px 20px", fontSize: "0.85rem", fontWeight: "600",
                color: "#e0e0e0", marginBottom: "40px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              <span style={{ width: "8px", height: "8px", background: "#38bdf8", borderRadius: "50%", boxShadow: "0 0 8px #38bdf8" }} />
              Veritas.ai Deepfake Platform
            </div>
          </FadeIn>

          <FadeIn delay={0.15} yOffset={40}>
            <h1 style={{ 
              fontWeight: "900", 
              lineHeight: "0.95", 
              letterSpacing: "-0.04em", 
              marginBottom: "40px", 
              color: "#ffffff",
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}>
              <span style={{ 
                fontFamily: "var(--font-barlow-condensed), sans-serif", 
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                textTransform: "uppercase",
                opacity: 0.9,
                letterSpacing: "0.02em"
              }}>
                Detect Deepfakes with
              </span>
              <span style={{ 
                fontFamily: "var(--font-fraunces), serif", 
                fontStyle: "italic", 
                fontSize: "clamp(3rem, 8vw, 5.5rem)",
                fontWeight: "500",
                background: "linear-gradient(to right, #fff, #38bdf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                paddingRight: "20px"
              }}>
                AI-powered Ensemble Models
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3} yOffset={30}>
            <div style={{ 
              fontSize: "clamp(1rem, 2vw, 1.25rem)", 
              color: "rgba(255,255,255,0.5)", 
              maxWidth: "680px", 
              margin: "0 auto 56px", 
              lineHeight: "1.8", 
              fontWeight: "400",
              letterSpacing: "0.01em"
            }}>
              A research-driven platform that analyzes videos using spatial and temporal deep learning models to identify manipulated content with production-grade accuracy.
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", marginBottom: "60px" }}>
              {/* Clean CTA */}
              <Link
                href="/analyze"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: "linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)",
                  color: "#ffffff", fontWeight: "600", borderRadius: "8px", padding: "16px 40px",
                  fontSize: "1.05rem", textDecoration: "none", transition: "all 0.25s ease",
                  border: "1px solid rgba(56,189,248,0.3)",
                  boxShadow: "0 0 24px rgba(14,165,233,0.35), 0 4px 12px rgba(0,0,0,0.4)"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 40px rgba(14,165,233,0.6), 0 8px 20px rgba(0,0,0,0.5)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 0 24px rgba(14,165,233,0.35), 0 4px 12px rgba(0,0,0,0.4)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Analyze Video
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>

              <Link
                href="/about"
                style={{
                  background: "rgba(255,255,255,0.02)", color: "#fff", fontWeight: "600", borderRadius: "10px", padding: "18px 48px",
                  fontSize: "1.1rem", border: "1px solid rgba(255,255,255,0.1)", textDecoration: "none", transition: "all 0.3s ease",
                  backdropFilter: "blur(10px)", display: "inline-flex", alignItems: "center", gap: "10px"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.02)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Docs
              </Link>

            </div>
          </FadeIn>

          {/* Stats Row */}
          <FadeIn delay={0.55}>
            <div style={{ display: "flex", gap: "40px", justifyContent: "center", flexWrap: "wrap", marginTop: "16px", paddingTop: "48px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              {[
                { value: "80%+", label: "Accuracy (Ensemble)" },
                { value: "Logistic Regression", label: "Meta Learner" },
                { value: "2000+", label: "Videos Tested" },
              ].map((stat) => (
                <div key={stat.label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "1.8rem", fontWeight: "800", letterSpacing: "-0.04em", color: "#fff" }}>{stat.value}</div>
                  <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", marginTop: "4px", fontWeight: "500" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 3-STEP QUICKSTART ────────────────────── */}
      <section style={{ padding: "0 24px 80px", maxWidth: "1200px", margin: "0 auto", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px", position: "relative" }}>
          
          <FadeIn delay={0.05}>
            <div 
              style={{ background: "#050505", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "20px", padding: "40px 32px", height: "100%", transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)", boxShadow: "0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#0a0a0c"; e.currentTarget.style.borderColor = "rgba(14,165,233,0.35)"; e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.8), 0 0 20px rgba(14,165,233,0.1), inset 0 1px 0 rgba(255,255,255,0.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#050505"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)"; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
                <span style={{ background: "rgba(255,255,255,0.05)", padding: "6px 16px", borderRadius: "20px", fontSize: "0.85rem", color: "#a1a1aa", fontWeight: "600" }}>00. Server</span>
                <span style={{ width: "8px", height: "8px", background: "#14b8a6", borderRadius: "50%", boxShadow: "0 0 10px #14b8a6" }}></span>
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: "700", color: "#fff", marginBottom: "16px", letterSpacing: "-0.02em" }}>Start the engine</h3>
              <p style={{ fontSize: "0.95rem", color: "#71717a", marginBottom: "24px", lineHeight: "1.6" }}>Backend engine using FastAPI to process videos and run detection models.</p>
              <div style={{ background: "#000", border: "1px solid rgba(255,255,255,0.03)", borderRadius: "12px", padding: "16px", fontFamily: "monospace", color: "#e2e8f0", fontSize: "0.85rem", overflowX: "auto", whiteSpace: "nowrap" }}>
                <span style={{ color: "#34d399" }}>$</span> uvicorn main:app --reload
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div 
              style={{ background: "#050505", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "20px", padding: "40px 32px", height: "100%", transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)", boxShadow: "0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#0a0a0c"; e.currentTarget.style.borderColor = "rgba(14,165,233,0.35)"; e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.8), 0 0 20px rgba(14,165,233,0.1), inset 0 1px 0 rgba(255,255,255,0.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#050505"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)"; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
                <span style={{ background: "rgba(255,255,255,0.05)", padding: "6px 16px", borderRadius: "20px", fontSize: "0.85rem", color: "#a1a1aa", fontWeight: "600" }}>01. Application</span>
                <span style={{ width: "8px", height: "8px", background: "#38bdf8", borderRadius: "50%", boxShadow: "0 0 10px #38bdf8" }}></span>
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: "700", color: "#fff", marginBottom: "16px", letterSpacing: "-0.02em" }}>Real-time Detection</h3>
              <p style={{ fontSize: "0.95rem", color: "#71717a", marginBottom: "24px", lineHeight: "1.6" }}>Get the Veritas.ai mobile app for scanning videos directly from your camera or screen capture.</p>
              <div style={{ background: "#000", border: "1px solid rgba(255,255,255,0.03)", borderRadius: "12px", padding: "16px", fontFamily: "monospace", color: "#e2e8f0", fontSize: "0.85rem", lineHeight: "1.6", overflowX: "auto", whiteSpace: "nowrap" }}>
                <Link href="/download" style={{ color: "#a5d6ff", textDecoration: "none" }}>Download APK →</Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div 
              style={{ background: "#050505", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "20px", padding: "40px 32px", height: "100%", transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)", boxShadow: "0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#0a0a0c"; e.currentTarget.style.borderColor = "rgba(14,165,233,0.35)"; e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.8), 0 0 20px rgba(14,165,233,0.1), inset 0 1px 0 rgba(255,255,255,0.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#050505"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)"; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
                <span style={{ background: "rgba(255,255,255,0.05)", padding: "6px 16px", borderRadius: "20px", fontSize: "0.85rem", color: "#a1a1aa", fontWeight: "600" }}>10. Web Platform</span>
                <span style={{ width: "8px", height: "8px", background: "#38bdf8", borderRadius: "50%", boxShadow: "0 0 10px #38bdf8" }}></span>
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: "700", color: "#fff", marginBottom: "16px", letterSpacing: "-0.02em" }}>Upload & Analyze</h3>
              <p style={{ fontSize: "0.95rem", color: "#71717a", marginBottom: "24px", lineHeight: "1.6" }}>Upload videos and get results with confidence score and explainability analysis.</p>
              <div style={{ background: "#000", border: "1px solid rgba(255,255,255,0.03)", borderRadius: "12px", padding: "16px", fontFamily: "monospace", color: "#e2e8f0", fontSize: "0.85rem", lineHeight: "1.6", overflowX: "auto", whiteSpace: "nowrap" }}>
                <Link href="/analyze" style={{ color: "#34d399", textDecoration: "none" }}>Go to Analyze Page →</Link>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ── TECH STACK (Scrolling Marquee) ────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "40px 0", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.01), transparent)", overflow: "hidden", whiteSpace: "nowrap" }}>
        <FadeIn yOffset={20}>
          <div className="scrolling-tech-stack" style={{ display: "flex", gap: "80px", opacity: 0.35, filter: "grayscale(100%)", transition: "opacity 0.3s ease", paddingLeft: "80px" }}
               onMouseEnter={(e) => e.currentTarget.style.opacity = "0.8"}
               onMouseLeave={(e) => e.currentTarget.style.opacity = "0.35"}>
            {[...["Flutter", "Next.js", "React", "FastAPI", "PyTorch", "Scikit-learn", "Docker"], ...["Flutter", "Next.js", "React", "FastAPI", "PyTorch", "Scikit-learn", "Docker"]].map((logo, index) => (
              <span key={`${logo}-${index}`} style={{ fontSize: "1.5rem", fontWeight: logo.toLowerCase() === "flutter" ? "300" : "700", letterSpacing: logo.toLowerCase() === "flutter" ? "0.1em" : "normal", fontStyle: logo === "TensorFlow" ? "italic" : "normal", flexShrink: 0, userSelect: "none" }}>
                {logo}
              </span>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── SPOTLIGHT 1 ────────────────────────────────────────────── */}
      <section style={{ position: "relative", padding: "160px 24px", overflow: "hidden" }}>
        {/* Static Background Text */}
        <div style={{ position: "absolute", top: "10%", right: "-5%", fontSize: "14vw", fontWeight: "900", textAlign: "right", color: "rgba(255,255,255,0.02)", userSelect: "none", zIndex: 0, letterSpacing: "-0.04em", pointerEvents: "none", contain: "strict" }}>
          DETECTION
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "80px", alignItems: "center" }}>
          <FadeIn delay={0.1}>
            <div>
              <div style={{ display: "inline-block", padding: "6px 14px", borderRadius: "20px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", fontSize: "0.8rem", color: "#a5b4fc", marginBottom: "20px", fontWeight: "600" }}>
                01 — Meta-Learning
              </div>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "800", letterSpacing: "-0.03em", marginBottom: "24px", lineHeight: "1.1" }}>
                Ensemble Detection <br/><span style={{ color: "rgba(255,255,255,0.4)" }}>System</span>
              </h2>
              <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.55)", lineHeight: "1.7", marginBottom: "32px" }}>
                Combined predictions from multiple deepfake detection models to improve overall accuracy and robustness. A meta learning approach is used to aggregate outputs and generate final verdict.
              </p>
              <Link href="/analyze" style={{ fontSize: "1rem", fontWeight: "600", color: "#fff", display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "4px", transition: "border-color 0.3s ease" }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = "#fff"}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"}>
                Try ensemble detection →
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <EnsembleDiagram />
          </FadeIn>
        </div>
      </section>

      {/* ── SPOTLIGHT 2 ────────────────────────────────────────────── */}
      <section style={{ position: "relative", padding: "160px 24px", overflow: "hidden", background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.01) 50%, transparent)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ position: "absolute", top: "10%", right: "-5%", fontSize: "14vw", fontWeight: "900", textAlign: "right", color: "rgba(255,255,255,0.02)", userSelect: "none", zIndex: 0, letterSpacing: "-0.04em", pointerEvents: "none", contain: "strict" }}>
          TEMPORAL
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "100px", alignItems: "center" }}>
          <FadeIn delay={0.3}>
            <TemporalDiagram />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div>
            <div>
              <div style={{ display: "inline-block", padding: "6px 14px", borderRadius: "20px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", fontSize: "0.8rem", color: "#60a5fa", marginBottom: "20px", fontWeight: "600" }}>
                02 — Spatial + Temporal Analysis
              </div>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "800", letterSpacing: "-0.03em", marginBottom: "24px", lineHeight: "1.1" }}>
                CNN + LSTM <br/><span style={{ color: "rgba(255,255,255,0.4)" }}>Architecture</span>
              </h2>
              <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.55)", lineHeight: "1.7", marginBottom: "32px" }}>
                Uses a CNN models to detect frame-level visual artifacts and LSTM networks to analyze temporal inconsistencies across video frames for better deepfake detection.
              </p>
              <Link href="/analyze" style={{ fontSize: "1rem", fontWeight: "600", color: "#fff", display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "4px", transition: "border-color 0.3s ease" }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = "#fff"}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"}>
                Explore architecture →
              </Link>
            </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── UNIFIED API ────────────────────────────────────────────── */}
      <section style={{ position: "relative", padding: "140px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "800", letterSpacing: "-0.03em" }}>Ease-to-use framework</h2>
              <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.55)", marginTop: "16px", maxWidth: "600px", margin: "16px auto 0" }}>
                Integrate Veritas into your systems with a simple and flexible deepfake detection framework.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} yOffset={60}>
            <div style={{
              background: "#0a0a0c", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px",
              overflow: "hidden",
            }}
            >
              <div style={{ padding: "16px 24px", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)", display: "flex", gap: "20px", alignItems: "center" }}>
                <span style={{ fontSize: "0.85rem", color: "#fff", fontWeight: "600", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "8px", height: "8px", background: "#34d399", borderRadius: "50%" }}></span> python_client.py
                </span>
                <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.3)" }}>curl</span>
              </div>
              <pre style={{ padding: "40px", margin: 0, fontSize: "0.95rem", lineHeight: "1.8", color: "#e6edf3", overflowX: "auto", fontFamily: "'Courier New', Courier, monospace" }}>
                <span style={{ color: "#ff7b72" }}>from</span> EnsemCNet <span style={{ color: "#ff7b72" }}>import</span> detectDeepfake, extractFrame, metalearner<br /><br />
                <span style={{ color: "#ff7b72" }}>if</span> __name__ == <span style={{ color: "#a5d6ff" }}>"__main__"</span>:<br /><br />
                {"    "}video_path = r<span style={{ color: "#a5d6ff" }}>"enter your path"</span><br />
                {"    "}output_path = r<span style={{ color: "#a5d6ff" }}>"enter your path"</span><br /><br />
                {"    "}frame_folder = extractFrame(video_path, output_path)<br />
                {"    "}model_output = detectDeepfake(frame_folder)<br />
                {"    "}lr = metalearner()<br />
                {"    "}pred = lr.predict(model_output)<br /><br />
                {"    "}<span style={{ color: "#79c0ff" }}>print</span>(pred)
              </pre>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FEATURES GRID ─────────────────────────────────────────── */}
      <section style={{ position: "relative", background: "transparent", padding: "140px 24px" }}>
        {/* Smooth top-fade overlay — blends into dark without covering content */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "120px",
          background: "linear-gradient(to bottom, rgba(8,10,16,0.95) 0%, transparent 100%)",
          pointerEvents: "none", zIndex: 0
        }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <FadeIn>
            <h2 style={{ fontSize: "2.3rem", fontWeight: "800", letterSpacing: "-0.03em", marginBottom: "60px", textAlign: "center" }}>
              Why Choose Veritas.ai
            </h2>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>
            {gridFeatures.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.15}>
                <div style={{
                  padding: "40px 32px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "24px",
                  transition: "all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)", cursor: "pointer", height: "100%"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.transform = "translateY(-8px) scale(1.02)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.02)"; e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; }}>
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "12px", background: "rgba(56,189,248,0.06)",
                    border: "1px solid rgba(56,189,248,0.15)", display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "24px"
                  }}>
                    <GridIcon path={f.icon} />
                  </div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "16px", color: "#fff" }}>{f.title}</h3>
                  <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: "1.7" }}>{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────── */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px" }}>
        <FadeIn>
          <div
            style={{
              background: "linear-gradient(135deg, #020408 0%, #04080f 50%, #020408 100%)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "24px", padding: "80px 40px", textAlign: "center", position: "relative", overflow: "hidden",
              boxShadow: "0 0 40px rgba(14,165,233,0.05), inset 0 1px 0 rgba(255,255,255,0.04)"
            }}
          >
            
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: "800", letterSpacing: "-0.04em", color: "#fff", marginBottom: "20px" }}>
                Ready to find the <span style={{ fontStyle: "italic", fontFamily: "var(--font-fraunces), serif", color: "#38bdf8" }}>truth?</span>
              </h2>
              <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.6)", marginBottom: "40px", maxWidth: "540px", margin: "0 auto 48px", lineHeight: "1.6" }}>
                Upload your first video and get a frame-by-frame verdict with confidence scores in seconds.
              </p>
              
              <Link
                href="/analyze"
                style={{
                  background: "linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)",
                  color: "#ffffff", fontWeight: "600", borderRadius: "8px", padding: "16px 48px",
                  fontSize: "1.05rem", textDecoration: "none", display: "inline-flex", transition: "all 0.25s ease",
                  boxShadow: "0 0 24px rgba(14,165,233,0.4), 0 4px 12px rgba(0,0,0,0.4)",
                  border: "1px solid rgba(56,189,248,0.3)"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 40px rgba(14,165,233,0.65), 0 8px 20px rgba(0,0,0,0.5)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 0 24px rgba(14,165,233,0.4), 0 4px 12px rgba(0,0,0,0.4)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Analyze a Video Now
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
}