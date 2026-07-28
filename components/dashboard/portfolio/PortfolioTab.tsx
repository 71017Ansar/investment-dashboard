"use client";

import { PortfolioSummaryCards } from "./PortfolioSummaryCards";
import { SectorAllocation } from "./SectorAllocation";
import { HoldingsBreakdown } from "./HoldingsBreakdown";
import { PortfolioAnalytics } from "./PortfolioAnalytics";
import { RecentActivity } from "./RecentActivity";

export function PortfolioTab() {
  return (
    <div className="mx-auto max-w-[1440px] space-y-4 px-3 pb-8 sm:space-y-6 sm:px-6 lg:px-8">
      {/* Row 1: Summary Cards */}
      <PortfolioSummaryCards />
      
      {/* Row 2: Sector Allocation */}
      <SectorAllocation />
      
      {/* Row 3: Split Layout */}
      <section className="grid grid-cols-1 xl:grid-cols-10 gap-4">
        <div className="xl:col-span-7">
          <HoldingsBreakdown />
        </div>
        <div className="xl:col-span-3 space-y-4">
          <PortfolioAnalytics />
        </div>
      </section>
      
      {/* Row 4: Recent Activity */}
      <RecentActivity />
    </div>
  );
}
