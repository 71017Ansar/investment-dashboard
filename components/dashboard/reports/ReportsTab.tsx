"use client";

import { ReportActions } from "./ReportActions";
import { SavedReports } from "./SavedReports";
import { ReportTemplates } from "./ReportTemplates";
import { ScheduledReports } from "./ScheduledReports";

export function ReportsTab() {
  return (
    <div className="mx-auto max-w-[1440px] space-y-4 px-3 py-4 sm:space-y-6 sm:px-6 sm:py-6 lg:px-8">
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
