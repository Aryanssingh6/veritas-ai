"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "40px 24px", textAlign: "center", background: "#080a10", color: "#fff"
    }}>
      {/* Error icon */}
      <div style={{
        width: "64px", height: "64px", borderRadius: "16px",
        background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)",
        display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "28px"
      }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      </div>

      <h1 style={{ fontSize: "1.8rem", fontWeight: "800", letterSpacing: "-0.04em", marginBottom: "12px" }}>
        Something went wrong
      </h1>
      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1rem", marginBottom: "40px", maxWidth: "400px", lineHeight: "1.6" }}>
        An unexpected error occurred. Try refreshing or go back to the homepage.
      </p>

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
        <button
          onClick={() => reset()}
          style={{
            background: "linear-gradient(135deg, #0ea5e9, #2563eb)",
            color: "#fff", fontWeight: "600", borderRadius: "8px", padding: "14px 36px",
            fontSize: "0.95rem", cursor: "pointer", border: "1px solid rgba(56,189,248,0.3)",
            boxShadow: "0 0 20px rgba(14,165,233,0.3)", transition: "all 0.2s ease"
          }}
        >
          Try again
        </button>
        <Link
          href="/"
          style={{
            background: "rgba(255,255,255,0.03)", color: "rgba(255,255,255,0.7)",
            fontWeight: "500", borderRadius: "8px", padding: "14px 36px",
            fontSize: "0.95rem", textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.1)", transition: "all 0.2s ease"
          }}
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}
