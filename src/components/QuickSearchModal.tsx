import { useState, useEffect, FormEvent } from 'react';
import { POPULAR_DESTINATIONS } from '../data/mockData';
import { DestinationInspiration } from '../types';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDestination: (dest: DestinationInspiration) => void;
  onCustomSearch: (query: string) => void;
}

export function QuickSearchModal({
  isOpen,
  onClose,
  onSelectDestination,
  onCustomSearch
}: QuickSearchModalProps) {
  const [query, setQuery] = useState('');

  // Keyboard shortcut listener for Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const filteredquay = POPULAR_DESTINATIONS.filter(d =>
    d.name.toLowerCase().includes(query.toLowerCase()) ||
    d.country.toLowerCase().includes(query.toLowerCase()) ||
    d.tag.toLowerCase().includes(query.toLowerCase())
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onCustomSearch(query.trim());
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-[#080B0D]/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Dialog */}
      <div 
        className="w-full max-w-2xl bg-[#11171B] rounded-3xl shadow-2xl border border-[#233137] overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar Input */}
        <form onSubmit={handleSubmit} className="p-4 border-b border-[#233137] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#8DAA91] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search expedition, mountain, country, or route (e.g. Dolomites, Kyoto, Iceland)..."
            className="w-full bg-transparent text-[#E8ECEF] placeholder:text-[#8E9FA8]/50 text-sm sm:text-base font-medium focus:outline-hidden"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-[#162024] text-[#8E9FA8] hover:text-[#E8ECEF] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </form>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-2">
          {query.trim() && (
            <button
              onClick={() => {
                onCustomSearch(query.trim());
                onClose();
              }}
              className="w-full text-left p-3 rounded-2xl bg-[#162024] hover:bg-[#233137] border border-[#233137] flex items-center justify-between transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#8DAA91]" />
                <span className="text-xs sm:text-sm font-bold text-[#E8ECEF]">
                  Generate Custom AI Expedition for "{query}"
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#8DAA91]" />
            </button>
          )}

          <div className="text-[11px] font-bold uppercase tracking-wider text-[#8E9FA8] px-2 pt-2">
            Curated Expeditions
          </div>

          {filteredquay.map((dest) => (
            <div
              key={dest.id}
              onClick={() => {
                onSelectDestination(dest);
                onClose();
              }}
              className="flex items-center justify-between p-3 rounded-2xl hover:bg-[#162024] cursor-pointer transition-colors group border border-transparent hover:border-[#233137]"
            >
              <div className="flex items-center gap-3">
                <img
                  src={dest.heroImage}
                  alt={dest.name}
                  className="w-12 h-12 rounded-xl object-cover border border-[#233137]"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#E8ECEF] text-sm group-hover:text-[#8DAA91] transition-colors">{dest.name}</span>
                    <span className="text-[10px] text-[#8DAA91] bg-[#080B0D] border border-[#233137] px-2 py-0.5 rounded-md font-semibold">
                      {dest.idealDurationDays} Days
                    </span>
                  </div>
                  <span className="text-xs text-[#8E9FA8] block truncate max-w-sm">
                    {dest.tagline}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs font-bold text-[#E8ECEF]">From ${dest.startingPriceUSD}</span>
                <span className="text-[10px] text-[#8E9FA8] block">{dest.bestSeason.split('&')[0]}</span>
              </div>
            </div>
          ))}

          {filteredquay.length === 0 && !query.trim() && (
            <div className="text-center py-8 text-[#8E9FA8] text-xs">
              No matching destinations found. Press Enter to generate a new itinerary for "{query}".
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-3 bg-[#080B0D] border-t border-[#233137] flex items-center justify-between text-[11px] text-[#8E9FA8]">
          <span>Navigate with mouse or keyboard</span>
          <span>Press <kbd className="px-1.5 py-0.5 bg-[#11171B] border border-[#233137] rounded text-[10px] text-[#E8ECEF]">ESC</kbd> to close</span>
        </div>

      </div>
    </div>
  );
}
