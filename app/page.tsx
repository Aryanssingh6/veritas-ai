"use client";
import Navbar from "./components/Navbar";
import Link from "next/link";
import { useEffect, useRef, useState, ReactNode } from "react";

// ── Intersection Observer for Premium Scroll Reveal ──────────────────
function FadeIn({ children, delay = 0, yOffset = 24 }: { children: ReactNode; delay?: number; yOffset?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : `translateY(${yOffset}px)`,
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

// Removed ScrollProgress and CursorGlow for performance.
const gridFeatures = [
  { icon: "🔓", title: "Open Source", desc: "100% open source framework. Inspect the models, weights, and detection code freely." },
  { icon: "🚀", title: "Production Ready", desc: "Battle-tested with auto-scaling, asynchronous processing, and built in request validation." },
  { icon: "🌐", title: "No Vendor Lock-in", desc: "Run your detection pipeline anywhere—on AWS, GCP, or your own on-prem hardware." },
  { icon: "🔍", title: "Frame-Level CNN", desc: "Analyzes individual frames for spatial artifacts, blending anomalies, and resolution inconsistencies." },
  { icon: "⏱️", title: "Temporal LSTM", desc: "Tracks micro-expressions and unnatural temporal variations across sequential frames." },
  { icon: "🔌", title: "100+ Integrations", desc: "Works out of the box with FastAPI, PyTorch, React, and major video processing pipelines." },
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
          paddingTop: "160px",
          paddingBottom: "120px",
          overflow: "hidden", // contains blobs
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
              <span style={{ width: "8px", height: "8px", background: "#ef4444", borderRadius: "50%" }} />
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
                <span style={{ width: "6px", height: "6px", background: "#ef4444", borderRadius: "50%" }} /> spatial anomalies
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
                  background: "#ffffff", color: "#000000", fontWeight: "600", borderRadius: "8px", padding: "16px 40px",
                  fontSize: "1.05rem", textDecoration: "none", transition: "all 0.2s ease",
                  border: "1px solid transparent"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#f3f4f6"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#ffffff"; }}
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
        </div>
      </section>

      {/* ── 3-STEP QUICKSTART ────────────────────── */}
      <section style={{ padding: "0 24px 80px", maxWidth: "1200px", margin: "0 auto", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px", position: "relative" }}>
          
          <FadeIn delay={0.05}>
            <div 
              style={{ background: "#050505", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "20px", padding: "40px 32px", height: "100%", transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)", boxShadow: "0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#0a0a0c"; e.currentTarget.style.borderColor = "rgba(20, 184, 166, 0.3)"; e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)"; }}
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
              onMouseEnter={(e) => { e.currentTarget.style.background = "#0a0a0c"; e.currentTarget.style.borderColor = "rgba(249, 115, 22, 0.3)"; e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#050505"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)"; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
                <span style={{ background: "rgba(255,255,255,0.05)", padding: "6px 16px", borderRadius: "20px", fontSize: "0.85rem", color: "#a1a1aa", fontWeight: "600" }}>02. Trace</span>
                <span style={{ width: "8px", height: "8px", background: "#f97316", borderRadius: "50%", boxShadow: "0 0 10px #f97316" }}></span>
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
              onMouseEnter={(e) => { e.currentTarget.style.background = "#0a0a0c"; e.currentTarget.style.borderColor = "rgba(190, 18, 60, 0.3)"; e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#050505"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)"; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
                <span style={{ background: "rgba(255,255,255,0.05)", padding: "6px 16px", borderRadius: "20px", fontSize: "0.85rem", color: "#a1a1aa", fontWeight: "600" }}>03. Run</span>
                <span style={{ width: "8px", height: "8px", background: "#e11d48", borderRadius: "50%", boxShadow: "0 0 10px #e11d48" }}></span>
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
      <section style={{ position: "relative", backgroundColor: "#000", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "140px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
                    width: "48px", height: "48px", borderRadius: "12px", background: `#000`,
                    border: `1px solid rgba(255,255,255,0.1)`, display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.4rem", marginBottom: "24px"
                  }}>
                    {f.icon}
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
              background: "#0a0a0c", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "24px", padding: "80px 40px", textAlign: "center", position: "relative", overflow: "hidden",
            }}
          >
            
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: "800", letterSpacing: "-0.04em", color: "#fff", marginBottom: "20px" }}>
                Ready to find the <span style={{ fontStyle: "italic", fontFamily: "var(--font-fraunces), serif", color: "#ef4444" }}>truth?</span>
              </h2>
              <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.6)", marginBottom: "40px", maxWidth: "540px", margin: "0 auto 48px", lineHeight: "1.6" }}>
                Upload your first video and get a frame-by-frame verdict with confidence scores in seconds.
              </p>
              
              <Link
                href="/analyze"
                style={{
                  background: "#ffffff", color: "#000000", fontWeight: "600", borderRadius: "8px", padding: "16px 48px",
                  fontSize: "1.05rem", textDecoration: "none", display: "inline-flex", transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#f3f4f6"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#ffffff"; }}
              >
                Analyze a Video Now
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer style={{ backgroundColor: "#000", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "60px" }}>
          <div>
            <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "baseline", color: "#ffffff", lineHeight: 1 }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: "800", fontSize: "1.85rem", letterSpacing: "-0.06em" }}>veri</span>
              <span style={{ fontFamily: "var(--font-fraunces), serif", fontStyle: "italic", fontWeight: "400", fontSize: "2.6rem", margin: "0 0.01em 0 -0.04em", transform: "translateY(3px)", display: "inline-block" }}>t</span>
              <span style={{ position: "relative", display: "inline-block", fontFamily: "'Inter', sans-serif", fontWeight: "800", fontSize: "1.85rem", letterSpacing: "-0.06em" }}>
                a
                <span style={{ position: "absolute", top: "50%", left: "-10%", width: "120%", height: "3px", background: "#000", transform: "rotate(-25deg)" }} />
              </span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: "800", fontSize: "1.85rem", letterSpacing: "-0.06em" }}>s</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: "800", fontSize: "1.85rem", color: "#ef4444", letterSpacing: "-0.03em", marginLeft: "2px" }}>.ai</span>
            </Link>
            <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.4)", marginTop: "20px", maxWidth: "300px", lineHeight: "1.7" }}>
              Open-source AI platform for advanced deepfake detection, temporal modeling, and frame-level spatial analysis.
            </p>
            <div style={{ marginTop: "32px", fontSize: "0.85rem", color: "rgba(255,255,255,0.3)" }}>
              © {new Date().getFullYear()} Veritas.ai. Built with Next.js.
            </div>
          </div>

          <div style={{ display: "flex", gap: "100px", flexWrap: "wrap" }}>
            {[
              { title: "Product", links: ["Analyze Video", "Unified API", "Mobile App", "Enterprise"] },
              { title: "Ecosystem", links: ["Documentation", "GitHub 20k stars", "Models", "Releases"] },
              { title: "Community", links: ["LinkedIn 69k followers", "X (Twitter)", "YouTube Tutorials", "Slack Channel"] },
            ].map(col => (
               <div key={col.title}>
                 <h4 style={{ fontSize: "1rem", fontWeight: "600", color: "#fff", marginBottom: "24px" }}>{col.title}</h4>
                 <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                   {col.links.map(l => (
                     <span key={l} style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", cursor: "pointer", transition: "color 0.2s ease" }}
                           onMouseEnter={(e) => e.currentTarget.style.color = "#fff"}
                           onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}>
                       {l}
                     </span>
                   ))}
                 </div>
               </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}