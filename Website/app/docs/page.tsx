import Navbar from "../components/Navbar";

const Icon = ({ d, size = 20, className = "", fill = "none" }: { d: string; size?: number; className?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={fill === "none" ? "currentColor" : "none"} strokeWidth={fill === "none" ? "2" : "0"} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d={d} />
  </svg>
);

const icons = {
  github: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.79 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.372.79 1.102.79 2.222v3.293c0 .317.22.694.825.576C20.565 21.795 24 17.29 24 12c0-6.63-5.37-12-12-12z"
};



export default function Docs() {
  return (
    <main className="min-h-screen bg-transparent text-white overflow-hidden flex flex-col items-center justify-center relative">

      <Navbar />

      <section className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-900/40 border border-blue-700 text-blue-300 text-xs px-4 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
          Documentation
        </div>

        {/* Hero Heading */}
        <h2 className="text-7xl font-bold mb-6 leading-tight tracking-tight">
          Still{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Cookin&apos;
          </span>
        </h2>
        
        <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          We are currently crafting a comprehensive guide to help you master Veritas.ai. 
          The full documentation suite will be available very soon.
        </p>

        {/* Simple Progress Indicator */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="flex gap-1.5">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`h-1.5 w-1.5 rounded-full ${i <= 2 ? 'bg-cyan-400' : 'bg-gray-800'}`} />
            ))}
          </div>
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500">Writing in Progress</span>
        </div>

        {/* GitHub CTA */}
        <div className="flex flex-col items-center gap-6">
          <p className="text-gray-500 text-sm">In the meantime, explore the source code directly:</p>
          <a
            href="https://github.com/Aryanssingh6/veritas-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-4 rounded-full font-semibold transition-all shadow-lg shadow-blue-900/50 group"
          >
            <Icon d={icons.github} size={20} fill="currentColor" />
            Explore GitHub Repository
          </a>
        </div>
      </section>
    </main>
  );
}

