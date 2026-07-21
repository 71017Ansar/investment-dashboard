"use client";

import { TradingControls } from "./TradingControls";
import { OrderEntryPanel } from "./OrderEntryPanel";
import { MarketDepth } from "./MarketDepth";
import { RecentTrades } from "./RecentTrades";
import { OpenOrders } from "./OpenOrders";
import { TradeHistory } from "./TradeHistory";

export function TradingTab() {
  return (
    <div className="p-6 space-y-6 max-w-[1440px] mx-auto">
      {/* Row 1: Trading Controls */}
      <TradingControls />
      
      {/* Row 2: Trading Interface */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-5">
          <OrderEntryPanel />
        </div>
        <div className="lg:col-span-7 flex flex-col gap-4">
          <MarketDepth />
          <RecentTrades />
        </div>
      </section>
      
      {/* Row 3: Open Orders */}
      <OpenOrders />
      
      {/* Row 4: Trade History */}
      <TradeHistory />
    </div>
  );
}