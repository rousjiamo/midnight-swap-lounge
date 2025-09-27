import { Card } from "@/components/ui/card";
import { ArrowUpDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const RecentTransactions = () => {
  const transactions = [
    {
      id: "1",
      type: "Swap",
      fromToken: "ETH",
      toToken: "USDC",
      fromAmount: "1.2",
      toAmount: "2,949.58",
      timestamp: "2 minutes ago",
      status: "Completed"
    },
    {
      id: "2",
      type: "Add Liquidity",
      fromToken: "USDC",
      toToken: "USDT",
      fromAmount: "1,000",
      toAmount: "1,000",
      timestamp: "15 minutes ago",
      status: "Completed"
    },
    {
      id: "3",
      type: "Swap",
      fromToken: "WBTC",
      toToken: "ETH",
      fromAmount: "0.05",
      toAmount: "0.87",
      timestamp: "1 hour ago",
      status: "Completed"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Recent Transactions</h2>
        <p className="text-muted-foreground">
          Your latest trading activity
        </p>
      </div>

      <div className="space-y-3">
        {transactions.map((tx) => (
          <Card key={tx.id} className="p-4 bg-card-gradient border-border hover:border-primary/30 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <ArrowUpDown className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {tx.type}: {tx.fromAmount} {tx.fromToken} → {tx.toAmount} {tx.toToken}
                  </div>
                  <div className="text-sm text-muted-foreground">{tx.timestamp}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm px-2 py-1 rounded-full bg-success/20 text-success">
                  {tx.status}
                </span>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Button variant="outline" className="w-full">
        View All Transactions
      </Button>
    </div>
  );
};