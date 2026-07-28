"use client";

import { useState } from "react";
import { Filter, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Holding {
  ticker: string;
  name: string;
  sector: string;
  quantity: number;
  avgCost: number;
  price: number;
  pnl: number;
  allocation: number;
}

const holdingsData: Holding[] = [
  {
    ticker: "NVDA",
    name: "NVIDIA Corp.",
    sector: "Technology",
    quantity: 1500,
    avgCost: 420.50,
    price: 1100.20,
    pnl: 161.6,
    allocation: 8.4,
  },
  {
    ticker: "AAPL",
    name: "Apple Inc.",
    sector: "Technology",
    quantity: 12000,
    avgCost: 150.20,
    price: 189.40,
    pnl: 26.1,
    allocation: 7.2,
  },
  {
    ticker: "MSFT",
    name: "Microsoft Corp.",
    sector: "Technology",
    quantity: 8000,
    avgCost: 210.10,
    price: 415.50,
    pnl: 97.8,
    allocation: 6.8,
  },
];

export function HoldingsBreakdown() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <div className="glass-panel p-4 sm:p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-white sm:text-2xl">Holdings Breakdown</h3>
        <button className="flex items-center gap-2 text-on-surface-variant hover:text-white text-sm font-medium transition-colors">
          <Filter className="h-4 w-4" />
          Filters
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-on-surface-variant text-xs font-medium border-b border-outline-variant uppercase tracking-wider">
              <th className="pb-4 font-medium">Ticker</th>
              <th className="pb-4 font-medium">Sector</th>
              <th className="pb-4 font-medium text-right">Qty</th>
              <th className="pb-4 font-medium text-right">Avg Cost</th>
              <th className="pb-4 font-medium text-right">Price</th>
              <th className="pb-4 font-medium text-right">P&L</th>
              <th className="pb-4 font-medium text-right">Alloc %</th>
            </tr>
          </thead>
          <tbody className="text-sm font-medium">
            {holdingsData.map((holding, index) => (
              <tr
                key={holding.ticker}
                className="border-b border-outline-variant hover:bg-white/5 transition-colors cursor-pointer"
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-1 rounded text-primary font-bold bg-primary/10 border border-primary/20">
                      {holding.ticker}
                    </span>
                    <span className={cn(
                      "text-white font-medium transition-transform",
                      hoveredRow === index && "translate-x-1"
                    )}>
                      {holding.name}
                    </span>
                  </div>
                </td>
                <td className="py-4 text-on-surface-variant">{holding.sector}</td>
                <td className="py-4 text-right text-white">{holding.quantity.toLocaleString()}</td>
                <td className="py-4 text-right text-white">{formatCurrency(holding.avgCost)}</td>
                <td className="py-4 text-right text-white">{formatCurrency(holding.price)}</td>
                <td className={cn(
                  "py-4 text-right",
                  holding.pnl > 0 ? "text-primary" : "text-error"
                )}>
                  {holding.pnl > 0 ? "+" : ""}{holding.pnl}%
                </td>
                <td className="py-4 text-right text-white">{holding.allocation}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-center">
        <button className="text-primary text-sm font-medium hover:underline transition-colors">
          View All 247 Positions →
        </button>
      </div>
    </div>
  );
}
