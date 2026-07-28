"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  ArrowLeftRight,
  BarChart,
  FileText,
  LayoutDashboard,
  Settings,
  User,
  Wallet,
  X,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Wallet, label: "Portfolio", href: "/dashboard/portfolio" },
  { icon: ArrowLeftRight, label: "Trading", href: "/dashboard/trading" },
  { icon: BarChart, label: "Research", href: "/dashboard/research" },
  { icon: FileText, label: "Reports", href: "/dashboard/reports" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ isOpen = false, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      <button
        type="button"
        aria-label="Close navigation"
        className={cn(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity lg:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
      />
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-[min(18rem,86vw)] flex-col border-r border-outline-variant/30 bg-background/95 p-5 shadow-2xl backdrop-blur-xl transition-transform duration-300 lg:w-64 lg:translate-x-0 lg:bg-background/80 lg:p-6",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="mb-6 flex items-start justify-between gap-3">
          <div>
            <h1 className="font-headline-md text-2xl font-bold text-on-surface">
              Vanguard Capital
            </h1>
            <p className="font-label-caps text-xs uppercase tracking-wider text-on-surface-variant/60">
              Institutional Access
            </p>
          </div>
          <button
            type="button"
            aria-label="Close navigation"
            onClick={onClose}
            className="rounded-lg p-2 text-on-surface-variant hover:bg-white/5 hover:text-white lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-4 py-2.5 transition-all",
                  isActive
                    ? "border-r-2 border-primary bg-primary/10 text-primary"
                    : "text-on-surface-variant hover:bg-surface-container-highest/50 hover:text-on-surface"
                )}
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span className="font-label-caps text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-outline-variant/30 pt-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20">
              <User className="h-5 w-5 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="truncate font-label-caps text-sm text-on-surface">Alex Vanguard</p>
              <p className="truncate font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
                Master Key Access
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
