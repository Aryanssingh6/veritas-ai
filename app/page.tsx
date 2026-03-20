import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen text-white overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <div
          style={{
            backgroundImage: "url('/hero-bg.jpg.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center mt-24 px-4">
        <div className="inline-flex items-center gap-2 bg-blue-900/40 border border-blue-700 text-blue-300 text-xs px-4 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
          AI-Powered Deepfake Detection
        </div>

        <h2 className="text-7xl font-bold mb-5 leading-tight">
          Detect the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Truth
          </span>
        </h2>

        <p className="text-gray-300 text-xl max-w-2xl mb-4 leading-relaxed">
          Veritas.ai uses advanced{" "}
          <span className="text-white font-semibold">CNN + LSTM</span> and{" "}
          <span className="text-white font-semibold">Vision Transformer</span>{" "}
          models to detect AI-generated video manipulation with high accuracy.
        </p>

        <p className="text-gray-500 text-sm max-w-xl mb-10">
          Powered by FaceForensics++ · DeepFake Detection Challenge · Celeb-DF v2
        </p>

        <div className="flex items-center gap-4">
          <a
            href="/analyze"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all shadow-lg shadow-blue-900/60"
          >
            Analyze a Video →
          </a>
          <a
            href="/download"
            className="border border-gray-600 hover:border-cyan-500 text-gray-300 hover:text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold transition-all"
          >
            Download App
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-16 mt-20 text-center">
          <div>
            <p className="text-4xl font-bold text-white">95%</p>
            <p className="text-gray-500 text-sm mt-1">Detection Accuracy</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-white">2s</p>
            <p className="text-gray-500 text-sm mt-1">Avg Analysis Time</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-white">6+</p>
            <p className="text-gray-500 text-sm mt-1">Datasets Trained On</p>
          </div>
        </div>
      </section>

      {/* What is Veritas.ai */}
      <section className="relative z-10 max-w-5xl mx-auto mt-32 px-6">
        <div className="text-center mb-12">
          <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">About the Project</span>
          <h3 className="text-4xl font-bold mt-3">What is Veritas.ai?</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black/40 border border-blue-900/50 rounded-3xl p-8 backdrop-blur-sm">
            <div className="w-12 h-12 bg-blue-900/60 rounded-xl flex items-center justify-center text-2xl mb-5">🔎</div>
            <h4 className="text-xl font-bold mb-3">Truth in a Digital World</h4>
            <p className="text-gray-400 leading-relaxed text-sm">
              <span className="text-white font-semibold">Veritas</span> means &quot;Truth&quot; in Latin. Veritas.ai is an AI-powered deepfake
              detection platform that analyzes videos to determine whether they are authentic or AI-generated. It combines a
              web interface with a mobile app, making deepfake detection accessible to everyone.
            </p>
          </div>
          <div className="bg-black/40 border border-blue-900/50 rounded-3xl p-8 backdrop-blur-sm">
            <div className="w-12 h-12 bg-blue-900/60 rounded-xl flex items-center justify-center text-2xl mb-5">🧠</div>
            <h4 className="text-xl font-bold mb-3">Powered by State-of-the-Art Models</h4>
            <p className="text-gray-400 leading-relaxed text-sm">
              The detector is built on a hybrid{" "}
              <span className="text-cyan-400 font-semibold">CNN + LSTM</span> architecture and a{" "}
              <span className="text-cyan-400 font-semibold">Vision Transformer (ViT)</span> model that captures both spatial
              and temporal patterns in video frames, enabling accurate detection of subtle manipulation artifacts.
            </p>
          </div>
        </div>
      </section>

      {/* What It Does */}
      <section className="relative z-10 max-w-5xl mx-auto mt-20 px-6">
        <div className="text-center mb-12">
          <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">Capabilities</span>
          <h3 className="text-4xl font-bold mt-3">What Does It Do?</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              icon: "📤",
              title: "Upload & Analyze",
              desc: "Upload any MP4, MOV or AVI video and receive an instant REAL / DEEPFAKE verdict with a confidence score.",
            },
            {
              icon: "📱",
              title: "Mobile Detection",
              desc: "Use the Flutter mobile app to record or upload a video on the go. The app communicates with our FastAPI backend in real time.",
            },
            {
              icon: "📊",
              title: "Detailed Breakdown",
              desc: "Frame-level heatmaps and confidence bars help you understand exactly where and why manipulation was detected.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-black/40 border border-gray-800 hover:border-blue-700 transition-all rounded-3xl p-7 backdrop-blur-sm"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h4 className="text-lg font-bold mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Research Gap */}
      <section className="relative z-10 max-w-5xl mx-auto mt-20 px-6 pb-32">
        <div className="text-center mb-12">
          <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">Motivation</span>
          <h3 className="text-4xl font-bold mt-3">The Research Gap</h3>
        </div>
        <div className="bg-gradient-to-br from-blue-950/60 to-black border border-blue-800/50 rounded-3xl p-10 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-400 leading-relaxed mb-5">
                While deepfake research has grown rapidly, most existing tools are either{" "}
                <span className="text-white font-semibold">too academic</span> (not accessible to everyday users) or{" "}
                <span className="text-white font-semibold">too simplistic</span> (low accuracy, no mobile support).
              </p>
              <p className="text-gray-400 leading-relaxed mb-5">
                Veritas.ai bridges this gap by combining{" "}
                <span className="text-cyan-400 font-semibold">cutting-edge ML models</span> with a{" "}
                <span className="text-cyan-400 font-semibold">user-friendly interface</span> — both on the
                web and on mobile — making professional-grade deepfake detection available to anyone.
              </p>
              <a href="/docs" className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold hover:underline">
                Read the full documentation →
              </a>
            </div>
            <div className="space-y-4">
              {[
                { label: "Existing tools lack mobile support", fixed: true },
                { label: "No accessible real-time detection", fixed: true },
                { label: "Low accuracy on compressed videos", fixed: true },
                { label: "No combined web + app solution", fixed: true },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 bg-black/40 border border-gray-800 rounded-xl px-5 py-3">
                  <span className="text-green-400 text-lg">✓</span>
                  <span className="text-gray-300 text-sm">{item.label} — <span className="text-cyan-400">Solved</span></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}