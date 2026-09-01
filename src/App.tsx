import { useState, useEffect } from 'react';
import { 
  TripItinerary, 
  DestinationInspiration 
} from './types';
import { 
  CURATED_SAMPLE_TRIP, 
  POPULAR_DESTINATIONS 
} from './data/mockData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TripPlannerSection } from './components/TripPlannerSection';
import { InteractiveItineraryView } from './components/InteractiveItineraryView';
import { DestinationGrid } from './components/DestinationGrid';
import { FeaturesSection } from './components/FeaturesSection';
import { LiveItineraryShowcase } from './components/LiveItineraryShowcase';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { QuickSearchModal } from './components/QuickSearchModal';
import { SavedTripsDrawer } from './components/SavedTripsDrawer';
import { ShareTripModal } from './components/ShareTripModal';
import { Sparkles, CheckCircle2, Bookmark } from 'lucide-react';

export default function App() {
  const [currentItinerary, setCurrentItinerary] = useState<TripItinerary>(CURATED_SAMPLE_TRIP);
  const [plannerDestination, setPlannerDestination] = useState<string>('Kyoto & Tokyo, Japan');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [savedTrips, setSavedTrips] = useState<TripItinerary[]>([]);
  const [activeSection, setActiveSection] = useState<string>('hero-section');
  
  // Modals & Drawers
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);
  const [savedDrawerOpen, setSavedDrawerOpen] = useState<boolean>(false);
  const [shareModalOpen, setShareModalOpen] = useState<boolean>(false);
  const [tripToShare, setTripToShare] = useState<TripItinerary | null>(null);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Load saved trips from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('roamai_saved_trips');
      if (stored) {
        setSavedTrips(JSON.parse(stored));
      }
    } catch (e) {
      console.warn('Could not read saved trips from storage', e);
    }
  }, []);

  // Save trips to localStorage whenever state updates
  const handleSaveTrip = (trip: TripItinerary) => {
    setSavedTrips(prev => {
      const exists = prev.some(t => t.id === trip.id);
      let updated: TripItinerary[];
      if (exists) {
        updated = prev.filter(t => t.id !== trip.id);
        showToast(`Removed "${trip.title}" from saved trips`);
      } else {
        updated = [trip, ...prev];
        showToast(`Saved "${trip.title}" to your trips!`);
      }
      try {
        localStorage.setItem('roamai_saved_trips', JSON.stringify(updated));
      } catch (e) {
        console.warn('Could not save to storage', e);
      }
      return updated;
    });
  };

  const handleRemoveSavedTrip = (tripId: string) => {
    setSavedTrips(prev => {
      const updated = prev.filter(t => t.id !== tripId);
      try {
        localStorage.setItem('roamai_saved_trips', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
    showToast('Trip removed from saved');
  };

  // Quick Plan handler from Hero or Destination Grid
  const handleQuickPlan = (destinationName: string) => {
    setPlannerDestination(destinationName);
    const element = document.getElementById('planner');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectDestination = (dest: DestinationInspiration) => {
    setPlannerDestination(`${dest.name}, ${dest.country}`);
    showToast(`Loaded ${dest.name} into AI Planner!`);
    const element = document.getElementById('planner');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleItineraryGenerated = (newTrip: TripItinerary) => {
    setCurrentItinerary(newTrip);
    showToast(`✨ Generated ${newTrip.durationDays}-Day itinerary for ${newTrip.destination}!`);
  };

  const handleOpenShare = (trip: TripItinerary) => {
    setTripToShare(trip);
    setShareModalOpen(true);
  };

  const handleSelectPlan = (planId: string) => {
    showToast(`Selected ${planId.toUpperCase()} plan. Redirecting to checkout flow...`);
  };

  // Global Keyboard Shortcuts (Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isCurrentTripSaved = savedTrips.some(t => t.id === currentItinerary.id);

  return (
    <div className="min-h-screen flex flex-col bg-[#080B0D] text-[#E8ECEF] selection:bg-[#588157]/40 selection:text-[#E8ECEF]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#11171B] text-[#E8ECEF] px-4 py-3 rounded-2xl shadow-2xl border border-[#588157]/40 flex items-center gap-3 text-xs sm:text-sm font-semibold animate-in slide-in-from-bottom-5 duration-200">
          <CheckCircle2 className="w-4 h-4 text-[#8DAA91] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Navigation Header */}
      <Navbar
        onOpenPlanner={() => {
          const el = document.getElementById('planner');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenSaved={() => setSavedDrawerOpen(true)}
        savedTripsCount={savedTrips.length}
        activeSection={activeSection}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onQuickPlan={handleQuickPlan}
          onExploreDestinations={() => {
            const el = document.getElementById('destinations');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. AI Trip Planner & Search Interface */}
        <TripPlannerSection
          onItineraryGenerated={handleItineraryGenerated}
          initialDestination={plannerDestination}
          isGenerating={isGenerating}
          setIsGenerating={setIsGenerating}
        />

        {/* 3. Interactive Generated Itinerary Preview */}
        {currentItinerary && (
          <InteractiveItineraryView
            itinerary={currentItinerary}
            onSaveTrip={handleSaveTrip}
            isSaved={isCurrentTripSaved}
            onOpenShareModal={handleOpenShare}
          />
        )}

        {/* 4. Popular Destinations & Inspiration Cards */}
        <DestinationGrid
          onSelectDestination={handleSelectDestination}
        />

        {/* 5. Features Section */}
        <FeaturesSection />

        {/* 6. Live Itinerary Showcase / Demo */}
        <LiveItineraryShowcase
          onLoadTripToPlanner={(trip) => {
            setCurrentItinerary(trip);
            showToast(`Loaded ${trip.destination} into active itinerary viewer`);
            const el = document.getElementById('itinerary-view-container');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 7. Pricing Section */}
        <PricingSection
          onSelectPlan={handleSelectPlan}
        />

        {/* 8. Testimonials Section */}
        <TestimonialsSection />

        {/* 9. FAQ Section */}
        <FAQSection />

        {/* 10. High-converting CTA Banner */}
        <CTASection
          onStartPlanning={() => {
            const el = document.getElementById('planner');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </main>

      {/* Modern Footer */}
      <Footer />

      {/* Modals and Drawers */}
      <QuickSearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectDestination={handleSelectDestination}
        onCustomSearch={handleQuickPlan}
      />

      <SavedTripsDrawer
        isOpen={savedDrawerOpen}
        onClose={() => setSavedDrawerOpen(false)}
        savedTrips={savedTrips}
        onSelectTrip={(trip) => {
          setCurrentItinerary(trip);
          const el = document.getElementById('itinerary-view-container');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onRemoveTrip={handleRemoveSavedTrip}
        onStartNewPlan={() => {
          const el = document.getElementById('planner');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <ShareTripModal
        trip={tripToShare}
        onClose={() => {
          setShareModalOpen(false);
          setTripToShare(null);
        }}
      />

    </div>
  );
}
