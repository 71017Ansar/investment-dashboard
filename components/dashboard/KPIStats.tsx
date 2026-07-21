"use client";

import { cn } from "@/lib/utils";
import { 
  ArrowUp, 
  ArrowDown, 
  TrendingUp, 
  Wallet, 
  BarChart, 
  PieChart,
  LucideIcon 
} from "lucide-react";

// Define proper types
interface KPI {
  label: string;
  value: string;
  change: string;
  icon: LucideIcon;  // ✅ Use LucideIcon type instead of string
  trend: "up" | "down";
  isDominant?: boolean;
}

interface KPIStatsProps {
  stats: KPI[];
}

export function KPIStats({ stats }: KPIStatsProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const isPositive = stat.trend === "up";
        const isDominant = stat.isDominant;
        const Icon = stat.icon;  // ✅ Now properly typed

        if (isDominant) {
          return (
            <div
              key={index}
              className="aum-card-gradient p-6 rounded-xl flex flex-col justify-between h-48 relative overflow-hidden shadow-xl shadow-primary/10"
            >
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold uppercase tracking-wider text-on-primary-container">
                  {stat.label}
                </span>
                <Icon className="h-5 w-5 text-on-primary-container/60" />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-[48px] leading-none font-bold text-on-primary-container">
                  {stat.value}
                </h3>
                <div className="flex items-center gap-1 text-[13px] font-mono text-on-primary-container mt-2">
                  <TrendingUp className="h-4 w-4" />
                  <span className="font-bold">{stat.change}</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-12 pointer-events-none opacity-30">
                <svg className="w-full h-full" viewBox="0 0 100 40">
                  <path d="M0,40 L0,30 L10,35 L20,25 L30,28 L40,15 L50,20 L60,10 L70,12 L80,5 L90,8 L100,2 L100,40 Z" fill="rgba(255,255,255,0.4)" />
                </svg>
              </div>
            </div>
          );
        }

        return (
          <div
            key={index}
            className="glass-panel p-4 rounded-xl flex flex-col justify-between h-48 relative overflow-hidden group"
          >
            <div className="flex justify-between items-start">
              <span className="text-xs font-medium uppercase tracking-wider text-on-surface-variant">
                {stat.label}
              </span>
              <Icon className="h-5 w-5 text-on-surface-variant/30 group-hover:text-primary transition-colors" />
            </div>
            <div className="mt-auto">
              <h3 className="text-lg font-medium text-white">{stat.value}</h3>
              <div className={cn(
                "flex items-center gap-1 text-[12px] font-mono",
                isPositive ? "text-primary" : "text-error"
              )}>
                {isPositive ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                <span>{stat.change}</span>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}