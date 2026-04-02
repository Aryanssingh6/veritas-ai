import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import Background from "./components/Background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Veritas.ai — AI Deepfake Detector",
  description: "Veritas.ai uses CNN + LSTM and Vision Transformer models to detect AI-generated deepfake videos with high accuracy. Upload a video and get results in seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased bg-transparent`}
      >
        <Background />
        {children}
      </body>
    </html>
  );
}
