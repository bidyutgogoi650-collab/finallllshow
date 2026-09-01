import { useState } from 'react';
import { CURATED_SAMPLE_TRIP } from '../data/mockData';
import { TripItinerary } from '../types';
import { 
  Sparkles, 
  MapPin, 
  Clock, 
  Calendar, 
  DollarSign, 
  Utensils, 
  ArrowRight, 
  Check, 
  Sun,
  ShieldCheck,
  Compass,
  Mountain
} from 'lucide-react';

interface LiveItineraryShowcaseProps {
  onLoadTripToPlanner: (trip: TripItinerary) => void;
}

export function LiveItineraryShowcase({ onLoadTripToPlanner }: LiveItineraryShowcaseProps) {
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);
  const trip = CURATED_SAMPLE_TRIP;
  const currentDay = trip.days[selectedDayIndex] || trip.days[0];

  return (
    <section id="itinerary-preview" className="py-24 bg-[#060709] relative border-t border-[#232B3B]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E2638]/60 border border-[#232B3B] text-[#E5B869] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#E5B869]" />
              <span>Interactive Telemetry Showcase</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
              Test-Drive a <br />
              <span className="gold-text-gradient">Generated Trajectory.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#94A3B8] font-normal leading-relaxed">
            Inspect our synthesized expedition output. Click through the timeline below to examine alpine coordinates, curated dining, and elevation profiles.
          </p>
        </div>

        {/* Showcase Container */}
        <div className="max-w-6xl mx-auto bg-[#0F141D] rounded-3xl border border-[#232B3B] shadow-2xl overflow-hidden adventure-card-shadow">
          
          {/* Top Banner with Destination details */}
          <div className="p-6 sm:p-8 bg-[#090C12] border-b border-[#232B3B] text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="px-3 py-1 rounded-full bg-[#E5B869] text-[#060709] font-mono font-bold text-xs uppercase tracking-wider">
                  SAMPLE EXPEDITION: 7-DAY ALPINE SYNTHESIS
                </span>
                <span className="text-xs text-[#94A3B8] font-mono">
                  Confidence: 99.4%
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F8FAFC]">
                {trip.title}
              </h3>
              <p className="text-[#94A3B8] text-xs sm:text-sm mt-1 max-w-xl">
                {trip.tagline}
              </p>
            </div>

            <button
              onClick={() => onLoadTripToPlanner(trip)}
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#E5B869] hover:bg-[#F0C77A] text-[#060709] font-bold rounded-2xl text-sm transition-all shadow-lg shadow-[#E5B869]/10 shrink-0 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#060709]" />
              <span>Load Route in Generator</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Interactive Day Switcher */}
          <div className="flex items-center gap-2 px-6 py-4 bg-[#060709] border-b border-[#232B3B] overflow-x-auto">
            {trip.days.map((day, idx) => {
              const isSelected = selectedDayIndex === idx;
              return (
                <button
                  key={day.dayNumber}
                  onClick={() => setSelectedDayIndex(idx)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold shrink-0 transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-[#E5B869] text-[#060709] border-[#E5B869] shadow-md font-bold'
                      : 'bg-[#0F141D] text-[#94A3B8] border-[#232B3B] hover:bg-[#1E2638] hover:text-[#F8FAFC]'
                  }`}
                >
                  <span className="block text-[10px] font-mono uppercase opacity-80">Day {day.dayNumber}</span>
                  <span className="block font-bold truncate max-w-[130px]">{day.title.split(':')[0] || `Day ${day.dayNumber}`}</span>
                </button>
              );
            })}
          </div>

          {/* Day Activities Content */}
          <div className="p-6 sm:p-10 space-y-8">
            
            {/* Day Title and Weather */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#232B3B] pb-5">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#E5B869] tracking-wider">
                  TIMELINE • DAY {currentDay.dayNumber} OF {trip.durationDays}
                </span>
                <h4 className="font-display text-xl sm:text-2xl font-bold text-[#F8FAFC] mt-0.5">
                  {currentDay.title}
                </h4>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#F8FAFC] bg-[#060709] px-4 py-2 rounded-2xl border border-[#232B3B]">
                <Sun className="w-4 h-4 text-[#E5B869]" />
                <span>{currentDay.weatherForecast?.condition} ({currentDay.weatherForecast?.tempHighC}°C / {((currentDay.weatherForecast?.tempHighC || 0) * 9/5 + 32).toFixed(0)}°F)</span>
              </div>
            </div>

            {/* Activities List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {currentDay.activities.map((act) => (
                <div key={act.id} className="bg-[#060709] p-5 rounded-2xl border border-[#232B3B] hover:border-[#E5B869]/50 transition-all flex flex-col justify-between adventure-card-hover">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#1E2638] text-[#F8FAFC] text-[10px] font-mono font-bold border border-[#232B3B]">
                        {act.time}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#E5B869]">
                        {act.costEstimate === 0 ? 'Free Entry' : `$${act.costEstimate} USD`}
                      </span>
                    </div>
                    <h5 className="font-display font-bold text-[#F8FAFC] text-sm mb-1.5">{act.title}</h5>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">{act.description}</p>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-[#232B3B] flex items-center gap-1.5 text-[11px] text-[#94A3B8] font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#E5B869] shrink-0" />
                    <span className="truncate">{act.location}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Food Highlight */}
            {currentDay.meals && currentDay.meals.length > 0 && (
              <div className="bg-[#060709] border border-[#232B3B] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#1E2638] text-[#E5B869] border border-[#232B3B] flex items-center justify-center font-bold shrink-0">
                    <Utensils className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#E5B869] block">
                      Curated Culinary Station
                    </span>
                    <h6 className="font-display font-bold text-[#F8FAFC] text-base">
                      {currentDay.meals[0].venueName} ({currentDay.meals[0].cuisine})
                    </h6>
                    <p className="text-xs text-[#94A3B8] mt-0.5">
                      {currentDay.meals[0].recommendation}
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-xs font-mono font-bold text-[#E5B869] bg-[#1E2638] px-3 py-1 rounded-full border border-[#232B3B]">
                    {currentDay.meals[0].priceRange}
                  </span>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
