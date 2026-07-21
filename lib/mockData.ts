import { Wallet, TrendingUp, BarChart, PieChart, LucideIcon } from "lucide-react";

interface KPI {
  label: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: "up" | "down";
  isDominant?: boolean;
}

export const kpiData: KPI[] = [
  {
    label: "Total AUM",
    value: "$12.4B",
    change: "+2.3%",
    icon: Wallet,  // ✅ Now using actual icon component
    trend: "up",
    isDominant: true,
  },
  {
    label: "Daily P&L",
    value: "+$84.2M",
    change: "+0.8%",
    icon: TrendingUp,  // ✅ Now using actual icon component
    trend: "up",
  },
  {
    label: "YoY Return",
    value: "+18.7%",
    change: "+3.1%",
    icon: BarChart,  // ✅ Now using actual icon component
    trend: "up",
  },
  {
    label: "Top Holding",
    value: "AAPL - 7.2%",
    change: "+1.4%",
    icon: PieChart,  // ✅ Now using actual icon component
    trend: "up",
  },
];

// Rest of your mock data...
export const chartData = [
  { date: "Oct 24", portfolio: 0.5, benchmark: -1.2 },
  { date: "Oct 28", portfolio: 1.2, benchmark: 0.3 },
  { date: "Nov 01", portfolio: 2.8, benchmark: 1.5 },
  { date: "Nov 05", portfolio: 3.5, benchmark: 2.1 },
  { date: "Nov 08", portfolio: 4.2, benchmark: 3.0 },
  { date: "Nov 12", portfolio: 5.8, benchmark: 4.2 },
  { date: "Nov 15", portfolio: 7.1, benchmark: 5.5 },
  { date: "Nov 18", portfolio: 8.5, benchmark: 6.8 },
  { date: "Nov 22", portfolio: 10.2, benchmark: 7.9 },
  { date: "Nov 25", portfolio: 11.8, benchmark: 9.1 },
  { date: "Nov 29", portfolio: 13.5, benchmark: 10.2 },
  { date: "Dec 02", portfolio: 14.8, benchmark: 11.0 },
  { date: "Dec 06", portfolio: 16.2, benchmark: 11.8 },
  { date: "Dec 09", portfolio: 17.5, benchmark: 12.1 },
  { date: "Dec 14", portfolio: 18.2, benchmark: 12.3 },
  { date: "Dec 18", portfolio: 18.7, benchmark: 12.5 },
  { date: "Dec 28", portfolio: 18.7, benchmark: 12.3 },
];

export const assetAllocation = [
  { label: "US Equities", value: 45, color: "#00d4aa" },
  { label: "Intl Equities", value: 25, color: "#4a9eff" },
  { label: "Bonds", value: 18, color: "#ffb347" },
  { label: "Alternatives", value: 7, color: "#ff6b6b" },
  { label: "Cash", value: 5, color: "#a8b5c8" },
];

export const holdings = [
  { ticker: "AAPL", name: "Apple Inc.", allocation: 7.2, return1Y: 24.5, trend: [15, 18, 20, 22, 24, 23, 25, 24.5] },
  { ticker: "MSFT", name: "Microsoft Corp.", allocation: 6.8, return1Y: 19.2, trend: [10, 12, 14, 16, 18, 19, 19.5, 19.2] },
  { ticker: "NVDA", name: "NVIDIA Corp.", allocation: 5.4, return1Y: 112.4, trend: [80, 85, 95, 100, 108, 112, 115, 112.4] },
  { ticker: "GOOGL", name: "Alphabet Inc.", allocation: 4.9, return1Y: 31.8, trend: [20, 22, 25, 28, 30, 32, 31.5, 31.8] },
  { ticker: "AMZN", name: "Amazon.com Inc.", allocation: 4.1, return1Y: 15.7, trend: [8, 10, 12, 14, 15, 16, 15.5, 15.7] },
];

export const transactions = [
  { date: "2024-05-24 14:22", ticker: "NVDA", action: "BUY" as const, quantity: 1250, price: 1064.69, status: "Completed" as const, total: 1330862.50 },
  { date: "2024-05-24 10:05", ticker: "AAPL", action: "SELL" as const, quantity: 5000, price: 189.98, status: "Completed" as const, total: 949900.00 },
  { date: "2024-05-23 16:30", ticker: "MSFT", action: "BUY" as const, quantity: 800, price: 420.50, status: "Pending" as const, total: 336400.00 },
  { date: "2024-05-23 09:15", ticker: "GOOGL", action: "BUY" as const, quantity: 300, price: 175.30, status: "Completed" as const, total: 52590.00 },
];