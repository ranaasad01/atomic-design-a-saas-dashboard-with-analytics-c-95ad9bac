"use client";

import { Bell, Search, Menu } from 'lucide-react';

interface NavbarProps {
  onMenuToggle: () => void;
  sidebarCollapsed: boolean;
}

export default function Navbar({ onMenuToggle, sidebarCollapsed }: NavbarProps) {
  return (
    <header
      className={[
        "fixed top-0 right-0 h-16 z-20",
        "bg-[#1E1E2E]/80 backdrop-blur-md border-b border-white/10",
        "flex items-center px-4 gap-4 transition-all duration-300",
        sidebarCollapsed ? "left-16" : "left-64",
      ].join(" ")}
    >
      <button
        onClick={onMenuToggle}
        className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10 lg:hidden"
      >
        <Menu className="w-5 h-5" />
      </button>

      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search metrics, users, reports..."
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 ml-auto">
        <button className="relative p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-all">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full ring-2 ring-[#1E1E2E]" />
        </button>

        <div className="flex items-center gap-2.5 pl-3 border-l border-white/10">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
            JD
          </div>
          <div className="hidden sm:block">
            <p className="text-white text-sm font-medium leading-none">Jane Doe</p>
            <p className="text-slate-500 text-xs mt-0.5">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}
