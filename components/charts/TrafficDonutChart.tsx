"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { trafficSourceData } from "@/lib/mock-data";

function CustomTooltip({ active, payload }: { active?: boolean; payload?: any[] }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 border border-white/10 rounded-xl p-3 shadow-xl">
        <p className="text-white text-sm font-semibold">{payload[0].name}</p>
        <p className="text-indigo-400 text-sm font-bold">{payload[0].value}%</p>
      </div>
    );
  }
  return null;
}

function CustomLegend({ payload }: { payload?: any[] }) {
  if (!payload) return null;
  return (
    <div className="flex flex-col gap-2 mt-2">
      {payload.map((entry: any) => (
        <div key={entry.value} className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: entry.color }} />
            <span className="text-slate-400 text-xs">{entry.value}</span>
          </div>
          <span className="text-white text-xs font-semibold">
            {trafficSourceData.find((d) => d.name === entry.value)?.value}%
          </span>
        </div>
      ))}
    </div>
  );
}

export default function TrafficDonutChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <PieChart>
        <Pie
          data={trafficSourceData}
          cx="50%"
          cy="45%"
          innerRadius={65}
          outerRadius={95}
          paddingAngle={3}
          dataKey="value"
        >
          {trafficSourceData.map((entry, index) => (
            <Cell key={index} fill={entry.color} stroke="transparent" />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend content={<CustomLegend />} />
      </PieChart>
    </ResponsiveContainer>
  );
}
