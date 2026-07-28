import { QuickActions } from "@/components/dashboard/QuickActions";
import { PortfolioTab } from "@/components/dashboard/portfolio/PortfolioTab";

export default function PortfolioPage() {
  return (
    <>
      <QuickActions />
      <div className="pt-20 sm:pt-24"><PortfolioTab /></div>
    </>
  );
}
