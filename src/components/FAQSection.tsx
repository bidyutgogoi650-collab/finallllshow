import { useState } from 'react';
import { FAQS } from '../data/mockData';
import { 
  ChevronDown, 
  HelpCircle, 
  Headphones, 
  ArrowUpRight 
} from 'lucide-react';

export function FAQSection() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-[#080B0D] relative border-t border-[#233137]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (5 Cols) - Sticky Context & Concierge Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#11171B] text-[#8DAA91] border border-[#233137] text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-[#8DAA91]" />
              <span>Expedition Knowledgebase</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#E8ECEF] tracking-tight leading-tight">
              Intelligence on <br />
              <span className="font-serif-luxury font-normal italic text-[#8DAA91]">Every Vector.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#8E9FA8] font-normal leading-relaxed">
              Everything you need to know about our AI wilderness routing engine, offline GPX/PDF synchronization, and real-time elevation telemetry calibration.
            </p>

            {/* Expedition Concierge Card */}
            <div className="p-6 bg-[#11171B] rounded-3xl border border-[#233137] space-y-4 shadow-xl nature-card-shadow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#588157]/10 border border-[#588157]/30 flex items-center justify-center text-[#8DAA91]">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-[#E8ECEF] text-sm">24/7 Alpine Concierge</h4>
                  <span className="text-[11px] text-[#8DAA91] font-mono">Live Dispatch: 1.8s response</span>
                </div>
              </div>

              <p className="text-xs text-[#8E9FA8] leading-relaxed">
                Planning an uncharted team expedition, summit ridge traversal, or private charter? Connect directly with our expedition specialists.
              </p>

              <a
                href="mailto:concierge@driftway.travel"
                className="w-full py-3 px-4 bg-[#162024] hover:bg-[#233137] text-[#8DAA91] border border-[#233137] rounded-2xl text-xs font-bold transition-all flex items-center justify-between group cursor-pointer"
              >
                <span>Dispatch Custom Inquiry</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column (7 Cols) - FAQ Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`bg-[#11171B] rounded-3xl border transition-all overflow-hidden ${
                    isOpen 
                      ? 'border-[#588157] shadow-xl shadow-[#588157]/5' 
                      : 'border-[#233137] hover:border-[#588157]/40'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full p-6 sm:p-7 text-left flex items-start justify-between gap-4 font-display font-bold text-base sm:text-lg text-[#E8ECEF] focus:outline-hidden cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#8DAA91] opacity-70">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="leading-snug">{faq.question}</span>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'bg-[#588157] text-[#080B0D] rotate-180 font-bold' : 'bg-[#080B0D] text-[#8E9FA8] border border-[#233137]'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-6 text-xs sm:text-sm text-[#8E9FA8] leading-relaxed animate-in fade-in duration-200 border-t border-[#233137] pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
