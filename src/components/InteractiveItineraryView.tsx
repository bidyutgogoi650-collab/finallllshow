import { useState } from 'react';
import { 
  TripItinerary, 
  ItineraryDay, 
  PackingItem 
} from '../types';
import { 
  MapPin, 
  Utensils, 
  Compass, 
  Bookmark, 
  Share2, 
  Sparkles, 
  Info, 
  Sun, 
  Check, 
  Printer
} from 'lucide-react';

interface InteractiveItineraryViewProps {
  itinerary: TripItinerary;
  onSaveTrip: (trip: TripItinerary) => void;
  isSaved: boolean;
  onOpenShareModal: (trip: TripItinerary) => void;
}

export function InteractiveItineraryView({
  itinerary,
  onSaveTrip,
  isSaved,
  onOpenShareModal
}: InteractiveItineraryViewProps) {
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(1);
  const [completedActivities, setCompletedActivities] = useState<Record<string, boolean>>({});
  const [packingItems, setPackingItems] = useState<PackingItem[]>(itinerary.packingList || []);
  const [activeTab, setActiveTab] = useState<'timeline' | 'budget' | 'packing' | 'tips'>('timeline');

  const selectedDay: ItineraryDay = 
    itinerary.days.find(d => d.dayNumber === selectedDayNumber) || itinerary.days[0];

  const toggleActivityComplete = (actId: string) => {
    setCompletedActivities(prev => ({
      ...prev,
      [actId]: !prev[actId]
    }));
  };

  const togglePackingItem = (id: string) => {
    setPackingItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, isPacked: !item.isPacked } : item
      )
    );
  };

  const completedPackingCount = packingItems.filter(i => i.isPacked).length;

  return (
    <section id="itinerary-view-container" className="py-20 bg-[#060709] border-t border-[#232B3B]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Itinerary Header Hero Card */}
        <div className="relative bg-[#0F141D] rounded-3xl border border-[#232B3B] shadow-2xl overflow-hidden mb-10 adventure-card-shadow">
          
          {/* Header Visual Banner */}
          <div className="relative h-72 sm:h-96 w-full overflow-hidden">
            <img
              src={itinerary.heroImage}
              alt={itinerary.title}
              className="w-full h-full object-cover object-center brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060709] via-[#060709]/60 to-transparent" />
            
            {/* Action Buttons floating top right */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2 z-10">
              <button
                id="save-trip-btn"
                onClick={() => onSaveTrip(itinerary)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold backdrop-blur-md transition-all shadow-md cursor-pointer ${
                  isSaved
                    ? 'bg-[#FF7A00] text-[#060709] shadow-[#FF7A00]/20'
                    : 'bg-[#0F141D]/80 hover:bg-[#0F141D] text-[#F8FAFC] border border-[#232B3B]'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-[#060709]' : ''}`} />
                <span>{isSaved ? 'Saved to Expeditions' : 'Save Expedition'}</span>
              </button>

              <button
                id="share-trip-btn"
                onClick={() => onOpenShareModal(itinerary)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-[#0F141D]/80 hover:bg-[#0F141D] text-[#F8FAFC] border border-[#232B3B] backdrop-blur-md transition-all shadow-md cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">Share</span>
              </button>

              <button
                onClick={() => window.print()}
                className="p-2 rounded-xl text-[#F8FAFC] bg-[#0F141D]/80 hover:bg-[#0F141D] border border-[#232B3B] backdrop-blur-md transition-all shadow-md cursor-pointer"
                title="Print or Export PDF"
              >
                <Printer className="w-4 h-4" />
              </button>
            </div>

            {/* Header Content */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-[#FF7A00] text-[#060709] rounded-full text-xs font-black uppercase tracking-wider backdrop-blur-xs">
                  {itinerary.durationDays} Days Route
                </span>
                <span className="px-2.5 py-0.5 bg-[#060709]/70 text-[#F8FAFC] border border-[#232B3B] rounded-md text-xs font-medium backdrop-blur-xs">
                  {itinerary.travelStyle.toUpperCase()}
                </span>
                <span className="px-2.5 py-0.5 bg-[#060709]/70 text-[#F8FAFC] border border-[#232B3B] rounded-md text-xs font-medium backdrop-blur-xs">
                  {itinerary.pace.toUpperCase()} PACING
                </span>
                <span className="px-2.5 py-0.5 bg-[#1E2638] text-[#FF7A00] border border-[#232B3B] rounded-md text-xs font-bold backdrop-blur-xs">
                  {itinerary.matchScore}% Match
                </span>
              </div>

              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#F8FAFC]">
                {itinerary.title}
              </h1>
              <p className="text-[#94A3B8] text-xs sm:text-sm mt-1 max-w-2xl">
                {itinerary.tagline}
              </p>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-[#232B3B] divide-x divide-[#232B3B] bg-[#0A0D12] text-center py-4 px-2">
            <div>
              <span className="block text-[11px] uppercase tracking-wider text-[#94A3B8] font-bold">Estimated Total</span>
              <span className="font-display text-lg font-bold text-[#FF7A00]">
                ${itinerary.overallBudget.totalUSD.toLocaleString()} USD
              </span>
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-wider text-[#94A3B8] font-bold">Adventurers</span>
              <span className="font-display text-lg font-bold text-[#F8FAFC] capitalize">
                {itinerary.travelersCount} ({itinerary.travelersType})
              </span>
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-wider text-[#94A3B8] font-bold">Best Season</span>
              <span className="font-display text-sm sm:text-base font-bold text-[#F8FAFC]">
                {itinerary.seasonRecommendation.split('/')[0]}
              </span>
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-wider text-[#94A3B8] font-bold">Daily Avg Budget</span>
              <span className="font-display text-lg font-bold text-[#FF7A00]">
                ${Math.round(itinerary.overallBudget.totalUSD / itinerary.durationDays)}/day
              </span>
            </div>
          </div>

          {/* Sub-Navigation Tabs */}
          <div className="flex border-b border-[#232B3B] px-4 sm:px-8 bg-[#0F141D] overflow-x-auto">
            {[
              { id: 'timeline', label: 'Day-by-Day Route', count: `${itinerary.days.length} Days` },
              { id: 'budget', label: 'Budget Analysis', count: `$${itinerary.overallBudget.totalUSD}` },
              { id: 'packing', label: 'Gear & Packing', count: `${completedPackingCount}/${packingItems.length}` },
              { id: 'tips', label: 'Wilderness & Local Intel', count: `${itinerary.secretGems.length} Spots` },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-4 sm:px-6 font-bold text-xs sm:text-sm border-b-2 whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'border-[#FF7A00] text-[#FF7A00] bg-[#1E2638]/40'
                      : 'border-transparent text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#232B3B]'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                    isActive ? 'bg-[#FF7A00]/20 text-[#FF7A00]' : 'bg-[#060709] text-[#94A3B8]'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* TAB 1: DAY-BY-DAY TIMELINE */}
          {activeTab === 'timeline' && (
            <div className="p-6 sm:p-8">
              
              {/* Day Selector Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#232B3B]">
                {itinerary.days.map((day) => {
                  const isSelected = selectedDayNumber === day.dayNumber;
                  return (
                    <button
                      key={day.dayNumber}
                      onClick={() => setSelectedDayNumber(day.dayNumber)}
                      className={`px-4 py-2.5 rounded-2xl text-left shrink-0 transition-all border cursor-pointer ${
                        isSelected
                          ? 'bg-[#FF7A00] text-[#060709] border-[#FF7A00] shadow-lg font-bold'
                          : 'bg-[#060709] hover:bg-[#1E2638] border-[#232B3B] text-[#F8FAFC]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <span className="text-[10px] uppercase font-bold tracking-wider opacity-90">
                          Day {day.dayNumber}
                        </span>
                        {day.weatherForecast && (
                          <span className="text-[10px] opacity-90">{day.weatherForecast.tempHighC}°C</span>
                        )}
                      </div>
                      <span className="block text-xs font-bold truncate max-w-[130px]">
                        {day.title.split(':')[1] || day.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Day Overview */}
              <div className="bg-[#1E2638]/40 border border-[#232B3B] rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A00]">
                      Day {selectedDay.dayNumber} Focus
                    </span>
                    <span className="text-xs text-[#232B3B]">•</span>
                    <div className="flex items-center gap-1 text-xs text-[#94A3B8] font-medium">
                      <Sun className="w-3.5 h-3.5 text-[#FF7A00]" />
                      <span>{selectedDay.weatherForecast?.condition || 'Pleasant Alpine Air'} ({selectedDay.weatherForecast?.tempHighC}°C / {selectedDay.weatherForecast?.tempLowC}°C)</span>
                    </div>
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#F8FAFC]">
                    {selectedDay.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 max-w-3xl">
                    {selectedDay.summary}
                  </p>
                </div>

                <div className="bg-[#060709] px-4 py-2.5 rounded-xl border border-[#232B3B] text-right shrink-0">
                  <span className="block text-[10px] uppercase font-bold text-[#94A3B8]">Daily Target</span>
                  <span className="text-base font-extrabold text-[#FF7A00]">${selectedDay.dailyBudgetUSD} USD</span>
                </div>
              </div>

              {/* Transit Tip for the day */}
              {selectedDay.localTransportTip && (
                <div className="mb-6 p-3 bg-[#060709] border border-[#232B3B] rounded-xl flex items-center gap-2.5 text-xs text-[#94A3B8]">
                  <Compass className="w-4 h-4 text-[#FF7A00] shrink-0" />
                  <span className="font-semibold text-[#F8FAFC]">Transit intel:</span>
                  <span>{selectedDay.localTransportTip}</span>
                </div>
              )}

              {/* Activities Timeline */}
              <div className="space-y-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC]">
                  Scheduled Waypoints & Route Stops
                </h4>

                <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#232B3B]">
                  {selectedDay.activities.map((act) => {
                    const isDone = !!completedActivities[act.id];
                    return (
                      <div 
                        key={act.id} 
                        className={`relative group bg-[#060709] p-5 rounded-2xl border transition-all ${
                          isDone 
                            ? 'border-[#232B3B] opacity-60' 
                            : 'border-[#232B3B] hover:border-[#FF7A00]/60 hover:shadow-lg'
                        }`}
                      >
                        {/* Timeline Marker Dot */}
                        <button
                          onClick={() => toggleActivityComplete(act.id)}
                          className={`absolute -left-[29px] sm:-left-[37px] top-5 w-6 h-6 rounded-full border-2 bg-[#060709] flex items-center justify-center transition-all cursor-pointer ${
                            isDone 
                              ? 'border-[#FF7A00] bg-[#FF7A00] text-[#060709]' 
                              : 'border-[#FF7A00] hover:scale-110'
                          }`}
                          title={isDone ? 'Mark uncompleted' : 'Mark completed'}
                        >
                          {isDone ? <Check className="w-3.5 h-3.5 text-[#060709]" /> : <div className="w-2 h-2 rounded-full bg-[#FF7A00]" />}
                        </button>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded-md bg-[#1E2638] text-[#F8FAFC] text-[11px] font-bold border border-[#232B3B]">
                              {act.time}
                            </span>
                            <span className="px-2 py-0.5 rounded-md bg-[#FF7A00]/15 text-[#FF7A00] text-[10px] font-bold uppercase">
                              {act.category}
                            </span>
                            <span className="text-xs text-[#94A3B8] font-medium">
                              ~{act.durationHours}h
                            </span>
                          </div>

                          <div className="flex items-center gap-3 text-xs">
                            <span className="font-bold text-[#F8FAFC]">
                              {act.costEstimate === 0 ? 'Free Entry' : `~$${act.costEstimate} USD`}
                            </span>
                          </div>
                        </div>

                        <h5 className={`font-display text-base font-bold text-[#F8FAFC] ${isDone ? 'line-through text-[#94A3B8]' : ''}`}>
                          {act.title}
                        </h5>
                        <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 leading-relaxed">
                          {act.description}
                        </p>

                        <div className="mt-3 pt-3 border-t border-[#232B3B] flex flex-wrap items-center justify-between gap-2 text-xs text-[#94A3B8]">
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#FF7A00]" />
                            <span>{act.location}</span>
                          </div>
                          {act.bookingTip && (
                            <span className="text-[11px] text-[#FF7A00] font-medium bg-[#1E2638] px-2 py-0.5 rounded-md border border-[#232B3B]">
                              💡 {act.bookingTip}
                            </span>
                          )}
                        </div>

                      </div>
                    );
                  })}
                </div>

                {/* Curated Meals for this Day */}
                {selectedDay.meals && selectedDay.meals.length > 0 && (
                  <div className="mt-10 pt-8 border-t border-[#232B3B]">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC] mb-4 flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-[#FF7A00]" />
                      <span>Curated Wilderness & Dining Highlights (Day {selectedDay.dayNumber})</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedDay.meals.map((meal, idx) => (
                        <div key={idx} className="bg-[#060709] p-4 rounded-2xl border border-[#232B3B]">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="px-2 py-0.5 rounded-md bg-[#1E2638] text-[#F8FAFC] text-[10px] font-bold uppercase border border-[#232B3B]">
                              {meal.type}
                            </span>
                            <span className="text-xs font-bold text-[#FF7A00]">{meal.priceRange}</span>
                          </div>
                          <h6 className="font-display font-bold text-[#F8FAFC] text-sm">{meal.venueName}</h6>
                          <span className="block text-xs text-[#94A3B8] font-medium">{meal.cuisine} • {meal.neighborhood}</span>
                          <p className="text-xs text-[#94A3B8] mt-2 bg-[#1E2638]/40 p-2.5 rounded-xl border border-[#232B3B]">
                            {meal.recommendation}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

            </div>
          )}

          {/* TAB 2: BUDGET BREAKDOWN */}
          {activeTab === 'budget' && (
            <div className="p-6 sm:p-10 space-y-8">
              <div>
                <h3 className="font-display text-xl font-bold text-[#F8FAFC]">
                  Comprehensive Expedition Cost Estimation
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
                  Realistic financial forecast based on current {itinerary.destination} market prices for {itinerary.travelersCount} adventurers.
                </p>
              </div>

              {/* Total & Daily Summary Card */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#060709] text-[#F8FAFC] p-6 rounded-2xl border border-[#232B3B]">
                  <span className="text-xs uppercase font-bold text-[#94A3B8]">Total Estimated Cost</span>
                  <div className="font-display text-3xl font-extrabold mt-1 text-[#FF7A00]">
                    ${itinerary.overallBudget.totalUSD.toLocaleString()} USD
                  </div>
                  <span className="text-xs text-[#94A3B8] mt-1 block">
                    ~${Math.round(itinerary.overallBudget.totalUSD / itinerary.travelersCount)} per traveler
                  </span>
                </div>

                <div className="bg-[#060709] p-6 rounded-2xl border border-[#232B3B]">
                  <span className="text-xs uppercase font-bold text-[#94A3B8]">Daily Average Rate</span>
                  <div className="font-display text-3xl font-extrabold mt-1 text-[#F8FAFC]">
                    ${Math.round(itinerary.overallBudget.totalUSD / itinerary.durationDays)} USD
                  </div>
                  <span className="text-xs text-[#94A3B8] mt-1 block">
                    Across {itinerary.durationDays} active itinerary days
                  </span>
                </div>

                <div className="bg-[#1E2638]/40 border border-[#232B3B] p-6 rounded-2xl">
                  <span className="text-xs uppercase font-bold text-[#FF7A00]">AI Route Optimization</span>
                  <div className="font-display text-3xl font-extrabold mt-1 text-[#FF7A00]">
                    $280 - $440
                  </div>
                  <span className="text-xs text-[#94A3B8] mt-1 block">
                    Saved by optimizing trailheads, regional rail passes, and avoiding peak surcharges
                  </span>
                </div>
              </div>

              {/* Category Breakdown Table */}
              <div className="bg-[#060709] rounded-2xl border border-[#232B3B] overflow-hidden">
                <div className="px-6 py-4 border-b border-[#232B3B] bg-[#0F141D] font-bold text-xs uppercase tracking-wider text-[#F8FAFC]">
                  Expense Category Distribution
                </div>
                <div className="divide-y divide-[#232B3B] text-sm">
                  {[
                    { label: '🏨 Lodging & Alpine Chalets', amount: itinerary.overallBudget.accommodationUSD, pct: Math.round((itinerary.overallBudget.accommodationUSD / itinerary.overallBudget.totalUSD) * 100) },
                    { label: '🍽️ Mountain Dining & Tastings', amount: itinerary.overallBudget.foodAndDiningUSD, pct: Math.round((itinerary.overallBudget.foodAndDiningUSD / itinerary.overallBudget.totalUSD) * 100) },
                    { label: '🎟️ Alpine Passes & Guides', amount: itinerary.overallBudget.activitiesUSD, pct: Math.round((itinerary.overallBudget.activitiesUSD / itinerary.overallBudget.totalUSD) * 100) },
                    { label: '🚆 Cable Cars & Transit', amount: itinerary.overallBudget.localTransportUSD, pct: Math.round((itinerary.overallBudget.localTransportUSD / itinerary.overallBudget.totalUSD) * 100) },
                    { label: '🛡️ Wilderness Gear & Safety Buffer', amount: itinerary.overallBudget.bufferUSD, pct: Math.round((itinerary.overallBudget.bufferUSD / itinerary.overallBudget.totalUSD) * 100) },
                  ].map((cat, idx) => (
                    <div key={idx} className="px-6 py-4 flex items-center justify-between">
                      <div className="flex-1 pr-4">
                        <div className="flex items-center justify-between font-semibold text-[#F8FAFC] mb-1.5">
                          <span>{cat.label}</span>
                          <span className="text-[#FF7A00]">${cat.amount.toLocaleString()} USD ({cat.pct}%)</span>
                        </div>
                        <div className="w-full h-2 bg-[#1E2638] rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[#FF7A00] rounded-full" 
                            style={{ width: `${cat.pct}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: SMART PACKING LIST */}
          {activeTab === 'packing' && (
            <div className="p-6 sm:p-10 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-[#F8FAFC]">
                    Climate & Expedition Gear Assistant
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
                    Checked equipment: {completedPackingCount} of {packingItems.length}
                  </p>
                </div>

                <button
                  onClick={() => setPackingItems(packingItems.map(i => ({ ...i, isPacked: true })))}
                  className="px-3.5 py-1.5 bg-[#1E2638] hover:bg-[#232B3B] text-[#FF7A00] border border-[#232B3B] text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Mark All Packed
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {packingItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => togglePackingItem(item.id)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center gap-3 ${
                      item.isPacked
                        ? 'bg-[#1E2638]/40 border-[#FF7A00]/40 text-[#F8FAFC]'
                        : 'bg-[#060709] border-[#232B3B] hover:border-[#FF7A00]/50 text-[#F8FAFC]'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                      item.isPacked ? 'bg-[#FF7A00] border-[#FF7A00] text-[#060709]' : 'border-[#232B3B]'
                    }`}>
                      {item.isPacked && <Check className="w-3.5 h-3.5 text-[#060709]" />}
                    </div>
                    <span className={`text-xs sm:text-sm font-medium ${item.isPacked ? 'line-through text-[#94A3B8]' : ''}`}>
                      {item.item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: LOCAL SECRETS & TIPS */}
          {activeTab === 'tips' && (
            <div className="p-6 sm:p-10 space-y-8">
              
              {/* Secret Gems Section */}
              <div>
                <h3 className="font-display text-xl font-bold text-[#F8FAFC] mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#FF7A00]" />
                  <span>Hidden Viewpoints & Alpine Secrets</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {itinerary.secretGems.map((gem, idx) => (
                    <div key={idx} className="bg-[#060709] border border-[#232B3B] rounded-2xl p-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-[#F8FAFC] text-base">{gem.name}</span>
                        <span className="text-[10px] uppercase font-bold tracking-wider bg-[#1E2638] text-[#FF7A00] border border-[#232B3B] px-2 py-0.5 rounded-md">
                          {gem.vibe}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                        {gem.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cultural Etiquette & Practical Tips */}
              <div className="pt-6 border-t border-[#232B3B]">
                <h3 className="font-display text-xl font-bold text-[#F8FAFC] mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-[#FF7A00]" />
                  <span>Essential Expedition Guidelines</span>
                </h3>
                <div className="space-y-3">
                  {itinerary.localTips.map((tip, idx) => (
                    <div key={idx} className="bg-[#060709] border border-[#232B3B] rounded-xl p-4">
                      <span className="block font-bold text-[#F8FAFC] text-sm mb-1">{tip.title}</span>
                      <p className="text-xs sm:text-sm text-[#94A3B8]">{tip.description}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
