"use client";

import { ResearchSearch } from "./ResearchSearch";
import { FeaturedResearch } from "./FeaturedResearch";
import { EconomicCalendar } from "./EconomicCalendar";
import { AnalystRatings } from "./AnalystRatings";
import { TopReports } from "./TopReports";

export function ResearchTab() {
  return (
    <div className="mx-auto max-w-[1440px] space-y-4 px-3 py-4 sm:space-y-6 sm:px-6 sm:py-6 lg:px-8">
      {/* Row 1: Research Search & Filters */}
      <ResearchSearch />
      
      {/* Row 2: Featured Research */}
      <FeaturedResearch />
      
      {/* Row 3: Market Intelligence */}
      <section className="grid grid-cols-1 xl:grid-cols-12 gap-4">
        <div className="xl:col-span-8">
          <EconomicCalendar />
        </div>
        <div className="xl:col-span-4">
          <AnalystRatings />
        </div>
      </section>
      
      {/* Row 4: Top Research Reports */}
      <TopReports />
    </div>
  );
}
