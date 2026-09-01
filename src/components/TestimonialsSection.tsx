import { TESTIMONIALS } from '../data/mockData';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const featured = TESTIMONIALS[0];
  const secondary = TESTIMONIALS.slice(1);

  return (
    <section id="testimonials" className="py-24 bg-[#080B0D] relative border-t border-[#233137]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#11171B] border border-[#233137] text-[#8DAA91] text-xs font-bold uppercase tracking-wider mb-4">
              <Star className="w-3.5 h-3.5 fill-[#588157] text-[#588157]" />
              <span>Verified Dispatch Reports</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#E8ECEF] tracking-tight">
              Real Adventurers. <br />
              <span className="font-serif-luxury font-normal italic text-[#8DAA91]">Flawless Trajectories.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#8E9FA8] font-normal leading-relaxed">
            See how worldwide high-altitude explorers save dozens of planning hours and uncover secluded alpine vistas and hidden backcountry routes.
          </p>
        </div>

        {/* Asymmetrical Layout: 7-col Featured Expedition Story + 5-col Stacked Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Featured Grand Testimonial Card (7 cols) */}
          <div className="lg:col-span-7 bg-[#11171B] rounded-3xl p-8 sm:p-10 border border-[#233137] shadow-2xl relative overflow-hidden flex flex-col justify-between nature-card-shadow nature-card-hover">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#588157]/5 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-1 text-[#588157]">
                  {[...Array(featured.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#588157]" />
                  ))}
                  <span className="text-xs font-mono font-bold text-[#E8ECEF] ml-2">5.0 / 5.0 VERIFIED</span>
                </div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider bg-[#162024] px-3 py-1 rounded-full border border-[#233137] text-[#8DAA91]">
                  {featured.travelerType}
                </span>
              </div>

              <Quote className="w-10 h-10 text-[#588157]/20 mb-4" />

              <p className="font-serif-luxury text-lg sm:text-2xl text-[#E8ECEF] leading-relaxed font-normal italic mb-8">
                "{featured.quote}"
              </p>
            </div>

            <div>
              {/* Telemetry Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 pt-6 border-t border-[#233137]">
                <div className="bg-[#080B0D] p-3.5 rounded-2xl border border-[#233137]">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#8E9FA8] block">Hours Saved</span>
                  <span className="font-display text-lg font-extrabold text-[#E8ECEF]">{featured.savedHours} Hours</span>
                </div>
                <div className="bg-[#080B0D] p-3.5 rounded-2xl border border-[#233137]">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#8E9FA8] block">Capital Saved</span>
                  <span className="font-display text-lg font-extrabold text-[#8DAA91]">${featured.tripCostSavedUSD} USD</span>
                </div>
                <div className="col-span-2 sm:col-span-1 bg-[#080B0D] p-3.5 rounded-2xl border border-[#233137]">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#8E9FA8] block">Waypoint Route</span>
                  <span className="font-display text-xs font-bold text-[#8DAA91] truncate block mt-1">{featured.destination}</span>
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={featured.avatar}
                  alt={featured.name}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-[#588157]/40 shadow-lg"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-display font-bold text-[#E8ECEF] text-base">{featured.name}</h4>
                    <ShieldCheck className="w-4 h-4 text-[#8DAA91]" title="Verified Expedition Leader" />
                  </div>
                  <span className="text-xs text-[#8E9FA8] block">{featured.role}</span>
                  <span className="text-xs text-[#8DAA91] font-mono font-medium">{featured.destination}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 5-col Stacked Secondary Testimonials */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {secondary.map((t) => (
              <div
                key={t.id}
                className="bg-[#11171B] rounded-3xl p-6 sm:p-7 border border-[#233137] shadow-xl flex flex-col justify-between flex-1 nature-card-hover"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-[#588157]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#588157]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider bg-[#162024] px-2.5 py-0.5 rounded-full border border-[#233137] text-[#8DAA91]">
                      {t.travelerType}
                    </span>
                  </div>

                  <p className="text-[#E8ECEF]/90 text-xs sm:text-sm leading-relaxed italic mb-4 font-serif-luxury font-normal">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#233137] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-xl object-cover border border-[#233137]"
                    />
                    <div>
                      <div className="flex items-center gap-1">
                        <h4 className="font-display font-bold text-[#E8ECEF] text-xs sm:text-sm">{t.name}</h4>
                        <ShieldCheck className="w-3 h-3 text-[#8DAA91]" />
                      </div>
                      <span className="text-[11px] text-[#8E9FA8] block">{t.destination}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-mono uppercase text-[#8E9FA8] block">Saved</span>
                    <span className="text-xs font-mono font-bold text-[#8DAA91]">${t.tripCostSavedUSD} USD</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
