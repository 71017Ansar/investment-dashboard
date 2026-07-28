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
    <>
      <QuickActions />
      <div className="mx-auto max-w-[1440px] space-y-4 px-3 pb-8 pt-24 sm:space-y-6 sm:px-6 sm:pt-28 lg:px-8">
        <PerformanceChart data={chartData} />
        <KPIStats stats={kpiData} />
        
        <section className="grid grid-cols-1 gap-4 sm:gap-6 xl:grid-cols-3">
          <div className="xl:col-span-1">
            <AssetAllocation data={assetAllocation} />
          </div>
          <div className="xl:col-span-2">
            <HoldingsTable data={holdings} />
          </div>
        </section>
        
        <TransactionsTable data={transactions} />
      </div>
    </>
  );
}
