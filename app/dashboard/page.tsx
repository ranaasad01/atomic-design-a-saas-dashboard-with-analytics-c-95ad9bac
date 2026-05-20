"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import KPICard from "@/components/dashboard/KPICard";
import RevenueLineChart from "@/components/charts/RevenueLineChart";
import SignupsBarChart from "@/components/charts/SignupsBarChart";
import ActiveUsersAreaChart from "@/components/charts/ActiveUsersAreaChart";
import TrafficDonutChart from "@/components/charts/TrafficDonutChart";
import { kpiData, recentTransactions } from "@/lib/mock-data";
import { DollarSign, Users, TrendingDown, TrendingUp, ArrowUpRight, Clock } from 'lucide-react';

const statusColors: Record<string, string> = {
  Paid: "text-emerald-400 bg-emerald-400/10",
  Pending: "text-amber-400 bg-amber-400/10",
  Failed: "text-red-400 bg-red-400/10",
};

const planColors: Record<string, string> = {
  Enterprise: "text-purple-300 bg-purple-500/10 border-purple-500/20",
  Pro: "text-indigo-300 bg-indigo-500/10 border-indigo-500/20",
  Starter: "text-cyan-300 bg-cyan-500/10 border-cyan-500/20",
};

export default function DashboardPage() {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard Overview</h1>
          <p className="text-slate-400 text-sm mt-1">Welcome back, Jane. Here&apos;s what&apos;s happening today.</p>
        </div>
        <div className="flex items-center gap-2 text-slate-400 text-sm bg-white/5 border border-white/10 rounded-xl px-4 py-2">
          <Clock className="w-4 h-4" />
          <span>Dec 20, 2024</span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        <KPICard
          title="Monthly Recurring Revenue"
          value="$105,000"
          change={kpiData.mrr.change}
          icon={DollarSign}
          iconColor="text-indigo-400"
          iconBg="bg-indigo-500/10 border border-indigo-500/20"
        />
        <KPICard
          title="Annual Recurring Revenue"
          value="$1.26M"
          change={kpiData.arr.change}
          icon={TrendingUp}
          iconColor="text-purple-400"
          iconBg="bg-purple-500/10 border border-purple-500/20"
        />
        <KPICard
          title="Active Users"
          value="7,850"
          change={kpiData.activeUsers.change}
          icon={Users}
          iconColor="text-emerald-400"
          iconBg="bg-emerald-500/10 border border-emerald-500/20"
        />
        <KPICard
          title="Churn Rate"
          value="1.1%"
          change={kpiData.churnRate.change}
          changeLabel="vs last month (lower is better)"
          icon={TrendingDown}
          iconColor="text-rose-400"
          iconBg="bg-rose-500/10 border border-rose-500/20"
        />
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
        <div className="xl:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-white font-semibold text-base">Revenue & MRR Trend</h2>
              <p className="text-slate-500 text-xs mt-0.5">Monthly recurring revenue vs total revenue vs target</p>
            </div>
            <span className="text-xs text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-lg px-2.5 py-1">
              Last 12 months
            </span>
          </div>
          <RevenueLineChart />
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="mb-6">
            <h2 className="text-white font-semibold text-base">Traffic Sources</h2>
            <p className="text-slate-500 text-xs mt-0.5">Revenue attribution by channel</p>
          </div>
          <TrafficDonutChart />
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-white font-semibold text-base">Monthly Signups vs Churn</h2>
              <p className="text-slate-500 text-xs mt-0.5">New user acquisitions and churned accounts</p>
            </div>
          </div>
          <SignupsBarChart />
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-white font-semibold text-base">Active Users Trend</h2>
              <p className="text-slate-500 text-xs mt-0.5">Total active vs new users over time</p>
            </div>
          </div>
          <ActiveUsersAreaChart />
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-white font-semibold text-base">Recent Transactions</h2>
            <p className="text-slate-500 text-xs mt-0.5">Latest subscription payments received</p>
          </div>
          <button className="flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 text-sm transition-colors">
            View all <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-slate-500 font-medium pb-3 pr-4">Transaction</th>
                <th className="text-left text-slate-500 font-medium pb-3 pr-4">Customer</th>
                <th className="text-left text-slate-500 font-medium pb-3 pr-4">Plan</th>
                <th className="text-right text-slate-500 font-medium pb-3 pr-4">Amount</th>
                <th className="text-left text-slate-500 font-medium pb-3 pr-4">Date</th>
                <th className="text-left text-slate-500 font-medium pb-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {recentTransactions.map((txn) => (
                <tr key={txn.id} className="hover:bg-white/3 transition-colors">
                  <td className="py-3 pr-4 text-slate-400 font-mono text-xs">{txn.id}</td>
                  <td className="py-3 pr-4 text-white font-medium">{txn.user}</td>
                  <td className="py-3 pr-4">
                    <span className={["text-xs font-medium px-2 py-0.5 rounded-md border", planColors[txn.plan] || "text-slate-400"].join(" ")}>
                      {txn.plan}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-right text-white font-semibold">${txn.amount.toLocaleString()}</td>
                  <td className="py-3 pr-4 text-slate-400">{txn.date}</td>
                  <td className="py-3">
                    <span className={["text-xs font-medium px-2 py-0.5 rounded-md", statusColors[txn.status] || "text-slate-400"].join(" ")}>
                      {txn.status}
                    </span>
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
