"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/analyze", label: "Analyze" },
  { href: "/download", label: "Download" },
  { href: "/docs", label: "Docs" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          height: "64px", display: "flex", alignItems: "center", padding: "0 24px",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          backgroundColor: scrolled ? "rgba(9,9,11,0.92)" : "transparent",
          transition: "background-color 0.3s ease, border-color 0.3s ease",
        }}
      >
        {/* ── Logo */}
        <Link
          href="/"
          style={{ textDecoration: "none", flexShrink: 0, marginRight: "auto", display: "inline-flex", alignItems: "baseline", color: "#ffffff", lineHeight: 1 }}
        >
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: "800", fontSize: "1.65rem", letterSpacing: "-0.06em" }}>veri</span>
          <span style={{ fontFamily: "var(--font-fraunces), serif", fontStyle: "italic", fontWeight: "400", fontSize: "2.3rem", margin: "0 0.01em 0 -0.04em", transform: "translateY(3px)", display: "inline-block" }}>t</span>
          <span style={{ position: "relative", display: "inline-block", fontFamily: "'Inter', sans-serif", fontWeight: "800", fontSize: "1.65rem", letterSpacing: "-0.06em" }}>
            a
            <span style={{ position: "absolute", top: "50%", left: "-10%", width: "120%", height: "2.5px", background: "#09090b", transform: "rotate(-25deg)" }} />
          </span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: "800", fontSize: "1.65rem", letterSpacing: "-0.06em" }}>s</span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: "800", fontSize: "1.65rem", color: "#38bdf8", letterSpacing: "-0.03em", marginLeft: "2px" }}>.ai</span>
        </Link>

        {/* ── Desktop Nav Links */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "4px", position: "absolute", left: "50%", transform: "translateX(-50%)" }}
          className="hide-mobile">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link key={href} href={href} style={{
                fontSize: "0.875rem", fontWeight: isActive ? "600" : "400",
                color: isActive ? "#ffffff" : "rgba(255,255,255,0.5)",
                textDecoration: "none", padding: "6px 15px", borderRadius: "8px",
                background: isActive ? "rgba(255,255,255,0.08)" : "transparent",
                transition: "all 0.15s ease", letterSpacing: "0.01em",
              }}
                onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.color = "rgba(255,255,255,0.85)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; } }}
                onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; e.currentTarget.style.background = "transparent"; } }}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* ── Desktop Right Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0, marginLeft: "auto" }} className="hide-mobile">
          <a href="https://github.com/Aryanssingh6/veritas-ai" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "9999px", padding: "7px 16px", fontSize: "0.8rem", fontWeight: "500", color: "rgba(255,255,255,0.7)", textDecoration: "none", transition: "all 0.15s ease" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.11)"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
            GitHub
          </a>
          <div style={{ width: "1px", height: "18px", background: "rgba(255,255,255,0.1)" }} />
          <Link href="/analyze" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#ffffff", color: "#09090b", fontWeight: "700", borderRadius: "9px", padding: "8px 20px", fontSize: "0.85rem", textDecoration: "none", transition: "all 0.15s ease", letterSpacing: "-0.01em" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#ebebeb"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#ffffff"; }}
          >
            Get started
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>

        {/* ── Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="show-mobile"
          style={{
            background: "transparent", border: "none", cursor: "pointer",
            padding: "8px", display: "none", flexDirection: "column",
            gap: "5px", marginLeft: "auto"
          }}
          aria-label="Toggle menu"
        >
          <span style={{ display: "block", width: "22px", height: "2px", background: "#fff", borderRadius: "2px", transition: "all 0.3s ease", transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span style={{ display: "block", width: "22px", height: "2px", background: "#fff", borderRadius: "2px", transition: "all 0.3s ease", opacity: mobileOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: "22px", height: "2px", background: "#fff", borderRadius: "2px", transition: "all 0.3s ease", transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </nav>

      {/* ── Mobile Drawer */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 99,
        background: "rgba(8,10,16,0.98)", backdropFilter: "blur(20px)",
        display: "flex", flexDirection: "column", padding: "80px 32px 40px",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        opacity: mobileOpen ? 1 : 0,
        transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
        pointerEvents: mobileOpen ? "all" : "none",
      }}>
        <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link key={href} href={href}
                style={{
                  fontSize: "1.4rem", fontWeight: "700", color: isActive ? "#fff" : "rgba(255,255,255,0.4)",
                  textDecoration: "none", padding: "16px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                  transition: "color 0.15s ease", letterSpacing: "-0.02em"
                }}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "12px" }}>
          <Link href="/analyze" style={{
            background: "linear-gradient(135deg, #0ea5e9, #2563eb)",
            color: "#fff", fontWeight: "700", borderRadius: "10px", padding: "16px",
            fontSize: "1rem", textDecoration: "none", textAlign: "center",
            boxShadow: "0 0 24px rgba(14,165,233,0.3)"
          }}>
            Get started →
          </Link>
          <a href="https://github.com/Aryanssingh6/veritas-ai" target="_blank" rel="noopener noreferrer"
            style={{ border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)", borderRadius: "10px", padding: "16px", fontSize: "0.95rem", textDecoration: "none", textAlign: "center" }}>
            View on GitHub
          </a>
        </div>
      </div>

      {/* ── Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
