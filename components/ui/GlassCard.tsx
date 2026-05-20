"use client";

import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  padding?: boolean;
}

export default function GlassCard({ children, className = "", padding = true }: GlassCardProps) {
  return (
    <div
      className={[
        "rounded-2xl border border-white/10",
        "bg-white/5 backdrop-blur-sm",
        "shadow-xl shadow-black/20",
        padding ? "p-6" : "",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
