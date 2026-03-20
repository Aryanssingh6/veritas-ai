"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/analyze", label: "Analyze" },
  { href: "/download", label: "Download" },
  { href: "/docs", label: "Docs" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="relative z-10 flex items-center justify-between px-10 py-5 border-b border-blue-900/50 backdrop-blur-sm bg-black/20">
      <Link href="/" className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-sm font-bold text-white">
          V
        </div>
        <span className="text-2xl font-bold text-white">
          Veritas<span className="text-cyan-400">.ai</span>
        </span>
      </Link>

      <div className="flex items-center gap-7 text-sm">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`transition-colors font-medium ${
              pathname === href
                ? "text-cyan-400 font-semibold"
                : "text-gray-300 hover:text-cyan-400"
            }`}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/analyze"
          className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-900/50"
        >
          Try Veritas →
        </Link>
      </div>
    </nav>
  );
}
