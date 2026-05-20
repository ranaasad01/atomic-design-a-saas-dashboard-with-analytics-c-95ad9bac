"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { mrrData } from "@/lib/mock-data";

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: any[]; label?: string }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 border border-white/10 rounded-xl p-3 shadow-xl">
        <p className="text-slate-400 text-xs mb-2">{label}</p>
        {payload.map((entry: any) => (
          <div key={entry.name} className="flex items-center gap-2 text-sm">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-slate-300 capitalize">{entry.name}:</span>
            <span className="text-white font-semibold">${(entry.value / 1000).toFixed(1)}k</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
}

export default function RevenueLineChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={mrrData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
        <XAxis
          dataKey="month"
          tick={{ fill: "#64748b", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fill: "#64748b", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(v: number) => "$" + (v / 1000) + "k"}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          wrapperStyle={{ fontSize: "12px", color: "#94a3b8" }}
          iconType="circle"
          iconSize={8}
        />
        <Line
          type="monotone"
          dataKey="mrr"
          stroke="#6366F1"
          strokeWidth={2.5}
          dot={false}
          activeDot={{ r: 5, fill: "#6366F1" }}
        />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#8B5CF6"
          strokeWidth={2.5}
          dot={false}
          activeDot={{ r: 5, fill: "#8B5CF6" }}
        />
        <Line
          type="monotone"
          dataKey="target"
          stroke="#06B6D4"
          strokeWidth={1.5}
          strokeDasharray="5 5"
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
