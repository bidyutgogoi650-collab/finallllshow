import { TripItinerary } from '../types';
import { 
  X, 
  Bookmark, 
  Trash2, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';

interface SavedTripsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedTrips: TripItinerary[];
  onSelectTrip: (trip: TripItinerary) => void;
  onRemoveTrip: (tripId: string) => void;
  onStartNewPlan: () => void;
}

export function SavedTripsDrawer({
  isOpen,
  onClose,
  savedTrips,
  onSelectTrip,
  onRemoveTrip,
  onStartNewPlan
}: SavedTripsDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#080B0D]/80 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#11171B] shadow-2xl flex flex-col animate-in slide-in-from-right duration-300 border-l border-[#233137]">
          
          {/* Drawer Header */}
          <div className="p-6 border-b border-[#233137] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Bookmark className="w-5 h-5 text-[#588157] fill-[#588157]" />
              <h3 className="font-display text-lg font-bold text-[#E8ECEF]">
                Saved Expeditions ({savedTrips.length})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#8E9FA8] hover:text-[#E8ECEF] hover:bg-[#162024] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {savedTrips.length === 0 ? (
              <div className="text-center py-16 px-4">
                <div className="w-12 h-12 rounded-2xl bg-[#162024] text-[#8DAA91] flex items-center justify-center mx-auto mb-4 font-bold border border-[#233137]">
                  <Bookmark className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-[#E8ECEF] text-base">No saved expeditions yet</h4>
                <p className="text-xs text-[#8E9FA8] mt-1 max-w-xs mx-auto leading-relaxed">
                  Generate an AI wilderness itinerary or explore curated destinations, then click "Save Route" to bookmark them here for offline reference.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onStartNewPlan();
                  }}
                  className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-[#588157] hover:bg-[#689467] text-[#080B0D] rounded-full text-xs font-black shadow-lg shadow-[#588157]/15 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#080B0D]" />
                  <span>Plan New Route</span>
                </button>
              </div>
            ) : (
              savedTrips.map((trip) => (
                <div
                  key={trip.id}
                  className="bg-[#080B0D] rounded-2xl border border-[#233137] overflow-hidden shadow-md hover:border-[#588157]/40 transition-all group"
                >
                  <div className="relative h-28 w-full">
                    <img
                      src={trip.heroImage}
                      alt={trip.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080B0D]/95 via-black/40 to-transparent" />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveTrip(trip.id);
                      }}
                      className="absolute top-2 right-2 p-1.5 rounded-lg bg-[#080B0D]/80 hover:bg-red-700/80 text-white backdrop-blur-xs transition-colors cursor-pointer"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <div className="absolute bottom-2 left-3 right-3 text-white">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8DAA91]">
                        {trip.durationDays} Days • {trip.destination}
                      </span>
                      <h5 className="font-display text-sm font-bold truncate text-[#E8ECEF]">
                        {trip.title}
                      </h5>
                    </div>
                  </div>

                  <div className="p-3.5 flex items-center justify-between text-xs">
                    <div className="text-[#8E9FA8]">
                      <span className="font-bold text-[#E8ECEF]">
                        ${trip.overallBudget.totalUSD.toLocaleString()} USD
                      </span>
                      <span className="block text-[10px] text-[#8E9FA8]/70 capitalize">
                        {trip.travelStyle} • {trip.pace}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        onSelectTrip(trip);
                        onClose();
                      }}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-[#588157] hover:bg-[#689467] text-[#080B0D] rounded-full font-bold text-xs transition-colors cursor-pointer"
                    >
                      <span>Open View</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer */}
          {savedTrips.length > 0 && (
            <div className="p-4 border-t border-[#233137] bg-[#080B0D]">
              <button
                onClick={() => {
                  onClose();
                  onStartNewPlan();
                }}
                className="w-full py-3 bg-[#588157] hover:bg-[#689467] text-[#080B0D] rounded-full text-xs font-black flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#588157]/15"
              >
                <Sparkles className="w-4 h-4 text-[#080B0D]" />
                <span>Synthesize Another Route</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
