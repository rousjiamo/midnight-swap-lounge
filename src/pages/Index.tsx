import { Navigation } from "@/components/Navigation";
import { StatsBar } from "@/components/StatsBar";
import { SwapCard } from "@/components/SwapCard";
import { PoolInfo } from "@/components/PoolInfo";
import { RecentTransactions } from "@/components/RecentTransactions";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <StatsBar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Swap Interface */}
          <div className="lg:col-span-1 space-y-6">
            <SwapCard />
            <RecentTransactions />
          </div>

          {/* Pool Information */}
          <div className="lg:col-span-2">
            <PoolInfo />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border text-center text-muted-foreground">
          <p>© 2024 Uniswap Clone. Built with Lovable.</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
