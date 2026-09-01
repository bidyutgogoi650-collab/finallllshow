import { useState, FormEvent } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Check, 
  Loader2,
  AlertCircle
} from 'lucide-react';
import { 
  TravelStyle, 
  TravelPace, 
  BudgetLevel, 
  TripItinerary 
} from '../types';
import { generateClientItinerary } from '../data/generatorFallback';

interface TripPlannerSectionProps {
  onItineraryGenerated: (itinerary: TripItinerary) => void;
  initialDestination?: string;
  isGenerating: boolean;
  setIsGenerating: (val: boolean) => void;
}

export function TripPlannerSection({
  onItineraryGenerated,
  initialDestination = '',
  isGenerating,
  setIsGenerating,
}: TripPlannerSectionProps) {
  const [destination, setDestination] = useState(initialDestination || 'Kyoto & Tokyo, Japan');
  const [durationDays, setDurationDays] = useState<number>(7);
  const [travelersType, setTravelersType] = useState<'solo' | 'couple' | 'family' | 'friends'>('couple');
  const [travelersCount, setTravelersCount] = useState<number>(2);
  const [travelStyle, setTravelStyle] = useState<TravelStyle>('cultural');
  const [pace, setPace] = useState<TravelPace>('moderate');
  const [budgetLevel, setBudgetLevel] = useState<BudgetLevel>('moderate');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    'Local Markets', 
    'Authentic Cuisine', 
    'Hidden Alleyways', 
    'Scenic Viewpoints'
  ]);
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
  const [specialRequests, setSpecialRequests] = useState<string>('');
  
  // Generation step tracker
  const [generationStep, setGenerationStep] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const interestOptions = [
    'Authentic Cuisine',
    'Local Markets',
    'Hidden Alleyways',
    'Scenic Viewpoints',
    'Historic Shrines & Temples',
    'Art & Design Museums',
    'Coffee & Specialty Bakeries',
    'Nature Hikes & Waterfalls',
    'Sunset Rooftops & Cocktails',
    'Craft Artisan Workshops',
    'Relaxing Thermal Spas',
    'Photography Hotspots'
  ];

  const dietaryOptions = [
    'Vegetarian',
    'Vegan',
    'Halal',
    'Gluten-Free',
    'Pescatarian',
    'Nut Allergy Safe'
  ];

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const toggleDietary = (diet: string) => {
    setSelectedDietary(prev =>
      prev.includes(diet)
        ? prev.filter(d => d !== diet)
        : [...prev, diet]
    );
  };

  const handleGenerate = async (e?: FormEvent) => {
    if (e) e.preventDefault();
    if (!destination.trim()) {
      setErrorMessage('Please enter a destination to plan.');
      return;
    }

    setErrorMessage(null);
    setIsGenerating(true);
    setGenerationStep(1);

    // Animate progressive step indicators
    const interval = setInterval(() => {
      setGenerationStep(prev => (prev < 4 ? prev + 1 : prev));
    }, 900);

    try {
      const response = await fetch('/api/generate-trip', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          destination,
          durationDays,
          travelersType,
          travelersCount,
          travelStyle,
          pace,
          budgetLevel,
          interests: selectedInterests,
          dietaryRestrictions: selectedDietary,
          specialRequests
        })
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      if (data && data.itinerary) {
        clearInterval(interval);
        setGenerationStep(4);
        setTimeout(() => {
          setIsGenerating(false);
          onItineraryGenerated(data.itinerary);
          // Scroll down to the itinerary preview section smoothly
          const element = document.getElementById('itinerary-view-container');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500);
      } else {
        throw new Error('Invalid itinerary format received');
      }
    } catch (err: any) {
      console.warn('API route unavailable, generating itinerary via built-in engine:', err);
      clearInterval(interval);
      setGenerationStep(4);
      const fallbackItinerary = generateClientItinerary({
        destination,
        durationDays,
        travelersType,
        travelersCount,
        travelStyle,
        pace,
        budgetLevel,
        interests: selectedInterests,
        dietaryRestrictions: selectedDietary,
        specialRequests
      });
      setTimeout(() => {
        setIsGenerating(false);
        onItineraryGenerated(fallbackItinerary);
        const element = document.getElementById('itinerary-view-container');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  };

  return (
    <section id="planner" className="py-24 bg-[#060709] relative overflow-hidden border-t border-[#232B3B]/50">
      
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#FF7A00]/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#1E2638]/40 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F141D] border border-[#232B3B] text-[#FF7A00] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7A00]" />
            <span>Interactive AI Engine</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            Design Your Tailored Adventure
          </h2>
          <div className="w-16 h-[2px] bg-[#FF7A00] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-xs sm:text-sm md:text-base text-[#94A3B8] font-normal">
            Configure your parameters below and let our engine orchestrate a precision day-by-day expedition route in real time.
          </p>
        </div>

        {/* Main Planner Card */}
        <div className="max-w-4xl mx-auto bg-[#0F141D] rounded-3xl border border-[#232B3B] shadow-2xl overflow-hidden adventure-card-shadow">
          
          <div className="p-6 sm:p-10">
            <form onSubmit={handleGenerate} className="space-y-8">
              
              {/* Row 1: Destination & Duration */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                
                {/* Destination Input */}
                <div className="md:col-span-8">
                  <label 
                    htmlFor="planner-dest-input" 
                    className="block text-xs font-bold uppercase tracking-wider text-[#F8FAFC] mb-2"
                  >
                    1. Destination (City, Region, or Country)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#FF7A00]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <input
                      id="planner-dest-input"
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder="e.g., Swiss Alps, Dolomites, Kyoto, Iceland..."
                      required
                      className="w-full pl-11 pr-4 py-3.5 bg-[#060709] border border-[#232B3B] rounded-2xl text-[#F8FAFC] text-base font-semibold focus:outline-hidden focus:border-[#FF7A00] shadow-inner transition-all placeholder:text-[#94A3B8]/50"
                    />
                  </div>
                  
                  {/* Quick destination suggestion buttons */}
                  <div className="mt-2.5 flex flex-wrap items-center gap-1.5 text-xs">
                    <span className="text-[#94A3B8] font-medium text-[11px]">Quick Pick:</span>
                    {['Swiss Alps, Switzerland', 'Dolomite Spire, Italy', 'Kyoto, Japan', 'Ghoom Forest, India', 'Reykjavik, Iceland'].map((city) => (
                      <button
                        key={city}
                        type="button"
                        onClick={() => setDestination(city)}
                        className="px-2.5 py-1 bg-[#060709] hover:bg-[#1E2638] border border-[#232B3B] text-[#94A3B8] hover:text-[#FF7A00] rounded-lg transition-colors font-medium text-[11px] cursor-pointer"
                      >
                        {city.split(',')[0]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Duration Picker */}
                <div className="md:col-span-4">
                  <label 
                    htmlFor="planner-duration-input" 
                    className="block text-xs font-bold uppercase tracking-wider text-[#F8FAFC] mb-2"
                  >
                    2. Trip Duration
                  </label>
                  <div className="flex items-center justify-between bg-[#060709] border border-[#232B3B] rounded-2xl px-4 py-2.5 shadow-inner">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-[#FF7A00]" />
                      <span className="text-sm font-bold text-[#F8FAFC]">
                        {durationDays} {durationDays === 1 ? 'Day' : 'Days'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => setDurationDays(Math.max(2, durationDays - 1))}
                        className="w-8 h-8 rounded-lg bg-[#0F141D] hover:bg-[#1E2638] text-[#F8FAFC] font-bold flex items-center justify-center text-sm transition-colors border border-[#232B3B] cursor-pointer"
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => setDurationDays(Math.min(14, durationDays + 1))}
                        className="w-8 h-8 rounded-lg bg-[#0F141D] hover:bg-[#1E2638] text-[#F8FAFC] font-bold flex items-center justify-center text-sm transition-colors border border-[#232B3B] cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <span className="block text-[11px] text-[#94A3B8] mt-1.5 font-medium">
                    Recommended: 5–8 days for optimal wilderness routes
                  </span>
                </div>

              </div>

              {/* Row 2: Travelers & Headcount */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#F8FAFC] mb-2.5">
                  3. Who is Traveling?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'solo', label: 'Solo Adventurer', icon: '👤', count: 1 },
                    { id: 'couple', label: 'Couple / Duo', icon: '👩‍❤️‍👨', count: 2 },
                    { id: 'family', label: 'Family with Kids', icon: '👨‍👩‍👦', count: 4 },
                    { id: 'friends', label: 'Expedition Crew', icon: '👥', count: 3 },
                  ].map((item) => {
                    const isSelected = travelersType === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setTravelersType(item.id as any);
                          setTravelersCount(item.count);
                        }}
                        className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-[#1E2638] border-[#FF7A00] shadow-lg ring-1 ring-[#FF7A00]'
                            : 'bg-[#060709] border-[#232B3B] hover:border-[#FF7A00]/50 text-[#F8FAFC]'
                        }`}
                      >
                        <span className="text-2xl mb-1.5">{item.icon}</span>
                        <div>
                          <span className={`block text-xs font-bold ${isSelected ? 'text-[#FF7A00]' : 'text-[#F8FAFC]'}`}>
                            {item.label}
                          </span>
                          <span className="text-[10px] text-[#94A3B8]">
                            {item.count} {item.count === 1 ? 'Traveler' : 'Travelers'}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 3: Travel Style & Pace */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Travel Style */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#F8FAFC] mb-2.5">
                    4. Primary Expedition Vibe
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      { id: 'adventure', label: '🧗 Wilderness & Alpine', desc: 'Hikes, ridges & panoramas' },
                      { id: 'cultural', label: '🏛️ Cultural & Historic', desc: 'Ancient shrines & heritage' },
                      { id: 'foodie', label: '🍜 Local Tastings', desc: 'Rustic huts & regional food' },
                      { id: 'relaxation', label: '🌿 Slow Nature & Spas', desc: 'Lakes, thermal baths & slow pace' },
                      { id: 'luxury', label: '✨ Luxury Chalets', desc: '5-star boutique lodges' },
                      { id: 'budget', label: '🎒 Backcountry & Camps', desc: 'Best value & rugged spots' },
                    ].map((style) => {
                      const isSelected = travelStyle === style.id;
                      return (
                        <button
                          key={style.id}
                          type="button"
                          onClick={() => setTravelStyle(style.id as TravelStyle)}
                          className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#FF7A00] text-[#060709] border-[#FF7A00] shadow-md font-bold'
                              : 'bg-[#060709] border-[#232B3B] hover:border-[#FF7A00]/50 text-[#F8FAFC]'
                          }`}
                        >
                          <span className="block font-bold text-xs">{style.label}</span>
                          <span className={`block text-[10px] mt-0.5 ${isSelected ? 'text-[#060709]/80' : 'text-[#94A3B8]'}`}>
                            {style.desc}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Pace & Budget Level */}
                <div className="space-y-5">
                  
                  {/* Daily Pace */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#F8FAFC] mb-2">
                      5. Expedition Pacing
                    </label>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      {[
                        { id: 'relaxed', label: 'Leisurely', desc: '1–2 stops/day' },
                        { id: 'moderate', label: 'Balanced', desc: '3–4 stops/day' },
                        { id: 'packed', label: 'High Energy', desc: '5+ stops/day' },
                      ].map((p) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setPace(p.id as TravelPace)}
                          className={`p-2 rounded-xl border text-center transition-all cursor-pointer ${
                            pace === p.id
                              ? 'bg-[#F8FAFC] text-[#060709] border-[#F8FAFC] font-black'
                              : 'bg-[#060709] border-[#232B3B] text-[#94A3B8] hover:text-[#F8FAFC]'
                          }`}
                        >
                          <span className="block font-bold text-xs">{p.label}</span>
                          <span className={`text-[10px] ${pace === p.id ? 'text-[#060709]/80' : 'text-[#94A3B8]'}`}>
                            {p.desc}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Level */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#F8FAFC] mb-2">
                      6. Budget Tier
                    </label>
                    <div className="grid grid-cols-4 gap-1.5 text-xs font-semibold">
                      {[
                        { id: 'budget', label: '$ Budget', sub: '~$80/day' },
                        { id: 'moderate', label: '$$ Moderate', sub: '~$160/day' },
                        { id: 'upscale', label: '$$$ Upscale', sub: '~$280/day' },
                        { id: 'luxury', label: '$$$$ Luxe', sub: '~$480/day' },
                      ].map((b) => (
                        <button
                          key={b.id}
                          type="button"
                          onClick={() => setBudgetLevel(b.id as BudgetLevel)}
                          className={`py-2 px-1.5 rounded-xl border text-center transition-all cursor-pointer ${
                            budgetLevel === b.id
                              ? 'bg-[#FF7A00] text-[#060709] border-[#FF7A00] font-black'
                              : 'bg-[#060709] border-[#232B3B] text-[#94A3B8] hover:text-[#F8FAFC]'
                          }`}
                        >
                          <span className="block text-[11px] font-bold">{b.label}</span>
                          <span className={`block text-[9px] ${budgetLevel === b.id ? 'text-[#060709]/80' : 'text-[#94A3B8]'}`}>
                            {b.sub}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

              {/* Row 4: Custom Interests & Tags */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#F8FAFC] mb-2">
                  7. Wilderness & Discovery Highlights
                </label>
                <div className="flex flex-wrap gap-2">
                  {interestOptions.map((interest) => {
                    const isSelected = selectedInterests.includes(interest);
                    return (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all flex items-center gap-1.5 cursor-pointer ${
                          isSelected
                            ? 'bg-[#1E2638] border-[#FF7A00] text-[#FF7A00] font-bold'
                            : 'bg-[#060709] border-[#232B3B] text-[#94A3B8] hover:text-[#F8FAFC]'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 text-[#FF7A00]" />}
                        <span>{interest}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 5: Dietary Needs & Special Requests */}
              <div className="pt-2 border-t border-[#232B3B]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#F8FAFC] mb-2">
                      Dietary Preferences
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {dietaryOptions.map((diet) => {
                        const isSelected = selectedDietary.includes(diet);
                        return (
                          <button
                            key={diet}
                            type="button"
                            onClick={() => toggleDietary(diet)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                              isSelected
                                ? 'bg-[#1E2638] border-[#FF7A00] text-[#FF7A00] font-semibold'
                                : 'bg-[#060709] border-[#232B3B] text-[#94A3B8] hover:text-[#F8FAFC]'
                            }`}
                          >
                            {diet}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label 
                      htmlFor="planner-notes" 
                      className="block text-xs font-bold uppercase tracking-wider text-[#F8FAFC] mb-2"
                    >
                      Special Requests / Notes
                    </label>
                    <input
                      id="planner-notes"
                      type="text"
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder="e.g. scenic sunset ridge viewpoints, photography gear, avoid toll roads..."
                      className="w-full px-3.5 py-2 bg-[#060709] border border-[#232B3B] rounded-xl text-xs sm:text-sm text-[#F8FAFC] placeholder:text-[#94A3B8]/50 focus:outline-hidden focus:border-[#FF7A00]"
                    />
                  </div>
                </div>
              </div>

              {/* Error Notice */}
              {errorMessage && (
                <div className="p-3 bg-red-950/60 border border-red-800 rounded-xl flex items-center gap-2 text-xs text-red-200 font-medium">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Action Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="planner-submit-btn"
                  disabled={isGenerating}
                  className={`w-full py-4 rounded-2xl font-display text-base sm:text-lg font-bold text-[#060709] shadow-lg transition-all flex items-center justify-center gap-3 cursor-pointer ${
                    isGenerating
                      ? 'bg-[#FF7A00]/60 cursor-not-allowed text-[#060709]'
                      : 'bg-[#FF7A00] hover:bg-[#FB923C] shadow-[#FF7A00]/20 hover:scale-[1.01] active:scale-[0.99]'
                  }`}
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-[#060709]" />
                      <span>Synthesizing Your Custom Expedition...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 text-[#060709]" />
                      <span>Generate Full AI Itinerary</span>
                    </>
                  )}
                </button>
              </div>

              {/* Generation Progress Indicator */}
              {isGenerating && (
                <div className="p-4 bg-[#060709] border border-[#232B3B] rounded-2xl animate-in fade-in duration-300">
                  <div className="space-y-2.5 text-xs text-[#94A3B8]">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${generationStep >= 1 ? 'bg-[#FF7A00]' : 'bg-[#232B3B]'}`} />
                      <span className={generationStep >= 1 ? 'font-bold text-[#F8FAFC]' : 'text-[#94A3B8]'}>
                        1. Analyzing seasonal weather, terrain & mountain conditions for {destination}...
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${generationStep >= 2 ? 'bg-[#FF7A00]' : 'bg-[#232B3B]'}`} />
                      <span className={generationStep >= 2 ? 'font-bold text-[#F8FAFC]' : 'text-[#94A3B8]'}>
                        2. Selecting authentic regional dining ({selectedDietary.join(', ') || 'Local Alpine Cuisine'})...
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${generationStep >= 3 ? 'bg-[#FF7A00]' : 'bg-[#232B3B]'}`} />
                      <span className={generationStep >= 3 ? 'font-bold text-[#F8FAFC]' : 'text-[#94A3B8]'}>
                        3. Optimizing trails, transit passes & waypoint pacing ({pace})...
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${generationStep >= 4 ? 'bg-[#FF7A00]' : 'bg-[#232B3B]'}`} />
                      <span className={generationStep >= 4 ? 'font-bold text-[#FF7A00]' : 'text-[#94A3B8]'}>
                        4. Finalizing budget allocation & secret local viewpoints!
                      </span>
                    </div>
                  </div>
                </div>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
