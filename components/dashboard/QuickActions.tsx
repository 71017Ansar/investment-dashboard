"use client";

import { RefreshCw, BarChart3, Download } from "lucide-react";

export function QuickActions() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-16 z-30 px-3 py-2 lg:left-64 sm:px-6">
      <div className="pointer-events-auto mx-auto flex w-max max-w-full items-center gap-1 overflow-x-auto rounded-full border border-outline-variant/20 bg-surface/80 px-2 py-1.5 shadow-2xl backdrop-blur-md sm:gap-2 sm:px-3">
        <button className="flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-3 py-2 text-[11px] font-bold text-on-primary-container transition-all hover:brightness-110 active:scale-95">
          <RefreshCw className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Rebalance </span>Portfolio
        </button>
        
        <button className="flex shrink-0 items-center gap-1.5 rounded-full border border-outline-variant/50 px-3 py-2 text-[11px] font-bold text-white transition-all hover:bg-surface-container-highest active:scale-95">
          <BarChart3 className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Generate </span>Report
        </button>
        
        <button className="flex shrink-0 items-center gap-1.5 rounded-full px-3 py-2 text-[11px] font-bold text-on-surface-variant transition-all hover:text-white active:scale-95">
          <Download className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Export </span>Data
        </button>
      </div>
    </div>
  );
}
