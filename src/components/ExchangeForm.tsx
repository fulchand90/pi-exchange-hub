import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PiIcon } from './PiIcon';
import { ArrowRightLeft, DollarSign, Clock } from 'lucide-react';
import { toast } from 'sonner';

interface ExchangeFormProps {
  onExchange: (data: any) => void;
}

export const ExchangeForm: React.FC<ExchangeFormProps> = ({ onExchange }) => {
  const [piAmount, setPiAmount] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const piRate = 47.5; // Pi to USD rate
  const usdAmount = piAmount ? (parseFloat(piAmount) * piRate).toFixed(2) : '0.00';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!piAmount || !accountNumber || !accountName || !ifscCode) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (parseFloat(piAmount) < 1) {
      toast.error('Minimum exchange amount is 1 Pi');
      return;
    }

    setIsLoading(true);
    
    // Simulate processing time
    setTimeout(() => {
      const exchangeData = {
        piAmount: parseFloat(piAmount),
        usdAmount: parseFloat(usdAmount),
        accountNumber,
        accountName,
        ifscCode,
        timestamp: new Date()
      };
      
      onExchange(exchangeData);
      setIsLoading(false);
      
      // Reset form
      setPiAmount('');
      setAccountNumber('');
      setAccountName('');
      setIfscCode('');
    }, 2000);
  };

  return (
    <Card className="crypto-card max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-3 text-2xl">
          <PiIcon size="lg" className="animate-pulse-glow" />
          <ArrowRightLeft className="w-6 h-6 text-muted-foreground" />
          <DollarSign className="w-8 h-8 text-success" />
        </CardTitle>
        <p className="text-muted-foreground">Exchange Pi for Cash</p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Pi Amount Input */}
          <div className="space-y-2">
            <Label htmlFor="piAmount" className="text-sm font-medium">
              Pi Amount *
            </Label>
            <div className="relative">
              <Input
                id="piAmount"
                type="number"
                placeholder="Enter Pi amount"
                value={piAmount}
                onChange={(e) => setPiAmount(e.target.value)}
                min="1"
                step="0.01"
                className="bg-muted/50 border-border pr-12"
                required
              />
              <PiIcon size="sm" className="absolute right-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Exchange Rate Display */}
          <div className="crypto-card p-4 space-y-2 bg-gradient-to-r from-success/10 to-accent/10 border-success/20">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Current Rate:</span>
              <span className="font-semibold gradient-text">${piRate} USD per Pi</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">You'll receive:</span>
              <span className="text-xl font-bold text-success">${usdAmount} USD</span>
            </div>
          </div>

          {/* Bank Details */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="accountName" className="text-sm font-medium">
                Account Holder Name *
              </Label>
              <Input
                id="accountName"
                placeholder="Enter your full name"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
                className="bg-muted/50 border-border"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="accountNumber" className="text-sm font-medium">
                Account Number *
              </Label>
              <Input
                id="accountNumber"
                placeholder="Enter your account number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="bg-muted/50 border-border"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ifscCode" className="text-sm font-medium">
                IFSC Code *
              </Label>
              <Input
                id="ifscCode"
                placeholder="Enter IFSC code"
                value={ifscCode}
                onChange={(e) => setIfscCode(e.target.value.toUpperCase())}
                className="bg-muted/50 border-border"
                required
              />
            </div>
          </div>

          {/* Processing Time Notice */}
          <div className="flex items-center gap-2 p-3 rounded-lg bg-warning/10 border border-warning/20">
            <Clock className="w-4 h-4 text-warning" />
            <span className="text-sm text-warning">
              Processing time: 7 working days
            </span>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-primary-foreground font-semibold py-3 glow-effect"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2" />
                Processing Exchange...
              </>
            ) : (
              'Exchange Pi Coins'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};