"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import TrafficDonutChart from "@/components/charts/TrafficDonutChart";
import MultiSeriesChart from "@/components/charts/MultiSeriesChart";
import RevenueLineChart from "@/components/charts/RevenueLineChart";
import ActiveUsersAreaChart from "@/components/charts/ActiveUsersAreaChart";
import { Filter, TrendingUp, Eye, MousePointer, Users } from 'lucide-react';

const timeRanges = ["Last 7 days", "Last 30 days", "Last 90 days", "Last 12 months", "All time"];

const analyticsKPIs = [
  { label: "Total Page Views", value: "345,000", change: "+8.5%", icon: Eye, color: "text-indigo-400", bg: "bg-indigo-500/10 border-indigo-500/20" },
  { label: "Unique Sessions", value: "138,000", change: "+6.2%", icon: MousePointer, color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/20" },
  { label: "Conversions", value: "3,820", change: "+8.8%", icon: TrendingUp, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
  { label: "Conversion Rate", value: "2.77%", change: "+0.2%", icon: Users, color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/20" },
];

const channelBreakdown = [
  { channel: "Organic Search", sessions: 52440, conversions: 1451, rate: "2.77%", revenue: "$44,820", trend: "+12.3%" },
  { channel: "Direct", sessions: 33120, conversions: 917, rate: "2.77%", revenue: "$28,320", trend: "+5.1%" },
  { channel: "Referral", sessions: 24840, conversions: 688, rate: "2.77%", revenue: "$21,240", trend: "+18.7%" },
  { channel: "Social Media", sessions: 16560, conversions: 458, rate: "2.77%", revenue: "$14,160", trend: "+3.4%" },
  { channel: "Email", sessions: 11040, conversions: 306, rate: "2.77%", revenue: "$9,440", trend: "+9.2%" },
];

export default function AnalyticsPage() {
  const [activeRange, setActiveRange] = useState("Last 12 months");

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Analytics</h1>
          <p className="text-slate-400 text-sm mt-1">Deep-dive into traffic, engagement, and conversion metrics.</p>
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-500" />
          <div className="flex bg-white/5 border border-white/10 rounded-xl p-1 gap-1 flex-wrap">
            {timeRanges.map((r) => (
              <button
                key={r}
                onClick={() => setActiveRange(r)}
                className={[
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                  activeRange === r
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-white/5",
                ].join(" ")}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        {analyticsKPIs.map((kpi) => (
          <div key={kpi.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition-all">
            <div className="flex items-start justify-between mb-3">
              <p className="text-slate-400 text-sm">{kpi.label}</p>
              <div className={["w-9 h-9 rounded-xl border flex items-center justify-center", kpi.bg].join(" ")}>
                <kpi.icon className={["w-4 h-4", kpi.color].join(" ")} />
              </div>
            </div>
            <p className="text-2xl font-bold text-white">{kpi.value}</p>
            <p className="text-emerald-400 text-xs font-semibold mt-1">{kpi.change} vs last period</p>
          </div>
        ))}
      </div>

      {/* Multi-Series Chart */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-white font-semibold text-base">Traffic & Conversion Overview</h2>
            <p className="text-slate-500 text-xs mt-0.5">Page views, sessions, and conversions — {activeRange.toLowerCase()}</p>
          </div>
          <span className="text-xs text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-lg px-2.5 py-1">
            {activeRange}
          </span>
        </div>
        <MultiSeriesChart />
      </div>

      {/* Two charts side by side */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="mb-6">
            <h2 className="text-white font-semibold text-base">Revenue Trend</h2>
            <p className="text-slate-500 text-xs mt-0.5">MRR, total revenue, and targets over time</p>
          </div>
          <RevenueLineChart />
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="mb-6">
            <h2 className="text-white font-semibold text-base">Active Users Growth</h2>
            <p className="text-slate-500 text-xs mt-0.5">Total active and new users month over month</p>
          </div>
          <ActiveUsersAreaChart />
        </div>
      </div>

      {/* Traffic Source Breakdown */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="mb-4">
            <h2 className="text-white font-semibold text-base">Traffic Sources</h2>
            <p className="text-slate-500 text-xs mt-0.5">Distribution by acquisition channel</p>
          </div>
          <TrafficDonutChart />
        </div>

        <div className="xl:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="mb-6">
            <h2 className="text-white font-semibold text-base">Channel Performance Breakdown</h2>
            <p className="text-slate-500 text-xs mt-0.5">Sessions, conversions, and revenue by acquisition channel</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-slate-500 font-medium pb-3 pr-4">Channel</th>
                  <th className="text-right text-slate-500 font-medium pb-3 pr-4">Sessions</th>
                  <th className="text-right text-slate-500 font-medium pb-3 pr-4">Conversions</th>
                  <th className="text-right text-slate-500 font-medium pb-3 pr-4">Conv. Rate</th>
                  <th className="text-right text-slate-500 font-medium pb-3 pr-4">Revenue</th>
                  <th className="text-right text-slate-500 font-medium pb-3">Trend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {channelBreakdown.map((row) => (
                  <tr key={row.channel} className="hover:bg-white/3 transition-colors">
                    <td className="py-3 pr-4 text-white font-medium">{row.channel}</td>
                    <td className="py-3 pr-4 text-right text-slate-300">{row.sessions.toLocaleString()}</td>
                    <td className="py-3 pr-4 text-right text-slate-300">{row.conversions.toLocaleString()}</td>
                    <td className="py-3 pr-4 text-right text-slate-300">{row.rate}</td>
                    <td className="py-3 pr-4 text-right text-white font-semibold">{row.revenue}</td>
                    <td className="py-3 text-right text-emerald-400 text-xs font-semibold">{row.trend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
