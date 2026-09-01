import { useState, FormEvent } from 'react';
import { 
  Sparkles, 
  MapPin, 
  ArrowRight, 
  Compass, 
  Mountain,
  Navigation,
  Wind,
  ShieldCheck,
  TrendingUp,
  Leaf
} from 'lucide-react';

interface HeroSectionProps {
  onQuickPlan: (destination: string) => void;
  onExploreDestinations: () => void;
}

export function HeroSection({ onQuickPlan, onExploreDestinations }: HeroSectionProps) {
  const [quickInput, setQuickInput] = useState('');
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      id: '01',
      title: 'ADVENTURE',
      tagline: 'HIGH ALPINE EXPEDITION',
      subtitle: 'Create Your Outdoor Adventure. Discover With Us.',
      destinationQuery: 'Lauterbrunnen & Zermatt, Switzerland',
      bgImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=90',
      pillLabel: 'Alpine serenity along glacial summits & high passes',
      location: 'Swiss Alpine Ridges',
      elevation: '3,842 m',
      temp: '11°C • Crisp Sun',
      accentColor: '#7E99A3', // Glacier Slate
      accentBg: 'bg-[#6B8B99]/15',
      accentBorder: 'border-[#6B8B99]/40',
      accentText: 'text-[#88A4B0]',
      accentBtn: 'bg-[#6B8B99] hover:bg-[#7E99A3] text-[#080B0D]',
      category: 'Glacial Alpine'
    },
    {
      id: '02',
      title: 'EXPEDITION',
      tagline: 'FOREST SHRINE TRAVERSE',
      subtitle: 'Create Your Outdoor Adventure. Discover With Us.',
      destinationQuery: 'Kyoto & Tokyo, Japan',
      bgImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=2000&q=90',
      pillLabel: 'Secluded bamboo groves, moss gardens & sacred trails',
      location: 'Highland Forest Shrines',
      elevation: '1,240 m',
      temp: '17°C • Mountain Mist',
      accentColor: '#588157', // Sage Moss
      accentBg: 'bg-[#588157]/15',
      accentBorder: 'border-[#588157]/40',
      accentText: 'text-[#8DAA91]',
      accentBtn: 'bg-[#588157] hover:bg-[#689467] text-[#080B0D]',
      category: 'Cedar Forest'
    },
    {
      id: '03',
      title: 'WILDERNESS',
      tagline: 'VOLCANIC GLACIER TRAIL',
      subtitle: 'Create Your Outdoor Adventure. Discover With Us.',
      destinationQuery: 'South Iceland',
      bgImage: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=2000&q=90',
      pillLabel: 'Untamed basalt canyons, black sand dunes & waterfalls',
      location: 'Volcanic Glaciers & Falls',
      elevation: '940 m',
      temp: '6°C • Arctic Clear',
      accentColor: '#C4A880', // Warm Sandstone
      accentBg: 'bg-[#C4A880]/15',
      accentBorder: 'border-[#C4A880]/40',
      accentText: 'text-[#DFD0BA]',
      accentBtn: 'bg-[#C4A880] hover:bg-[#D4B890] text-[#080B0D]',
      category: 'Basalt Wilderness'
    },
    {
      id: '04',
      title: 'HORIZONS',
      tagline: 'MEDITERRANEAN CLIFFS',
      subtitle: 'Create Your Outdoor Adventure. Discover With Us.',
      destinationQuery: 'Amalfi Coast, Italy',
      bgImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2000&q=90',
      pillLabel: 'Path of the Gods cliffside panoramic trekking',
      location: 'Mediterranean Cliff Trails',
      elevation: '650 m',
      temp: '22°C • Coastal Breeze',
      accentColor: '#C26D45', // Terracotta
      accentBg: 'bg-[#C26D45]/15',
      accentBorder: 'border-[#C26D45]/40',
      accentText: 'text-[#E8A57E]',
      accentBtn: 'bg-[#C26D45] hover:bg-[#D47D55] text-[#080B0D]',
      category: 'Coastal Ridgeline'
    }
  ];

  const currentSlideData = heroSlides[activeSlide];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (quickInput.trim()) {
      onQuickPlan(quickInput.trim());
    } else {
      onQuickPlan(currentSlideData.destinationQuery);
    }
  };

  return (
    <section 
      id="hero-section"
      className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-12 overflow-hidden bg-[#080B0D]"
    >
      {/* Dynamic Background Image with Asymmetric Ambient Vignettes */}
      <div className="absolute inset-0 z-0">
        <img
          src={currentSlideData.bgImage}
          alt="Outdoor Adventure Mountain Landscape"
          className="w-full h-full object-cover object-center scale-105 transition-all duration-1000 ease-out brightness-[0.72] contrast-105"
        />
        {/* Soft Organic Atmospheric Ambient Glows - Soothing to Eyes */}
        <div 
          className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full blur-[150px] pointer-events-none transition-colors duration-1000 opacity-20"
          style={{ backgroundColor: currentSlideData.accentColor }}
        />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#162024]/60 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080B0D] via-[#080B0D]/50 to-[#080B0D]/75" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#080B0D]/30 to-[#080B0D]/85" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-12 items-center gap-6">
          
          {/* Left Vertical Pagination (01, 02, 03, 04) with Natural Colors */}
          <div className="col-span-2 sm:col-span-1 flex flex-col items-center gap-5 text-xs font-mono">
            {heroSlides.map((slide, idx) => {
              const isActive = activeSlide === idx;
              return (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`group flex items-center gap-2 transition-all cursor-pointer ${
                    isActive ? `${slide.accentText} font-bold scale-105` : 'text-[#8E9FA8]/50 hover:text-[#E8ECEF]'
                  }`}
                >
                  <span className="text-xs tracking-widest">{slide.id}</span>
                  {isActive && (
                    <div 
                      className="w-4 h-[2px] rounded-full shadow-xs" 
                      style={{ backgroundColor: slide.accentColor }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Main Display Headline & Content */}
          <div className="col-span-10 sm:col-span-11 text-center sm:text-left">
            
            {/* Live Telemetry Pill with soothing natural borders & badges */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#11171B]/90 border ${currentSlideData.accentBorder} text-xs font-semibold backdrop-blur-xl mb-3 shadow-md`}>
              <span 
                className="w-2 h-2 rounded-full animate-pulse" 
                style={{ backgroundColor: currentSlideData.accentColor }}
              />
              <span className={`${currentSlideData.accentText} font-bold uppercase tracking-widest text-[10px]`}>
                {currentSlideData.tagline}
              </span>
              <span className="text-[#233137]">•</span>
              <span className="text-[#8E9FA8] text-[11px]">
                Elevation: {currentSlideData.elevation}
              </span>
            </div>

            {/* Smaller, Refined Display Cutout Title with Lessened Opacity */}
            <div className="overflow-hidden py-1">
              <h1 className="hero-adventure-text text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.14em] sm:tracking-[0.18em] font-extrabold select-none opacity-75">
                {currentSlideData.title}
              </h1>
            </div>

            {/* Subtitle with refined natural underline */}
            <div className="mt-2 sm:mt-3 max-w-2xl">
              <p className="font-serif-luxury text-base sm:text-xl md:text-2xl text-[#E8ECEF]/90 font-normal italic tracking-wide">
                {currentSlideData.subtitle}
              </p>
              <div 
                className="w-24 h-[2px] mt-3 rounded-full transition-all duration-700 opacity-80"
                style={{ backgroundColor: currentSlideData.accentColor }}
              />
            </div>

            {/* Integrated AI Expedition Generator Input with Gentle Natural Colors */}
            <div className="mt-7 max-w-xl">
              <form 
                onSubmit={handleSubmit}
                className="p-1.5 sm:p-2 bg-[#11171B]/90 border border-[#233137] focus-within:border-[#588157] rounded-full backdrop-blur-xl flex items-center gap-2 shadow-xl transition-all"
              >
                <div className="flex items-center gap-2.5 px-3 sm:px-4 py-1.5 flex-1 min-w-0">
                  <Mountain 
                    className="w-4 h-4 shrink-0 transition-colors" 
                    style={{ color: currentSlideData.accentColor }}
                  />
                  <input
                    type="text"
                    value={quickInput}
                    onChange={(e) => setQuickInput(e.target.value)}
                    placeholder={`Where is your next escape? (e.g. ${currentSlideData.destinationQuery})`}
                    className="w-full bg-transparent text-[#E8ECEF] placeholder:text-[#8E9FA8]/60 text-xs sm:text-sm font-normal focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className={`flex items-center justify-center gap-1.5 px-5 sm:px-6 py-2.5 ${currentSlideData.accentBtn} text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full transition-all shrink-0 shadow-md hover:scale-105 active:scale-95 cursor-pointer`}
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Horizontal Natural Highlight Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 border-t border-[#233137]/80 pt-6">
          {heroSlides.map((slide, idx) => {
            const isActive = activeSlide === idx;
            return (
              <button
                key={slide.id}
                onClick={() => {
                  setActiveSlide(idx);
                  onQuickPlan(slide.destinationQuery);
                }}
                className={`text-left p-3.5 rounded-2xl transition-all cursor-pointer relative group ${
                  isActive 
                    ? 'bg-[#11171B] border shadow-lg' 
                    : 'bg-[#11171B]/50 hover:bg-[#11171B] border border-[#233137]/60 hover:border-[#233137]'
                }`}
                style={{
                  borderColor: isActive ? slide.accentColor : undefined
                }}
              >
                {/* Active Indicator Top Line */}
                {isActive && (
                  <div 
                    className="absolute -top-[25px] left-0 right-0 h-[2px]" 
                    style={{ backgroundColor: slide.accentColor }}
                  />
                )}

                <div className="flex items-start gap-2.5">
                  <div 
                    className="p-1.5 rounded-xl shrink-0 mt-0.5 transition-colors"
                    style={{ 
                      backgroundColor: isActive ? slide.accentColor : 'rgba(35, 49, 55, 0.6)', 
                      color: isActive ? '#080B0D' : slide.accentColor 
                    }}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span 
                        className="text-[10px] uppercase font-bold tracking-widest block truncate"
                        style={{ color: slide.accentColor }}
                      >
                        {slide.location}
                      </span>
                      <span className="text-[9px] text-[#8E9FA8] font-mono shrink-0">
                        {slide.elevation}
                      </span>
                    </div>
                    <p className="text-xs text-[#E8ECEF]/85 font-normal line-clamp-2 mt-0.5">
                      {slide.pillLabel}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

    </section>
  );
}


