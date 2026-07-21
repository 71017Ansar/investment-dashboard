"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { cn } from "@/lib/utils";

const timeFilters = ["1D", "1W", "1M", "3M", "1Y", "5Y"];

interface PerformanceChartProps {
  data: Array<{
    date: string;
    portfolio: number;
    benchmark: number;
  }>;
}

export function PerformanceChart({ data }: PerformanceChartProps) {
  const [activeFilter, setActiveFilter] = useState("1M");

  return (
    <section className="glass-panel p-6 rounded-xl space-y-4">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <div>
          <h3 className="text-2xl font-bold text-white">Portfolio Performance</h3>
          <p className="text-xs font-medium uppercase tracking-wider text-on-surface-variant">
            Comparison vs S&P 500 Index
          </p>
        </div>
        <div className="flex items-center gap-1 p-1 bg-surface-container-highest/50 rounded-xl border border-outline-variant/30">
          {timeFilters.map((filter) => (
            <button
              key={filter}
              className={cn(
                "px-3 py-1 text-xs font-medium uppercase rounded-lg transition-all",
                activeFilter === filter
                  ? "bg-primary text-on-primary-container shadow-sm"
                  : "hover:text-white text-on-surface-variant"
              )}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <defs>
              <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00d4aa" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#00d4aa" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(136, 153, 187, 0.1)" />
            <XAxis 
              dataKey="date" 
              stroke="#8899bb"
              tick={{ fill: "#8899bb", fontSize: 11 }}
              tickLine={{ stroke: "#2a3f6c" }}
            />
            <YAxis 
              stroke="#8899bb"
              tick={{ fill: "#8899bb", fontSize: 11 }}
              domain={[-10, 40]}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1a2a4a",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
                color: "white",
              }}
              labelStyle={{ color: "#8899bb" }}
            />
            <Legend 
              wrapperStyle={{ color: "#8899bb", fontSize: "12px" }}
            />
            <Line
              type="monotone"
              dataKey="portfolio"
              stroke="#00d4aa"
              strokeWidth={2}
              dot={{ fill: "#00d4aa", r: 4 }}
              activeDot={{ r: 6, fill: "white" }}
              name="Vanguard Global Multi-Asset"
            />
            <Line
              type="monotone"
              dataKey="benchmark"
              stroke="#8899bb"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
              name="S&P 500 (Benchmark)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center gap-4 pt-3 border-t border-outline-variant/20">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-primary" />
          <span className="text-sm text-white">Vanguard Global Multi-Asset</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full border-2 border-on-surface-variant/40" />
          <span className="text-sm text-on-surface-variant">S&P 500 Index (Benchmark)</span>
        </div>
      </div>
    </section>
  );
}