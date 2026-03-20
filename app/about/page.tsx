import Navbar from "../components/Navbar";

const team = [
  {
    name: "Vaibhav",
    role: "ML Architect",
    oneLiner: "Designed and trained the CNN+LSTM & Vision Transformer models for deepfake detection.",
    emoji: "🧠",
    linkedin: "https://linkedin.com",
    photo: null,
  },
  {
    name: "Nehanshu",
    role: "Mobile Engineer",
    oneLiner: "Built the Flutter mobile app that brings real-time deepfake detection to your pocket.",
    emoji: "📱",
    linkedin: "https://linkedin.com",
    photo: null,
  },
  {
    name: "Krishna",
    role: "Cloud & Backend",
    oneLiner: "Architected the FastAPI server, database, and cloud deployment pipeline.",
    emoji: "☁️",
    linkedin: "https://linkedin.com",
    photo: null,
  },
  {
    name: "Aryan",
    role: "Web Developer",
    oneLiner: "Built the Next.js web platform and integrated it with the detection backend.",
    emoji: "💻",
    linkedin: "https://www.linkedin.com/in/aryan-singh-7b4b0b2b0",
    photo: null,
  },
  {
    name: "Saksham",
    role: "UI/UX & Documentation",
    oneLiner: "Crafted the design system, user experience, and wrote technical documentation.",
    emoji: "🎨",
    linkedin: "https://linkedin.com",
    photo: null,
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background glows */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-blue-600 rounded-full filter blur-[140px] opacity-8" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-cyan-500 rounded-full filter blur-[120px] opacity-6" />
      </div>

      <Navbar />

      <section className="relative z-10 max-w-5xl mx-auto mt-16 px-6 pb-24">

        {/* Hero */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-900/40 border border-blue-700 text-blue-300 text-xs px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
            About Veritas.ai
          </div>
          <h2 className="text-6xl font-bold mb-6 leading-tight">
            Fighting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Misinformation
            </span>
            <br />with AI
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            <span className="text-white font-semibold">Veritas</span> means &quot;Truth&quot; in Latin. We use cutting-edge deep
            learning to detect AI-generated and manipulated videos — helping users make informed decisions in a world
            full of deepfakes.
          </p>
        </div>

        {/* Problem Statement */}
        <div className="relative bg-gradient-to-br from-blue-950/60 to-black rounded-3xl p-8 border border-blue-800/50 mb-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-10" />
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 bg-blue-900/60 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">🎯</div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Problem Statement</h3>
              <p className="text-gray-400 leading-relaxed">
                With the rise of AI-generated videos, digitally vulnerable users are increasingly exposed to misinformation
                and fraud. Veritas.ai analyzes videos and estimates the likelihood of manipulation, helping users stay
                informed and protected.
              </p>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="bg-gray-900/40 rounded-3xl p-8 border border-gray-800 mb-6 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-10 text-center">⚙️ How It Works</h3>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 to-cyan-600 opacity-30" />
            <div className="space-y-10">
              {[
                { icon: "📤", step: "01", title: "Upload Video", desc: "User uploads a video file via drag & drop or file picker. Supports MP4, MOV, AVI formats.", side: "left" },
                { icon: "🧠", step: "02", title: "AI Analysis", desc: "Our CNN + LSTM model analyzes spatial and temporal features frame by frame to detect manipulation.", side: "right" },
                { icon: "📊", step: "03", title: "Get Results", desc: "Confidence score and REAL/DEEPFAKE verdict is displayed with detailed analysis breakdown.", side: "left" },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-8 ${item.side === "right" ? "flex-row-reverse" : ""}`}>
                  <div className="flex-1">
                    <div className={`bg-black/40 border border-gray-800 hover:border-blue-700 transition rounded-2xl p-6 ${item.side === "right" ? "text-right" : ""}`}>
                      <span className="text-blue-500 text-xs font-bold tracking-widest">STEP {item.step}</span>
                      <h4 className="text-lg font-bold mt-1 mb-2">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-lg shadow-blue-900">
                    {item.icon}
                  </div>
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-gray-900/40 rounded-3xl p-8 border border-gray-800 mb-6 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6">🛠️ Tech Stack</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { category: "Frontend", techs: ["Next.js", "React", "Tailwind CSS"] },
              { category: "Backend", techs: ["FastAPI", "Python", "PostgreSQL"] },
              { category: "AI / ML", techs: ["CNN", "LSTM", "ViT", "PyTorch"] },
              { category: "Mobile", techs: ["Flutter", "Dart"] },
            ].map((group) => (
              <div key={group.category} className="bg-black/30 rounded-2xl p-5 border border-gray-800">
                <p className="text-cyan-400 text-xs font-bold tracking-widest mb-3">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.techs.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-900/40 border border-blue-800 text-blue-300 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="bg-gray-900/40 rounded-3xl p-8 border border-gray-800 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-2">👥 Meet the Team</h3>
          <p className="text-gray-500 text-sm mb-8">5 builders on a mission to make truth verifiable.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {team.map((member) => (
              <div
                key={member.name}
                className="group bg-black/30 border border-gray-800 hover:border-cyan-700 transition-all rounded-2xl p-6 flex flex-col items-center text-center"
              >
                {/* Avatar */}
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl group-hover:scale-105 transition-transform shadow-lg shadow-blue-900/50">
                  {member.emoji}
                </div>

                <h4 className="font-bold text-white text-lg">{member.name}</h4>
                <p className="text-cyan-400 text-xs mt-1 mb-3 tracking-wide font-semibold uppercase">{member.role}</p>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{member.oneLiner}</p>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-cyan-400 transition border border-blue-900/60 hover:border-cyan-700 px-4 py-1.5 rounded-full"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}