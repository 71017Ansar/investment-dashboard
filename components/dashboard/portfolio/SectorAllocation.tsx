"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface SectorData {
  name: string;
  percentage: number;
  color: string;
  shortName: string;
}

const sectorData: SectorData[] = [
  { name: "Technology", percentage: 32, color: "bg-primary", shortName: "Tech" },
  { name: "Financials", percentage: 18, color: "bg-secondary", shortName: "Fin" },
  { name: "Healthcare", percentage: 14, color: "bg-tertiary", shortName: "Health" },
  { name: "Consumer", percentage: 12, color: "bg-on-primary-container", shortName: "Cons" },
  { name: "Energy", percentage: 8, color: "bg-on-secondary-container", shortName: "Energy" },
  { name: "Real Estate", percentage: 6, color: "bg-on-tertiary-container", shortName: "RE" },
  { name: "Utilities", percentage: 4, color: "bg-primary-fixed-dim", shortName: "Util" },
  { name: "Other", percentage: 6, color: "bg-outline-variant", shortName: "Other" },
];

const timeFilters = ["Real-Time", "Daily", "Weekly", "Monthly"];

export function SectorAllocation() {
  const [activeFilter, setActiveFilter] = useState("Real-Time");

  return (
    <section className="glass-panel p-6 space-y-6 overflow-hidden relative">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h3 className="text-2xl font-bold text-white">
          Portfolio Allocation by Sector
        </h3>
        <div className="flex bg-surface-container-low p-1 rounded-lg gap-1 border border-outline-variant">
          {timeFilters.map((filter) => (
            <button
              key={filter}
              className={cn(
                "px-3 py-1 text-xs font-medium rounded-md transition-colors",
                activeFilter === filter
                  ? "bg-secondary-container text-on-secondary-container"
                  : "hover:bg-surface-variant text-on-surface-variant"
              )}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {/* Bar Chart */}
        <div className="flex h-12 w-full rounded-lg overflow-hidden border border-outline-variant shadow-lg">
          {sectorData.map((sector) => (
            <div
              key={sector.name}
              className={cn(
                sector.color,
                "h-full hover:brightness-110 transition-all cursor-help"
              )}
              style={{ width: `${sector.percentage}%` }}
              title={`${sector.name} ${sector.percentage}%`}
            />
          ))}
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 pt-2">
          {sectorData.map((sector) => (
            <div key={sector.name} className="flex items-center gap-2">
              <div className={cn("w-3 h-3 rounded-full", sector.color)} />
              <span className="text-xs font-medium text-on-surface-variant">
                {sector.shortName} {sector.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}