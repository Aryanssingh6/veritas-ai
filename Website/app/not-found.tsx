import Link from "next/link";
import Navbar from "./components/Navbar";

export default function NotFound() {
  return (
    <main style={{ minHeight: "100vh", color: "#fff", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div style={{
        flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        padding: "120px 24px", textAlign: "center"
      }}>
        {/* 404 Number */}
        <div style={{
          fontSize: "clamp(6rem, 20vw, 14rem)", fontWeight: "900", letterSpacing: "-0.06em",
          color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.08)", lineHeight: 1,
          userSelect: "none", marginBottom: "8px", fontFamily: "'Inter', sans-serif"
        }}>
          404
        </div>

        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "9999px", padding: "6px 18px", fontSize: "0.8rem", fontWeight: "600",
          color: "#94a3b8", marginBottom: "28px", backdropFilter: "blur(10px)"
        }}>
          <span style={{ width: "7px", height: "7px", background: "#38bdf8", borderRadius: "50%", boxShadow: "0 0 6px #38bdf8" }} />
          Page Not Found
        </div>

        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: "800", letterSpacing: "-0.04em", marginBottom: "16px" }}>
          This page doesn&apos;t exist
        </h1>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.1rem", marginBottom: "48px", maxWidth: "420px", lineHeight: "1.6" }}>
          The URL you visited may be broken, moved, or never existed.
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
          <Link
            href="/"
            style={{
              background: "linear-gradient(135deg, #0ea5e9, #2563eb)",
              color: "#fff", fontWeight: "600", borderRadius: "8px", padding: "14px 36px",
              fontSize: "0.95rem", textDecoration: "none", transition: "all 0.2s ease",
              boxShadow: "0 0 20px rgba(14,165,233,0.3)", border: "1px solid rgba(56,189,248,0.3)"
            }}
          >
            Go Home
          </Link>
          <Link
            href="/analyze"
            style={{
              background: "rgba(255,255,255,0.03)", color: "rgba(255,255,255,0.7)",
              fontWeight: "500", borderRadius: "8px", padding: "14px 36px",
              fontSize: "0.95rem", textDecoration: "none", transition: "all 0.2s ease",
              border: "1px solid rgba(255,255,255,0.1)"
            }}
          >
            Try Analyze
          </Link>
        </div>
      </div>
    </main>
  );
}
