"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BarChart2, Users, DollarSign, Settings, ChevronRight, Sparkles, X } from 'lucide-react';

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/analytics", label: "Analytics", icon: BarChart2 },
  { href: "/users", label: "Users", icon: Users },
  { href: "/revenue", label: "Revenue", icon: DollarSign },
  { href: "/settings", label: "Settings", icon: Settings },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {!collapsed && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={onToggle}
        />
      )}

      <aside
        className={[
          "fixed top-0 left-0 h-full z-30 flex flex-col",
          "bg-[#1E1E2E] border-r border-white/10",
          "transition-all duration-300 ease-in-out",
          collapsed ? "w-16" : "w-64",
        ].join(" ")}
      >
        <div className="flex items-center h-16 px-4 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            {!collapsed && (
              <span className="font-bold text-white text-lg tracking-tight truncate">
                Pulse<span className="text-indigo-400">AI</span>
              </span>
            )}
          </div>
          <button
            onClick={onToggle}
            className="ml-auto text-slate-400 hover:text-white transition-colors p-1 rounded-md hover:bg-white/10"
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <X className="w-4 h-4" />}
          </button>
        </div>

        <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={[
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium",
                  "transition-all duration-150 group relative",
                  active
                    ? "bg-indigo-600/20 text-indigo-300 border border-indigo-500/30"
                    : "text-slate-400 hover:text-white hover:bg-white/5",
                ].join(" ")}
              >
                <Icon
                  className={[
                    "w-5 h-5 shrink-0",
                    active ? "text-indigo-400" : "text-slate-500 group-hover:text-slate-300",
                  ].join(" ")}
                />
                {!collapsed && <span className="truncate">{label}</span>}
                {collapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-slate-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 border border-white/10">
                    {label}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-white/10 shrink-0">
          <div className={["flex items-center gap-3 px-2 py-2 rounded-xl bg-white/5", collapsed ? "justify-center" : ""].join(" ")}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center shrink-0 text-white text-xs font-bold">
              JD
            </div>
            {!collapsed && (
              <div className="min-w-0">
                <p className="text-white text-xs font-semibold truncate">Jane Doe</p>
                <p className="text-slate-500 text-xs truncate">Admin</p>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
