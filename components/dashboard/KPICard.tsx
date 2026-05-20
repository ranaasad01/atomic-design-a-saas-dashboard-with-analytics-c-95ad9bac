"use client";

import { ArrowUp, ArrowDown, LucideIcon } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string;
  change: number;
  changeLabel?: string;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  prefix?: string;
  suffix?: string;
}

export default function KPICard({
  title,
  value,
  change,
  changeLabel = "vs last month",
  icon: Icon,
  iconColor,
  iconBg,
  prefix = "",
  suffix = "",
}: KPICardProps) {
  const isPositive = change >= 0;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 shadow-xl shadow-black/20 hover:border-white/20 transition-all duration-200 group">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-slate-400 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-white mt-1">
            {prefix}{value}{suffix}
          </p>
        </div>
        <div className={["w-11 h-11 rounded-xl flex items-center justify-center shrink-0", iconBg].join(" ")}>
          <Icon className={["w-5 h-5", iconColor].join(" ")} />
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <span
          className={[
            "flex items-center gap-0.5 text-xs font-semibold px-1.5 py-0.5 rounded-md",
            isPositive
              ? "text-emerald-400 bg-emerald-400/10"
              : "text-red-400 bg-red-400/10",
          ].join(" ")}
        >
          {isPositive ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
          {Math.abs(change)}%
        </span>
        <span className="text-slate-500 text-xs">{changeLabel}</span>
      </div>
    </div>
  );
}
