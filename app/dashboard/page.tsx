"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { PerformanceChart } from "@/components/dashboard/PerformanceChart";
import { KPIStats } from "@/components/dashboard/KPIStats";
import { AssetAllocation } from "@/components/dashboard/AssetAllocation";
import { HoldingsTable } from "@/components/dashboard/HoldingsTable";
import { TransactionsTable } from "@/components/dashboard/TransactionsTable";
import { 
  kpiData, 
  chartData, 
  assetAllocation, 
  holdings, 
  transactions 
} from "@/lib/mockData";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      <QuickActions />
      
      <main className="ml-64 pt-32 px-6 pb-6 space-y-6 max-w-[1440px] mx-auto">
        <PerformanceChart data={chartData} />
        <KPIStats stats={kpiData} />
        
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <AssetAllocation data={assetAllocation} />
          </div>
          <div className="lg:col-span-2">
            <HoldingsTable data={holdings} />
          </div>
        </section>
        
        <TransactionsTable data={transactions} />
      </main>
    </div>
  );
}