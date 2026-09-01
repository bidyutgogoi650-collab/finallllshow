import { useState } from 'react';
import { TripItinerary } from '../types';
import { 
  X, 
  Copy, 
  Check, 
  Share2, 
  Printer, 
  Mail, 
  MessageSquare
} from 'lucide-react';

interface ShareTripModalProps {
  trip: TripItinerary | null;
  onClose: () => void;
}

export function ShareTripModal({ trip, onClose }: ShareTripModalProps) {
  const [copied, setCopied] = useState(false);

  if (!trip) return null;

  const shareUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}?trip=${encodeURIComponent(trip.id)}`
    : `https://driftway.travel/trips/${trip.id}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080B0D]/85 backdrop-blur-md animate-in fade-in">
      <div 
        className="w-full max-w-md bg-[#11171B] rounded-3xl shadow-2xl border border-[#233137] overflow-hidden animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-[#233137] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Share2 className="w-5 h-5 text-[#8DAA91]" />
            <h3 className="font-display text-lg font-bold text-[#E8ECEF]">
              Share Expedition Itinerary
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#8E9FA8] hover:text-[#E8ECEF] hover:bg-[#162024] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Trip Summary Card */}
          <div className="flex items-center gap-3 p-3 bg-[#080B0D] rounded-2xl border border-[#233137]">
            <img
              src={trip.heroImage}
              alt={trip.title}
              className="w-14 h-14 rounded-xl object-cover border border-[#233137]"
            />
            <div className="overflow-hidden">
              <span className="text-[10px] font-mono uppercase font-bold text-[#8DAA91] tracking-wider block">
                {trip.durationDays} Days • {trip.destination}
              </span>
              <h4 className="font-display font-bold text-[#E8ECEF] text-sm truncate">
                {trip.title}
              </h4>
              <span className="text-xs text-[#8E9FA8] block">
                Est. Total: ${trip.overallBudget.totalUSD.toLocaleString()} USD
              </span>
            </div>
          </div>

          {/* Copyable Link Field */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#8E9FA8] mb-2">
              Shareable Route Link
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={shareUrl}
                className="w-full px-3.5 py-2.5 bg-[#080B0D] border border-[#233137] rounded-xl text-xs font-mono text-[#E8ECEF] focus:outline-hidden"
              />
              <button
                onClick={handleCopy}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                  copied
                    ? 'bg-[#588157] text-[#080B0D]'
                    : 'bg-[#588157] hover:bg-[#689467] text-[#080B0D]'
                }`}
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Quick Sharing Channels */}
          <div>
            <span className="block text-xs font-mono font-bold uppercase tracking-wider text-[#8E9FA8] mb-3">
              Direct Channels
            </span>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`Check out our AI wilderness expedition for ${trip.destination}: ${shareUrl}`)}`}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#080B0D] hover:bg-[#162024] border border-[#233137] hover:border-[#588157]/40 rounded-2xl text-center font-semibold text-[#E8ECEF] transition-colors flex flex-col items-center gap-1.5 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-[#8DAA91]" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`mailto:?subject=${encodeURIComponent(`Expedition Itinerary: ${trip.title}`)}&body=${encodeURIComponent(`Here is our custom expedition plan for ${trip.destination}:\n\n${shareUrl}`)}`}
                className="p-3 bg-[#080B0D] hover:bg-[#162024] border border-[#233137] hover:border-[#588157]/40 rounded-2xl text-center font-semibold text-[#E8ECEF] transition-colors flex flex-col items-center gap-1.5 cursor-pointer"
              >
                <Mail className="w-5 h-5 text-[#8DAA91]" />
                <span>Email</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  window.print();
                }}
                className="p-3 bg-[#080B0D] hover:bg-[#162024] border border-[#233137] hover:border-[#588157]/40 rounded-2xl text-center font-semibold text-[#E8ECEF] transition-colors flex flex-col items-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-5 h-5 text-[#8E9FA8]" />
                <span>Print PDF</span>
              </button>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#080B0D] border-t border-[#233137] text-center text-xs text-[#8E9FA8]">
          Anyone with this link can view this expedition route and export their own copy.
        </div>

      </div>
    </div>
  );
}
