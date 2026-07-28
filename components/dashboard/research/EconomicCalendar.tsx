"use client";

import { cn } from "@/lib/utils";

interface EconomicEvent {
  id: number;
  event: string;
  date: string;
  impact: "HIGH" | "MEDIUM" | "LOW";
  actual: string | null;
  forecast: string | null;
  previous: string | null;
}

const events: EconomicEvent[] = [
  {
    id: 1,
    event: "FOMC Meeting",
    date: "2024-05-25",
    impact: "HIGH",
    actual: null,
    forecast: null,
    previous: null,
  },
  {
    id: 2,
    event: "CPI Data",
    date: "2024-05-20",
    impact: "HIGH",
    actual: "3.2%",
    forecast: "3.1%",
    previous: "3.5%",
  },
  {
    id: 3,
    event: "Jobless Claims",
    date: "2024-05-18",
    impact: "MEDIUM",
    actual: "215K",
    forecast: "220K",
    previous: "225K",
  },
];

const getImpactColor = (impact: EconomicEvent["impact"]) => {
  switch (impact) {
    case "HIGH":
      return "bg-error/10 text-error";
    case "MEDIUM":
      return "bg-secondary/10 text-secondary";
    case "LOW":
      return "bg-on-surface-variant/10 text-on-surface-variant";
    default:
      return "bg-on-surface-variant/10 text-on-surface-variant";
  }
};

export function EconomicCalendar() {
  return (
    <div className="glass-panel rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Economic Calendar</h2>
        <button className="text-sm text-secondary hover:underline">
          Full Calendar →
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-on-surface-variant text-xs font-medium uppercase border-b border-white/5">
              <th className="pb-4 font-normal">Event</th>
              <th className="pb-4 font-normal">Date</th>
              <th className="pb-4 font-normal">Impact</th>
              <th className="pb-4 font-normal">Actual</th>
              <th className="pb-4 font-normal">Forecast</th>
              <th className="pb-4 font-normal">Previous</th>
            </tr>
          </thead>
          <tbody className="text-sm font-medium">
            {events.map((event) => (
              <tr
                key={event.id}
                className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
              >
                <td className="py-4 text-white">{event.event}</td>
                <td className="py-4 text-on-surface-variant">{event.date}</td>
                <td className="py-4">
                  <span className={cn(
                    "px-2 py-0.5 rounded text-[10px] font-bold",
                    getImpactColor(event.impact)
                  )}>
                    {event.impact}
                  </span>
                </td>
                <td className="py-4">
                  {event.actual ? (
                    <span className="text-primary">{event.actual}</span>
                  ) : (
                    <span className="text-on-surface-variant">—</span>
                  )}
                </td>
                <td className="py-4 text-on-surface-variant">
                  {event.forecast || "—"}
                </td>
                <td className="py-4 text-on-surface-variant">
                  {event.previous || "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
