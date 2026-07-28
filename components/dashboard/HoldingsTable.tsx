"use client";

import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Holding {
  ticker: string;
  name: string;
  allocation: number;
  return1Y: number;
  trend: number[];
}

interface HoldingsTableProps {
  data: Holding[];
}

export function HoldingsTable({ data }: HoldingsTableProps) {
  const renderSparkline = (trend: number[]) => {
    const max = Math.max(...trend);
    const min = Math.min(...trend);
    const range = max - min || 1;
    
    return (
      <svg className="w-16 h-6 mx-auto" viewBox="0 0 64 24">
        <polyline
          points={trend.map((v, i) => {
            const x = (i / (trend.length - 1)) * 64;
            const y = 24 - ((v - min) / range) * 20 - 2;
            return `${x},${y}`;
          }).join(' ')}
          fill="none"
          stroke="#00d4aa"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  };

  return (
    <div className="glass-panel space-y-4 rounded-xl p-4 sm:p-6 lg:col-span-2">
      <div className="flex flex-wrap justify-between items-center gap-2">
        <h3 className="text-xl font-bold text-white sm:text-2xl">Top 5 Holdings</h3>
        <Button variant="link" className="text-primary">
          View All Assets →
        </Button>
      </div>

      <div className="overflow-x-auto">
        <Table className="min-w-[720px]">
          <TableHeader>
            <TableRow className="border-outline-variant/30 hover:bg-transparent">
              <TableHead className="text-xs font-medium text-on-surface-variant uppercase tracking-wider">
                Ticker
              </TableHead>
              <TableHead className="text-xs font-medium text-on-surface-variant uppercase tracking-wider">
                Name
              </TableHead>
              <TableHead className="text-xs font-medium text-on-surface-variant uppercase tracking-wider text-right">
                Allocation
              </TableHead>
              <TableHead className="text-xs font-medium text-on-surface-variant uppercase tracking-wider text-right">
                1Y Return
              </TableHead>
              <TableHead className="text-xs font-medium text-on-surface-variant uppercase tracking-wider text-center">
                Trend
              </TableHead>
              <TableHead className="text-xs font-medium text-on-surface-variant uppercase tracking-wider text-right">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((holding) => (
              <TableRow key={holding.ticker} className="hover:bg-primary/5 transition-colors border-outline-variant/10">
                <TableCell className="font-mono text-primary font-medium">
                  {holding.ticker}
                </TableCell>
                <TableCell className="text-white">
                  {holding.name}
                </TableCell>
                <TableCell className="font-mono text-right text-white">
                  {holding.allocation}%
                </TableCell>
                <TableCell className={cn(
                  "font-mono text-right",
                  holding.return1Y > 0 ? "text-primary" : "text-error"
                )}>
                  {holding.return1Y > 0 ? "+" : ""}{holding.return1Y}%
                </TableCell>
                <TableCell className="text-center">
                  {renderSparkline(holding.trend)}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Badge className="bg-primary text-on-primary-container hover:bg-primary/80 cursor-pointer">
                      BUY
                    </Badge>
                    <Badge variant="destructive" className="cursor-pointer hover:opacity-80">
                      SELL
                    </Badge>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="pt-2 border-t border-outline-variant/20 flex justify-between items-center">
        <span className="text-xs text-on-surface-variant">
          Showing {data.length} of 5 holdings
        </span>
        <Button variant="ghost" className="text-xs text-primary hover:underline">
          View Full Portfolio
        </Button>
      </div>
    </div>
  );
}
