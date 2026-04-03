export default function Loading() {
  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: "#080a10", flexDirection: "column", gap: "24px"
    }}>
      {/* Animated spinner */}
      <div style={{ position: "relative", width: "48px", height: "48px" }}>
        <div style={{
          position: "absolute", inset: 0,
          border: "2px solid rgba(56,189,248,0.15)",
          borderTop: "2px solid #38bdf8",
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite"
        }} />
      </div>
      <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.9rem", fontWeight: "500" }}>Loading...</p>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
