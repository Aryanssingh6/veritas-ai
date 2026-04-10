import Navbar from "../components/Navbar";

const Icon = ({ d, size = 20, className = "", fill = "none" }: { d: string; size?: number; className?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={fill === "none" ? "currentColor" : "none"} strokeWidth={fill === "none" ? "2" : "0"} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d={d} />
  </svg>
);

const icons = {
  search: "M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z",
  package: "m7.5 4.27 9 5.15M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z m-9 12.17V11.16m-9-3.16 9 5.16 9-5.16",
  apple: "M12 20.94c-1.38 0-2.35-.44-2.88-.44-.52 0-1.55.44-2.88.44-3.05 0-5.46-3.8-5.46-7.1 0-3.35 1.7-5.1 3.51-5.1 1.05 0 1.9.46 2.65.46s1.6-.46 2.65-.46c1.38 0 2.6.5 3.39 1.58-1.5.88-2.6 2.3-2.6 4.1 0 1.8 1.15 3.2 2.7 4.05-.62 1.5-1.52 2.5-1.52 2.5zM12.1 6.1c0 0-1-.1-2.1.8-.75-.82-.75-1.95-.55-2.55 1.1-.1 2.1.8 2.1.8.8.8.8 1.85.55 1.75z",
  zap: "m13 2-9 12h8l-1 8 9-12h-8l1-8z",
  camera: "m22 8-6 4 6 4V8ZM2 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  list: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2 M9 2h6",
  github: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.79 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.372.79 1.102.79 2.222v3.293c0 .317.22.694.825.576C20.565 21.795 24 17.29 24 12c0-6.63-5.37-12-12-12z"
};

export default function Download() {
  return (
    <main className="min-h-screen bg-transparent text-white overflow-hidden">

      <Navbar />

      <section className="relative z-10 max-w-5xl mx-auto mt-20 px-6 pb-32">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-900/40 border border-blue-700 text-blue-300 text-xs px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
            Mobile App
          </div>
          <h2 className="text-6xl font-bold mb-5 leading-tight">
            Detect Deepfakes{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              On the Go
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            The Veritas.ai mobile app brings real-time deepfake detection to your smartphone. Built with{" "}
            <span className="text-white font-semibold">Flutter</span>, it connects to our FastAPI backend and
            delivers results in seconds.
          </p>
        </div>

        {/* Main Download Card */}
        <div className="bg-gradient-to-br from-blue-950/60 to-black border border-blue-800/50 rounded-3xl p-10 mb-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* App Icon */}
            <div className="flex-shrink-0 w-32 h-32 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-900/60">
              <Icon d={icons.search} size={64} className="text-white opacity-90" />
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-bold mb-2">Veritas.ai Mobile</h3>
              <p className="text-cyan-400 text-sm font-semibold mb-4">Version 1.0 Beta · Flutter · Android</p>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                Upload a video, record from your camera, or share a clip directly to Veritas.ai —
                our on-device and cloud AI analyses it instantly and returns a verdict with confidence score.
              </p>
            </div>
          </div>

          {/* Download buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/mohanevs/Deepfake-video-Detection/releases/download/v0.2/Veritas.ai.apk"
              download="Veritas.ai.apk"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-blue-900/50"
            >
              <Icon d={icons.package} size={20} />
              Download APK (Android)
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-3 border border-gray-700 hover:border-cyan-600 text-gray-300 hover:text-cyan-400 px-8 py-4 rounded-full font-semibold transition-all cursor-not-allowed opacity-60"
            >
              <Icon d={icons.apple} size={20} />
              App Store — Coming Soon
            </a>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {[
            { icon: icons.zap, title: "Real-Time Results", desc: "AI analysis completes in under 3 seconds on most devices.", color: "#38bdf8" },
            { icon: icons.camera, title: "Camera & Gallery", desc: "Record live or pick from your gallery — any video format supported.", color: "#60a5fa" },
            { icon: icons.shield, title: "Privacy First", desc: "Videos are analyzed on our secure server and never stored permanently.", color: "#34d399" },
          ].map((f) => (
            <div
              key={f.title}
              className="bg-black/40 border border-gray-800 hover:border-blue-700 transition-all rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                <Icon d={f.icon} size={24} className="text-white opacity-80" />
              </div>
              <h4 className="text-lg font-bold mb-2">{f.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Technical Specs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <div className="bg-black/40 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Icon d={icons.list} size={18} />
              </div>
              How to Install (Android APK)
            </h3>
            <ol className="space-y-4">
              {[
                "Download the APK file to your device.",
                'Enable "Install from Unknown Sources" in Settings.',
                "Locate the APK in your Downloads folder.",
                "Tap the file and follow the install prompts.",
                "Open Veritas.ai and start detecting.",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-6 h-6 bg-blue-900/40 border border-blue-700/50 rounded-lg flex items-center justify-center text-cyan-400 text-[10px] font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-gray-400 text-sm leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-black/40 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Icon d={icons.shield} size={18} />
              </div>
              Technical Information
            </h3>
            <ul className="space-y-4">
              {[
                { label: "Core Framework", value: "Flutter 3.x / Dart" },
                { label: "AI Backend", value: "FastAPI (Python)" },
                { label: "Min Android OS", value: "Android 8.0 (API 26)" },
                { label: "Inference Mode", value: "Hybrid (Cloud + Edge)" },
                { label: "Data Transfer", value: "HTTPS / TLS 1.3" },
              ].map((item, i) => (
                <li key={i} className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-500 text-sm">{item.label}</span>
                  <span className="text-blue-300 text-sm font-medium">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
