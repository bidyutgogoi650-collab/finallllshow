import { useState, useEffect } from 'react';
import { 
  Mountain, 
  Sparkles, 
  Bookmark, 
  Search, 
  Menu, 
  X, 
  ChevronDown,
  Globe,
  ArrowRight
} from 'lucide-react';

interface NavbarProps {
  onOpenPlanner: () => void;
  onOpenSearch: () => void;
  onOpenSaved: () => void;
  savedTripsCount: number;
  activeSection: string;
  onSelectDestinationPreset?: (destinationName: string) => void;
}

export function Navbar({ 
  onOpenPlanner, 
  onOpenSearch, 
  onOpenSaved, 
  savedTripsCount,
  activeSection,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currency, setCurrency] = useState('USD ($)');
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expeditions', href: '#hero-section' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'AI Planner', href: '#planner' },
    { name: 'Telemetry', href: '#why-us' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#080B0D]/94 backdrop-blur-md border-b border-[#233137]/80 shadow-2xl py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo - Mountain Emblem with Driftway branding */}
          <a 
            href="#" 
            className="flex items-center gap-3 group focus:outline-hidden shrink-0"
            id="nav-brand-logo"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1B262A] via-[#131C1F] to-[#0A0D12] border border-[#588157]/40 flex items-center justify-center text-[#8DAA91] shadow-lg shadow-[#588157]/10 group-hover:border-[#588157] group-hover:scale-105 transition-all">
              <Mountain className="w-5 h-5 text-[#8DAA91] transition-transform group-hover:-translate-y-0.5" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-extrabold tracking-wider uppercase text-[#E8ECEF]">
                Driftway<span className="text-[#588157]">.</span>
              </span>
              <span className="text-[9px] tracking-widest uppercase font-mono text-[#8E9FA8] -mt-1 hidden sm:inline-block">
                Wilderness & Expedition
              </span>
            </div>
          </a>

          {/* Central Search Capsule */}
          <div className="hidden md:flex items-center flex-1 max-w-xs mx-4">
            <button
              id="nav-search-capsule"
              onClick={onOpenSearch}
              className="w-full flex items-center justify-between px-4 py-2 bg-[#11171B]/90 hover:bg-[#162024] border border-[#233137] hover:border-[#588157]/60 rounded-full text-xs text-[#8E9FA8] hover:text-[#E8ECEF] backdrop-blur-md transition-all shadow-inner cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5 text-[#8DAA91]" />
                <span className="truncate">Search alpine routes, trails...</span>
              </div>
              <kbd className="px-1.5 py-0.5 text-[9px] bg-[#080B0D] border border-[#233137] rounded-md font-mono text-[#8DAA91]">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link, idx) => {
              const isActive = idx === 0;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all relative ${
                    isActive 
                      ? 'text-[#8DAA91] font-bold after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-[2px] after:bg-[#588157] after:rounded-full' 
                      : 'text-[#E8ECEF]/75 hover:text-[#8DAA91]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Items */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            {/* Currency Selector */}
            <div className="relative">
              <button
                id="currency-selector-btn"
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-[#8E9FA8] hover:text-[#E8ECEF] hover:bg-[#11171B] rounded-lg transition-colors border border-transparent hover:border-[#233137] cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-[#8DAA91]" />
                <span>{currency.split(' ')[0]}</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {currencyDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-32 bg-[#11171B] rounded-xl shadow-2xl border border-[#233137] py-1 z-50 text-xs animate-in fade-in zoom-in-95"
                  onMouseLeave={() => setCurrencyDropdownOpen(false)}
                >
                  {['USD ($)', 'EUR (€)', 'GBP (£)', 'JPY (¥)', 'AUD ($)'].map((curr) => (
                    <button
                      key={curr}
                      onClick={() => {
                        setCurrency(curr);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 font-medium hover:bg-[#162024] transition-colors cursor-pointer ${
                        currency === curr ? 'text-[#8DAA91] bg-[#162024] font-bold' : 'text-[#E8ECEF]'
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Saved Trips Drawer Trigger */}
            <button
              id="nav-saved-trips-btn"
              onClick={onOpenSaved}
              className="relative p-2 text-[#8E9FA8] hover:text-[#8DAA91] hover:bg-[#11171B] rounded-lg border border-transparent hover:border-[#233137] transition-colors cursor-pointer"
              title="View Saved Trips"
            >
              <Bookmark className="w-4 h-4" />
              {savedTripsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#588157] text-[#080B0D] rounded-full text-[10px] font-black flex items-center justify-center shadow-xs">
                  {savedTripsCount}
                </span>
              )}
            </button>

            {/* Primary Action: Plan Expedition with Sage Moss */}
            <button
              id="nav-plan-trip-cta"
              onClick={onOpenPlanner}
              className="inline-flex items-center gap-1.5 px-4.5 py-2 bg-[#588157] hover:bg-[#689467] text-[#080B0D] text-xs font-bold rounded-full transition-all shadow-md shadow-[#588157]/15 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Plan Expedition</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-search-btn"
              onClick={onOpenSearch}
              className="p-2 text-[#8E9FA8] hover:text-[#8DAA91] hover:bg-[#11171B] rounded-lg cursor-pointer"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#E8ECEF] hover:bg-[#11171B] rounded-lg cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 pt-3 border-t border-[#233137] bg-[#080B0D]/95 backdrop-blur-xl pb-4 animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-[#E8ECEF] hover:text-[#8DAA91] hover:bg-[#11171B] rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 mt-2 border-t border-[#233137] flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSaved();
                  }}
                  className="flex items-center justify-between px-3 py-2 text-sm font-medium text-[#E8ECEF] hover:bg-[#11171B] rounded-lg cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Bookmark className="w-4 h-4 text-[#8DAA91]" />
                    Saved Expeditions
                  </span>
                  <span className="text-xs bg-[#588157] text-[#080B0D] font-bold px-2 py-0.5 rounded-full">
                    {savedTripsCount}
                  </span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPlanner();
                  }}
                  className="w-full mt-1 flex items-center justify-center gap-2 py-2.5 bg-[#588157] text-[#080B0D] rounded-full text-sm font-bold shadow-md shadow-[#588157]/20 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#080B0D]" />
                  <span>Start AI Expedition Planner</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}


