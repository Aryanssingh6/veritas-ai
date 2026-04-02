import React from 'react';

export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#050508] overflow-hidden pointer-events-none">
      {/* 1. Deep Dark Gradient Mesh Base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_#0f172a_0%,_#050508_60%)]" />

      {/* 2. Soft Glowing Blobs (Asymmetrical, Low Opacity) */}
      <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-blue-900/30 blur-[140px] mix-blend-screen animate-blob1" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[45vw] h-[45vw] rounded-full bg-indigo-900/20 blur-[150px] mix-blend-screen animate-blob2" />
      <div className="absolute top-[20%] left-[50%] w-[35vw] h-[35vw] rounded-full bg-cyan-900/10 blur-[120px] mix-blend-screen animate-float" />

      {/* 3. Subtle Faint Grid Pattern at 5% Opacity */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 50%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 50%, transparent 100%)",
        }}
      />

      {/* 4. Very Subtle Grain/Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
