"use client";

import { 
  RefreshCw,      // ✅ Instead of Sync (Sync also works, but RefreshCw is more common)
  DollarSign,     // ✅ Instead of Payments
  ShoppingCart, 
  LucideIcon 
} from "lucide-react";

interface Activity {
  id: number;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  title: string;
  date: string;
  description: React.ReactNode;
}

const activities: Activity[] = [
  {
    id: 1,
    icon: RefreshCw,
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
    title: "Rebalance executed",
    date: "May 24, 2024",
    description: "Optimized sector weights for Q3 based on institutional guidelines and model portfolios.",
  },
  {
    id: 2,
    icon: DollarSign,
    iconBg: "bg-tertiary/20",
    iconColor: "text-tertiary",
    title: "Dividend received - AAPL",
    date: "May 23, 2024",
    description: (
      <>
        Cash credit of <span className="text-white font-medium">$2,400.00</span> processed to main sweep account.
      </>
    ),
  },
  {
    id: 3,
    icon: ShoppingCart,
    iconBg: "bg-secondary/20",
    iconColor: "text-secondary",
    title: "Position added - TSLA",
    date: "May 22, 2024",
    description: (
      <>
        Acquired 500 shares at <span className="text-white font-medium">$174.50</span>. Sector: Consumer Discretionary.
      </>
    ),
  },
];

export function RecentActivity() {
  return (
    <section className="glass-panel p-4 sm:p-6">
      <h3 className="mb-6 text-xl font-bold text-white sm:text-2xl">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          
          return (
            <div
              key={activity.id}
              className="flex items-start gap-4 p-4 rounded-lg bg-surface-container-low hover:bg-surface-variant transition-colors group cursor-pointer border border-outline-variant/30"
            >
              <div className={`p-2 rounded ${activity.iconBg}`}>
                <Icon className={`h-5 w-5 ${activity.iconColor}`} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h5 className="font-medium text-white">{activity.title}</h5>
                  <span className="text-xs font-medium text-on-surface-variant">
                    {activity.date}
                  </span>
                </div>
                <p className="text-sm text-on-surface-variant mt-1">
                  {activity.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
