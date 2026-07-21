"use client";

import { PortfolioSummaryCards } from "./PortfolioSummaryCards";
import { SectorAllocation } from "./SectorAllocation";
import { HoldingsBreakdown } from "./HoldingsBreakdown";
import { PortfolioAnalytics } from "./PortfolioAnalytics";
import { RecentActivity } from "./RecentActivity";

export function PortfolioTab() {
  return (
    <div className="p-6 space-y-6 max-w-[1440px] mx-auto">
      {/* Row 1: Summary Cards */}
      <PortfolioSummaryCards />
      
      {/* Row 2: Sector Allocation */}
      <SectorAllocation />
      
      {/* Row 3: Split Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-10 gap-4">
        <div className="lg:col-span-7">
          <HoldingsBreakdown />
        </div>
        <div className="lg:col-span-3 space-y-4">
          <PortfolioAnalytics />
        </div>
      </section>
      
      {/* Row 4: Recent Activity */}
      <RecentActivity />
    </div>
  );
}