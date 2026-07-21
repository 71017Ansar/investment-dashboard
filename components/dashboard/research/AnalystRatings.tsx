"use client";

import { cn } from "@/lib/utils";

interface AnalystRating {
  ticker: string;
  rating: string;
  target: string;
  analysts: number;
  color?: string;
}

const ratings: AnalystRating[] = [
  { ticker: "AAPL", rating: "Buy", target: "$210", analysts: 12, color: "text-primary" },
  { ticker: "MSFT", rating: "Strong Buy", target: "$450", analysts: 9, color: "text-primary" },
  { ticker: "NVDA", rating: "Buy", target: "$1,200", analysts: 14, color: "text-primary" },
  { ticker: "GOOGL", rating: "Hold", target: "$175", analysts: 7, color: "text-on-surface-variant" },
];

export function AnalystRatings() {
  return (
    <div className="glass-panel rounded-xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Analyst Ratings</h2>
      
      <div className="space-y-4">
        {ratings.map((item) => (
          <div
            key={item.ticker}
            className="p-4 bg-surface-container-highest/20 rounded-lg border border-white/5 flex justify-between items-center hover:bg-surface-container-highest/30 transition-all"
          >
            <div>
              <p className="font-bold text-white">{item.ticker}</p>
              <p className="text-xs text-on-surface-variant">{item.analysts} Analysts</p>
            </div>
            <div className="text-right">
              <p className={cn("font-medium", item.color)}>{item.rating}</p>
              <p className="text-xs font-medium text-on-surface-variant">Target {item.target}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}