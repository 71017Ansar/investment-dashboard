"use client";

import { ResearchSearch } from "./ResearchSearch";
import { FeaturedResearch } from "./FeaturedResearch";
import { EconomicCalendar } from "./EconomicCalendar";
import { AnalystRatings } from "./AnalystRatings";
import { TopReports } from "./TopReports";

export function ResearchTab() {
  return (
    <div className="p-6 space-y-6 max-w-[1440px] mx-auto">
      {/* Row 1: Research Search & Filters */}
      <ResearchSearch />
      
      {/* Row 2: Featured Research */}
      <FeaturedResearch />
      
      {/* Row 3: Market Intelligence */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-8">
          <EconomicCalendar />
        </div>
        <div className="lg:col-span-4">
          <AnalystRatings />
        </div>
      </section>
      
      {/* Row 4: Top Research Reports */}
      <TopReports />
    </div>
  );
}