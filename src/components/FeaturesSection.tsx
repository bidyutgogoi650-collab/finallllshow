import { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Headphones, 
  Users2, 
  Compass, 
  Trees, 
  Eye, 
  Radio, 
  Maximize2,
  Award,
  Activity,
  Navigation,
  CheckCircle2
} from 'lucide-react';

export function FeaturesSection() {
  const [activeRadarPoint, setActiveRadarPoint] = useState<number>(0);

  const radarAnnotations = [
    {
      id: 'point-1',
      x: '24%',
      y: '32%',
      title: 'Ancient Cedar Canopy',
      text: "Protected ancient growth valley with 2 million cedar trees and high-canopy suspension traverses.",
      tag: 'Eco-Preserve',
      color: '#588157'
    },
    {
      id: 'point-2',
      x: '52%',
      y: '58%',
      title: 'Glacial Stream Crossing',
      text: "Crystal-clear glacial meltwaters with natural thermal pools and canyon stone crossings.",
      tag: 'Alpine Water',
      color: '#6B8B99'
    },
    {
      id: 'point-3',
      x: '78%',
      y: '42%',
      title: 'Summit Waypoint & Campsite',
      text: "Panoramic starlit plateau positioned at 2,840m altitude with solar-powered refuge domes.",
      tag: 'Summit 2,840m',
      color: '#C5A880'
    }
  ];

  return (
    <div id="why-us" className="bg-[#080B0D] text-[#E8ECEF]">
      
      {/* =========================================================================
          SECTION 1: Reason For Choosing Us (Asymmetric Natural Telemetry Layout)
          ========================================================================= */}
      <section className="py-24 border-t border-[#233137]/60 relative overflow-hidden">
        
        {/* Subtle ambient light */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#588157]/5 blur-[150px] pointer-events-none rounded-full" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#6B8B99]/5 blur-[150px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#11171B] border border-[#233137] text-[#8DAA91] text-xs font-bold uppercase tracking-wider mb-3">
                <Award className="w-3.5 h-3.5 text-[#8DAA91]" />
                <span>The Expedition Standard</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#E8ECEF] tracking-tight">
                Reason For Choosing Us
              </h2>
            </div>
            <p className="font-serif-luxury text-base sm:text-lg text-[#8E9FA8] max-w-md italic">
              We engineer authentic wilderness itineraries with live route telemetry and certified mountain guides.
            </p>
          </div>

          {/* Asymmetric 3-Card Layout: Hero Sage Card + 2 Stacked Mineral Slate / Sandstone Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Main Featured Anchor Card (7 cols) - Forest Sage Theme */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#11171B] border border-[#588157]/40 shadow-2xl relative overflow-hidden flex flex-col justify-between group nature-card-shadow nature-card-hover">
              <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#588157]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#588157]/20 transition-all duration-700" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#588157] flex items-center justify-center text-[#080B0D] shadow-lg shadow-[#588157]/20 group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-8 h-8 stroke-[2]" />
                  </div>
                  <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#8DAA91]">
                    20M+
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#E8ECEF] mb-3">
                  Tried, Tested & Globally Certified
                </h3>
                <p className="text-sm sm:text-base text-[#8E9FA8] leading-relaxed max-w-xl">
                  Over two decades of mapping backcountry routes across 6 continents. Every waypoint is verified by veteran mountaineers with real-time risk assessment.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#233137] flex items-center justify-between">
                <span className="text-xs font-mono text-[#8DAA91] flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#8DAA91] animate-pulse" />
                  <span>99.4% Expedition Safety Index</span>
                </span>
                <span className="text-xs text-[#E8ECEF] font-semibold flex items-center gap-1 group-hover:text-[#8DAA91] transition-colors">
                  Safety Protocol <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Right Stacked 2 Cards (5 cols) - Glacier Slate & Warm Sandstone */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Card 2: Glacier Slate Concierge */}
              <div className="flex-1 p-6 sm:p-7 rounded-3xl bg-[#11171B] border border-[#233137] hover:border-[#6B8B99]/60 transition-all shadow-xl flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#162024] text-[#88A4B0] flex items-center justify-center border border-[#233137] group-hover:border-[#6B8B99]/50 transition-colors">
                      <Headphones className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span className="font-display text-2xl font-bold text-[#88A4B0]">24/7</span>
                  </div>
                  <h4 className="font-display text-lg font-bold text-[#E8ECEF] group-hover:text-[#88A4B0] transition-colors">
                    Satellite Dispatch Support
                  </h4>
                  <p className="text-xs text-[#8E9FA8] mt-1.5 leading-relaxed">
                    Direct satellite check-ins, medical coordination, and weather alerts even outside cellular reach.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#233137] text-[11px] font-mono text-[#88A4B0]">
                  &lt; 2 min response standby
                </div>
              </div>

              {/* Card 3: Warm Sandstone Route Guarantee */}
              <div className="flex-1 p-6 sm:p-7 rounded-3xl bg-[#11171B] border border-[#233137] hover:border-[#C5A880]/60 transition-all shadow-xl flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#162024] text-[#DFD0BA] flex items-center justify-center border border-[#233137] group-hover:border-[#C5A880]/50 transition-colors">
                      <Users2 className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span className="font-display text-2xl font-bold text-[#DFD0BA]">100%</span>
                  </div>
                  <h4 className="font-display text-lg font-bold text-[#E8ECEF] group-hover:text-[#DFD0BA] transition-colors">
                    End-to-End Route Guarantee
                  </h4>
                  <p className="text-xs text-[#8E9FA8] mt-1.5 leading-relaxed">
                    Permits, gear provision, mountain huts, and vetted local guides handled under a single itinerary.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#233137] text-[11px] font-mono text-[#DFD0BA]">
                  Zero compromise logistics
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 2: Here's what makes a vacation perfect for you! (Varied Photo Bento)
          ========================================================================= */}
      <section className="py-24 bg-[#0B0F12] border-t border-[#233137]/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Asymmetric 4-Image Editorial Grid with Distinct Aspect Ratios */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                
                {/* Column 1: Staggered down */}
                <div className="space-y-4 sm:space-y-5">
                  <div className="rounded-3xl overflow-hidden aspect-[3/4] border border-[#233137] shadow-xl relative group">
                    <img
                      src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=85"
                      alt="Majestic Alpine Peak"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.85]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080B0D]/85 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-[10px] font-mono text-[#88A4B0] uppercase tracking-wider block">Summit Ridge</span>
                      <span className="text-xs font-bold text-[#E8ECEF]">Alpine Solitude</span>
                    </div>
                  </div>

                  <div className="rounded-3xl overflow-hidden aspect-[4/3] border border-[#233137] shadow-xl relative group">
                    <img
                      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=85"
                      alt="Winding Forest Road"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.85]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080B0D]/85 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-[10px] font-mono text-[#8DAA91] uppercase tracking-wider block">Valley Pass</span>
                      <span className="text-xs font-bold text-[#E8ECEF]">Hidden Trails</span>
                    </div>
                  </div>
                </div>

                {/* Column 2: Staggered up */}
                <div className="space-y-4 sm:space-y-5 pt-8 sm:pt-10">
                  <div className="rounded-3xl overflow-hidden aspect-[4/3] border border-[#233137] shadow-xl relative group">
                    <img
                      src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=85"
                      alt="Lush Forest Stream"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.85]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080B0D]/85 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-[10px] font-mono text-[#8DAA91] uppercase tracking-wider block">Highland Tarns</span>
                      <span className="text-xs font-bold text-[#E8ECEF]">Crystal Springs</span>
                    </div>
                  </div>

                  <div className="rounded-3xl overflow-hidden aspect-[3/4] border border-[#233137] shadow-xl relative group">
                    <img
                      src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=85"
                      alt="Cavern Beam Explorer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.85]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080B0D]/85 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-[10px] font-mono text-[#DFD0BA] uppercase tracking-wider block">Subterranean</span>
                      <span className="text-xs font-bold text-[#E8ECEF]">Cavern Chambers</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Editorial Narrative */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#11171B] border border-[#233137] text-[#8DAA91] text-xs font-bold uppercase tracking-wider mb-3">
                  <Compass className="w-3.5 h-3.5 text-[#8DAA91]" />
                  <span>Tailored Experience</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#E8ECEF] leading-tight tracking-tight">
                  Here’s what makes a vacation perfect for you!
                </h2>
                <div className="w-20 h-[2px] bg-[#588157] mt-4 rounded-full" />
              </div>

              <p className="text-sm sm:text-base text-[#8E9FA8] leading-relaxed font-normal">
                Whether you’re planning an intense alpine mountaineering traverse, a secluded woodland cabin retreat, or a scenic canyon expedition, our intelligent engine tailors every single day to your physical pace, budget, and season.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => {
                    const el = document.getElementById('planner');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#588157] hover:bg-[#689467] text-[#080B0D] text-sm font-bold uppercase tracking-wider rounded-full shadow-md shadow-[#588157]/15 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Build Itinerary</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2 text-xs font-mono text-[#8E9FA8] px-2">
                  <span className="w-2 h-2 rounded-full bg-[#588157]" />
                  <span>Instant AI Generation</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 3: Explore The Nature With Us (Interactive Forest Radar Viewfinder)
          ========================================================================= */}
      <section className="py-24 bg-[#080B0D] border-t border-[#233137]/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#11171B] border border-[#233137] text-[#8DAA91] text-xs font-bold uppercase tracking-wider mb-3">
              <Radio className="w-3.5 h-3.5 text-[#8DAA91] animate-pulse" />
              <span>Interactive Telemetry</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#E8ECEF] tracking-tight">
              Explore The Nature With Us
            </h2>
            <div className="w-20 h-[2px] bg-[#588157] mx-auto mt-3 rounded-full" />
          </div>

          {/* Interactive Viewfinder Panoramic Canvas */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#233137] shadow-2xl bg-[#11171B] min-h-[440px] sm:min-h-[520px]">
            
            {/* Deep Rainforest Background Image */}
            <img
              src="https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1800&q=85"
              alt="Deep Forest Canopy"
              className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.70] contrast-105"
            />
            <div className="absolute inset-0 bg-[#080B0D]/40 backdrop-blur-[1px]" />

            {/* Geometric SVG Radar Grid & Connecting Lines in Sage Moss */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-[#588157]/40" fill="none">
              <line x1="24%" y1="32%" x2="52%" y2="58%" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="52%" y1="58%" x2="78%" y2="42%" strokeWidth="1.5" strokeDasharray="4 4" />
              <rect x="68%" y="28%" width="22%" height="45%" stroke="#588157" strokeWidth="1.5" strokeDasharray="6 3" />
            </svg>

            {/* Viewfinder Target Annotations on Canvas */}
            {radarAnnotations.map((pt, idx) => {
              const isSelected = activeRadarPoint === idx;
              return (
                <div
                  key={pt.id}
                  style={{ left: pt.x, top: pt.y }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  {/* Glowing Radar Node */}
                  <button
                    onClick={() => setActiveRadarPoint(idx)}
                    className="relative group cursor-pointer focus:outline-hidden"
                  >
                    <span 
                      className="animate-ping absolute inline-flex h-6 w-6 rounded-full opacity-75"
                      style={{ backgroundColor: pt.color }}
                    />
                    <span 
                      className="relative inline-flex rounded-full h-5 w-5 border-2 border-[#080B0D] items-center justify-center text-[10px] font-black text-[#080B0D] shadow-md"
                      style={{ backgroundColor: pt.color }}
                    />
                  </button>

                  {/* Floating Annotation Callout Box */}
                  <div className={`mt-3 w-56 sm:w-64 p-4 bg-[#080B0D]/95 border border-[#233137] rounded-2xl backdrop-blur-xl shadow-2xl transition-all ${
                    isSelected ? 'ring-2 ring-[#588157] scale-105 opacity-100' : 'opacity-85 hover:opacity-100'
                  }`}>
                    <span 
                      className="text-[9px] uppercase font-bold tracking-wider block"
                      style={{ color: pt.color }}
                    >
                      {pt.tag}
                    </span>
                    <h4 className="text-xs font-bold text-[#E8ECEF] mt-0.5">
                      {pt.title}
                    </h4>
                    <p className="text-[11px] text-[#8E9FA8] mt-1 leading-relaxed">
                      {pt.text}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Top-Right HUD Coordinates Indicator */}
            <div className="absolute top-4 right-4 bg-[#080B0D]/90 border border-[#233137] px-3.5 py-1.5 rounded-full text-[10px] font-mono text-[#8DAA91] backdrop-blur-md hidden sm:flex items-center gap-2">
              <Radio className="w-3.5 h-3.5 text-[#8DAA91] animate-pulse" />
              <span>LAT 46.56° N • LON 8.01° E • 2,840M ALT</span>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}


