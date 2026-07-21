"use client";

import { X } from "lucide-react";

interface OpenOrder {
  symbol: string;
  type: "Limit Buy" | "Market Sell" | "Stop Buy";
  quantity: number;
  limitPrice: number | string;
  status: "Pending" | "Filled" | "Active";
}

const openOrders: OpenOrder[] = [
  { symbol: "AAPL", type: "Limit Buy", quantity: 500, limitPrice: 185.00, status: "Pending" },
  { symbol: "MSFT", type: "Market Sell", quantity: 200, limitPrice: "MKT", status: "Filled" },
  { symbol: "NVDA", type: "Stop Buy", quantity: 100, limitPrice: 140.00, status: "Active" },
];

const getStatusColor = (status: OpenOrder["status"]) => {
  switch (status) {
    case "Pending":
      return "bg-surface-container-highest text-on-surface-variant";
    case "Filled":
      return "bg-primary/20 text-primary";
    case "Active":
      return "bg-primary/20 text-primary";
    default:
      return "bg-surface-container-highest text-on-surface-variant";
  }
};

const getTypeColor = (type: OpenOrder["type"]) => {
  if (type === "Market Sell") return "text-error";
  return "text-primary";
};

export function OpenOrders() {
  return (
    <section className="glass-panel rounded-xl overflow-hidden">
      <div className="px-6 py-4 border-b border-outline-variant bg-surface-container-high flex justify-between items-center">
        <h3 className="text-sm font-medium text-white uppercase tracking-wider font-bold">
          Open Orders
        </h3>
        <span className="bg-primary/20 text-primary px-2 py-0.5 rounded text-[10px] font-bold">
          3 ACTIVE
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm font-medium">
          <thead>
            <tr className="text-[11px] text-on-surface-variant border-b border-outline-variant bg-surface-container">
              <th className="px-6 py-3 uppercase tracking-wider">Symbol</th>
              <th className="px-6 py-3 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 uppercase tracking-wider text-right">Quantity</th>
              <th className="px-6 py-3 uppercase tracking-wider text-right">Limit Price</th>
              <th className="px-6 py-3 uppercase tracking-wider text-right">Status</th>
              <th className="px-6 py-3 uppercase tracking-wider text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/30">
            {openOrders.map((order, index) => (
              <tr key={index} className="hover:bg-white/5 transition-all">
                <td className="px-6 py-4">
                  <span className="font-bold text-white">{order.symbol}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={getTypeColor(order.type)}>{order.type}</span>
                </td>
                <td className="px-6 py-4 text-right text-sm font-medium">
                  {order.quantity}
                </td>
                <td className="px-6 py-4 text-right text-sm font-medium">
                  {typeof order.limitPrice === "number" 
                    ? `$${order.limitPrice.toFixed(2)}` 
                    : order.limitPrice}
                </td>
                <td className="px-6 py-4 text-right">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <button 
                    className="text-on-surface-variant hover:text-error transition-all"
                    disabled={order.status === "Filled"}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}