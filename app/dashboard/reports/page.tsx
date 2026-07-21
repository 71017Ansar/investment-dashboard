"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { ReportsTab } from "@/components/dashboard/reports/ReportsTab";

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      
      <main className="ml-64 pt-16">
        <ReportsTab />
      </main>
    </div>
  );
}