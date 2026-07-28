"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/dashboard/Header";
import { Sidebar } from "@/components/dashboard/Sidebar";

const pageTitles: Record<string, string> = {
  "/dashboard": "Overview",
  "/dashboard/portfolio": "Portfolio",
  "/dashboard/trading": "Trading Terminal",
  "/dashboard/research": "Research",
  "/dashboard/reports": "Reports",
  "/dashboard/settings": "Settings",
};

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isNavigationOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavigationOpen]);

  return (
    <div className="min-h-dvh bg-background">
      <Sidebar isOpen={isNavigationOpen} onClose={() => setIsNavigationOpen(false)} />
      <Header
        title={pageTitles[pathname] ?? "Dashboard"}
        onMenuClick={() => setIsNavigationOpen(true)}
      />
      <main className="min-w-0 pt-16 lg:pl-64">{children}</main>
    </div>
  );
}
