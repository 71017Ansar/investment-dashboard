"use client";

import { ReportActions } from "./ReportActions";
import { SavedReports } from "./SavedReports";
import { ReportTemplates } from "./ReportTemplates";
import { ScheduledReports } from "./ScheduledReports";

export function ReportsTab() {
  return (
    <div className="p-6 space-y-6 max-w-[1440px] mx-auto">
      {/* Row 1: Report Actions */}
      <ReportActions />
      
      {/* Row 2: Saved Reports */}
      <SavedReports />
      
      {/* Row 3: Report Templates */}
      <ReportTemplates />
      
      {/* Row 4: Scheduled Reports */}
      <ScheduledReports />
    </div>
  );
}