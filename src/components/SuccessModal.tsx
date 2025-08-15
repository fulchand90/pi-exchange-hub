import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Copy } from 'lucide-react';
import { PiIcon } from './PiIcon';
import { toast } from 'sonner';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  exchangeData: any;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  exchangeData
}) => {
  const transactionId = `PI${Date.now().toString().slice(-8)}`;

  const copyTransactionId = () => {
    navigator.clipboard.writeText(transactionId);
    toast.success('Transaction ID copied to clipboard');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="crypto-card max-w-md mx-auto border-success/20">
        <DialogHeader>
          <DialogTitle className="text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <CheckCircle className="w-16 h-16 text-success animate-pulse-glow" />
                <PiIcon 
                  size="sm" 
                  className="absolute -top-1 -right-1 bg-card rounded-full p-1" 
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold gradient-text">
                  Exchange Successful!
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Your Pi coins have been received
                </p>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          {/* Transaction Summary */}
          <div className="space-y-3">
            <div className="crypto-card p-4 bg-gradient-to-r from-success/10 to-accent/10 border-success/20">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">Pi Amount:</span>
                <span className="font-semibold flex items-center gap-1">
                  {exchangeData?.piAmount} <PiIcon size="sm" />
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">USD Value:</span>
                <span className="text-xl font-bold text-success">
                  ${exchangeData?.usdAmount}
                </span>
              </div>
            </div>

            {/* Transaction ID */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/20 border border-border">
              <div>
                <p className="text-sm text-muted-foreground">Transaction ID</p>
                <p className="font-mono text-sm">{transactionId}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={copyTransactionId}
                className="h-8 w-8 p-0"
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Processing Timeline */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-success">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Pi coins received</span>
            </div>
            <div className="flex items-center gap-2 text-warning">
              <Clock className="w-4 h-4" />
              <span className="text-sm">
                Processing payment to your bank account
              </span>
            </div>
            <div className="ml-6 text-xs text-muted-foreground">
              Expected completion: 7 working days
            </div>
          </div>

          {/* Bank Details */}
          <div className="crypto-card p-4 bg-muted/10">
            <h3 className="font-semibold mb-2">Payment Details</h3>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Account:</span>
                <span>{exchangeData?.accountName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Account No:</span>
                <span className="font-mono">
                  ****{exchangeData?.accountNumber?.slice(-4)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">IFSC:</span>
                <span className="font-mono">{exchangeData?.ifscCode}</span>
              </div>
            </div>
          </div>

          <Button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-primary-foreground"
          >
            Complete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};