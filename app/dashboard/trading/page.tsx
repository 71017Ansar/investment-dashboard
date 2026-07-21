"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { TradingTab } from "@/components/dashboard/trading/TradingTab";

export default function TradingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      
      <main className="ml-64 pt-16">
        <TradingTab />
      </main>
    </div>
  );
}