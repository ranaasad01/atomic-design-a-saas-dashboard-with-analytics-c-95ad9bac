"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import RevenueByPlanChart from "@/components/charts/RevenueByPlanChart";
import ChurnTrendChart from "@/components/charts/ChurnTrendChart";
import RevenueLineChart from "@/components/charts/RevenueLineChart";
import { kpiData, revenueByPlanData } from "@/lib/mock-data";
import { DollarSign, TrendingUp, TrendingDown, RefreshCw, ArrowUp, ArrowDown } from 'lucide-react';

const revenueMetrics = [
  {
    label: "Monthly Recurring Revenue",
    value: "$105,000",
    change: kpiData.mrr.change,
    trend: "up",
    icon: DollarSign,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/20",
    detail: "MRR grew $7,200 this month from expansion and new subscriptions.",
  },
  {
    label: "Annual Recurring Revenue",
    value: "$1,260,000",
    change: kpiData.arr.change,
    trend: "up",
    icon: TrendingUp,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
    detail: "ARR is on track to exceed $1.5M by Q3 2025 at current growth rate.",
  },
  {
    label: "Churn Rate",
    value: "1.1%",
    change: Math.abs(kpiData.churnRate.change),
    trend: "down",
    icon: TrendingDown,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
    detail: "Churn has declined 9 consecutive months. Best-ever rate achieved.",
  },
  {
    label: "Net Revenue Retention",
    value: "118%",
    change: 2.1,
    trend: "up",
    icon: RefreshCw,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
    detail: "Expansion revenue from upgrades exceeds churn losses by 18%.",
  },
];

const planSummary = [
  { plan: "Enterprise", accounts: 5, mrr: "$6,000", arr: "$72,000", avgRevenue: "$1,200", share: "5.7%" },
  { plan: "Pro", accounts: 6, mrr: "$54,200", arr: "$650,400", avgRevenue: "$79", share: "51.6%" },
  { plan: "Starter", accounts: 4, mrr: "$21,600", arr: "$259,200", avgRevenue: "$29", share: "20.6%" },
];

const latestMonth = revenueByPlanData[revenueByPlanData.length - 1];
const totalMRR = latestMonth.starter + latestMonth.pro + latestMonth.enterprise;

export default function RevenuePage() {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Revenue</h1>
        <p className="text-slate-400 text-sm mt-1">
          Track MRR, ARR, churn, and net revenue retention across all subscription tiers.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        {revenueMetrics.map((m) => (
          <div key={m.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition-all">
            <div className="flex items-start justify-between mb-3">
              <p className="text-slate-400 text-sm leading-tight">{m.label}</p>
              <div className={["w-9 h-9 rounded-xl border flex items-center justify-center shrink-0", m.bg].join(" ")}>
                <m.icon className={["w-4 h-4", m.color].join(" ")} />
              </div>
            </div>
            <p className="text-2xl font-bold text-white mb-2">{m.value}</p>
            <div className="flex items-center gap-1.5 mb-3">
              <span className={[
                "flex items-center gap-0.5 text-xs font-semibold px-1.5 py-0.5 rounded-md",
                m.trend === "up" ? "text-emerald-400 bg-emerald-400/10" : "text-emerald-400 bg-emerald-400/10",
              ].join(" ")}>
                {m.trend === "up" ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                {m.change}%
              </span>
              <span className="text-slate-500 text-xs">vs last month</span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">{m.detail}</p>
          </div>
        ))}
      </div>

      {/* Revenue Trend + Plan Breakdown */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
        <div className="xl:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="mb-6">
            <h2 className="text-white font-semibold text-base">Revenue & MRR Trend</h2>
            <p className="text-slate-500 text-xs mt-0.5">Monthly recurring revenue, total revenue, and growth targets</p>
          </div>
          <RevenueLineChart />
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="mb-6">
            <h2 className="text-white font-semibold text-base">Revenue by Plan</h2>
            <p className="text-slate-500 text-xs mt-0.5">December 2024 breakdown</p>
          </div>
          <div className="space-y-4">
            {[
              { label: "Enterprise", value: latestMonth.enterprise, color: "bg-purple-500" },
              { label: "Pro", value: latestMonth.pro, color: "bg-indigo-500" },
              { label: "Starter", value: latestMonth.starter, color: "bg-cyan-500" },
            ].map((item) => {
              const pct = Math.round((item.value / totalMRR) * 100);
              return (
                <div key={item.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-slate-300 text-sm">{item.label}</span>
                    <span className="text-white text-sm font-semibold">${(item.value / 1000).toFixed(1)}k ({pct}%)</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className={["h-full rounded-full", item.color].join(" ")} style={{ width: pct + "%" }} />
                  </div>
                </div>
              );
            })}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-slate-400 text-sm">Total MRR</span>
              <span className="text-white font-bold">${(totalMRR / 1000).toFixed(1)}k</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stacked Bar + Churn */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="mb-6">
            <h2 className="text-white font-semibold text-base">Revenue by Plan Tier (Stacked)</h2>
            <p className="text-slate-500 text-xs mt-0.5">Monthly revenue contribution from Starter, Pro, and Enterprise</p>
          </div>
          <RevenueByPlanChart />
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="mb-6">
            <h2 className="text-white font-semibold text-base">Churn Rate Trend</h2>
            <p className="text-slate-500 text-xs mt-0.5">Monthly churn rate and net churn over the past year</p>
          </div>
          <ChurnTrendChart />
        </div>
      </div>

      {/* Plan Summary Table */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="mb-6">
          <h2 className="text-white font-semibold text-base">Plan Performance Summary</h2>
          <p className="text-slate-500 text-xs mt-0.5">Revenue metrics broken down by subscription tier</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-slate-500 font-medium pb-3 pr-4">Plan</th>
                <th className="text-right text-slate-500 font-medium pb-3 pr-4">Accounts</th>
                <th className="text-right text-slate-500 font-medium pb-3 pr-4">MRR</th>
                <th className="text-right text-slate-500 font-medium pb-3 pr-4">ARR</th>
                <th className="text-right text-slate-500 font-medium pb-3 pr-4">Avg. Revenue</th>
                <th className="text-right text-slate-500 font-medium pb-3">MRR Share</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {planSummary.map((row) => (
                <tr key={row.plan} className="hover:bg-white/3 transition-colors">
                  <td className="py-3.5 pr-4">
                    <span className={[
                      "text-xs font-medium px-2.5 py-1 rounded-lg border",
                      row.plan === "Enterprise"
                        ? "text-purple-300 bg-purple-500/10 border-purple-500/20"
                        : row.plan === "Pro"
                        ? "text-indigo-300 bg-indigo-500/10 border-indigo-500/20"
                        : "text-cyan-300 bg-cyan-500/10 border-cyan-500/20",
                    ].join(" ")}>
                      {row.plan}
                    </span>
                  </td>
                  <td className="py-3.5 pr-4 text-right text-slate-300">{row.accounts}</td>
                  <td className="py-3.5 pr-4 text-right text-white font-semibold">{row.mrr}</td>
                  <td className="py-3.5 pr-4 text-right text-white font-semibold">{row.arr}</td>
                  <td className="py-3.5 pr-4 text-right text-slate-300">{row.avgRevenue}/mo</td>
                  <td className="py-3.5 text-right">
                    <span className="text-indigo-300 font-semibold">{row.share}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
