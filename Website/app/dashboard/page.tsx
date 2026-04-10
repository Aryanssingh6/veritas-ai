import Navbar from "../components/Navbar";

const Icon = ({ d, size = 20, className = "" }: { d: string; size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d={d} />
  </svg>
);

const icons = {
  barChart: "M18 20V10M12 20V4M6 20v-6",
  clock: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  video: "m22 8-6 4 6 4V8Z M2 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Z"
};

export default function Dashboard() {
  const results = [
    { name: "sample_video.mp4", date: "08 Mar 2026", label: "DEEPFAKE", confidence: 87 },
    { name: "interview_clip.mp4", date: "08 Mar 2026", label: "REAL", confidence: 92 },
    { name: "news_footage.mp4", date: "07 Mar 2026", label: "DEEPFAKE", confidence: 73 },
  ];

  return (
    <main className="min-h-screen bg-transparent text-white overflow-hidden">
      
      <Navbar />

      <section className="relative z-10 max-w-4xl mx-auto mt-24 px-4 pb-20">
        <div className="inline-flex items-center gap-2 bg-blue-900 bg-opacity-40 border border-blue-700 text-blue-300 text-xs px-4 py-1.5 rounded-full mb-6">
          <Icon d={icons.barChart} size={14} />
          Analysis History
        </div>
        <h2 className="text-5xl font-bold mb-2">Results <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Dashboard</span></h2>
        <p className="text-gray-400 mb-10">All your previous video analysis results</p>

        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="bg-gray-900 bg-opacity-40 border border-gray-800 rounded-2xl p-6 text-center backdrop-blur-sm">
            <p className="text-3xl font-bold text-white">3</p>
            <p className="text-gray-500 text-xs mt-1 font-semibold tracking-wider">TOTAL ANALYZED</p>
          </div>
          <div className="bg-red-900/10 border border-red-900/40 rounded-2xl p-6 text-center backdrop-blur-sm">
            <p className="text-3xl font-bold text-red-400">2</p>
            <p className="text-red-500/50 text-xs mt-1 font-semibold tracking-wider">DEEPFAKES FOUND</p>
          </div>
          <div className="bg-green-900/10 border border-green-900/40 rounded-2xl p-6 text-center backdrop-blur-sm">
            <p className="text-3xl font-bold text-green-400">1</p>
            <p className="text-green-500/50 text-xs mt-1 font-semibold tracking-wider">REAL VIDEOS</p>
          </div>
        </div>

        {results.map((r, i) => (
          <div key={i} className="bg-gray-900/30 rounded-2xl p-8 border border-gray-800/50 mb-4 backdrop-blur-sm hover:border-blue-800/50 transition-all">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Icon d={icons.video} size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{r.name}</h3>
                  <div className="flex items-center gap-2 text-gray-500 text-xs mt-1">
                    <Icon d={icons.clock} size={12} />
                    {r.date}
                  </div>
                </div>
              </div>
              <span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-widest ${r.label === "DEEPFAKE" ? "bg-red-500/20 text-red-400 border border-red-500/30" : "bg-green-500/20 text-green-400 border border-green-500/30"}`}>
                {r.label}
              </span>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Confidence Score</span>
                <span className="text-white font-bold">{r.confidence}%</span>
              </div>
              <div className="w-full bg-gray-800/50 rounded-full h-1.5">
                <div
                  className={`h-1.5 rounded-full transition-all duration-1000 ${r.label === "DEEPFAKE" ? "bg-gradient-to-r from-red-600 to-red-400" : "bg-gradient-to-r from-green-600 to-green-400"}`}
                  style={{ width: `${r.confidence}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}