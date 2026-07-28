"use client";

interface DepthLevel {
  size: number;
  price: number;
  depth: string;
  depthPercentage: number;
}

const bidLevels: DepthLevel[] = [
  { size: 420, price: 189.96, depth: "1.2M", depthPercentage: 85 },
  { size: 1150, price: 189.94, depth: "840K", depthPercentage: 62 },
  { size: 3800, price: 189.92, depth: "512K", depthPercentage: 40 },
  { size: 12400, price: 189.90, depth: "120K", depthPercentage: 15 },
];

const askLevels: DepthLevel[] = [
  { size: 610, price: 190.02, depth: "1.4M", depthPercentage: 90 },
  { size: 2400, price: 190.04, depth: "720K", depthPercentage: 55 },
  { size: 5100, price: 190.06, depth: "415K", depthPercentage: 35 },
  { size: 18250, price: 190.08, depth: "90K", depthPercentage: 12 },
];

export function MarketDepth() {
  return (
    <div className="glass-panel rounded-xl flex-1 flex flex-col min-h-[400px]">
      <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center">
        <h3 className="text-sm font-medium text-white uppercase tracking-wider">
          Level 2 Market Depth
        </h3>
        <div className="flex gap-4">
          <span className="text-xs text-on-surface-variant flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-primary" /> Bids
          </span>
          <span className="text-xs text-on-surface-variant flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-error" /> Asks
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col overflow-hidden sm:flex-row">
        {/* Bids */}
        <div className="flex flex-1 flex-col border-b border-outline-variant/30 sm:border-b-0 sm:border-r">
          <div className="grid grid-cols-3 px-4 py-2 bg-surface-container-lowest text-[10px] text-on-surface-variant font-bold uppercase">
            <span>Size</span>
            <span>Price</span>
            <span className="text-right">Depth</span>
          </div>
          <div className="flex-1 overflow-y-auto space-y-[1px]">
            {bidLevels.map((level, index) => (
              <div
                key={index}
                className="relative grid grid-cols-3 px-4 py-1.5 text-sm font-medium hover:bg-white/5 transition-all"
              >
                <div
                  className="absolute inset-y-0 right-0 bg-primary/15 border-r-2 border-primary"
                  style={{ width: `${level.depthPercentage}%` }}
                />
                <span className="relative z-10 text-on-surface-variant">{level.size}</span>
                <span className="relative z-10 text-primary font-bold">{level.price.toFixed(2)}</span>
                <span className="relative z-10 text-right text-on-surface-variant opacity-60">
                  {level.depth}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Asks */}
        <div className="flex-1 flex flex-col">
          <div className="grid grid-cols-3 px-4 py-2 bg-surface-container-lowest text-[10px] text-on-surface-variant font-bold uppercase">
            <span>Depth</span>
            <span className="text-center">Price</span>
            <span className="text-right">Size</span>
          </div>
          <div className="flex-1 overflow-y-auto space-y-[1px]">
            {askLevels.map((level, index) => (
              <div
                key={index}
                className="relative grid grid-cols-3 px-4 py-1.5 text-sm font-medium hover:bg-white/5 transition-all"
              >
                <div
                  className="absolute inset-y-0 left-0 bg-error/15 border-r-2 border-error"
                  style={{ width: `${level.depthPercentage}%` }}
                />
                <span className="relative z-10 text-on-surface-variant">{level.depth}</span>
                <span className="relative z-10 text-error font-bold text-center">
                  {level.price.toFixed(2)}
                </span>
                <span className="relative z-10 text-right text-on-surface-variant">{level.size}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mid-Market Spread */}
      <div className="flex flex-col justify-between gap-1 border-y border-outline-variant/40 bg-primary-container px-4 py-2 text-[11px] sm:flex-row sm:items-center sm:px-6">
        <span className="text-on-surface-variant font-medium">SPREAD: $0.04 (0.02%)</span>
        <span className="text-primary font-bold">STABLE CONNECTION</span>
      </div>
    </div>
  );
}
