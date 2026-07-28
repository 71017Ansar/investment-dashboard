"use client";

import { TradingControls } from "./TradingControls";
import { OrderEntryPanel } from "./OrderEntryPanel";
import { MarketDepth } from "./MarketDepth";
import { RecentTrades } from "./RecentTrades";
import { OpenOrders } from "./OpenOrders";
import { TradeHistory } from "./TradeHistory";

export function TradingTab() {
  return (
    <div className="mx-auto max-w-[1440px] space-y-4 px-3 py-4 sm:space-y-6 sm:px-6 sm:py-6 lg:px-8">
      {/* Row 1: Trading Controls */}
      <TradingControls />
      
      {/* Row 2: Trading Interface */}
      <section className="grid grid-cols-1 xl:grid-cols-12 gap-4">
        <div className="xl:col-span-5">
          <OrderEntryPanel />
        </div>
        <div className="xl:col-span-7 flex flex-col gap-4">
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
