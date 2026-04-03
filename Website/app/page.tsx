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

const gridFeatures = [
  { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", title: "Open Source", desc: "100% open source framework. Inspect the models, weights, and detection code freely." },
  { icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z", title: "Production Ready", desc: "Battle-tested with auto-scaling, asynchronous processing, and built in request validation." },
  { icon: "M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83", title: "No Vendor Lock-in", desc: "Run your detection pipeline anywhere—on AWS, GCP, or your own on-prem hardware." },
  { icon: "M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z", title: "Frame-Level CNN", desc: "Analyzes individual frames for spatial artifacts, blending anomalies, and resolution inconsistencies." },
  { icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 8v4l3 3", title: "Temporal LSTM", desc: "Tracks micro-expressions and unnatural temporal variations across sequential frames." },
  { icon: "M4 6h16M4 12h16M4 18h7", title: "100+ Integrations", desc: "Works out of the box with FastAPI, PyTorch, React, and major video processing pipelines." },
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
            <h1 style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: "800", lineHeight: "1.05", letterSpacing: "-0.04em", marginBottom: "40px", color: "#ffffff", textShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
              Detect the{" "}
              <span style={{
                color: "#fff",
                fontFamily: "var(--font-fraunces), serif", fontStyle: "italic", paddingRight: "12px", display: "inline-block"
              }}>
                Truth
              </span>
              <br />in Every Frame.
            </h1>
          </FadeIn>

          <FadeIn delay={0.3} yOffset={30}>
            <div style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", color: "rgba(255,255,255,0.8)", maxWidth: "850px", margin: "0 auto 56px", lineHeight: "1.6", fontWeight: "500", letterSpacing: "-0.01em" }}>
              Veritas is an open AI engineering platform built to catch <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", padding: "2px 14px", borderRadius: "20px", color: "#fff", fontSize: "0.8em", transform: "translateY(-4px)" }}>
                <span style={{ width: "6px", height: "6px", background: "#38bdf8", borderRadius: "50%" }} /> spatial anomalies
              </span>
              ,{" "}and identify{" "}
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", padding: "2px 14px", borderRadius: "20px", color: "#fff", fontSize: "0.8em", transform: "translateY(-4px)", marginTop: "12px" }}>
                ✨ temporal glitches
              </span>
              {" "}with production-grade accuracy.
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
                Read Docs
              </Link>
            </div>
          </FadeIn>

          {/* Stats Row */}
          <FadeIn delay={0.55}>
            <div style={{ display: "flex", gap: "40px", justifyContent: "center", flexWrap: "wrap", marginTop: "16px", paddingTop: "48px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              {[
                { value: "98.4%", label: "Detection Accuracy" },
                { value: "20K+", label: "GitHub Stars" },
                { value: "5M+", label: "Videos Analyzed" },
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
                <span style={{ background: "rgba(255,255,255,0.05)", padding: "6px 16px", borderRadius: "20px", fontSize: "0.85rem", color: "#a1a1aa", fontWeight: "600" }}>01. Server</span>
                <span style={{ width: "8px", height: "8px", background: "#14b8a6", borderRadius: "50%", boxShadow: "0 0 10px #14b8a6" }}></span>
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: "700", color: "#fff", marginBottom: "16px", letterSpacing: "-0.02em" }}>Start the Engine</h3>
              <p style={{ fontSize: "0.95rem", color: "#71717a", marginBottom: "24px", lineHeight: "1.6" }}>Initialize the workflow automation and boot up the detection service instantly.</p>
              <div style={{ background: "#000", border: "1px solid rgba(255,255,255,0.03)", borderRadius: "12px", padding: "16px", fontFamily: "monospace", color: "#e2e8f0", fontSize: "0.85rem", overflowX: "auto", whiteSpace: "nowrap" }}>
                <span style={{ color: "#34d399" }}>$</span> uvx veritas server
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
                <span style={{ background: "rgba(255,255,255,0.05)", padding: "6px 16px", borderRadius: "20px", fontSize: "0.85rem", color: "#a1a1aa", fontWeight: "600" }}>02. Trace</span>
                <span style={{ width: "8px", height: "8px", background: "#38bdf8", borderRadius: "50%", boxShadow: "0 0 10px #38bdf8" }}></span>
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: "700", color: "#fff", marginBottom: "16px", letterSpacing: "-0.02em" }}>Enable Logging</h3>
              <p style={{ fontSize: "0.95rem", color: "#71717a", marginBottom: "24px", lineHeight: "1.6" }}>Connect your script to monitor deepfake traces and model predictions in real time.</p>
              <div style={{ background: "#000", border: "1px solid rgba(255,255,255,0.03)", borderRadius: "12px", padding: "16px", fontFamily: "monospace", color: "#e2e8f0", fontSize: "0.85rem", lineHeight: "1.6", overflowX: "auto", whiteSpace: "nowrap" }}>
                <span style={{ color: "#ff7b72" }}>import</span> veritas<br/>
                veritas.set_tracking_uri(<span style={{ color: "#a5d6ff" }}>"5000"</span>)
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
                <span style={{ background: "rgba(255,255,255,0.05)", padding: "6px 16px", borderRadius: "20px", fontSize: "0.85rem", color: "#a1a1aa", fontWeight: "600" }}>03. Run</span>
                <span style={{ width: "8px", height: "8px", background: "#38bdf8", borderRadius: "50%", boxShadow: "0 0 10px #38bdf8" }}></span>
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: "700", color: "#fff", marginBottom: "16px", letterSpacing: "-0.02em" }}>Predict Instantly</h3>
              <p style={{ fontSize: "0.95rem", color: "#71717a", marginBottom: "24px", lineHeight: "1.6" }}>Run the spatial-temporal model to extract truth probabilities from raw pixels.</p>
              <div style={{ background: "#000", border: "1px solid rgba(255,255,255,0.03)", borderRadius: "12px", padding: "16px", fontFamily: "monospace", color: "#e2e8f0", fontSize: "0.85rem", lineHeight: "1.6", overflowX: "auto", whiteSpace: "nowrap" }}>
                client = veritas.Client()<br/>
                client.analyze(<span style={{ color: "#a5d6ff" }}>"video.mp4"</span>)
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
            {[...["FastAPI", "PyTorch", "TensorFlow", "React.js", "Flutter", "Next.js", "Docker", "Kubernetes", "Redis", "PostgreSQL"], ...["FastAPI", "PyTorch", "TensorFlow", "React.js", "Flutter", "Next.js", "Docker", "Kubernetes", "Redis", "PostgreSQL"]].map((logo, index) => (
              <span key={`${logo}-${index}`} style={{ fontSize: "1.5rem", fontWeight: logo.toLowerCase() === "flutter" ? "300" : "700", letterSpacing: logo.toLowerCase() === "flutter" ? "0.1em" : "normal", fontStyle: logo === "TensorFlow" ? "italic" : "normal", flexShrink: 0, userSelect: "none" }}>
                {logo}
              </span>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── SPOTLIGHT 1 ────────────────────────────────────────────── */}
      <section style={{ position: "relative", padding: "160px 24px", overflow: "hidden" }}>
        {/* Animated Parallax Background Text */}
        <div className="animate-float" style={{ position: "absolute", top: "5%", left: "-5%", fontSize: "14vw", fontWeight: "900", color: "rgba(255,255,255,0.02)", userSelect: "none", zIndex: 0, letterSpacing: "-0.04em", whiteSpace: "nowrap" }}>
          DETECTION
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "80px", alignItems: "center" }}>
          <FadeIn delay={0.1}>
            <div>
              <div style={{ display: "inline-block", padding: "6px 14px", borderRadius: "20px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", fontSize: "0.8rem", color: "#a5b4fc", marginBottom: "20px", fontWeight: "600" }}>
                01 — Spatial Architecture
              </div>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "800", letterSpacing: "-0.03em", marginBottom: "24px", lineHeight: "1.1" }}>
                Pixel-Perfect <br/><span style={{ color: "rgba(255,255,255,0.4)" }}>Precision</span>
              </h2>
              <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.55)", lineHeight: "1.7", marginBottom: "32px" }}>
                Catch subtle blending edges, resolution discrepancies, and facial warp artifacts. Our customized CNN architecture acts as a microscope for individual frames, flagging pixels that human eyes miss.
              </p>
              <Link href="/analyze" style={{ fontSize: "1rem", fontWeight: "600", color: "#fff", display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "4px", transition: "border-color 0.3s ease" }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = "#fff"}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"}>
                Try detection →
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            {/* Syntax Highlighted Code Card (MLflow Style) */}
            <div style={{
              background: "#0a0a0c", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "0",
              boxShadow: "0 20px 40px rgba(0,0,0,0.8)", overflow: "hidden"
            }}>
              <div style={{ padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)", display: "flex", gap: "8px", alignItems: "center" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f56" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ffbd2e" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#27c93f" }} />
                <span style={{ marginLeft: "12px", fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }}>spatial_detector.py</span>
              </div>
              <pre style={{ padding: "24px", margin: 0, fontSize: "0.9rem", lineHeight: "1.7", color: "#e6edf3", overflowX: "auto", fontFamily: "'Courier New', Courier, monospace" }}>
                <span style={{ color: "#ff7b72" }}>from</span> veritas.models <span style={{ color: "#ff7b72" }}>import</span> SpatialCNN<br /><br />
                <span style={{ color: "#8b949e" }}># Initialize model for frame-by-frame analysis</span><br />
                model = SpatialCNN(resolution=<span style={{ color: "#79c0ff" }}>1080</span>, mode=<span style={{ color: "#a5d6ff" }}>"hq"</span>)<br /><br />
                <span style={{ color: "#ff7b72" }}>for</span> frame <span style={{ color: "#ff7b72" }}>in</span> video.frames():<br />
                {"    "}artifacts = model.detect_artifacts(frame)<br />
                {"    "}<span style={{ color: "#ff7b72" }}>if</span> artifacts.confidence <span style={{ color: "#ff7b72" }}>&gt;</span> <span style={{ color: "#79c0ff" }}>0.98</span>:<br />
                {"        "}logger.alert(<span style={{ color: "#a5d6ff" }}>f"Anomaly found at {'{frame.time}'}"</span>)
              </pre>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SPOTLIGHT 2 ────────────────────────────────────────────── */}
      <section style={{ position: "relative", padding: "160px 24px", overflow: "hidden", background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.01) 50%, transparent)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="animate-float" style={{ position: "absolute", top: "10%", right: "-5%", fontSize: "14vw", fontWeight: "900", textAlign: "right", color: "rgba(255,255,255,0.02)", userSelect: "none", zIndex: 0, letterSpacing: "-0.04em" }}>
          TEMPORAL
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "100px", alignItems: "center" }}>
          <FadeIn delay={0.3}>
            {/* Syntax Highlighted Code Card (MLflow Style) */}
            <div style={{
              background: "#0a0a0c", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "0",
              boxShadow: "0 20px 40px rgba(0,0,0,0.8)", overflow: "hidden"
            }}>
              <div style={{ padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)", display: "flex", gap: "8px", alignItems: "center" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f56" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ffbd2e" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#27c93f" }} />
                <span style={{ marginLeft: "12px", fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }}>temporal_trace.py</span>
              </div>
              <pre style={{ padding: "24px", margin: 0, fontSize: "0.9rem", lineHeight: "1.7", color: "#e6edf3", overflowX: "auto", fontFamily: "'Courier New', Courier, monospace" }}>
                <span style={{ color: "#ff7b72" }}>from</span> veritas.temporal <span style={{ color: "#ff7b72" }}>import</span> LSTMSearch<br /><br />
                <span style={{ color: "#8b949e" }}># Extract facial micro-expressions</span><br />
                trace = LSTMSearch(frames=video.extract_faces())<br /><br />
                <span style={{ color: "#8b949e" }}># Check for temporal discrepancies like non-linear blinking</span><br />
                report = trace.flag_micro_expressions()<br />
                <span style={{ color: "#79c0ff" }}>print</span>(<span style={{ color: "#a5d6ff" }}>f"Glitch Probabilities: {'{report.stats}'}"</span>)
              </pre>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div>
              <div style={{ display: "inline-block", padding: "6px 14px", borderRadius: "20px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", fontSize: "0.8rem", color: "#60a5fa", marginBottom: "20px", fontWeight: "600" }}>
                02 — Micro-Expressions
              </div>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "800", letterSpacing: "-0.03em", marginBottom: "24px", lineHeight: "1.1" }}>
                Temporal <br/><span style={{ color: "rgba(255,255,255,0.4)" }}>Consistency</span>
              </h2>
              <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.55)", lineHeight: "1.7", marginBottom: "32px" }}>
                Deepfakes often fail at preserving consistent micro-expressions over time. Our LSTM sequence models track inter-frame discrepancies, identifying unnatural blinking patterns and lighting flickers.
              </p>
              <Link href="/about" style={{ fontSize: "1rem", fontWeight: "600", color: "#fff", display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "4px", transition: "border-color 0.3s ease" }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = "#fff"}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"}>
                Read whitepaper →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── UNIFIED API ────────────────────────────────────────────── */}
      <section style={{ position: "relative", padding: "140px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "800", letterSpacing: "-0.03em" }}>Unified API Gateway</h2>
              <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.55)", marginTop: "16px", maxWidth: "600px", margin: "16px auto 0" }}>
                Integrate Veritas into your own platforms with our simple FastAPI endpoint. Built with automatic validation and tracing.
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
                <span style={{ color: "#ff7b72" }}>from</span> veritas.client <span style={{ color: "#ff7b72" }}>import</span> VeritasClient<br /><br />
                client = VeritasClient(api_key=<span style={{ color: "#a5d6ff" }}>"YOUR_API_KEY"</span>)<br /><br />
                <span style={{ color: "#8b949e" }}># One line deployment to analyze deepfakes</span><br />
                result = <span style={{ color: "#ff7b72" }}>await</span> client.analyze.video(<br />
                {"    "}file_path=<span style={{ color: "#a5d6ff" }}>"./suspect_video.mp4"</span>,<br />
                {"    "}models=[<span style={{ color: "#a5d6ff" }}>"cnn"</span>, <span style={{ color: "#a5d6ff" }}>"lstm"</span>, <span style={{ color: "#a5d6ff" }}>"vit"</span>]<br />
                )<br /><br />
                <span style={{ color: "#79c0ff" }}>print</span>(<span style={{ color: "#a5d6ff" }}>f"Status: "</span>, result.verdict) <span style={{ color: "#8b949e" }}># DEEPFAKE</span><br />
                <span style={{ color: "#79c0ff" }}>print</span>(<span style={{ color: "#a5d6ff" }}>f"Confidence: "</span>, result.confidence) <span style={{ color: "#8b949e" }}># 98.4%</span>
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