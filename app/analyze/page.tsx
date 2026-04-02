"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Analyze() {
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | { label: string; confidence: number }>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files) setFile(e.dataTransfer.files[0]);
  };

  const handleAnalyze = () => {
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setLoading(false);
      setResult({ label: "DEEPFAKE", confidence: 87 });
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-transparent text-white overflow-hidden">

      <Navbar />

      <section className="relative z-10 flex flex-col items-center justify-center mt-16 px-4">
        <div className="inline-block bg-blue-900 bg-opacity-40 border border-blue-700 text-blue-300 text-sm px-4 py-1 rounded-full mb-6">
          🎬 Upload & Analyze
        </div>
        <h2 className="text-5xl font-bold mb-3">Upload a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Video</span></h2>
        <p className="text-gray-400 mb-10">Drag & drop or click to select a video file for analysis</p>

        <div
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          className={`w-full max-w-2xl border-2 border-dashed rounded-2xl p-16 text-center cursor-pointer transition-all
            ${dragging ? "border-blue-500 bg-blue-950 bg-opacity-40" : "border-gray-700 hover:border-blue-500 bg-gray-900 bg-opacity-40"}`}
          onClick={() => document.getElementById("fileInput")?.click()}
        >
          <div className="text-5xl mb-4">🎬</div>
          <p className="text-gray-300 text-lg font-semibold">Drop your video here</p>
          <p className="text-gray-600 text-sm mt-2">MP4, MOV, AVI supported</p>
          <input id="fileInput" type="file" accept="video/*" className="hidden" onChange={handleFileChange} />
        </div>

        {file && (
          <div className="mt-6 bg-green-900 bg-opacity-30 border border-green-700 text-green-400 px-6 py-3 rounded-full">
            ✅ Selected: {file.name}
          </div>
        )}

        <button
          onClick={handleAnalyze}
          disabled={!file || loading}
          className="mt-8 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-4 rounded-full text-lg font-semibold disabled:opacity-40 transition-all shadow-lg shadow-blue-900"
        >
          {loading ? "Analyzing..." : "Analyze Video →"}
        </button>

        {loading && (
          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-400">Sending video to Veritas AI...</p>
          </div>
        )}

        {result && (
          <div className={`mt-10 w-full max-w-2xl rounded-2xl p-8 border backdrop-blur-sm ${result.label === "DEEPFAKE" ? "border-red-700 bg-red-950 bg-opacity-40" : "border-green-700 bg-green-950 bg-opacity-40"}`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Analysis Result</h3>
              <span className={`px-5 py-2 rounded-full text-sm font-bold tracking-wider ${result.label === "DEEPFAKE" ? "bg-red-600" : "bg-green-600"}`}>
                {result.label}
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-3">Confidence Score: {result.confidence}%</p>
            <div className="w-full bg-gray-800 rounded-full h-3">
              <div
                className={`h-3 rounded-full ${result.label === "DEEPFAKE" ? "bg-gradient-to-r from-red-600 to-red-400" : "bg-gradient-to-r from-green-600 to-green-400"}`}
                style={{ width: `${result.confidence}%` }}
              ></div>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              {result.label === "DEEPFAKE" ? "⚠️ This video shows signs of AI manipulation." : "✅ This video appears to be authentic."}
            </p>
          </div>
        )}
      </section>
    </main>
  );
}