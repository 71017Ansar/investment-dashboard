"use client";

import { FileText, Shield, FileCheck, ArrowRight } from "lucide-react";

interface Template {
  id: number;
  title: string;
  format: string;
  frequency: string;
  sections: string[];
  icon: React.ReactNode;
}

const templates: Template[] = [
  {
    id: 1,
    title: "Investment Summary",
    format: "PDF",
    frequency: "Monthly",
    sections: ["Overview", "Performance", "Holdings", "Outlook"],
    icon: <FileText className="h-8 w-8 text-primary" />,
  },
  {
    id: 2,
    title: "Risk Assessment",
    format: "PDF",
    frequency: "Quarterly",
    sections: ["Risk Metrics", "Stress Tests", "VaR Analysis"],
    icon: <Shield className="h-8 w-8 text-secondary" />,
  },
  {
    id: 3,
    title: "Compliance Report",
    format: "PDF",
    frequency: "Annual",
    sections: ["Regulatory", "Internal Controls", "Audit"],
    icon: <FileCheck className="h-8 w-8 text-tertiary" />,
  },
];

export function ReportTemplates() {
  return (
    <section>
      <h3 className="text-sm font-medium text-white uppercase tracking-wider mb-4">
        Report Templates
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {templates.map((template) => (
          <div
            key={template.id}
            className="glass-panel p-6 rounded-xl space-y-4 hover:border-primary/30 transition-all group"
          >
            <div className="flex items-start justify-between">
              <div className="p-2 rounded-lg bg-surface-container-low">
                {template.icon}
              </div>
              <span className="text-xs font-medium text-on-surface-variant bg-surface-container-low px-2 py-1 rounded">
                {template.format}
              </span>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white">{template.title}</h4>
              <p className="text-sm text-on-surface-variant">
                Frequency: {template.frequency}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {template.sections.map((section, index) => (
                <span
                  key={index}
                  className="text-xs font-medium text-on-surface-variant bg-surface-container-low px-2 py-1 rounded-full"
                >
                  {section}
                </span>
              ))}
            </div>
            
            <button className="flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all group">
              Use Template
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
