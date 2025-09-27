import { useState } from "react";
import { ArrowUpDown, Settings, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { TokenSelector } from "./TokenSelector";

export const SwapCard = () => {
  const [fromToken, setFromToken] = useState({ symbol: "ETH", name: "Ethereum" });
  const [toToken, setToToken] = useState({ symbol: "USDC", name: "USD Coin" });
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");

  const handleSwapTokens = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  return (
    <Card className="p-6 bg-card-gradient backdrop-blur-sm border border-border shadow-card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">Swap</h2>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <Settings className="h-5 w-5" />
        </Button>
      </div>

      <div className="space-y-1">
        {/* From Token */}
        <div className="bg-secondary rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-muted-foreground">You pay</span>
            <span className="text-sm text-muted-foreground">Balance: 2.4521</span>
          </div>
          <div className="flex items-center justify-between">
            <Input
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              placeholder="0.0"
              className="border-0 bg-transparent text-2xl font-semibold p-0 h-auto focus-visible:ring-0"
            />
            <TokenSelector
              selectedToken={fromToken}
              onTokenChange={setFromToken}
            />
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center -my-2 relative z-10">
          <Button
            variant="outline"
            size="icon"
            onClick={handleSwapTokens}
            className="rounded-full bg-background border-border hover:bg-muted"
          >
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>

        {/* To Token */}
        <div className="bg-secondary rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-muted-foreground">You receive</span>
            <span className="text-sm text-muted-foreground">Balance: 1,240.32</span>
          </div>
          <div className="flex items-center justify-between">
            <Input
              value={toAmount}
              onChange={(e) => setToAmount(e.target.value)}
              placeholder="0.0"
              className="border-0 bg-transparent text-2xl font-semibold p-0 h-auto focus-visible:ring-0"
            />
            <TokenSelector
              selectedToken={toToken}
              onTokenChange={setToToken}
            />
          </div>
        </div>
      </div>

      {/* Price Info */}
      <div className="mt-4 p-3 bg-secondary/50 rounded-lg">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">1 ETH = 2,458.32 USDC</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>

      {/* Swap Button */}
      <Button className="w-full mt-6 bg-swap-gradient hover:bg-hover-gradient border-0 font-semibold text-lg py-6" size="lg">
        Connect Wallet
      </Button>
    </Card>
  );
};