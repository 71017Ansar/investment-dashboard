"use client";

import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterButton {
  id: string;
  label: string;
  active?: boolean;
}

const filterOptions: FilterButton[] = [
  { id: "us-equities", label: "US Equities", active: true },
  { id: "international", label: "International" },
  { id: "fixed-income", label: "Fixed Income" },
  { id: "alternatives", label: "Alternatives" },
];

const timeRanges = ["Last 7 days", "Last 30 days", "Quarter", "Year"];

export function ResearchSearch() {
  const [activeFilter, setActiveFilter] = useState("us-equities");
  const [activeTimeRange, setActiveTimeRange] = useState("Last 7 days");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section>
      <div className="glass-panel rounded-xl p-6 space-y-4">
        {/* Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex-1 w-full relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-on-surface-variant" />
            <input
              className="w-full bg-surface-container-highest/30 border border-white/10 rounded-xl pl-12 pr-6 py-4 text-lg outline-none focus:ring-1 focus:ring-primary/50 transition-all text-white placeholder:text-on-surface-variant"
              placeholder="Search companies, sectors, or themes..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
          <div className="flex items-center gap-2 flex-wrap">
            {filterOptions.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
                  activeFilter === filter.id
                    ? "bg-secondary text-on-secondary"
                    : "bg-surface-container-highest/50 text-on-surface-variant hover:bg-surface-container-highest"
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 p-1 bg-surface-container-lowest rounded-lg">
            {timeRanges.map((range) => (
              <button
                key={range}
                onClick={() => setActiveTimeRange(range)}
                className={cn(
                  "px-3 py-1 rounded text-xs font-medium transition-all",
                  activeTimeRange === range
                    ? "bg-surface-container-high text-on-surface"
                    : "text-on-surface-variant hover:text-on-surface"
                )}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}