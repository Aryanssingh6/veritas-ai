import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Barlow_Condensed, Fraunces } from "next/font/google";
import "./globals.css";
import Background from "./components/Background";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "500", "700", "800", "900"],
});

const BASE_URL = "https://veritas-ai.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Veritas.ai — AI Deepfake Detector",
    template: "%s | Veritas.ai",
  },
  description:
    "Veritas.ai uses CNN + LSTM and Vision Transformer models to detect AI-generated deepfake videos with 98.4% accuracy. Upload a video and get results in seconds.",
  keywords: ["deepfake detector", "AI deepfake", "video authentication", "CNN LSTM", "deepfake detection tool"],
  authors: [{ name: "Veritas.ai Team" }],
  creator: "Veritas.ai",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Veritas.ai",
    title: "Veritas.ai — AI Deepfake Detector",
    description: "Detect AI-generated deepfake videos with 98.4% accuracy using CNN + LSTM models.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Veritas.ai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veritas.ai — AI Deepfake Detector",
    description: "Detect deepfakes in seconds with production-grade AI.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${barlowCondensed.variable} ${fraunces.variable} antialiased bg-transparent`}>
        <Background />
        {children}
      </body>
    </html>
  );
}
