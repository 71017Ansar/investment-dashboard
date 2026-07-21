"use client";

import { cn } from "@/lib/utils";  // ✅ Add this import

interface RiskMetric {
  label: string;
  value: string | number;
  unit?: string;
}

const riskMetrics: RiskMetric[] = [
  { label: "Beta", value: "1.15" },
  { label: "Sharpe", value: "1.82" },
  { label: "Vol", value: "14.3%", unit: "Volatility" },
];

interface TopPerformer {
  ticker: string;
  return: number;
  trend: number[];
}

const topPerformers: TopPerformer[] = [
  { ticker: "NVDA", return: 112, trend: [24, 20, 22, 15, 8, 12, 5, 0] },
  { ticker: "AAPL", return: 24.5, trend: [20, 22, 18, 15, 12, 10, 8, 5] },
  { ticker: "MSFT", return: 19.2, trend: [24, 22, 20, 18, 16, 14, 12, 10] },
];

interface AssetClass {
  name: string;
  percentage: number;
  color: string;
}

const assetClasses: AssetClass[] = [
  { name: "Equities", percentage: 72, color: "bg-primary" },
  { name: "Bonds", percentage: 18, color: "bg-secondary" },
  { name: "Alternatives", percentage: 7, color: "bg-tertiary" },
];

export function PortfolioAnalytics() {
  const renderSparkline = (trend: number[]) => {
    const max = Math.max(...trend);
    const min = Math.min(...trend);
    const range = max - min || 1;
    
    return (
      <svg className="w-12 h-6" viewBox="0 0 48 24">
        <polyline
          points={trend.map((v, i) => {
            const x = (i / (trend.length - 1)) * 48;
            const y = 24 - ((v - min) / range) * 20 - 2;
            return `${x},${y}`;
          }).join(' ')}
          fill="none"
          stroke="#00d4aa"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  };

  return (
    <>
      {/* Risk Metrics */}
      <div className="glass-panel p-5">
        <h4 className="text-xs font-medium text-on-surface-variant uppercase mb-4">
          Risk Metrics
        </h4>
        <div className="grid grid-cols-3 gap-2 text-center">
          {riskMetrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-2xl font-bold text-white">{metric.value}</p>
              <p className="text-[10px] uppercase text-on-surface-variant">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Top Performers */}
      <div className="glass-panel p-5">
        <h4 className="text-xs font-medium text-on-surface-variant uppercase mb-4">
          Top Performers
        </h4>
        <div className="space-y-4">
          {topPerformers.map((performer) => (
            <div key={performer.ticker} className="flex justify-between items-center">
              <span className="text-sm font-medium text-white">{performer.ticker}</span>
              <span className="text-sm font-bold text-primary">+{performer.return}%</span>
              {renderSparkline(performer.trend)}
            </div>
          ))}
        </div>
      </div>

      {/* Asset Class Distribution */}
      <div className="glass-panel p-5">
        <h4 className="text-xs font-medium text-on-surface-variant uppercase mb-4">
          Asset Class Distribution
        </h4>
        <div className="space-y-3">
          {assetClasses.map((asset) => (
            <div key={asset.name} className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-on-surface-variant">{asset.name}</span>
                <span className="text-white">{asset.percentage}%</span>
              </div>
              <div className="w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
                <div
                  className={cn(asset.color, "h-full rounded-full")}
                  style={{ width: `${asset.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}