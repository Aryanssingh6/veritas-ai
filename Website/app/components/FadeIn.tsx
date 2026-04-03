"use client";
import { useRef, useState, useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";

interface Props {
  children: ReactNode;
  delay?: number;
  yOffset?: number;
}

export default function FadeIn({ children, delay = 0, yOffset = 24 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Reset visibility on every route change so animation re-triggers
    setIsVisible(false);

    // Small delay so opacity:0 renders before observer fires
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]); // 👈 re-run on every route change

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : `translateY(${yOffset}px)`,
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
