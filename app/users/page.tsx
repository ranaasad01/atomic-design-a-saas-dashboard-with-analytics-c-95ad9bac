"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { usersData } from "@/lib/mock-data";
import { Search, Users, UserCheck, UserX, TrendingUp, ChevronUp, ChevronDown, Filter } from 'lucide-react';

const statusColors: Record<string, string> = {
  Active: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Churned: "text-red-400 bg-red-400/10 border-red-400/20",
  Trial: "text-amber-400 bg-amber-400/10 border-amber-400/20",
};

const planColors: Record<string, string> = {
  Enterprise: "text-purple-300 bg-purple-500/10 border-purple-500/20",
  Pro: "text-indigo-300 bg-indigo-500/10 border-indigo-500/20",
  Starter: "text-cyan-300 bg-cyan-500/10 border-cyan-500/20",
};

type SortKey = "name" | "plan" | "status" | "joined" | "revenue";

export default function UsersPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [planFilter, setPlanFilter] = useState("All");
  const [sortKey, setSortKey] = useState<SortKey>("joined");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const filtered = usersData
    .filter((u) => {
      const matchSearch =
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase());
      const matchStatus = statusFilter === "All" || u.status === statusFilter;
      const matchPlan = planFilter === "All" || u.plan === planFilter;
      return matchSearch && matchStatus && matchPlan;
    })
    .sort((a, b) => {
      let av: string | number = a[sortKey];
      let bv: string | number = b[sortKey];
      if (typeof av === "string") av = av.toLowerCase();
      if (typeof bv === "string") bv = bv.toLowerCase();
      if (av < bv) return sortDir === "asc" ? -1 : 1;
      if (av > bv) return sortDir === "asc" ? 1 : -1;
      return 0;
    });

  const totalUsers = usersData.length;
  const activeUsers = usersData.filter((u) => u.status === "Active").length;
  const trialUsers = usersData.filter((u) => u.status === "Trial").length;
  const churnedUsers = usersData.filter((u) => u.status === "Churned").length;

  const SortIcon = ({ col }: { col: SortKey }) => {
    if (sortKey !== col) return <ChevronUp className="w-3 h-3 text-slate-600" />;
    return sortDir === "asc"
      ? <ChevronUp className="w-3 h-3 text-indigo-400" />
      : <ChevronDown className="w-3 h-3 text-indigo-400" />;
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Users</h1>
        <p className="text-slate-400 text-sm mt-1">Manage and monitor your user base, activity, and subscription status.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Users", value: totalUsers, icon: Users, color: "text-indigo-400", bg: "bg-indigo-500/10 border-indigo-500/20" },
          { label: "Active", value: activeUsers, icon: UserCheck, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
          { label: "On Trial", value: trialUsers, icon: TrendingUp, color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
          { label: "Churned", value: churnedUsers, icon: UserX, color: "text-red-400", bg: "bg-red-500/10 border-red-500/20" },
        ].map((card) => (
          <div key={card.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition-all">
            <div className="flex items-center justify-between mb-3">
              <p className="text-slate-400 text-sm">{card.label}</p>
              <div className={["w-9 h-9 rounded-xl border flex items-center justify-center", card.bg].join(" ")}>
                <card.icon className={["w-4 h-4", card.color].join(" ")} />
              </div>
            </div>
            <p className="text-3xl font-bold text-white">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 transition-all"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-500 shrink-0" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-slate-300 focus:outline-none focus:border-indigo-500/50 transition-all"
            >
              {["All", "Active", "Trial", "Churned"].map((s) => (
                <option key={s} value={s} className="bg-slate-900">{s}</option>
              ))}
            </select>
            <select
              value={planFilter}
              onChange={(e) => setPlanFilter(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-slate-300 focus:outline-none focus:border-indigo-500/50 transition-all"
            >
              {["All", "Starter", "Pro", "Enterprise"].map((p) => (
                <option key={p} value={p} className="bg-slate-900">{p}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                {[
                  { key: "name" as SortKey, label: "User" },
                  { key: "plan" as SortKey, label: "Plan" },
                  { key: "status" as SortKey, label: "Status" },
                  { key: "joined" as SortKey, label: "Joined" },
                  { key: "revenue" as SortKey, label: "MRR" },
                ].map(({ key, label }) => (
                  <th
                    key={key}
                    className="text-left text-slate-500 font-medium pb-3 pr-4 cursor-pointer hover:text-slate-300 transition-colors select-none"
                    onClick={() => handleSort(key)}
                  >
                    <div className="flex items-center gap-1">
                      {label}
                      <SortIcon col={key} />
                    </div>
                  </th>
                ))}
                <th className="text-left text-slate-500 font-medium pb-3">Last Active</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map((user) => (
                <tr key={user.id} className="hover:bg-white/3 transition-colors group">
                  <td className="py-3.5 pr-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                        {user.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </div>
                      <div>
                        <p className="text-white font-medium">{user.name}</p>
                        <p className="text-slate-500 text-xs">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 pr-4">
                    <span className={["text-xs font-medium px-2 py-0.5 rounded-md border", planColors[user.plan] || "text-slate-400"].join(" ")}>
                      {user.plan}
                    </span>
                  </td>
                  <td className="py-3.5 pr-4">
                    <span className={["text-xs font-medium px-2 py-0.5 rounded-md border", statusColors[user.status] || "text-slate-400"].join(" ")}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3.5 pr-4 text-slate-400">{user.joined}</td>
                  <td className="py-3.5 pr-4 text-white font-semibold">
                    {user.revenue > 0 ? "$" + user.revenue + "/mo" : <span className="text-slate-500">—</span>}
                  </td>
                  <td className="py-3.5 text-slate-400">{user.lastActive}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="text-center py-12 text-slate-500">
              No users match your current filters.
            </div>
          )}
        </div>

        <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-500">
          <span>Showing {filtered.length} of {totalUsers} users</span>
          <span>Sorted by {sortKey} ({sortDir})</span>
        </div>
      </div>
    </DashboardLayout>
  );
}
