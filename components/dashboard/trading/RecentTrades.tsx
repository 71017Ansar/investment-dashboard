"use client";

interface Trade {
  time: string;
  price: number;
  size: number;
  side: "BUY" | "SELL";
}

const recentTrades: Trade[] = [
  { time: "14:24:02", price: 189.98, size: 450, side: "BUY" },
  { time: "14:24:00", price: 189.97, size: 1200, side: "SELL" },
  { time: "14:23:58", price: 189.98, size: 15, side: "BUY" },
  { time: "14:23:55", price: 189.97, size: 88, side: "SELL" },
  { time: "14:23:52", price: 189.99, size: 320, side: "BUY" },
];

export function RecentTrades() {
  return (
    <div className="glass-panel rounded-xl h-48 flex flex-col">
      <div className="px-6 py-3 border-b border-outline-variant bg-surface-container-low flex justify-between">
        <h4 className="text-xs font-medium text-on-surface-variant uppercase">Recent Trades</h4>
        <span className="text-xs text-on-surface-variant font-medium">REAL-TIME FEED</span>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-1 text-sm font-medium">
        {recentTrades.map((trade, index) => (
          <div
            key={index}
            className={`flex justify-between items-center ${
              trade.side === "BUY" ? "text-primary" : "text-error"
            }`}
          >
            <span className="w-16 text-on-surface-variant">{trade.time}</span>
            <span className="flex-1 font-bold text-center">{trade.price.toFixed(2)}</span>
            <span className="w-16 text-right">{trade.size}</span>
          </div>
        ))}
      </div>
    </div>
  );
}