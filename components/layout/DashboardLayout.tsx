"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      <Navbar onMenuToggle={() => setCollapsed(!collapsed)} sidebarCollapsed={collapsed} />
      <main
        className={[
          "transition-all duration-300 pt-16 min-h-screen",
          collapsed ? "pl-16" : "pl-64",
        ].join(" ")}
      >
        <div className="p-6 max-w-[1600px] mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
