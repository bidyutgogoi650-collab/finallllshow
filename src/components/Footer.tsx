import { useState, FormEvent } from 'react';
import { 
  Mountain, 
  Send, 
  Check, 
  Globe, 
  ShieldCheck, 
  Instagram, 
  Twitter, 
  Youtube, 
  Sparkles,
  Compass
} from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#05080A] text-[#8E9FA8] pt-20 pb-12 border-t border-[#233137]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-[#233137]">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#588157] to-[#3E633D] flex items-center justify-center text-[#080B0D] shadow-lg shadow-[#588157]/20 group-hover:scale-105 transition-transform">
                <Mountain className="w-5 h-5 text-[#080B0D]" />
              </div>
              <span className="font-display text-xl font-extrabold tracking-wider uppercase text-[#E8ECEF]">
                Driftway<span className="text-[#588157]">.</span>
              </span>
            </a>

            <p className="text-xs sm:text-sm text-[#8E9FA8] max-w-sm leading-relaxed font-normal">
              The AI-driven wilderness and expedition platform that translates your terrain objectives, pacing, and altitude tolerance into bespoke day-by-day itineraries.
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <span className="block text-xs font-mono font-bold uppercase tracking-wider text-[#E8ECEF] mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#8DAA91]" />
                Join 45,000+ Backcountry & Expedition Leaders
              </span>
              {subscribed ? (
                <div className="p-3 bg-[#11171B] border border-[#588157]/40 rounded-xl text-[#8DAA91] text-xs font-medium flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#8DAA91]" />
                  <span>Welcome to the expedition club. Check your inbox for 10 Hidden Alpine Gems.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-sm">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full px-4 py-2.5 bg-[#11171B] border border-[#233137] rounded-xl text-xs text-[#E8ECEF] placeholder:text-[#8E9FA8]/60 focus:outline-hidden focus:border-[#588157]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-[#588157] hover:bg-[#689467] text-[#080B0D] font-bold rounded-xl text-xs transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer shadow-md shadow-[#588157]/15"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 2: Destinations */}
          <div>
            <h4 className="font-display text-xs font-mono font-bold text-[#E8ECEF] uppercase tracking-wider mb-4">
              EXPEDITION ROUTES
            </h4>
            <ul className="space-y-2.5 text-xs text-[#8E9FA8]">
              <li><a href="#destinations" className="hover:text-[#8DAA91] transition-colors">Kyoto & Alpine Japan</a></li>
              <li><a href="#destinations" className="hover:text-[#8DAA91] transition-colors">Dolomites & Lake Braies</a></li>
              <li><a href="#destinations" className="hover:text-[#8DAA91] transition-colors">South Iceland Waterfalls</a></li>
              <li><a href="#destinations" className="hover:text-[#8DAA91] transition-colors">Swiss Alps & Zermatt</a></li>
              <li><a href="#destinations" className="hover:text-[#8DAA91] transition-colors">Costa Rica Cloudforests</a></li>
              <li><a href="#destinations" className="hover:text-[#8DAA91] transition-colors">Sahara Star Glamping</a></li>
            </ul>
          </div>

          {/* Col 3: Features & Tools */}
          <div>
            <h4 className="font-display text-xs font-mono font-bold text-[#E8ECEF] uppercase tracking-wider mb-4">
              AI ENGINES
            </h4>
            <ul className="space-y-2.5 text-xs text-[#8E9FA8]">
              <li><a href="#planner" className="hover:text-[#8DAA91] transition-colors">AI Itinerary Generator</a></li>
              <li><a href="#why-us" className="hover:text-[#8DAA91] transition-colors">Wilderness Radar & Route Finder</a></li>
              <li><a href="#features" className="hover:text-[#8DAA91] transition-colors">Dynamic Budget Optimizer</a></li>
              <li><a href="#features" className="hover:text-[#8DAA91] transition-colors">Expedition Gear Assistant</a></li>
              <li><a href="#pricing" className="hover:text-[#8DAA91] transition-colors">GPX & PDF Export</a></li>
              <li><a href="#itinerary-preview" className="hover:text-[#8DAA91] transition-colors">Live Itinerary Showcase</a></li>
            </ul>
          </div>

          {/* Col 4: Company & Trust */}
          <div>
            <h4 className="font-display text-xs font-mono font-bold text-[#E8ECEF] uppercase tracking-wider mb-4">
              EXPEDITION HQ
            </h4>
            <ul className="space-y-2.5 text-xs text-[#8E9FA8]">
              <li><a href="#testimonials" className="hover:text-[#8DAA91] transition-colors">Verified Explorer Reviews</a></li>
              <li><a href="#pricing" className="hover:text-[#8DAA91] transition-colors">Pricing & Guarantee</a></li>
              <li><a href="#faq" className="hover:text-[#8DAA91] transition-colors">Knowledgebase & FAQ</a></li>
              <li><a href="#" className="hover:text-[#8DAA91] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#8DAA91] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#8DAA91] transition-colors">Backcountry Guide Network</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E9FA8]/70">
          <div className="flex items-center gap-2">
            <span>© 2026 Driftway Technologies Inc. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-[#8E9FA8]">
            <span className="flex items-center gap-1 font-mono text-[11px]">
              Engineered for high-altitude explorers worldwide
            </span>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-[#8DAA91] transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="hover:text-[#8DAA91] transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="hover:text-[#8DAA91] transition-colors"><Youtube className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

