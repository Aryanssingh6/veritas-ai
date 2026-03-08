export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background glow effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl opacity-5"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-10 py-5 border-b border-blue-900 border-opacity-50 backdrop-blur-sm bg-black bg-opacity-20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-sm font-bold">V</div>
          <h1 className="text-2xl font-bold text-white">Veritas<span className="text-cyan-400">.ai</span></h1>
        </div>
        <div className="flex gap-8 text-gray-400 text-sm">
          <a href="/" className="text-cyan-400 font-semibold">Home</a>
          <a href="/analyze" className="hover:text-cyan-400 transition">Analyze</a>
          <a href="/dashboard" className="hover:text-cyan-400 transition">Dashboard</a>
          <a href="/about" className="hover:text-cyan-400 transition">About</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center mt-32 px-4">
        <div className="inline-block bg-blue-900 bg-opacity-40 border border-blue-700 text-blue-300 text-sm px-4 py-1 rounded-full mb-6">
          🔍 AI-Powered Deepfake Detection
        </div>
        <h2 className="text-7xl font-bold mb-6 leading-tight">
          Detect the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Truth</span>
        </h2>
        <p className="text-gray-400 text-xl max-w-xl mb-10">
          Upload a video and let Veritas.ai analyze whether it has been manipulated or deepfaked using advanced CNN + LSTM models.
        </p>
        <a href="/analyze" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all shadow-lg shadow-blue-900">
          Analyze a Video →
        </a>

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
    </main>
  );
}