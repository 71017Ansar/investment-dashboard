"use client";

import { RefreshCw, BarChart3, Download } from "lucide-react";

export function QuickActions() {
  return (
    <div className="fixed top-16 right-0 w-[calc(100%-16rem)] z-30 px-8 py-3 pointer-events-none">
      <div className="flex items-center gap-2 pointer-events-auto bg-surface/40 backdrop-blur-md border border-outline-variant/20 rounded-full px-3 py-1.5 w-max mx-auto shadow-2xl">
        <button className="px-3 py-2 bg-primary text-on-primary-container rounded-full text-[11px] font-bold hover:brightness-110 transition-all active:scale-95 flex items-center gap-1.5">
          <RefreshCw className="h-3.5 w-3.5" />
          Rebalance Portfolio
        </button>
        
        <button className="px-3 py-2 border border-outline-variant/50 text-white rounded-full text-[11px] font-bold hover:bg-surface-container-highest transition-all active:scale-95 flex items-center gap-1.5">
          <BarChart3 className="h-3.5 w-3.5" />
          Generate Report
        </button>
        
        <button className="px-3 py-2 text-on-surface-variant rounded-full text-[11px] font-bold hover:text-white transition-all active:scale-95 flex items-center gap-1.5">
          <Download className="h-3.5 w-3.5" />
          Export Data
        </button>
      </div>
    </div>
  );
}