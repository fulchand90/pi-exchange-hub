import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { ExchangeForm } from '@/components/ExchangeForm';
import { SuccessModal } from '@/components/SuccessModal';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Clock, DollarSign, Users, Sparkles } from 'lucide-react';

const Index = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [exchangeData, setExchangeData] = useState(null);

  const handleExchange = (data: any) => {
    setExchangeData(data);
    setShowSuccessModal(true);
  };

  const features = [
    {
      icon: Shield,
      title: 'Secure Exchange',
      description: 'Bank-grade security for all transactions'
    },
    {
      icon: Clock,
      title: '7-Day Processing',
      description: 'Guaranteed payment within 7 working days'
    },
    {
      icon: DollarSign,
      title: 'Best Rates',
      description: 'Competitive rates updated in real-time'
    },
    {
      icon: Users,
      title: 'Trusted Platform',
      description: '10,000+ successful exchanges completed'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-float"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-crypto-blue/10 via-transparent to-crypto-purple/10 animate-float" style={{ animationDelay: '-3s' }}></div>
      </div>

      <div className="relative z-10">
        <Header />
        
        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Hero Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">
                    Live Pi Exchange Platform
                  </span>
                </div>
                
                <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Convert Your{' '}
                  <span className="gradient-text">Pi Coins</span>{' '}
                  to Cash
                </h2>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  The most trusted platform to exchange your Pi cryptocurrency for real money. 
                  Secure, fast, and reliable with competitive rates.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <Card key={index} className="crypto-card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-4 space-y-2">
                      <feature.icon className="w-8 h-8 text-primary" />
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="crypto-card p-6 bg-gradient-to-r from-success/5 to-accent/5 border-success/10">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-success">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">$2.5M+</div>
                    <div className="text-sm text-muted-foreground">Exchanged</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">4.9★</div>
                    <div className="text-sm text-muted-foreground">Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Exchange Form */}
            <div className="lg:sticky lg:top-8">
              <ExchangeForm onExchange={handleExchange} />
            </div>
          </div>

          {/* How It Works Section */}
          <section className="mt-20 space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold">How It Works</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Simple, secure, and straightforward Pi to cash exchange process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Enter Details',
                  description: 'Provide your Pi amount and bank account information'
                },
                {
                  step: '02',
                  title: 'Send Pi Coins',
                  description: 'Transfer your Pi coins to our secure wallet address'
                },
                {
                  step: '03',
                  title: 'Receive Payment',
                  description: 'Get cash deposited to your bank account within 7 days'
                }
              ].map((item, index) => (
                <Card key={index} className="crypto-card text-center p-6 hover:glow-effect transition-all duration-300">
                  <CardContent className="space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-lg">
                      {item.step}
                    </div>
                    <h4 className="text-xl font-semibold">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-20 py-8 border-t border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center space-y-4">
              <p className="text-muted-foreground">
                © 2024 Pi Exchange. All rights reserved. | Secure • Reliable • Trusted
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span>SSL Encrypted • Bank Grade Security</span>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        exchangeData={exchangeData}
      />
    </div>
  );
};

export default Index;
