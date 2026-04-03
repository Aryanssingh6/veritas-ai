"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Analyze() {
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | { label: string; confidence: number }>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files) setFile(e.dataTransfer.files[0]);
  };

  const handleAnalyze = () => {
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setLoading(false);
      setResult({ label: "DEEPFAKE", confidence: 87 });
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-transparent text-white overflow-hidden">
      <Navbar />

      <section className="relative z-10 flex flex-col items-center justify-center pt-28 pb-20 px-4">

        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "9999px", padding: "6px 18px", fontSize: "0.8rem", fontWeight: "600",
          color: "#94a3b8", marginBottom: "28px", backdropFilter: "blur(10px)"
        }}>
          <span style={{ width: "7px", height: "7px", background: "#38bdf8", borderRadius: "50%", boxShadow: "0 0 6px #38bdf8" }} />
          Upload & Analyze
        </div>

        {/* Heading */}
        <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 3.8rem)", fontWeight: "800", letterSpacing: "-0.04em", textAlign: "center", marginBottom: "16px", lineHeight: 1.1 }}>
          Upload a{" "}
          <span style={{ background: "linear-gradient(135deg, #38bdf8, #2563eb)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Video
          </span>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.45)", marginBottom: "48px", fontSize: "1.05rem", textAlign: "center" }}>
          Drag & drop or click to select a video file for AI analysis
        </p>

        {/* Drop Zone */}
        <div
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          onClick={() => document.getElementById("fileInput")?.click()}
          style={{
            width: "100%", maxWidth: "640px", border: `2px dashed ${dragging ? "#38bdf8" : "rgba(255,255,255,0.1)"}`,
            borderRadius: "20px", padding: "64px 32px", textAlign: "center", cursor: "pointer",
            background: dragging ? "rgba(56,189,248,0.05)" : "rgba(255,255,255,0.02)",
            transition: "all 0.2s ease",
            boxShadow: dragging ? "0 0 30px rgba(56,189,248,0.15)" : "none"
          }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🎬</div>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", fontWeight: "600", marginBottom: "8px" }}>
            Drop your video here
          </p>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.85rem" }}>MP4, MOV, AVI supported</p>
          <input id="fileInput" type="file" accept="video/*" style={{ display: "none" }} onChange={handleFileChange} />
        </div>

        {/* File Selected */}
        {file && (
          <div style={{
            marginTop: "20px", display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.25)",
            color: "#38bdf8", padding: "10px 22px", borderRadius: "9999px", fontSize: "0.9rem", fontWeight: "500"
          }}>
            <span>✓</span> {file.name}
          </div>
        )}

        {/* Analyze Button */}
        <button
          onClick={handleAnalyze}
          disabled={!file || loading}
          style={{
            marginTop: "28px",
            background: file && !loading ? "linear-gradient(135deg, #0ea5e9, #2563eb)" : "rgba(255,255,255,0.06)",
            color: file && !loading ? "#fff" : "rgba(255,255,255,0.3)",
            border: `1px solid ${file && !loading ? "rgba(56,189,248,0.3)" : "rgba(255,255,255,0.08)"}`,
            padding: "14px 48px", borderRadius: "9999px", fontSize: "1rem", fontWeight: "600",
            cursor: file && !loading ? "pointer" : "not-allowed",
            transition: "all 0.25s ease",
            boxShadow: file && !loading ? "0 0 24px rgba(14,165,233,0.35)" : "none"
          }}
        >
          {loading ? "Analyzing..." : "Analyze Video →"}
        </button>

        {/* Loading Spinner */}
        {loading && (
          <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <div style={{
              width: "44px", height: "44px", border: "3px solid rgba(56,189,248,0.2)",
              borderTop: "3px solid #38bdf8", borderRadius: "50%",
              animation: "spin 0.8s linear infinite"
            }} />
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9rem" }}>Sending video to Veritas AI...</p>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        )}

        {/* Result Card */}
        {result && (
          <div style={{
            marginTop: "40px", width: "100%", maxWidth: "640px",
            borderRadius: "20px", padding: "36px",
            background: result.label === "DEEPFAKE" ? "rgba(239,68,68,0.06)" : "rgba(34,197,94,0.06)",
            border: `1px solid ${result.label === "DEEPFAKE" ? "rgba(239,68,68,0.3)" : "rgba(34,197,94,0.3)"}`,
            backdropFilter: "blur(10px)"
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
              <h3 style={{ fontSize: "1.4rem", fontWeight: "700", letterSpacing: "-0.02em" }}>Analysis Result</h3>
              <span style={{
                padding: "6px 18px", borderRadius: "9999px", fontSize: "0.8rem", fontWeight: "700", letterSpacing: "0.08em",
                background: result.label === "DEEPFAKE" ? "#ef4444" : "#22c55e",
                color: "#fff"
              }}>
                {result.label}
              </span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", marginBottom: "12px" }}>
              Confidence Score: <span style={{ color: "#fff", fontWeight: "600" }}>{result.confidence}%</span>
            </p>
            <div style={{ width: "100%", background: "rgba(255,255,255,0.06)", borderRadius: "9999px", height: "8px" }}>
              <div
                style={{
                  width: `${result.confidence}%`, height: "8px", borderRadius: "9999px",
                  background: result.label === "DEEPFAKE"
                    ? "linear-gradient(90deg, #ef4444, #f87171)"
                    : "linear-gradient(90deg, #22c55e, #4ade80)",
                  transition: "width 1s cubic-bezier(0.16, 1, 0.3, 1)"
                }}
              />
            </div>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.85rem", marginTop: "16px" }}>
              {result.label === "DEEPFAKE"
                ? "⚠️ This video shows signs of AI manipulation."
                : "✅ This video appears to be authentic."}
            </p>
          </div>
        )}
      </section>
    </main>
  );
}