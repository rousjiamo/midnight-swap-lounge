import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface Token {
  symbol: string;
  name: string;
  price?: number;
  change?: number;
}

interface TokenSelectorProps {
  selectedToken: Token;
  onTokenChange: (token: Token) => void;
}

const tokens: Token[] = [
  { symbol: "ETH", name: "Ethereum", price: 2458.32, change: 2.4 },
  { symbol: "USDC", name: "USD Coin", price: 1.00, change: 0.01 },
  { symbol: "USDT", name: "Tether", price: 1.00, change: -0.02 },
  { symbol: "WBTC", name: "Wrapped Bitcoin", price: 43250.15, change: 1.8 },
  { symbol: "UNI", name: "Uniswap", price: 6.42, change: -3.2 },
  { symbol: "LINK", name: "Chainlink", price: 14.28, change: 4.1 },
];

export const TokenSelector = ({ selectedToken, onTokenChange }: TokenSelectorProps) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredTokens = tokens.filter(token =>
    token.symbol.toLowerCase().includes(search.toLowerCase()) ||
    token.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" className="flex items-center gap-2 px-3 py-2 h-auto">
          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-xs font-semibold text-primary">
              {selectedToken.symbol.charAt(0)}
            </span>
          </div>
          <span className="font-semibold">{selectedToken.symbol}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      
      <DialogContent className="bg-card border-border">
        <DialogHeader>
          <DialogTitle>Select a token</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <Input
            placeholder="Search name or paste address"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-secondary border-border"
          />
          
          <div className="max-h-80 overflow-y-auto space-y-2">
            {filteredTokens.map((token) => (
              <button
                key={token.symbol}
                onClick={() => {
                  onTokenChange(token);
                  setOpen(false);
                }}
                className="w-full flex items-center justify-between p-3 hover:bg-secondary rounded-lg transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">
                      {token.symbol.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">{token.symbol}</div>
                    <div className="text-sm text-muted-foreground">{token.name}</div>
                  </div>
                </div>
                
                {token.price && (
                  <div className="text-right">
                    <div className="font-medium text-foreground">
                      ${token.price.toLocaleString()}
                    </div>
                    <div className={`text-sm ${
                      token.change && token.change > 0 ? 'text-success' : 'text-destructive'
                    }`}>
                      {token.change && token.change > 0 ? '+' : ''}{token.change}%
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};