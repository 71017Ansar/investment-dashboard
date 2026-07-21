"use client";

import { Plus, Eye, Bell } from "lucide-react";

export function TradingControls() {
  return (
    <section className="glass-panel sticky top-20 z-30 p-4 rounded-xl flex flex-wrap items-center justify-between gap-4 shadow-xl">
      <div className="flex items-center gap-4 flex-wrap">
        {/* Ticker Search */}
        <div className="flex items-center bg-surface-container-lowest border border-outline-variant rounded overflow-hidden">
          <span className="px-3 text-on-surface-variant text-xs font-medium border-r border-outline-variant bg-surface-container">
            TICKER
          </span>
          <select className="bg-transparent border-none py-1.5 px-3 text-sm font-medium focus:ring-0 text-white">
            <option>AAPL</option>
            <option>MSFT</option>
            <option>NVDA</option>
            <option>TSLA</option>
            <option>AMD</option>
          </select>
        </div>

        {/* Order Type */}
        <div className="flex items-center bg-surface-container-lowest border border-outline-variant rounded overflow-hidden">
          <span className="px-3 text-on-surface-variant text-xs font-medium border-r border-outline-variant bg-surface-container">
            TYPE
          </span>
          <select className="bg-transparent border-none py-1.5 px-3 text-sm font-medium focus:ring-0 text-white">
            <option>Market</option>
            <option>Limit</option>
            <option>Stop-Loss</option>
          </select>
        </div>

        {/* Time in Force */}
        <div className="flex items-center bg-surface-container-lowest border border-outline-variant rounded overflow-hidden">
          <span className="px-3 text-on-surface-variant text-xs font-medium border-r border-outline-variant bg-surface-container">
            TIF
          </span>
          <select className="bg-transparent border-none py-1.5 px-3 text-sm font-medium focus:ring-0 text-white">
            <option>Day</option>
            <option>GTC</option>
            <option>IOC</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <button className="flex items-center gap-2 border border-outline-variant px-4 py-2 rounded text-sm font-medium hover:bg-surface-container-low transition-all">
          <Plus className="h-4 w-4" />
          New Order
        </button>
        <button className="flex items-center gap-2 border border-outline-variant px-4 py-2 rounded text-sm font-medium hover:bg-surface-container-low transition-all">
          <Eye className="h-4 w-4" />
          Watchlist
        </button>
        <button className="flex items-center gap-2 border border-outline-variant px-4 py-2 rounded text-sm font-medium hover:bg-surface-container-low transition-all">
          <Bell className="h-4 w-4" />
          Alerts
        </button>
      </div>
    </section>
  );
}