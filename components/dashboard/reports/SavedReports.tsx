"use client";

import { Download, Edit, Trash2, FileText, FileSpreadsheet, File } from "lucide-react";
import { cn } from "@/lib/utils";

interface SavedReport {
  id: number;
  name: string;
  type: "PDF" | "Excel" | "CSV";
  generated: string;
  status: "Ready" | "Processing" | "Failed";
  size: string;
}

const savedReports: SavedReport[] = [
  {
    id: 1,
    name: "Monthly Portfolio Review",
    type: "PDF",
    generated: "2024-05-24",
    status: "Ready",
    size: "2.4 MB",
  },
  {
    id: 2,
    name: "Q1 Performance Report",
    type: "Excel",
    generated: "2024-04-30",
    status: "Ready",
    size: "4.1 MB",
  },
  {
    id: 3,
    name: "Risk Analytics 2024",
    type: "PDF",
    generated: "2024-04-15",
    status: "Processing",
    size: "-",
  },
  {
    id: 4,
    name: "Audit Trail",
    type: "CSV",
    generated: "2024-03-31",
    status: "Ready",
    size: "8.7 MB",
  },
];

const getStatusColor = (status: SavedReport["status"]) => {
  switch (status) {
    case "Ready":
      return "bg-primary/20 text-primary";
    case "Processing":
      return "bg-yellow-500/20 text-yellow-500";
    case "Failed":
      return "bg-error/20 text-error";
    default:
      return "bg-surface-container-highest text-on-surface-variant";
  }
};

const getFileIcon = (type: SavedReport["type"]) => {
  switch (type) {
    case "PDF":
      return <File className="h-4 w-4 text-error" />;
    case "Excel":
      return <FileSpreadsheet className="h-4 w-4 text-primary" />;
    case "CSV":
      return <FileText className="h-4 w-4 text-on-surface-variant" />;
    default:
      return <File className="h-4 w-4" />;
  }
};

export function SavedReports() {
  return (
    <section className="glass-panel rounded-xl overflow-hidden">
      <div className="px-6 py-4 border-b border-outline-variant bg-surface-container-high flex justify-between items-center">
        <h3 className="text-sm font-medium text-white uppercase tracking-wider font-bold">
          Saved Reports
        </h3>
        <span className="text-xs text-on-surface-variant">{savedReports.length} reports</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm font-medium">
          <thead>
            <tr className="text-[11px] text-on-surface-variant border-b border-outline-variant bg-surface-container">
              <th className="px-6 py-3 uppercase tracking-wider">Report Name</th>
              <th className="px-6 py-3 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 uppercase tracking-wider">Generated</th>
              <th className="px-6 py-3 uppercase tracking-wider text-center">Status</th>
              <th className="px-6 py-3 uppercase tracking-wider text-right">Size</th>
              <th className="px-6 py-3 uppercase tracking-wider text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/30">
            {savedReports.map((report) => (
              <tr key={report.id} className="hover:bg-white/5 transition-all">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    {getFileIcon(report.type)}
                    <span className="text-white font-medium">{report.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-on-surface-variant">{report.type}</td>
                <td className="px-6 py-4 text-on-surface-variant">{report.generated}</td>
                <td className="px-6 py-4 text-center">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-[11px] font-bold",
                    getStatusColor(report.status)
                  )}>
                    {report.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right text-on-surface-variant">{report.size}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-2">
                    <button 
                      className={cn(
                        "p-1.5 rounded-lg hover:bg-surface-container-high transition-all",
                        report.status === "Ready" ? "text-primary hover:text-primary" : "text-on-surface-variant/30 cursor-not-allowed"
                      )}
                      disabled={report.status !== "Ready"}
                    >
                      <Download className="h-4 w-4" />
                    </button>
                    <button className="p-1.5 rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-white transition-all">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-1.5 rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-error transition-all">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}