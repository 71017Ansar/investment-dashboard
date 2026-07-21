"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { ResearchTab } from "@/components/dashboard/research/ResearchTab";

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      
      <main className="ml-64 pt-16">
        <ResearchTab />
      </main>
    </div>
  );
}