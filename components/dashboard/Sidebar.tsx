"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Wallet,
  ArrowLeftRight,
  BarChart,
  FileText,
  Settings,
  User,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Wallet, label: "Portfolio", href: "/dashboard/portfolio" },  // ✅ Separate route
  { icon: ArrowLeftRight, label: "Trading", href: "/dashboard/trading" },
  { icon: BarChart, label: "Research", href: "/dashboard/research" },
  { icon: FileText, label: "Reports", href: "/dashboard/reports" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 border-r border-outline-variant/30 bg-background/80 backdrop-blur-xl shadow-xl flex flex-col p-6 z-50">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-on-surface font-headline-md">
          Vanguard Capital
        </h1>
        <p className="text-xs font-label-caps text-on-surface-variant/60 uppercase tracking-wider">
          Institutional Access
        </p>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || 
            (item.href === "/dashboard" && pathname === "/dashboard");
          const Icon = item.icon;
          
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all",
                isActive 
                  ? "bg-primary/10 text-primary border-r-2 border-primary" 
                  : "text-on-surface-variant hover:bg-surface-container-highest/50 hover:text-on-surface"
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-sm font-label-caps">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="pt-6 mt-auto border-t border-outline-variant/30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <User className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-label-caps text-on-surface">Alex Vanguard</p>
            <p className="text-[10px] text-on-surface-variant font-mono uppercase tracking-widest">
              Master Key Access
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}