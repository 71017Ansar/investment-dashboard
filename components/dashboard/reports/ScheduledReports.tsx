"use client";

import { Clock, Mail, Calendar, MoreVertical, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";
interface ScheduledReport {
  id: number;
  name: string;
  schedule: string;
  recipients: string;
  status: "Active" | "Paused";
}

const scheduledReports: ScheduledReport[] = [
  {
    id: 1,
    name: "Daily Market Brief",
    schedule: "Every day 8:00 AM",
    recipients: "admin@vanguard.com",
    status: "Active",
  },
  {
    id: 2,
    name: "Weekly Portfolio Summary",
    schedule: "Every Monday 10:00 AM",
    recipients: "team@vanguard.com",
    status: "Active",
  },
  {
    id: 3,
    name: "Monthly Board Report",
    schedule: "1st of every month",
    recipients: "board@vanguard.com",
    status: "Paused",
  },
];

export function ScheduledReports() {
  return (
    <section className="glass-panel rounded-xl p-4 sm:p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium text-white uppercase tracking-wider font-bold">
          Scheduled Reports
        </h3>
        <button className="text-primary text-sm font-medium hover:underline">
          + Add Schedule
        </button>
      </div>
      
      <div className="space-y-3">
        {scheduledReports.map((report) => (
          <div
            key={report.id}
            className="flex flex-col items-start justify-between gap-4 rounded-lg border border-outline-variant/20 bg-surface-container-low p-4 transition-all hover:bg-surface-container-high sm:flex-row sm:items-center"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-lg bg-surface-container">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-white">{report.name}</h4>
                <div className="mt-1 flex flex-col gap-1 text-sm text-on-surface-variant xl:flex-row xl:items-center xl:gap-3">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {report.schedule}
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="h-3 w-3" />
                    {report.recipients}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className={cn(
                "px-3 py-1 rounded-full text-[11px] font-bold",
                report.status === "Active"
                  ? "bg-primary/20 text-primary"
                  : "bg-yellow-500/20 text-yellow-500"
              )}>
                {report.status}
              </span>
              
              <button className="p-1.5 rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-white transition-all">
                {report.status === "Active" ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </button>
              
              <button className="p-1.5 rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-white transition-all">
                <MoreVertical className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
