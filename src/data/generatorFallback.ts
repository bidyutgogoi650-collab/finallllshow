import { TripItinerary, ItineraryDay, TravelStyle, TravelPace, BudgetLevel } from '../types';

export function generateClientItinerary(params: {
  destination: string;
  durationDays: number;
  travelersType: string;
  travelersCount: number;
  travelStyle: string;
  pace: string;
  budgetLevel: string;
  interests?: string[];
  dietaryRestrictions?: string[];
  specialRequests?: string;
}): TripItinerary {
  const destination = params.destination || 'Amalfi Coast, Italy';
  const durationDays = Math.min(Math.max(Number(params.durationDays) || 5, 2), 10);
  const style = (params.travelStyle || 'cultural') as TravelStyle;
  const pace = (params.pace || 'moderate') as TravelPace;
  const budget = (params.budgetLevel || 'moderate') as BudgetLevel;
  const travelersCount = Number(params.travelersCount) || 2;
  const travelersType = (params.travelersType || 'couple') as 'solo' | 'couple' | 'family' | 'friends';

  const budgetMultiplier = budget === 'budget' ? 80 : budget === 'upscale' ? 260 : budget === 'luxury' ? 480 : 150;
  const accommodationUSD = Math.round(budgetMultiplier * durationDays * 0.55 * (travelersCount > 1 ? 1.3 : 1));
  const foodAndDiningUSD = Math.round(budgetMultiplier * durationDays * 0.35 * travelersCount);
  const activitiesUSD = Math.round(budgetMultiplier * durationDays * 0.2 * travelersCount);
  const localTransportUSD = Math.round(durationDays * 35 * (travelersCount > 1 ? 1.4 : 1));
  const bufferUSD = Math.round(durationDays * 25);
  const totalUSD = accommodationUSD + foodAndDiningUSD + activitiesUSD + localTransportUSD + bufferUSD;

  const sampleImages = [
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80'
  ];
  const heroImage = sampleImages[Math.floor(Math.random() * sampleImages.length)];

  const days: ItineraryDay[] = [];
  const themes = [
    'Arrival, Historic Quarter Exploration & Sunset Viewpoint',
    'Cultural Landmarks, Artisan Workshops & Local Gastronomy',
    'Highland Trail Navigation & Alpine Panoramas',
    'Secluded Coastal Coves & Maritime Heritage',
    'Local Market Tastings & Authentic Culinary Immersion',
    'Architectural Marvels & Scenic Ridge Traversal',
    'Hidden Valley Sanctuary & Leisure Reflection'
  ];

  for (let i = 1; i <= durationDays; i++) {
    const theme = themes[(i - 1) % themes.length];
    days.push({
      dayNumber: i,
      title: `Day ${i}: ${theme}`,
      summary: `Immerse in the dynamic rhythm of ${destination} with curated stops balancing notable highlights and serene hidden paths.`,
      weatherForecast: {
        condition: 'Partly Sunny',
        tempHighC: 22,
        tempLowC: 14,
        icon: 'Sun'
      },
      activities: [
        {
          id: `act-${i}-1`,
          time: '09:00 AM',
          period: 'morning',
          title: `Morning Discovery in ${destination}`,
          description: `Early morning exploration through the historic district to capture optimal light and quiet vistas.`,
          location: `${destination} Central Quarter`,
          category: 'culture',
          durationHours: 2.5,
          costEstimate: Math.round(15 * (budget === 'budget' ? 0.7 : budget === 'luxury' ? 2.5 : 1)),
          rating: 4.9,
          bookingTip: 'Arrive 15 minutes before opening for serene photography without crowds.',
          tags: ['Historic', 'Walking', 'Photography']
        },
        {
          id: `act-${i}-2`,
          time: '01:30 PM',
          period: 'afternoon',
          title: `Scenic Trail & Panoramic Overlook`,
          description: `Traverse historic stone pathways leading to breathtaking panoramic views across the valley horizon.`,
          location: `${destination} Ridge Walk`,
          category: 'adventure',
          durationHours: 2.5,
          costEstimate: 0,
          rating: 5.0,
          bookingTip: 'Bring trekking poles and windbreaker as mountain breezes pick up.',
          tags: ['Hiking', 'Scenic Views', 'Nature']
        },
        {
          id: `act-${i}-3`,
          time: '07:00 PM',
          period: 'evening',
          title: `Sunset Promenade & Gastronomy Walk`,
          description: `Stroll through the vibrant evening plazas and discover regional dessert and wine bars.`,
          location: `${destination} Promenade`,
          category: 'dining',
          durationHours: 2.0,
          costEstimate: Math.round(30 * (budget === 'budget' ? 0.8 : budget === 'luxury' ? 3 : 1)),
          rating: 4.8,
          bookingTip: 'Reservations recommended for outdoor terrace seating.',
          tags: ['Evening', 'Food & Wine', 'Atmosphere']
        }
      ],
      meals: [
        {
          type: 'Breakfast',
          venueName: 'Café della Piazza',
          cuisine: 'Artisan Pastries & Espresso',
          priceRange: '$',
          recommendation: 'Freshly baked brioche and single-origin cappuccino.',
          neighborhood: 'Historic District'
        },
        {
          type: 'Lunch',
          venueName: 'Trattoria del Borgo',
          cuisine: 'Local Heritage',
          priceRange: '$$',
          recommendation: 'Handmade pasta with seasonal mountain truffles or seafood.',
          neighborhood: 'Artisan Quarter'
        },
        {
          type: 'Dinner',
          venueName: 'Ristorante Panoramico',
          cuisine: 'Modern Fine Regional',
          priceRange: budget === 'luxury' ? '$$$$' : '$$$',
          recommendation: 'Chef tasting menu with regional wine pairings.',
          neighborhood: 'Upper Ridge'
        }
      ],
      dailyBudgetUSD: Math.round(totalUSD / durationDays),
      localTransportTip: 'Use scenic local electric shuttles and well-marked foot trails.'
    });
  }

  return {
    id: `trip-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    title: `${durationDays}-Day Bespoke ${destination} Expedition`,
    destination,
    country: destination.includes(',') ? destination.split(',').pop()?.trim() || 'Global' : 'Global',
    tagline: `An engineered ${durationDays}-day trajectory balancing hidden mountain trails and cultural sanctuaries.`,
    heroImage,
    durationDays,
    travelersType,
    travelersCount,
    travelStyle: style,
    pace,
    budgetLevel: budget,
    seasonRecommendation: 'Spring / Autumn Shoulder Season',
    bestMonthsToVisit: ['April', 'May', 'September', 'October'],
    matchScore: 98,
    overallBudget: {
      totalUSD,
      accommodationUSD,
      foodAndDiningUSD,
      activitiesUSD,
      localTransportUSD,
      bufferUSD
    },
    days,
    packingList: [
      { id: 'p-1', item: 'Lightweight waterproof shell jacket', category: 'clothing', isPacked: false },
      { id: 'p-2', item: 'Sturdy broken-in trail shoes or hiking boots', category: 'adventure', isPacked: false },
      { id: 'p-3', item: 'Portable USB power bank (10,000mAh+)', category: 'electronics', isPacked: false },
      { id: 'p-4', item: 'Insulated refillable water flask', category: 'adventure', isPacked: false },
      { id: 'p-5', item: 'Universal electrical plug adapter', category: 'electronics', isPacked: false },
      { id: 'p-6', item: 'Compact travel first-aid kit', category: 'essentials', isPacked: false }
    ],
    localTips: [
      {
        title: 'Trail Courtesy & Refuge Etiquette',
        description: 'Always greet passing hikers and maintain quiet on early morning routes.',
        category: 'etiquette'
      },
      {
        title: 'Regional Transit Passes',
        description: 'Purchase multi-day regional train or ferry passes at the central station for up to 40% savings.',
        category: 'savings'
      },
      {
        title: 'Mountain Weather Preparedness',
        description: 'Highland weather shifts rapidly in afternoon hours; keep weather alerts active.',
        category: 'safety'
      }
    ],
    secretGems: [
      {
        name: 'The Whispering Pines Overlook',
        description: 'An unmarked footpath 400m past the main chapel leading to a secluded ledge overlooking the entire valley.',
        vibe: 'Tranquil & Cinematic'
      },
      {
        name: 'Antica Bottega Spezieria',
        description: 'A 200-year-old family apothecary crafting herbal teas and mountain honey.',
        vibe: 'Artisanal & Historic'
      }
    ],
    createdAt: new Date().toISOString()
  };
}
