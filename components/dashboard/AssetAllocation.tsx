"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

interface AllocationItem {
  label: string;
  value: number;
  color: string;
}

interface AssetAllocationProps {
  data: AllocationItem[];
}

export function AssetAllocation({ data }: AssetAllocationProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  // Custom label renderer with proper Recharts types
  const renderCustomLabel = (props: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, value } = props;
    
    // Handle potential undefined values
    if (!cx || !cy || midAngle === undefined || !innerRadius || !outerRadius) {
      return null;
    }

    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        className="text-[10px] font-bold font-mono"
      >
        {value}%
      </text>
    );
  };

  return (
    <div className="glass-panel p-6 rounded-xl space-y-4 lg:col-span-1">
      <h3 className="text-2xl font-bold text-white">Asset Allocation</h3>
      
      <div className="flex flex-col items-center py-4">
        <div className="relative w-56 h-56">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
                stroke="#1a2a4a"
                strokeWidth={2}
                label={renderCustomLabel}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1a2a4a",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  color: "white",
                }}
                formatter={(value: any) => {
                  // Handle both string and number values
                  if (typeof value === 'number' || typeof value === 'string') {
                    return `${value}%`;
                  }
                  return '0%';
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-lg font-medium text-white">
              ${((total / 100) * 12.4).toFixed(1)}B
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-on-surface-variant">
              Total Value
            </span>
          </div>
        </div>

        <div className="w-full mt-4 space-y-1.5">
          {data.map((item) => (
            <div key={item.label} className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-sm text-white">{item.label}</span>
              </div>
              <span className="font-mono text-white">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}