"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { TrendingUp } from "lucide-react";

export function OrderEntryPanel() {
  const [orderType, setOrderType] = useState<"BUY" | "SELL">("BUY");
  const [quantity, setQuantity] = useState(100);

  const currentPrice = 189.98;
  const estimatedCost = currentPrice * quantity;

  return (
    <div className="glass-panel rounded-xl overflow-hidden flex flex-col">
      <div className="p-6 border-b border-outline-variant bg-white/5">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold text-white">AAPL</h2>
            <p className="text-on-surface-variant text-sm">Apple Inc.</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary">${currentPrice.toFixed(2)}</p>
            <p className="text-primary text-sm font-medium flex items-center justify-end gap-1">
              +0.8% <TrendingUp className="h-4 w-4" />
            </p>
          </div>
        </div>

        {/* Buy/Sell Toggle */}
        <div className="flex bg-surface-container-lowest p-1 rounded-lg mb-6">
          <button
            className={cn(
              "flex-1 py-2 text-center rounded-md font-bold text-sm transition-all",
              orderType === "BUY"
                ? "bg-primary text-on-primary-container"
                : "text-on-surface-variant hover:text-white"
            )}
            onClick={() => setOrderType("BUY")}
          >
            BUY
          </button>
          <button
            className={cn(
              "flex-1 py-2 text-center rounded-md font-bold text-sm transition-all",
              orderType === "SELL"
                ? "bg-error text-white"
                : "text-on-surface-variant hover:text-white"
            )}
            onClick={() => setOrderType("SELL")}
          >
            SELL
          </button>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-medium text-on-surface-variant uppercase opacity-70">
              Quantity
            </label>
            <div className="flex items-center bg-surface-container-lowest border border-outline-variant rounded-lg p-3 group focus-within:border-primary transition-all">
              <input
                className="bg-transparent border-none focus:ring-0 text-xl w-full text-white"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <span className="text-on-surface-variant text-sm font-medium">SHARES</span>
            </div>
          </div>

          <div className="p-4 bg-surface-container-low rounded-lg border border-outline-variant/30">
            <div className="flex justify-between items-center mb-1">
              <span className="text-on-surface-variant text-xs font-medium">ESTIMATED COST</span>
              <span className="text-white font-bold">${estimatedCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-on-surface-variant text-xs font-medium">AVAIL. BALANCE</span>
              <span className="text-on-surface-variant font-medium">$1,240,580.45</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-3 mt-auto">
        <button className="w-full border border-outline px-6 py-3 rounded-lg font-bold text-sm hover:bg-white/10 transition-all">
          Preview Order
        </button>
        <button
          className={cn(
            "w-full px-6 py-4 rounded-lg font-bold text-lg shadow-lg active:scale-[0.98] transition-all",
            orderType === "BUY"
              ? "bg-primary text-on-primary-container shadow-primary/20"
              : "bg-error text-white shadow-error/20"
          )}
        >
          Submit {orderType} Order
        </button>
      </div>
    </div>
  );
}