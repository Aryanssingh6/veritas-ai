export default function About() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-8"></div>
        <div className="absolute top-1/2 right-10 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-5"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-10 py-5 border-b border-blue-900 border-opacity-50 backdrop-blur-sm bg-black bg-opacity-20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-sm font-bold">V</div>
          <h1 className="text-2xl font-bold text-white">Veritas<span className="text-cyan-400">.ai</span></h1>
        </div>
        <div className="flex gap-8 text-gray-400 text-sm">
          <a href="/" className="hover:text-cyan-400 transition">Home</a>
          <a href="/analyze" className="hover:text-cyan-400 transition">Analyze</a>
          <a href="/dashboard" className="hover:text-cyan-400 transition">Dashboard</a>
          <a href="/about" className="text-cyan-400 font-semibold">About</a>
        </div>
      </nav>

      <section className="relative z-10 max-w-5xl mx-auto mt-16 px-6 pb-20">

        {/* Hero */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-900 bg-opacity-40 border border-blue-700 text-blue-300 text-xs px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
            About Veritas.ai
          </div>
          <h2 className="text-6xl font-bold mb-6 leading-tight">
            Fighting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Misinformation</span><br />with AI
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            <span className="text-white font-semibold">Veritas</span> means "Truth" in Latin. We use cutting-edge deep learning to detect AI-generated and manipulated videos — helping users make informed decisions in a world full of deepfakes.
          </p>
        </div>

        {/* Problem Statement */}
        <div className="relative bg-gradient-to-br from-blue-900 to-black bg-opacity-40 rounded-3xl p-8 border border-blue-800 border-opacity-50 mb-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-900 bg-opacity-60 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">🎯</div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Problem Statement</h3>
              <p className="text-gray-400 leading-relaxed">
                With the rise of AI-generated videos, digitally vulnerable users are increasingly exposed to misinformation and fraud. Veritas.ai analyzes videos and estimates the likelihood of manipulation, helping users stay informed and protected.
              </p>
            </div>
          </div>
        </div>

        {/* How it works — Timeline */}
        <div className="bg-gray-900 bg-opacity-40 rounded-3xl p-8 border border-gray-800 mb-6 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-10 text-center">⚙️ How It Works</h3>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 to-cyan-600 opacity-30"></div>
            <div className="space-y-10">
              {[
                { icon: "📤", step: "01", title: "Upload Video", desc: "User uploads a video file via drag & drop or file picker. Supports MP4, MOV, AVI formats.", side: "left" },
                { icon: "🧠", step: "02", title: "AI Analysis", desc: "Our CNN + LSTM model analyzes spatial and temporal features frame by frame to detect manipulation.", side: "right" },
                { icon: "📊", step: "03", title: "Get Results", desc: "Confidence score and REAL/DEEPFAKE verdict is displayed with detailed analysis breakdown.", side: "left" },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-8 ${item.side === "right" ? "flex-row-reverse" : ""}`}>
                  <div className="flex-1">
                    <div className={`bg-black bg-opacity-40 border border-gray-800 hover:border-blue-700 transition rounded-2xl p-6 ${item.side === "right" ? "text-right" : ""}`}>
                      <span className="text-blue-500 text-xs font-bold tracking-widest">STEP {item.step}</span>
                      <h4 className="text-lg font-bold mt-1 mb-2">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-lg shadow-blue-900">
                    {item.icon}
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-gray-900 bg-opacity-40 rounded-3xl p-8 border border-gray-800 mb-6 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6">🛠️ Tech Stack</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { category: "Frontend", techs: ["Next.js", "React", "Tailwind CSS"] },
              { category: "Backend", techs: ["FastAPI", "Python", "PostgreSQL"] },
              { category: "AI / ML", techs: ["CNN", "LSTM", "PyTorch"] },
              { category: "Mobile", techs: ["Flutter", "Dart"] },
            ].map((group) => (
              <div key={group.category} className="bg-black bg-opacity-30 rounded-2xl p-5 border border-gray-800">
                <p className="text-cyan-400 text-xs font-bold tracking-widest mb-3">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.techs.map((tech) => (
                    <span key={tech} className="bg-blue-900 bg-opacity-40 border border-blue-800 text-blue-300 px-3 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="bg-gray-900 bg-opacity-40 rounded-3xl p-8 border border-gray-800 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-8">👥 Our Team</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {[
              { name: "Vaibhav", role: "ML Architect", emoji: "🧠" },
              { name: "Nehanshu", role: "Mobile Engineer", emoji: "📱" },
              { name: "Krishna", role: "Cloud & Server", emoji: "☁️" },
              { name: "Aryan", role: "Web Developer", emoji: "💻" },
              { name: "Saksham", role: "UI/UX & Docs", emoji: "🎨" },
            ].map((member) => (
              <div key={member.name} className="group bg-black bg-opacity-30 border border-gray-800 hover:border-cyan-700 transition-all rounded-2xl p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-lg shadow-blue-900">
                  {member.emoji}
                </div>
                <h4 className="font-bold text-white">{member.name}</h4>
                <p className="text-cyan-400 text-xs mt-1 tracking-wide">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}