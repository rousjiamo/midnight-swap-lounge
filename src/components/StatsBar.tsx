import { TrendingUp, TrendingDown } from "lucide-react";

export const StatsBar = () => {
  const stats = [
    { label: "ETH Price", value: "$2,458.32", change: 2.4, isPositive: true },
    { label: "24h Volume", value: "$1.2B", change: -0.8, isPositive: false },
    { label: "Total Locked", value: "$4.8B", change: 1.2, isPositive: true },
    { label: "Active Pairs", value: "1,247", change: 0.3, isPositive: true }
  ];

  return (
    <div className="bg-secondary/30 border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between overflow-x-auto">
          <div className="flex items-center gap-8 min-w-max">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {stat.label}:
                </span>
                <span className="font-semibold text-foreground whitespace-nowrap">
                  {stat.value}
                </span>
                <div className={`flex items-center gap-1 ${
                  stat.isPositive ? 'text-success' : 'text-destructive'
                }`}>
                  {stat.isPositive ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  <span className="text-xs font-medium">
                    {stat.isPositive ? '+' : ''}{stat.change}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};