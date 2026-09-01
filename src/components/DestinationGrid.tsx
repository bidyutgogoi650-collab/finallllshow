import { useState } from 'react';
import { DestinationInspiration } from '../types';
import { POPULAR_DESTINATIONS } from '../data/mockData';
import { 
  Sparkles, 
  MapPin, 
  ArrowRight, 
  ChevronRight, 
  Star, 
  Compass, 
  Search, 
  Check, 
  Trees, 
  Mountain, 
  Navigation,
  Globe2
} from 'lucide-react';

interface DestinationGridProps {
  onSelectDestination: (dest: DestinationInspiration) => void;
}

export function DestinationGrid({ onSelectDestination }: DestinationGridProps) {
  const [selectedContinent, setSelectedContinent] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const continents = ['All', 'Europe', 'Asia', 'Americas', 'Africa'];

  // Nature-inspired theme palette for cards
  const cardThemes = [
    {
      color: '#588157', // Sage moss
      border: 'hover:border-[#588157]/60',
      badgeBg: 'bg-[#588157]/20 text-[#8DAA91] border-[#588157]/30',
      btnBg: 'bg-[#588157] hover:bg-[#689467] text-[#080B0D]',
      starFill: 'text-[#8DAA91] fill-[#8DAA91]',
      textAccent: 'text-[#8DAA91]'
    },
    {
      color: '#6B8B99', // Glacier slate
      border: 'hover:border-[#6B8B99]/60',
      badgeBg: 'bg-[#6B8B99]/20 text-[#88A4B0] border-[#6B8B99]/30',
      btnBg: 'bg-[#6B8B99] hover:bg-[#7E99A3] text-[#080B0D]',
      starFill: 'text-[#88A4B0] fill-[#88A4B0]',
      textAccent: 'text-[#88A4B0]'
    },
    {
      color: '#C26D45', // Terracotta
      border: 'hover:border-[#C26D45]/60',
      badgeBg: 'bg-[#C26D45]/20 text-[#E8A57E] border-[#C26D45]/30',
      btnBg: 'bg-[#C26D45] hover:bg-[#D47D55] text-[#080B0D]',
      starFill: 'text-[#E8A57E] fill-[#E8A57E]',
      textAccent: 'text-[#E8A57E]'
    },
    {
      color: '#C5A880', // Warm Sandstone
      border: 'hover:border-[#C5A880]/60',
      badgeBg: 'bg-[#C5A880]/20 text-[#DFD0BA] border-[#C5A880]/30',
      btnBg: 'bg-[#C5A880] hover:bg-[#D4B890] text-[#080B0D]',
      starFill: 'text-[#DFD0BA] fill-[#DFD0BA]',
      textAccent: 'text-[#DFD0BA]'
    },
    {
      color: '#C98A4B', // Warm Ochre
      border: 'hover:border-[#C98A4B]/60',
      badgeBg: 'bg-[#C98A4B]/20 text-[#E2B380] border-[#C98A4B]/30',
      btnBg: 'bg-[#C98A4B] hover:bg-[#DCA062] text-[#080B0D]',
      starFill: 'text-[#E2B380] fill-[#E2B380]',
      textAccent: 'text-[#E2B380]'
    }
  ];

  const filteredDestinations = POPULAR_DESTINATIONS.filter((dest) => {
    const matchesContinent = 
      selectedContinent === 'All' || dest.continent === selectedContinent;
    const matchesSearch = 
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesContinent && matchesSearch;
  });

  return (
    <section id="destinations" className="py-24 bg-[#0A0E11] relative overflow-hidden border-t border-[#233137]/60">
      
      {/* Ambient background glow in natural forest & mineral tones */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#588157]/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#6B8B99]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - "The Wonders Of Nature" */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 text-center sm:text-left">
          <div className="mx-auto sm:mx-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#11171B] border border-[#233137] text-[#8DAA91] text-xs font-bold uppercase tracking-wider mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-[#8DAA91]" />
              <span>Curated Wild Escapes</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#E8ECEF] tracking-tight">
              The Wonders Of Nature
            </h2>
            <p className="mt-2 font-serif-luxury text-base sm:text-lg text-[#8E9FA8] max-w-xl italic">
              Untouched sanctuaries and timeless trails curated for genuine explorers.
            </p>
          </div>

          {/* Calming Sage Circular Action Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                const el = document.getElementById('extended-wonders');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              aria-label="View more wonders"
              className="w-10 h-10 rounded-full bg-[#588157] hover:bg-[#689467] text-[#080B0D] flex items-center justify-center font-bold shadow-md shadow-[#588157]/15 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* ASYMMETRICAL EDITORIAL BENTO GALLERY WITH RANDOMIZED / VARIED IMAGE SIZES */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-16 items-stretch">
          
          {/* Card 1: Grand Featured Hero (Span 7 cols - Wide Cinematic Aspect) */}
          <div
            onClick={() => {
              onSelectDestination({
                id: 'camel-hill',
                name: 'Camel Hill Ridge',
                country: 'Alpine Ridge, Switzerland',
                continent: 'Europe',
                tag: 'Glacial Summit',
                tagline: 'Authentic high-altitude panoramic ridge traverse.',
                description: 'Camel Hill in Switzerland offers unforgettable outdoor wilderness, panoramic ridge hikes, and serene glacial views.',
                heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85',
                gallery: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85'],
                startingPriceUSD: 1450,
                idealDurationDays: 6,
                bestSeason: 'June – October',
                matchScore: 99,
                travelStyle: ['adventure', 'relaxation'],
                highlights: ['Alpine Ridge Panorama', 'Glacial Ice Tarns', 'Sunset Valley Point'],
                presetPrompt: '6 days alpine expedition exploring Camel Hill Swiss ridges'
              });
            }}
            className="md:col-span-7 relative rounded-3xl overflow-hidden min-h-[380px] lg:min-h-[460px] border border-[#233137] hover:border-[#6B8B99]/70 bg-[#11171B] cursor-pointer nature-card-shadow nature-card-hover flex flex-col justify-between p-6 sm:p-8 group"
          >
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85"
              alt="Camel Hill Ridge"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.80]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080B0D] via-[#080B0D]/40 to-transparent" />

            {/* Top badges */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3 py-1 bg-[#6B8B99] text-[#080B0D] text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
                Glacial Alpine
              </span>
              <div className="px-3 py-1 bg-[#080B0D]/80 backdrop-blur-md rounded-full text-xs font-mono text-[#88A4B0] border border-[#233137] flex items-center gap-1.5">
                <Navigation className="w-3 h-3 text-[#88A4B0]" />
                <span>3,240m Elev</span>
              </div>
            </div>

            {/* Bottom editorial detail */}
            <div className="relative z-10">
              <div className="flex items-center gap-1.5 text-[#88A4B0] mb-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span className="text-xs uppercase font-bold tracking-wider">
                  Alpine Ridge, Switzerland
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#E8ECEF] tracking-tight group-hover:text-[#88A4B0] transition-colors">
                Camel Hill Ridge
              </h3>
              <p className="text-xs sm:text-sm text-[#8E9FA8] mt-2 max-w-md leading-relaxed">
                Untamed alpine ridgelines, glacial tarns, and remote mountain huts positioned high above the cloudline.
              </p>
              
              <div className="mt-5 flex items-center justify-between pt-4 border-t border-[#233137]/80">
                <div className="flex items-center gap-2 text-xs text-[#E8ECEF]">
                  <span className="font-bold text-[#88A4B0]">$1,450</span>
                  <span className="text-[#8E9FA8]">• 6 Days Route</span>
                </div>
                <span className="text-xs text-[#88A4B0] font-bold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                  Explore Route <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Tall Vertical Portrait (Span 5 cols - Organic Portrait Aspect) */}
          <div
            onClick={() => {
              onSelectDestination({
                id: 'havana-street',
                name: 'Havana Woodlands Trail',
                country: 'Emerald Woodlands, Costa Rica',
                continent: 'Americas',
                tag: 'Sunlit Canopy',
                tagline: 'Deep forest trails and canopy sanctuaries.',
                description: 'Emerald woodlands in Costa Rica featuring vibrant wildlife sanctuaries, cloud forests, and thermal hot springs.',
                heroImage: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=85',
                gallery: ['https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=85'],
                startingPriceUSD: 1150,
                idealDurationDays: 5,
                bestSeason: 'Nov – May',
                matchScore: 98,
                travelStyle: ['adventure', 'relaxation'],
                highlights: ['Canopy Suspension Bridges', 'Hidden River Canyons'],
                presetPrompt: '5 days rainforest adventure in Emerald Woodlands'
              });
            }}
            className="md:col-span-5 relative rounded-3xl overflow-hidden min-h-[380px] lg:min-h-[460px] border border-[#233137] hover:border-[#588157]/70 bg-[#11171B] cursor-pointer nature-card-shadow nature-card-hover flex flex-col justify-between p-6 sm:p-8 group"
          >
            <img
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=85"
              alt="Havana Woodlands"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.80]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080B0D] via-[#080B0D]/40 to-transparent" />

            <div className="relative z-10 flex justify-between items-center">
              <span className="px-3 py-1 bg-[#588157] text-[#080B0D] text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
                Rainforest Preserve
              </span>
              <span className="px-2.5 py-1 bg-[#080B0D]/80 text-[#8DAA91] text-[10px] font-mono rounded-md border border-[#233137]">
                Tropical Canopy
              </span>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-1.5 text-[#8DAA91] mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span className="text-[10px] uppercase font-bold tracking-wider">Emerald Woodlands</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#E8ECEF] group-hover:text-[#8DAA91] transition-colors">
                Havana Woodlands
              </h3>
              <p className="text-xs text-[#8E9FA8] mt-1.5 leading-relaxed">
                Sun-dappled canopy paths with rare fauna and pristine thermal springs.
              </p>
              <div className="mt-5 pt-3.5 border-t border-[#233137] flex items-center justify-between">
                <span className="text-xs font-bold text-[#8DAA91]">From $1,150</span>
                <span className="text-xs text-[#8DAA91] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Plan Route <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>

          {/* Row 2 Asymmetrical Cards: 3 Cards of Differing Widths and Heights */}
          
          {/* Card 3: Ghoom Forest Pass (Span 4 cols - Compact Forest Card) */}
          <div
            onClick={() => {
              onSelectDestination({
                id: 'ghoom-forest',
                name: 'Ghoom Himalayan Sanctuary',
                country: 'Darjeeling & Himalayas',
                continent: 'Asia',
                tag: 'Wildlife Canopy',
                tagline: 'Ancient tea valleys and misty Himalayan trails.',
                description: 'Ghoom Himalayan Sanctuary provides historic narrow-gauge rail history, monastery vistas, and secluded rhododendron forests.',
                heroImage: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=85',
                gallery: ['https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=85'],
                startingPriceUSD: 980,
                idealDurationDays: 6,
                bestSeason: 'March – May, Oct – Dec',
                matchScore: 97,
                travelStyle: ['cultural', 'adventure'],
                highlights: ['Monastery Sunrise', 'Himalayan Ridge Views'],
                presetPrompt: '6 days Himalayan sanctuary discovery in Ghoom'
              });
            }}
            className="md:col-span-4 relative rounded-3xl overflow-hidden min-h-[320px] border border-[#233137] hover:border-[#C5A880]/70 bg-[#11171B] cursor-pointer nature-card-shadow nature-card-hover flex flex-col justify-between p-6 group"
          >
            <img
              src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=85"
              alt="Ghoom Forest"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.80]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080B0D] via-[#080B0D]/40 to-transparent" />

            <div className="relative z-10 flex justify-end">
              <span className="px-2.5 py-1 bg-[#080B0D]/80 text-[#DFD0BA] text-[10px] font-mono uppercase tracking-wider rounded-md border border-[#233137]">
                Himalayan Tea Ridge
              </span>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-1.5 text-[#DFD0BA] mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span className="text-[10px] uppercase font-bold tracking-wider">Himalayan Sanctuary</span>
              </div>
              <h3 className="font-display text-xl font-bold text-[#E8ECEF] group-hover:text-[#DFD0BA] transition-colors">
                Ghoom Forest Pass
              </h3>
              <p className="text-xs text-[#8E9FA8] mt-1 line-clamp-2">
                Ancient pine forests, sacred monasteries, and dramatic snowcaps.
              </p>
              <div className="mt-4 pt-3 border-t border-[#233137] flex items-center justify-between">
                <span className="text-xs font-bold text-[#DFD0BA]">From $980</span>
                <span className="text-xs text-[#DFD0BA] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Plan <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>

          {/* Card 4: Amalfi Cliffside (Span 4 cols - Coastal Terracotta) */}
          <div
            onClick={() => {
              const amalfi = POPULAR_DESTINATIONS.find(d => d.id === 'amalfi-italy') || POPULAR_DESTINATIONS[1];
              onSelectDestination(amalfi);
            }}
            className="md:col-span-4 relative rounded-3xl overflow-hidden min-h-[320px] border border-[#233137] hover:border-[#C26D45]/70 bg-[#11171B] cursor-pointer nature-card-shadow nature-card-hover flex flex-col justify-between p-6 group"
          >
            <img
              src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=85"
              alt="Amalfi Coast"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.80]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080B0D] via-[#080B0D]/40 to-transparent" />

            <div className="relative z-10 flex justify-end">
              <span className="px-2.5 py-1 bg-[#080B0D]/80 text-[#E8A57E] text-[10px] font-mono uppercase tracking-wider rounded-md border border-[#233137]">
                Coastal Terracotta
              </span>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-1.5 text-[#E8A57E] mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span className="text-[10px] uppercase font-bold tracking-wider">Mediterranean Cliffs</span>
              </div>
              <h3 className="font-display text-xl font-bold text-[#E8ECEF] group-hover:text-[#E8A57E] transition-colors">
                Amalfi Coast & Capri
              </h3>
              <p className="text-xs text-[#8E9FA8] mt-1 line-clamp-2">
                Path of the Gods cliffside trekking and secluded sapphire sea coves.
              </p>
              <div className="mt-4 pt-3 border-t border-[#233137] flex items-center justify-between">
                <span className="text-xs font-bold text-[#E8A57E]">From $1,850</span>
                <span className="text-xs text-[#E8A57E] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Plan <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>

          {/* Card 5: Iceland Basalt Canyons (Span 4 cols - Basalt Glacier) */}
          <div
            onClick={() => {
              const iceland = POPULAR_DESTINATIONS.find(d => d.id === 'iceland-ring-road') || POPULAR_DESTINATIONS[2];
              onSelectDestination(iceland);
            }}
            className="md:col-span-4 relative rounded-3xl overflow-hidden min-h-[320px] border border-[#233137] hover:border-[#6B8B99]/70 bg-[#11171B] cursor-pointer nature-card-shadow nature-card-hover flex flex-col justify-between p-6 group"
          >
            <img
              src="https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800&q=85"
              alt="South Iceland"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.80]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080B0D] via-[#080B0D]/40 to-transparent" />

            <div className="relative z-10 flex justify-end">
              <span className="px-2.5 py-1 bg-[#080B0D]/80 text-[#88A4B0] text-[10px] font-mono uppercase tracking-wider rounded-md border border-[#233137]">
                Basalt Lagoon
              </span>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-1.5 text-[#88A4B0] mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span className="text-[10px] uppercase font-bold tracking-wider">Nordic Wilderness</span>
              </div>
              <h3 className="font-display text-xl font-bold text-[#E8ECEF] group-hover:text-[#88A4B0] transition-colors">
                South Coast Glaciers
              </h3>
              <p className="text-xs text-[#8E9FA8] mt-1 line-clamp-2">
                Cascading glacial falls, black sand beaches, and geothermal lagoons.
              </p>
              <div className="mt-4 pt-3 border-t border-[#233137] flex items-center justify-between">
                <span className="text-xs font-bold text-[#88A4B0]">From $1,650</span>
                <span className="text-xs text-[#88A4B0] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Plan <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Extended Curated Global Itineraries Header */}
        <div id="extended-wonders" className="pt-10 border-t border-[#233137]/60 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11171B] border border-[#233137] text-[#8DAA91] text-xs font-bold uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5 text-[#8DAA91]" />
              <span>Full Exploration Catalog</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#E8ECEF]">
              Curated Expedition Templates
            </h3>
          </div>

          {/* Search & Continent Filters with Natural Accents */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-[#8E9FA8] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter catalog..."
                className="pl-9 pr-4 py-2 bg-[#11171B] border border-[#233137] rounded-full text-xs font-medium text-[#E8ECEF] placeholder:text-[#8E9FA8]/60 focus:outline-hidden focus:border-[#588157] w-full sm:w-56"
              />
            </div>
            
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {continents.map((continent) => (
                <button
                  key={continent}
                  onClick={() => setSelectedContinent(continent)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    selectedContinent === continent
                      ? 'bg-[#588157] text-[#080B0D] shadow-xs'
                      : 'bg-[#11171B] text-[#8E9FA8] hover:text-[#E8ECEF] border border-[#233137]'
                  }`}
                >
                  {continent}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Global Catalog Grid with Natural Palettes and Varied Editorial Card Heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredDestinations.map((dest, idx) => {
            const theme = cardThemes[idx % cardThemes.length];
            // Varied image aspect ratios for an editorial magazine feel
            const aspectClass = idx % 3 === 0 ? 'aspect-[16/11]' : idx % 3 === 1 ? 'aspect-[16/10]' : 'aspect-[16/12]';

            return (
              <div
                key={dest.id}
                className={`group bg-[#11171B] rounded-3xl border border-[#233137] ${theme.border} overflow-hidden shadow-lg flex flex-col justify-between transition-all duration-300 nature-card-shadow`}
              >
                {/* Card Image Banner with Varied Ratios */}
                <div className={`relative ${aspectClass} overflow-hidden bg-[#080B0D]`}>
                  <img
                    src={dest.heroImage}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.88]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11171B] via-transparent to-transparent" />

                  {/* Match Score Badge with Soft Natural Tone */}
                  <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#080B0D]/85 backdrop-blur-md text-[#E8ECEF] text-xs font-bold border border-[#233137]">
                    <Star className={`w-3 h-3 ${theme.starFill}`} />
                    <span>{dest.matchScore}% Match</span>
                  </div>

                  {/* Starting Price Badge */}
                  <div className={`absolute top-3 right-3 px-3 py-1 rounded-full ${theme.btnBg} text-xs font-bold shadow-xs`}>
                    From ${dest.startingPriceUSD}
                  </div>

                  {/* Bottom Caption on Image */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${theme.textAccent} block`}>
                      {dest.country} • {dest.idealDurationDays} Days
                    </span>
                    <h4 className="font-display text-lg font-bold tracking-tight text-[#E8ECEF]">
                      {dest.name}
                    </h4>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <p className="text-xs text-[#8E9FA8] line-clamp-2 leading-relaxed">
                      {dest.description}
                    </p>

                    {/* Highlights Bullet List */}
                    <div className="mt-3.5 space-y-1.5">
                      {dest.highlights.slice(0, 2).map((hl, hlIdx) => (
                        <div key={hlIdx} className="flex items-center gap-2 text-xs text-[#E8ECEF]/85">
                          <Check className={`w-3.5 h-3.5 ${theme.textAccent} shrink-0`} />
                          <span className="truncate">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Season & Action Button */}
                  <div className="pt-3.5 border-t border-[#233137] flex items-center justify-between gap-3">
                    <div className="text-[11px] text-[#8E9FA8]">
                      <span className="font-bold text-[#E8ECEF] block text-[10px] uppercase">Best Season</span>
                      <span>{dest.bestSeason}</span>
                    </div>

                    <button
                      onClick={() => onSelectDestination(dest)}
                      className={`flex items-center gap-1.5 px-4 py-2 ${theme.btnBg} rounded-full text-xs font-bold transition-all shadow-xs hover:scale-105 cursor-pointer`}
                    >
                      <span>Plan Route</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


