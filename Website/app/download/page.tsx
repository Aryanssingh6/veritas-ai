import Navbar from "../components/Navbar";

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
            <div className="flex-shrink-0 w-32 h-32 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl flex items-center justify-center text-6xl shadow-2xl shadow-blue-900/60">
              🔍
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
              href="https://github.com/Aryanssingh6/veritas-ai/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-blue-900/50"
            >
              <span className="text-xl">📦</span>
              Download APK (Android)
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-3 border border-gray-700 hover:border-cyan-600 text-gray-300 hover:text-cyan-400 px-8 py-4 rounded-full font-semibold transition-all cursor-not-allowed opacity-60"
            >
              <span className="text-xl">🍎</span>
              App Store — Coming Soon
            </a>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {[
            { icon: "⚡", title: "Real-Time Results", desc: "AI analysis completes in under 3 seconds on most devices." },
            { icon: "📷", title: "Camera & Gallery", desc: "Record live or pick from your gallery — any video format supported." },
            { icon: "🔒", title: "Privacy First", desc: "Videos are analyzed on our secure server and never stored permanently." },
          ].map((f) => (
            <div
              key={f.title}
              className="bg-black/40 border border-gray-800 hover:border-blue-700 transition-all rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h4 className="text-lg font-bold mb-2">{f.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Install instructions */}
        <div className="bg-black/40 border border-gray-800 rounded-3xl p-8 backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-6">📋 How to Install (Android APK)</h3>
          <ol className="space-y-4">
            {[
              "Download the APK file using the button above.",
              'Open your phone\'s Settings → Security → Enable "Install from Unknown Sources".',
              "Locate the downloaded APK in your Downloads folder and tap to install.",
              "Open Veritas.ai and grant camera & storage permissions when prompted.",
              "Upload or record a video — and get your result instantly.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-7 h-7 bg-blue-900/60 border border-blue-700 rounded-lg flex items-center justify-center text-cyan-400 text-xs font-bold flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-gray-400 text-sm leading-relaxed pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
