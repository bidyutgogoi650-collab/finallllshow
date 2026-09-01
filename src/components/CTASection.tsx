import { Sparkles, ArrowRight, ShieldCheck, Compass } from 'lucide-react';

interface CTASectionProps {
  onStartPlanning: () => void;
}

export function CTASection({ onStartPlanning }: CTASectionProps) {
  return (
    <section className="py-24 bg-[#080B0D] relative overflow-hidden border-t border-[#233137]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-r from-[#11171B] via-[#141C20] to-[#0E1317] p-8 sm:p-16 text-white shadow-2xl overflow-hidden border border-[#233137] nature-card-shadow">
          
          {/* Ambient Glows in Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#588157]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6B8B99]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#233137_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#162024]/80 text-[#8DAA91] border border-[#233137] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#8DAA91]" />
              <span>Ready in 15 Seconds</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-[#E8ECEF]">
              Cease passive browsing.{' '}
              <span className="font-serif-luxury italic font-normal text-[#8DAA91]">
                Command your trajectory.
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-[#8E9FA8] font-normal leading-relaxed max-w-xl mx-auto">
              Join over 120,000 discerning explorers using AI to architect bespoke, high-altitude alpine & cultural expeditions with exact telemetry, budget precision, and secret sanctuaries.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onStartPlanning}
                className="w-full sm:w-auto px-8 py-4 bg-[#588157] hover:bg-[#689467] text-[#080B0D] font-display text-base font-extrabold rounded-full transition-all shadow-xl shadow-[#588157]/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Compass className="w-5 h-5 text-[#080B0D]" />
                <span>Initialize Custom Route</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#8E9FA8]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#8DAA91]" />
                <span>No Credit Card Required</span>
              </div>
              <span className="opacity-40">•</span>
              <span>3 Complimentary Routes</span>
              <span className="opacity-40">•</span>
              <span>Instant Export to GPX & PDF</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
