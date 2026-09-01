import { useState } from 'react';
import { PRICING_PLANS } from '../data/mockData';
import { 
  Check, 
  X, 
  Sparkles, 
  ShieldCheck, 
  Zap,
  ArrowRight,
  Compass,
  Crown
} from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planId: string) => void;
}

export function PricingSection({ onSelectPlan }: PricingSectionProps) {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" className="py-24 bg-[#080B0D] relative border-t border-[#233137]/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#588157]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#6B8B99]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetrical Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-[#233137]/80">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#11171B] text-[#8DAA91] border border-[#233137] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#8DAA91]" />
              <span>Expedition Memberships</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#E8ECEF] tracking-tight leading-tight">
              Invest in your highest peak. <br />
              <span className="font-serif-luxury font-normal italic text-[#8DAA91]">Engineered without limits.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#8E9FA8] font-normal leading-relaxed">
              Start with complimentary single-route generation, or unlock perpetual multi-day AI wilderness architecture, high-density topographic layers, and offline satellite packs.
            </p>
          </div>

          {/* Billing Switcher */}
          <div className="flex flex-col items-start lg:items-end gap-3 shrink-0">
            <span className="text-[11px] font-mono text-[#8E9FA8] uppercase tracking-wider flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#8DAA91]" />
              EXPEDITION BILLING CYCLE
            </span>
            <div className="inline-flex items-center gap-1.5 bg-[#11171B] p-1.5 rounded-2xl border border-[#233137]">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  !isYearly
                    ? 'bg-[#588157] text-[#080B0D] shadow-md'
                    : 'text-[#8E9FA8] hover:text-[#E8ECEF]'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  isYearly
                    ? 'bg-[#588157] text-[#080B0D] shadow-md'
                    : 'text-[#8E9FA8] hover:text-[#E8ECEF]'
                }`}
              >
                <span>Annual Dispatch</span>
                <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                  isYearly ? 'bg-[#080B0D] text-[#8DAA91]' : 'bg-[#162024] text-[#8DAA91]'
                }`}>
                  -25%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Asymmetrical Pricing Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = isYearly ? plan.priceYearly : plan.priceMonthly;
            const isPopular = plan.popular;
            const colSpan = isPopular ? 'lg:col-span-6' : 'lg:col-span-3';

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all nature-card-shadow ${colSpan} ${
                  isPopular
                    ? 'bg-gradient-to-b from-[#11171B] to-[#0D1215] border-2 border-[#588157] shadow-2xl shadow-[#588157]/10 relative z-20 overflow-hidden'
                    : 'bg-[#11171B] border border-[#233137] shadow-xl hover:border-[#233137]/80'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#588157]/10 rounded-bl-full pointer-events-none" />
                    <div className="flex items-center justify-between mb-4">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#588157] text-[#080B0D] text-xs font-black uppercase tracking-wider rounded-full shadow-lg">
                        <Crown className="w-3.5 h-3.5 fill-[#080B0D]" />
                        <span>{plan.badge || 'Recommended'}</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#8DAA91] font-semibold tracking-wider uppercase">
                        MOST CHOSEN ROUTE
                      </span>
                    </div>
                  </>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`font-display font-bold text-[#E8ECEF] ${isPopular ? 'text-2xl' : 'text-xl'}`}>
                      {plan.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#8E9FA8] min-h-[36px] leading-relaxed">
                    {plan.tagline}
                  </p>

                  {/* Price Tag */}
                  <div className="my-6 p-4 rounded-2xl bg-[#080B0D] border border-[#233137]">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#E8ECEF]">
                        ${price}
                      </span>
                      <span className="text-xs text-[#8E9FA8] font-medium">
                        {price === 0 ? 'Forever' : isYearly ? '/ mo (annual)' : '/ mo'}
                      </span>
                    </div>
                    {isYearly && price > 0 && (
                      <span className="text-[11px] text-[#8DAA91] font-semibold mt-1 block">
                        ✦ Includes 2 months complimentary + all satellite maps
                      </span>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 pt-4 border-t border-[#233137] text-xs sm:text-sm">
                    <span className="font-bold text-[#E8ECEF] text-[11px] font-mono uppercase tracking-wider block mb-3">
                      CAPABILITIES & CLEARANCE:
                    </span>
                    <div className={`space-y-2.5 ${isPopular ? 'sm:grid sm:grid-cols-2 sm:gap-x-4 sm:space-y-0' : ''}`}>
                      {plan.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-[#E8ECEF]/90 py-1">
                          <Check className="w-4 h-4 text-[#8DAA91] shrink-0 mt-0.5" />
                          <span className="text-xs">{feature}</span>
                        </div>
                      ))}

                      {plan.notIncluded && plan.notIncluded.map((feature, fIdx) => (
                        <div key={`not-${fIdx}`} className="flex items-start gap-2 text-[#8E9FA8]/40 py-1">
                          <X className="w-4 h-4 text-[#8E9FA8]/30 shrink-0 mt-0.5" />
                          <span className="text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA Button */}
                <div className="pt-8 mt-6">
                  <button
                    onClick={() => onSelectPlan(plan.id)}
                    className={`w-full py-4 px-5 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isPopular
                        ? 'bg-[#588157] hover:bg-[#689467] text-[#080B0D] shadow-lg shadow-[#588157]/20 hover:scale-[1.02]'
                        : 'bg-[#162024] hover:bg-[#233137] text-[#E8ECEF] border border-[#233137]'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-14 max-w-3xl mx-auto p-4 rounded-2xl bg-[#11171B] border border-[#233137] flex items-center justify-center gap-3 text-xs sm:text-sm text-[#8E9FA8] text-center">
          <ShieldCheck className="w-5 h-5 text-[#8DAA91] shrink-0" />
          <span>
            <strong className="text-[#E8ECEF]">14-Day Full Satisfaction Guarantee</strong> on all explorer memberships. Instant cancellation with 1 click.
          </span>
        </div>

      </div>
    </section>
  );
}
