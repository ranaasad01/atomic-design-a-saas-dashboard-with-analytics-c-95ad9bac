"use client";

import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { multiSeriesData } from "@/lib/mock-data";

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: any[]; label?: string }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 border border-white/10 rounded-xl p-3 shadow-xl min-w-[160px]">
        <p className="text-slate-400 text-xs mb-2">{label}</p>
        {payload.map((entry: any) => (
          <div key={entry.name} className="flex items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
              <span className="text-slate-300 capitalize">{entry.name}</span>
            </div>
            <span className="text-white font-semibold">
              {entry.value >= 1000 ? (entry.value / 1000).toFixed(0) + "k" : entry.value}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
}

export default function MultiSeriesChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart data={multiSeriesData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
        <defs>
          <linearGradient id="sessionsGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
        <XAxis
          dataKey="month"
          tick={{ fill: "#64748b", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          yAxisId="left"
          tick={{ fill: "#64748b", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(v: number) => v >= 1000 ? (v / 1000).toFixed(0) + "k" : String(v)}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          tick={{ fill: "#64748b", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.03)" }} />
        <Legend
          wrapperStyle={{ fontSize: "12px", color: "#94a3b8" }}
          iconType="circle"
          iconSize={8}
        />
        <Bar yAxisId="left" dataKey="pageViews" fill="#6366F1" radius={[3, 3, 0, 0]} maxBarSize={20} opacity={0.8} />
        <Bar yAxisId="left" dataKey="sessions" fill="#8B5CF6" radius={[3, 3, 0, 0]} maxBarSize={20} opacity={0.8} />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="conversions"
          stroke="#10B981"
          strokeWidth={2.5}
          dot={false}
          activeDot={{ r: 4 }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
