import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Droplets } from "lucide-react";

export const PoolInfo = () => {
  const pools = [
    {
      pair: "ETH/USDC",
      tvl: "$1.2B",
      apr: "12.4%",
      volume: "$45.2M",
      change: 2.4
    },
    {
      pair: "USDC/USDT",
      tvl: "$890M",
      apr: "8.7%",
      volume: "$32.1M",
      change: 1.2
    },
    {
      pair: "WBTC/ETH",
      tvl: "$456M",
      apr: "15.3%",
      volume: "$18.9M",
      change: -0.8
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Top Pools</h2>
        <p className="text-muted-foreground">
          Earn fees by providing liquidity to trading pairs
        </p>
      </div>

      <div className="grid gap-4">
        {pools.map((pool) => (
          <Card key={pool.pair} className="p-4 bg-card-gradient border-border hover:border-primary/50 transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xs font-semibold text-primary">E</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center -ml-2">
                    <span className="text-xs font-semibold text-accent">U</span>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{pool.pair}</div>
                  <div className="text-sm text-muted-foreground flex items-center gap-1">
                    <Droplets className="h-3 w-3" />
                    {pool.tvl} TVL
                  </div>
                </div>
              </div>

              <div className="text-right space-y-1">
                <div className="flex items-center gap-1 text-sm">
                  <TrendingUp className="h-3 w-3 text-success" />
                  <span className="font-medium text-success">{pool.apr} APR</span>
                </div>
                <div className="text-sm text-muted-foreground flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  {pool.volume} 24h
                </div>
                <div className={`text-xs ${pool.change > 0 ? 'text-success' : 'text-destructive'}`}>
                  {pool.change > 0 ? '+' : ''}{pool.change}%
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};