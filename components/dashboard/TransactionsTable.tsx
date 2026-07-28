"use client";

import { Download, Filter, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Transaction {
  date: string;
  ticker: string;
  action: "BUY" | "SELL";
  quantity: number;
  price: number;
  status: "Completed" | "Pending" | "Failed";
  total: number;
}

interface TransactionsTableProps {
  data: Transaction[];
}

export function TransactionsTable({ data }: TransactionsTableProps) {
  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  // Get status color
  const getStatusColor = (status: Transaction['status']) => {
    switch (status) {
      case 'Completed':
        return 'bg-primary/10 text-primary';
      case 'Pending':
        return 'bg-yellow-500/10 text-yellow-500';
      case 'Failed':
        return 'bg-error/10 text-error';
      default:
        return 'bg-gray-500/10 text-gray-500';
    }
  };

  // Get action badge style
  const getActionStyle = (action: Transaction['action']) => {
    return action === 'BUY' 
      ? 'bg-primary/10 text-primary'
      : 'bg-error/10 text-error';
  };

  return (
    <div className="glass-panel space-y-4 rounded-xl p-4 sm:p-6">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h3 className="text-xl font-bold text-white sm:text-2xl">Recent Transactions</h3>
        
        <div className="flex w-full items-center gap-2 overflow-x-auto sm:w-auto sm:gap-3">
          {/* Filter Dropdown */}
          <div className="flex shrink-0 items-center gap-2 px-3 py-1.5 bg-surface-container-high rounded-lg border border-outline-variant/30 cursor-pointer hover:border-primary transition-all">
            <Filter className="h-4 w-4 text-on-surface-variant" />
            <span className="text-sm text-on-surface-variant">Asset Class</span>
            <ChevronDown className="h-4 w-4 text-on-surface-variant" />
          </div>
          
          {/* Filter Button */}
          <div className="flex shrink-0 items-center gap-2 px-3 py-1.5 bg-surface-container-high rounded-lg border border-outline-variant/30 cursor-pointer hover:border-primary transition-all">
            <Filter className="h-4 w-4 text-on-surface-variant" />
            <span className="text-sm text-on-surface-variant">Filter</span>
          </div>
          
          {/* Download Button */}
          <button className="p-2 bg-primary text-on-primary-container rounded-lg hover:opacity-90 transition-all active:scale-95">
            <Download className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[760px] w-full text-left">
          <thead>
            <tr className="bg-surface-container-highest/20 rounded-xl">
              <th className="p-3 text-xs font-medium text-on-surface-variant uppercase tracking-wider rounded-l-xl">
                Date
              </th>
              <th className="p-3 text-xs font-medium text-on-surface-variant uppercase tracking-wider">
                Ticker
              </th>
              <th className="p-3 text-xs font-medium text-on-surface-variant uppercase tracking-wider">
                Action
              </th>
              <th className="p-3 text-xs font-medium text-on-surface-variant uppercase tracking-wider text-right">
                Quantity
              </th>
              <th className="p-3 text-xs font-medium text-on-surface-variant uppercase tracking-wider text-right">
                Price
              </th>
              <th className="p-3 text-xs font-medium text-on-surface-variant uppercase tracking-wider">
                Status
              </th>
              <th className="p-3 text-xs font-medium text-on-surface-variant uppercase tracking-wider text-right rounded-r-xl">
                Total Value
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/10">
            {data.map((transaction, index) => (
              <tr key={index} className="hover:bg-primary/[0.03] transition-colors">
                <td className="p-3 font-mono text-sm text-on-surface-variant">
                  {transaction.date}
                </td>
                <td className="p-3 font-mono text-primary font-medium">
                  {transaction.ticker}
                </td>
                <td className="p-3">
                  <span className={cn(
                    "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase",
                    getActionStyle(transaction.action)
                  )}>
                    {transaction.action}
                  </span>
                </td>
                <td className="p-3 font-mono text-right text-white">
                  {transaction.quantity.toLocaleString()}
                </td>
                <td className="p-3 font-mono text-right text-white">
                  {formatCurrency(transaction.price)}
                </td>
                <td className="p-3">
                  <div className="flex items-center gap-1.5">
                    <span className={cn(
                      "w-1.5 h-1.5 rounded-full",
                      transaction.status === 'Completed' ? 'bg-primary' :
                      transaction.status === 'Pending' ? 'bg-yellow-500' :
                      'bg-error'
                    )} />
                    <span className={cn(
                      "text-xs font-medium",
                      getStatusColor(transaction.status)
                    )}>
                      {transaction.status}
                    </span>
                  </div>
                </td>
                <td className="p-3 font-mono text-right text-white">
                  {formatCurrency(transaction.total)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer with Load More */}
      <div className="pt-4 flex justify-center border-t border-outline-variant/20">
        <button className="flex items-center gap-2 px-6 py-2 glass-panel rounded-full hover:bg-primary hover:text-on-primary-container transition-all group">
          <span className="text-sm font-medium">Load Full Ledger</span>
          <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform" />
        </button>
      </div>
    </div>
  );
}
