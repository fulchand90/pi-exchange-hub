import React from 'react';
import { PiIcon } from './PiIcon';
import { TrendingUp, Shield, Zap } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="w-full py-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Logo and Brand */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <PiIcon size="xl" className="animate-float" />
            <div>
              <h1 className="text-3xl font-bold gradient-text">Pi Exchange</h1>
              <p className="text-sm text-muted-foreground">
                Instant Pi to Cash Exchange
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-success">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Secure</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Instant</span>
            </div>
            <div className="flex items-center gap-2 text-accent">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">Best Rates</span>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="crypto-card p-4 text-center">
            <div className="text-2xl font-bold gradient-text">$47.50</div>
            <div className="text-sm text-muted-foreground">Current Pi Rate</div>
          </div>
          <div className="crypto-card p-4 text-center">
            <div className="text-2xl font-bold text-success">24/7</div>
            <div className="text-sm text-muted-foreground">Trading Hours</div>
          </div>
          <div className="crypto-card p-4 text-center">
            <div className="text-2xl font-bold text-accent">10,000+</div>
            <div className="text-sm text-muted-foreground">Pi Exchanged</div>
          </div>
        </div>
      </div>
    </header>
  );
};