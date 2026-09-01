export type TravelStyle = 
  | 'cultural' 
  | 'foodie' 
  | 'adventure' 
  | 'relaxation' 
  | 'budget' 
  | 'luxury' 
  | 'romantic' 
  | 'family';

export type TravelPace = 'relaxed' | 'moderate' | 'packed';
export type BudgetLevel = 'budget' | 'moderate' | 'upscale' | 'luxury';

export interface Activity {
  id: string;
  time: string; // e.g. "09:00 AM"
  period: 'morning' | 'afternoon' | 'evening';
  title: string;
  description: string;
  location: string;
  category: 'sightseeing' | 'dining' | 'adventure' | 'relaxation' | 'culture' | 'shopping' | 'transit';
  durationHours: number;
  costEstimate: number; // in USD
  rating?: number;
  image?: string;
  bookingTip?: string;
  tags?: string[];
  isCompleted?: boolean;
}

export interface DayMeal {
  type: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack';
  venueName: string;
  cuisine: string;
  priceRange: '$' | '$$' | '$$$' | '$$$$';
  recommendation: string;
  neighborhood: string;
}

export interface ItineraryDay {
  dayNumber: number;
  date?: string;
  title: string;
  summary: string;
  weatherForecast?: {
    condition: string;
    tempHighC: number;
    tempLowC: number;
    icon: string;
  };
  activities: Activity[];
  meals: DayMeal[];
  dailyBudgetUSD: number;
  localTransportTip: string;
}

export interface BudgetBreakdown {
  accommodationUSD: number;
  foodAndDiningUSD: number;
  activitiesUSD: number;
  localTransportUSD: number;
  bufferUSD: number;
  totalUSD: number;
}

export interface PackingItem {
  id: string;
  item: string;
  category: 'essentials' | 'clothing' | 'electronics' | 'toiletries' | 'adventure';
  isPacked: boolean;
}

export interface TripItinerary {
  id: string;
  title: string;
  destination: string;
  country: string;
  region?: string;
  heroImage: string;
  tagline: string;
  durationDays: number;
  travelStyle: TravelStyle;
  pace: TravelPace;
  budgetLevel: BudgetLevel;
  travelersCount: number;
  travelersType: 'solo' | 'couple' | 'family' | 'friends';
  seasonRecommendation: string;
  bestMonthsToVisit: string[];
  matchScore: number;
  overallBudget: BudgetBreakdown;
  days: ItineraryDay[];
  packingList: PackingItem[];
  localTips: {
    title: string;
    description: string;
    category: 'etiquette' | 'transit' | 'savings' | 'safety';
  }[];
  secretGems: {
    name: string;
    description: string;
    vibe: string;
  }[];
  createdAt: string;
}

export interface DestinationInspiration {
  id: string;
  name: string;
  country: string;
  continent: 'Europe' | 'Asia' | 'Americas' | 'Africa' | 'Oceania';
  tag: string;
  tagline: string;
  description: string;
  heroImage: string;
  gallery: string[];
  startingPriceUSD: number;
  idealDurationDays: number;
  bestSeason: string;
  matchScore: number;
  travelStyle: TravelStyle[];
  highlights: string[];
  presetPrompt: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: number;
  priceYearly: number;
  popular?: boolean;
  badge?: string;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  destination: string;
  quote: string;
  rating: number;
  savedHours: number;
  tripCostSavedUSD: number;
  travelerType: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'planning' | 'ai-technology' | 'pricing' | 'export';
}

export interface TripPlannerFormState {
  destination: string;
  origin: string;
  durationDays: number;
  startDate?: string;
  travelersType: 'solo' | 'couple' | 'family' | 'friends';
  travelersCount: number;
  travelStyle: TravelStyle;
  pace: TravelPace;
  budgetLevel: BudgetLevel;
  interests: string[];
  dietaryRestrictions: string[];
  specialRequests: string;
}
