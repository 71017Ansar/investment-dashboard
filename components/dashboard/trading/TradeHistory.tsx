"use client";

interface TradeHistory {
  dateTime: string;
  ticker: string;
  action: "BUY" | "SELL";
  executedQty: number;
  avgPrice: number;
  totalValue: number;
  status: "Completed";
}

const tradeHistory: TradeHistory[] = [
  {
    dateTime: "2024-05-24 09:15:22",
    ticker: "AAPL",
    action: "BUY",
    executedQty: 1250,
    avgPrice: 189.98,
    totalValue: 237475.00,
    status: "Completed",
  },
  {
    dateTime: "2024-05-23 16:40:05",
    ticker: "MSFT",
    action: "SELL",
    executedQty: 800,
    avgPrice: 420.50,
    totalValue: 336400.00,
    status: "Completed",
  },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

export function TradeHistory() {
  return (
    <section className="glass-panel rounded-xl overflow-hidden">
      <div className="px-6 py-4 border-b border-outline-variant bg-surface-container-high">
        <h3 className="text-sm font-medium text-white uppercase tracking-wider font-bold">
          Trade History
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm font-medium">
          <thead>
            <tr className="text-[11px] text-on-surface-variant border-b border-outline-variant bg-surface-container">
              <th className="px-6 py-3 uppercase tracking-wider">Date/Time</th>
              <th className="px-6 py-3 uppercase tracking-wider">Ticker</th>
              <th className="px-6 py-3 uppercase tracking-wider">Action</th>
              <th className="px-6 py-3 uppercase tracking-wider text-right">Executed Qty</th>
              <th className="px-6 py-3 uppercase tracking-wider text-right">Avg. Price</th>
              <th className="px-6 py-3 uppercase tracking-wider text-right">Total Value</th>
              <th className="px-6 py-3 uppercase tracking-wider text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/30">
            {tradeHistory.map((trade, index) => (
              <tr key={index} className="hover:bg-white/5 transition-all">
                <td className="px-6 py-4 text-on-surface-variant text-sm whitespace-nowrap">
                  {trade.dateTime}
                </td>
                <td className="px-6 py-4 font-bold text-white">{trade.ticker}</td>
                <td className="px-6 py-4">
                  <span className={trade.action === "BUY" ? "text-primary" : "text-error"} 
                        style={{ fontWeight: 700 }}>
                    {trade.action}
                  </span>
                </td>
                <td className="px-6 py-4 text-right text-sm font-medium">
                  {trade.executedQty.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-right text-sm font-medium">
                  {formatCurrency(trade.avgPrice)}
                </td>
                <td className="px-6 py-4 text-right text-sm font-medium">
                  {formatCurrency(trade.totalValue)}
                </td>
                <td className="px-6 py-4 text-right">
                  <span className="text-on-surface-variant opacity-60">Completed</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}