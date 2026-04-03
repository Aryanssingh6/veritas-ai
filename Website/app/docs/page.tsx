import Navbar from "../components/Navbar";

const docSections = [
  {
    icon: "🚀",
    title: "Getting Started",
    items: ["Introduction to Veritas.ai", "System Requirements", "Quick Start Guide", "Uploading Your First Video"],
  },
  {
    icon: "🧠",
    title: "AI Models",
    items: ["CNN + LSTM Architecture", "Vision Transformer (ViT)", "Training Datasets", "Model Performance Metrics"],
  },
  {
    icon: "📱",
    title: "Mobile App",
    items: ["Installing the APK", "Camera Integration", "Connecting to Backend", "Offline Mode (Coming Soon)"],
  },
  {
    icon: "⚙️",
    title: "API Reference",
    items: ["REST API Overview", "Authentication", "POST /analyze endpoint", "Response Schema"],
  },
  {
    icon: "🛠️",
    title: "Self-Hosting",
    items: ["Server Requirements", "Docker Setup", "Environment Variables", "Deploying to Cloud"],
  },
  {
    icon: "📚",
    title: "Research",
    items: ["Problem Statement", "Related Work", "Research Gap", "Experimental Results"],
  },
];

export default function Docs() {
  return (
    <main className="min-h-screen bg-transparent text-white overflow-hidden">

      <Navbar />

      <section className="relative z-10 max-w-5xl mx-auto mt-20 px-6 pb-32">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-900/40 border border-blue-700 text-blue-300 text-xs px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
            Documentation
          </div>
          <h2 className="text-6xl font-bold mb-5 leading-tight">
            Veritas.ai{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Docs
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Full documentation is currently being written. Check back soon — or explore the section outlines below.
          </p>
        </div>

        {/* In Progress Banner */}
        <div style={{
          background: "rgba(56,189,248,0.05)", border: "1px solid rgba(56,189,248,0.2)",
          borderRadius: "16px", padding: "20px 32px", display: "flex", alignItems: "center", gap: "20px", marginBottom: "48px"
        }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
          </div>
          <div>
            <p style={{ fontWeight: "600", color: "#38bdf8", marginBottom: "4px", fontSize: "0.95rem" }}>Documentation in Progress</p>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>
              Our team is actively writing comprehensive documentation. In the meantime, browse the{" "}
              <a href="https://github.com/Aryanssingh6/veritas-ai" target="_blank" rel="noopener noreferrer" style={{ color: "#38bdf8", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                GitHub repository
              </a>{" "}
              for source code and README files.
            </p>
          </div>
        </div>

        {/* Section grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {docSections.map((section) => (
            <div
              key={section.title}
              className="bg-black/40 border border-gray-800 hover:border-blue-800 transition-all rounded-3xl p-7 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{section.icon}</span>
                <h3 className="text-lg font-bold">{section.title}</h3>
                <span className="ml-auto text-xs bg-blue-900/40 border border-blue-800 text-blue-400 px-3 py-1 rounded-full">
                  Coming Soon
                </span>
              </div>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-500 text-sm">
                    <span className="w-1.5 h-1.5 bg-gray-700 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center">
          <p className="text-gray-500 mb-5">Want to contribute to the docs or explore the codebase?</p>
          <a
            href="https://github.com/Aryanssingh6/veritas-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-blue-900/50"
          >
            <span className="text-xl">🐙</span>
            View on GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
