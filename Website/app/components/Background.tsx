import React from 'react';

export default function Background() {
  return (
    <div
      className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none"
      style={{ background: '#080a10' }}
    >
      {/* Indigo Spotlight — visible but tasteful, not harsh */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 85% 50% at 50% -10%,
              rgba(59, 91, 163, 0.75) 0%,
              rgba(30, 50, 100, 0.55) 25%,
              rgba(12, 20, 50, 0.35) 50%,
              transparent 72%
            )
          `,
        }}
      />

      {/* Vertical Stripes — ONLY in hero section, masked out below */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, rgba(255,255,255,0.07) 0px, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 38px)',
          maskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 65%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 65%)',
        }}
      />

      {/* Very Subtle Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          transform: 'translateZ(0)',
        }}
      />
    </div>
  );
}

