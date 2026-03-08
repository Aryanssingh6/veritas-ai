export default function Dashboard() {
  const results = [
    { name: "sample_video.mp4", date: "08 Mar 2026", label: "DEEPFAKE", confidence: 87 },
    { name: "interview_clip.mp4", date: "08 Mar 2026", label: "REAL", confidence: 92 },
    { name: "news_footage.mp4", date: "07 Mar 2026", label: "DEEPFAKE", confidence: 73 },
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>
      </div>

      <nav className="relative z-10 flex items-center justify-between px-10 py-5 border-b border-blue-900 border-opacity-50 backdrop-blur-sm bg-black bg-opacity-20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-sm font-bold">V</div>
          <h1 className="text-2xl font-bold text-white">Veritas<span className="text-cyan-400">.ai</span></h1>
        </div>
        <div className="flex gap-8 text-gray-400 text-sm">
          <a href="/" className="hover:text-cyan-400 transition">Home</a>
          <a href="/analyze" className="hover:text-cyan-400 transition">Analyze</a>
          <a href="/dashboard" className="text-cyan-400 font-semibold">Dashboard</a>
          <a href="/about" className="hover:text-cyan-400 transition">About</a>
        </div>
      </nav>

      <section className="relative z-10 max-w-4xl mx-auto mt-16 px-4">
        <div className="inline-block bg-blue-900 bg-opacity-40 border border-blue-700 text-blue-300 text-sm px-4 py-1 rounded-full mb-6">
          📊 Analysis History
        </div>
        <h2 className="text-5xl font-bold mb-2">Results <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Dashboard</span></h2>
        <p className="text-gray-400 mb-10">All your previous video analysis results</p>

        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="bg-gray-900 bg-opacity-60 border border-gray-800 rounded-2xl p-5 text-center">
            <p className="text-3xl font-bold text-white">3</p>
            <p className="text-gray-500 text-sm mt-1">Total Analyzed</p>
          </div>
          <div className="bg-gray-900 bg-opacity-60 border border-red-900 rounded-2xl p-5 text-center">
            <p className="text-3xl font-bold text-red-400">2</p>
            <p className="text-gray-500 text-sm mt-1">Deepfakes Found</p>
          </div>
          <div className="bg-gray-900 bg-opacity-60 border border-green-900 rounded-2xl p-5 text-center">
            <p className="text-3xl font-bold text-green-400">1</p>
            <p className="text-gray-500 text-sm mt-1">Real Videos</p>
          </div>
        </div>

        {results.map((r, i) => (
          <div key={i} className="bg-gray-900 bg-opacity-60 rounded-2xl p-8 border border-gray-800 mb-4 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">{r.name}</h3>
                <p className="text-gray-500 text-sm mt-1">🕒 {r.date}</p>
              </div>
              <span className={`px-4 py-2 rounded-full text-sm font-bold tracking-wider ${r.label === "DEEPFAKE" ? "bg-red-600" : "bg-green-600"}`}>
                {r.label}
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-2">Confidence Score: {r.confidence}%</p>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${r.label === "DEEPFAKE" ? "bg-gradient-to-r from-red-600 to-red-400" : "bg-gradient-to-r from-green-600 to-green-400"}`}
                style={{ width: `${r.confidence}%` }}
              ></div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}