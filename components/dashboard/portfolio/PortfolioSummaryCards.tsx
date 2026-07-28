"use client";

import { TrendingUp, Wallet, Coins, PieChart, LucideIcon } from "lucide-react";

interface SummaryCard {
  title: string;
  value: string;
  subtitle?: string;
  change?: string;
  changeType?: "positive" | "neutral";
  icon: LucideIcon;  // ✅ Now each card has an icon
}

const summaryData: SummaryCard[] = [
  {
    title: "Total Value",
    value: "$18.4B",
    change: "+12.3% YoY",
    changeType: "positive",
    icon: Wallet,
  },
  {
    title: "Holdings",
    value: "247",
    subtitle: "Positions",
    change: "+8 New Positions",
    changeType: "positive",
    icon: PieChart,
  },
  {
    title: "Cash Balance",
    value: "$1.2B",
    subtitle: "6.5% of AUM",
    icon: Coins,
  },
  {
    title: "Dividend Yield",
    value: "2.8%",
    change: "+0.3% QoQ",
    changeType: "positive",
    icon: TrendingUp,
  },
];

export function PortfolioSummaryCards() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {summaryData.map((card, index) => {
        const Icon = card.icon;
        
        return (
          <div
            key={index}
            className="glass-panel flex flex-col justify-between p-4 sm:p-6"
          >
            <div>
              <div className="flex justify-between items-start">
                <p className="text-on-surface-variant text-xs uppercase tracking-wider mb-2">
                  {card.title}
                </p>
                <Icon className="h-5 w-5 text-on-surface-variant/50" />
              </div>
              <h2 className="text-3xl font-bold text-white">
                {card.value}
                {card.subtitle && (
                  <span className="text-base font-normal text-on-surface-variant ml-2">
                    {card.subtitle}
                  </span>
                )}
              </h2>
            </div>
            <div className="mt-4">
              {card.change && (
                <div className={`flex items-center gap-1 text-sm ${
                  card.changeType === "positive" ? "text-primary" : "text-on-surface-variant"
                }`}>
                  {card.changeType === "positive" && (
                    <TrendingUp className="h-4 w-4" />
                  )}
                  <span>{card.change}</span>
                </div>
              )}
              {!card.change && card.subtitle && (
                <span className="text-sm text-on-surface-variant">
                  {card.subtitle}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
}
