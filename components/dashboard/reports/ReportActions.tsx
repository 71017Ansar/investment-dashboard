"use client";

import { FilePlus, FileText, Shield, BarChart } from "lucide-react";

interface TemplateButton {
  icon: React.ReactNode;
  label: string;
}

const templates: TemplateButton[] = [
  { icon: <FileText className="h-4 w-4" />, label: "Portfolio Summary" },
  { icon: <BarChart className="h-4 w-4" />, label: "Performance Review" },
  { icon: <Shield className="h-4 w-4" />, label: "Risk Analytics" },
  { icon: <FileText className="h-4 w-4" />, label: "Compliance Audit" },
];

export function ReportActions() {
  return (
    <section className="glass-panel space-y-4 rounded-xl p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          <button className="flex w-full items-center justify-center gap-2 bg-primary text-on-primary-container px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-all active:scale-95 sm:w-auto">
            <FilePlus className="h-5 w-5" />
            Generate New Report
          </button>
          
          <div className="flex items-center gap-2 flex-wrap">
            {templates.map((template, index) => (
              <button
                key={index}
                className="flex items-center gap-2 border border-outline-variant px-4 py-2 rounded-lg text-sm font-medium hover:bg-surface-container-low transition-all"
              >
                {template.icon}
                {template.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-2 xl:w-auto">
          <span className="col-span-3 text-sm text-on-surface-variant xl:col-span-1">Date Range:</span>
          <input
            type="date"
            className="min-w-0 bg-surface-container-lowest border border-outline-variant rounded-lg px-2 py-2 text-sm text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all sm:px-3"
            defaultValue="2024-01-01"
          />
          <span className="text-on-surface-variant">to</span>
          <input
            type="date"
            className="bg-surface-container-lowest border border-outline-variant rounded-lg px-3 py-2 text-sm text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
            defaultValue="2024-12-31"
          />
        </div>
      </div>
    </section>
  );
}
