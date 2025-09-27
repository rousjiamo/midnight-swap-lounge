import { Wallet, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-6 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-swap-gradient flex items-center justify-center">
            <span className="text-white font-bold text-sm">U</span>
          </div>
          <span className="text-xl font-bold text-foreground">Uniswap</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Swap
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Pool
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Vote
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Charts
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="outline" className="border-border hover:border-primary/50">
          <Wallet className="h-4 w-4 mr-2" />
          Connect Wallet
        </Button>
        
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  );
};