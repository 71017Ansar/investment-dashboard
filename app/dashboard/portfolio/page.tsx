"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { PortfolioTab } from "@/components/dashboard/portfolio/PortfolioTab";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      <QuickActions />
      
      <main className="ml-64 pt-28 px-6 pb-12">
        <div className="max-w-[1440px] mx-auto">
          <PortfolioTab />
        </div>
      </main>
    </div>
  );
}