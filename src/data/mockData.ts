import { 
  DestinationInspiration, 
  PricingPlan, 
  Testimonial, 
  FAQItem, 
  TripItinerary 
} from '../types';

export const POPULAR_DESTINATIONS: DestinationInspiration[] = [
  {
    id: 'kyoto-japan',
    name: 'Kyoto & Tokyo',
    country: 'Japan',
    continent: 'Asia',
    tag: 'Cultural Heritage & Modern Marvels',
    tagline: 'Ancient serene bamboo groves meet neon futuristic skylines',
    description: 'Experience the harmonious contrast between centuries-old Zen shrines in Kyoto and Michelin-starred culinary backstreets in Tokyo with precision bullet train travel.',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?auto=format&fit=crop&w=800&q=80'
    ],
    startingPriceUSD: 1450,
    idealDurationDays: 7,
    bestSeason: 'Mar – May & Oct – Nov',
    matchScore: 98,
    travelStyle: ['cultural', 'foodie', 'relaxation'],
    highlights: ['Fushimi Inari Sunrise Hike', 'Omakase in Gion', 'Shibuya Rooftop Sunset', 'Arashiyama Bamboo Forest Private Walk'],
    presetPrompt: '7 days cultural and foodie exploration in Kyoto and Tokyo with quiet morning temple visits and culinary hotspots'
  },
  {
    id: 'amalfi-italy',
    name: 'Amalfi Coast & Capri',
    country: 'Italy',
    continent: 'Europe',
    tag: 'Mediterranean Sun & Coastal Luxury',
    tagline: 'Cliffside pastel villages over sparkling turquoise waters',
    description: 'Sip limoncello on Positano terraces, sail around Capri sea grottos, and hike the legendary Path of the Gods with tailored sunset dining reservations.',
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=800&q=80'
    ],
    startingPriceUSD: 1850,
    idealDurationDays: 6,
    bestSeason: 'May – Sep',
    matchScore: 96,
    travelStyle: ['romantic', 'luxury', 'foodie'],
    highlights: ['Private Sunset Sail to Capri', 'Path of the Gods Trek', 'Ravello Villa Gardens', 'Positano Cliffside Dining'],
    presetPrompt: '6 days romantic coastal getaway in Amalfi Coast and Capri featuring sea-view villas and hidden beach coves'
  },
  {
    id: 'iceland-ring-road',
    name: 'South Coast & Glaciers',
    country: 'Iceland',
    continent: 'Europe',
    tag: 'Raw Nordic Wilderness',
    tagline: 'Cascading waterfalls, basalt canyons, and geothermal lagoons',
    description: 'Drive through otherworldly volcanic landscapes, walk beneath roaring glacial waterfalls, soak in steamy mineral lagoons, and chase the aurora borealis.',
    heroImage: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80'
    ],
    startingPriceUSD: 1650,
    idealDurationDays: 5,
    bestSeason: 'Sep – Apr (Aurora) or Jun – Aug',
    matchScore: 94,
    travelStyle: ['adventure', 'relaxation'],
    highlights: ['Diamond Beach Ice Blocks', 'Blue Lagoon Geothermal Spa', 'Skógafoss Waterfall Rainbow', 'Black Sand Beach at Vík'],
    presetPrompt: '5 days scenic adventure in South Iceland exploring waterfalls, glacier lagoons, and thermal spas'
  },
  {
    id: 'swiss-alps',
    name: 'Lauterbrunnen & Zermatt',
    country: 'Switzerland',
    continent: 'Europe',
    tag: 'Alpine Majesty & Scenic Trains',
    tagline: '72 roaring valley waterfalls and towering snow-capped peaks',
    description: 'Ride panoramic cogwheel railways past the Matterhorn, hike wildflower meadow trails, and unwind in historic wood-timbered Swiss chalets.',
    heroImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
    ],
    startingPriceUSD: 1950,
    idealDurationDays: 6,
    bestSeason: 'Jun – Oct & Dec – Mar',
    matchScore: 97,
    travelStyle: ['adventure', 'relaxation', 'luxury'],
    highlights: ['Gornergrat Panoramic Railway', 'First Cliff Walk Grindelwald', 'Fondue in Old Town Zermatt', 'Lake Brienz Steamboat'],
    presetPrompt: '6 days alpine paradise in Lauterbrunnen and Zermatt with scenic train passes and panoramic hikes'
  },
  {
    id: 'costa-rica-nature',
    name: 'Arenal & Manuel Antonio',
    country: 'Costa Rica',
    continent: 'Americas',
    tag: 'Rainforest Canopy & Wildlife',
    tagline: 'Lush tropical biodiversity, active volcanoes, and Pacific surf',
    description: 'Zip-line through misty cloud forests, spot sloths in wild rainforest preserves, and soak in volcanic hot springs surrounded by tropical toucans.',
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    ],
    startingPriceUSD: 1200,
    idealDurationDays: 7,
    bestSeason: 'Dec – Apr',
    matchScore: 92,
    travelStyle: ['adventure', 'family', 'budget'],
    highlights: ['Tabacón Thermal River Springs', 'Arenal Hanging Bridges Canopy', 'Manuel Antonio Wildlife Walk', 'Sunset Catamaran'],
    presetPrompt: '7 days eco-adventure in Costa Rica featuring rainforest wildlife, hot springs, and Pacific beach relaxation'
  },
  {
    id: 'marrakech-morocco',
    name: 'Marrakech & Sahara Desert',
    country: 'Morocco',
    continent: 'Africa',
    tag: 'Spice Bazaars & Starlit Dunes',
    tagline: 'Intricate palatial riads and golden Sahara stargazing camps',
    description: 'Navigate sensory spice markets in Jemaa el-Fnaa, stay in secret courtyard riads, and ride camels across Erg Chebbi dunes for luxury stargazing.',
    heroImage: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    startingPriceUSD: 1100,
    idealDurationDays: 6,
    bestSeason: 'Oct – May',
    matchScore: 93,
    travelStyle: ['cultural', 'adventure', 'foodie'],
    highlights: ['Glamping Under Sahara Stars', 'Majorelle Garden & YSL Museum', 'Traditional Moroccan Cooking Class', 'Atlas Mountain Berbers'],
    presetPrompt: '6 days exotic journey across Marrakech riads and luxury Sahara desert glamping'
  }
];

export const CURATED_SAMPLE_TRIP: TripItinerary = {
  id: 'featured-kyoto-tokyo',
  title: '7-Day Kyoto & Tokyo Cultural Mastery',
  destination: 'Kyoto & Tokyo',
  country: 'Japan',
  region: 'Kansai & Kanto',
  heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=85',
  tagline: 'Seamless blend of ancient tranquility and cutting-edge urban energy',
  durationDays: 7,
  travelStyle: 'cultural',
  pace: 'moderate',
  budgetLevel: 'moderate',
  travelersCount: 2,
  travelersType: 'couple',
  seasonRecommendation: 'Spring Blossom / Autumn Foliage',
  bestMonthsToVisit: ['April', 'May', 'October', 'November'],
  matchScore: 99,
  overallBudget: {
    accommodationUSD: 980,
    foodAndDiningUSD: 560,
    activitiesUSD: 310,
    localTransportUSD: 240,
    bufferUSD: 150,
    totalUSD: 2240
  },
  days: [
    {
      dayNumber: 1,
      date: 'Day 1',
      title: 'Arrival in Kyoto & Gion Lanterns Walk',
      summary: 'Arrive via Shinkansen bullet train, check into a traditional machiya inn, and enjoy an evening walk through the lantern-lit stone alleys of Gion.',
      weatherForecast: {
        condition: 'Clear & Crisp',
        tempHighC: 21,
        tempLowC: 12,
        icon: 'Sun'
      },
      dailyBudgetUSD: 280,
      localTransportTip: 'ICOCA card works for all Kyoto city buses and subways.',
      activities: [
        {
          id: 'act-1-1',
          time: '02:00 PM',
          period: 'afternoon',
          title: 'Machiya Check-in & Matcha Welcome',
          description: 'Settle into a restored historical townhome in Higashiyama with a private rock garden and traditional tatami sitting room.',
          location: 'Higashiyama Ward, Kyoto',
          category: 'relaxation',
          durationHours: 1.5,
          costEstimate: 0,
          rating: 4.9,
          bookingTip: 'Ask the host for their curated neighborhood bakery map.'
        },
        {
          id: 'act-1-2',
          time: '04:30 PM',
          period: 'afternoon',
          title: 'Ninenzaka & Sannenzaka Cobblestone Stroll',
          description: 'Wander preserved Edo-era pedestrian lanes lined with wooden tearooms, incense boutiques, and ceramic artisans.',
          location: 'Ninenzaka, Kyoto',
          category: 'sightseeing',
          durationHours: 2,
          costEstimate: 15,
          rating: 4.8
        },
        {
          id: 'act-1-3',
          time: '07:30 PM',
          period: 'evening',
          title: 'Gion Shirakawa Twilight & Geisha District',
          description: 'Stroll along the willowed Shirakawa canal as red lanterns glow against babbling water and historic teahouses.',
          location: 'Gion Shirakawa, Kyoto',
          category: 'culture',
          durationHours: 1.5,
          costEstimate: 0,
          rating: 4.9
        }
      ],
      meals: [
        {
          type: 'Dinner',
          venueName: 'Gion Karyo (Kaiseki Experience)',
          cuisine: 'Kyoto Seasonal Multi-Course Kaiseki',
          priceRange: '$$$',
          recommendation: 'Reservations made 3 weeks in advance recommended; try the seasonal dashi broth and grilled sweetfish.',
          neighborhood: 'Gion, Kyoto'
        }
      ]
    },
    {
      dayNumber: 2,
      date: 'Day 2',
      title: 'Fushimi Inari at Sunrise & Arashiyama Bamboo',
      summary: 'Beat the crowds under 10,000 vermilion torii gates at daybreak, followed by the towering bamboo groves and matcha on the Hozu River.',
      weatherForecast: {
        condition: 'Sunny with Soft Clouds',
        tempHighC: 22,
        tempLowC: 13,
        icon: 'SunDim'
      },
      dailyBudgetUSD: 310,
      localTransportTip: 'JR Nara Line from Kyoto Station to Inari takes just 5 minutes.',
      activities: [
        {
          id: 'act-2-1',
          time: '06:30 AM',
          period: 'morning',
          title: 'Fushimi Inari-taisha Sacred Mountain Hike',
          description: 'Hike through endless scarlet arches in mystical morning stillness while morning mist rises through the cedar mountain.',
          location: 'Fushimi Ward, Kyoto',
          category: 'adventure',
          durationHours: 2.5,
          costEstimate: 0,
          rating: 5.0,
          bookingTip: 'Climb past the Yotsutsuji intersection for uncrowded scenic views of Kyoto valley.'
        },
        {
          id: 'act-2-2',
          time: '11:00 AM',
          period: 'morning',
          title: 'Arashiyama Bamboo Grove & Tenryu-ji Zen Garden',
          description: 'Listen to the rustle of giant bamboo stems swaying in the wind and meditate at the UNESCO 14th-century pond garden.',
          location: 'Arashiyama, Kyoto',
          category: 'culture',
          durationHours: 2,
          costEstimate: 8,
          rating: 4.8
        },
        {
          id: 'act-2-3',
          time: '03:00 PM',
          period: 'afternoon',
          title: 'Private Matcha Whisking Ceremony in Uji Tea House',
          description: 'Learn the ancient philosophy of Ichigo Ichie (one time, one meeting) with a certified tea master.',
          location: 'Arashiyama Riverbank',
          category: 'culture',
          durationHours: 1.5,
          costEstimate: 35,
          rating: 4.9
        }
      ],
      meals: [
        {
          type: 'Lunch',
          venueName: 'Shigetsu (Inside Tenryu-ji Temple)',
          cuisine: 'Shojin Ryori (Zen Buddhist Vegetarian)',
          priceRange: '$$',
          recommendation: 'Temple-made sesame tofu and seasonal vegetable tempura overlooking the garden.',
          neighborhood: 'Arashiyama'
        },
        {
          type: 'Dinner',
          venueName: 'Pontocho Alley Izakaya',
          cuisine: 'Yakitori & Craft Sake',
          priceRange: '$$',
          recommendation: 'Sit on the summer kawayuka deck over the Kamo River.',
          neighborhood: 'Pontocho'
        }
      ]
    },
    {
      dayNumber: 3,
      date: 'Day 3',
      title: 'Kinkaku-ji Golden Pavilion & Shinkansen to Tokyo',
      summary: 'Admire the gold leaf reflection on Mirror Pond before boarding the 300 km/h Shinkansen speeding toward Tokyo skylines.',
      weatherForecast: {
        condition: 'Pleasant & Mild',
        tempHighC: 20,
        tempLowC: 11,
        icon: 'Sun'
      },
      dailyBudgetUSD: 390,
      localTransportTip: 'Tokaido Shinkansen Nozomi (2h 15m) with right-side seats (Row E) for Mt. Fuji views.',
      activities: [
        {
          id: 'act-3-1',
          time: '09:00 AM',
          period: 'morning',
          title: 'Kinkaku-ji (The Golden Pavilion)',
          description: 'Gaze upon the top two floors gilded in pure gold leaf shimmering above the surrounding pond.',
          location: 'Kita Ward, Kyoto',
          category: 'sightseeing',
          durationHours: 1.5,
          costEstimate: 5,
          rating: 4.7
        },
        {
          id: 'act-3-2',
          time: '01:30 PM',
          period: 'afternoon',
          title: 'Shinkansen Bullet Train to Tokyo Station',
          description: 'Enjoy a gourmet Ekiben bento box while cruising effortlessly past tea plantations and Mount Fuji.',
          location: 'Kyoto to Tokyo',
          category: 'transit',
          durationHours: 2.5,
          costEstimate: 110,
          rating: 4.9
        },
        {
          id: 'act-3-3',
          time: '06:00 PM',
          period: 'evening',
          title: 'Shibuya Sky 360° Rooftop Sunset',
          description: 'Watch Tokyo ignite into a sea of neon from 230 meters above Shibuya Crossing as dusk falls.',
          location: 'Shibuya Scramble Square, Tokyo',
          category: 'sightseeing',
          durationHours: 2,
          costEstimate: 20,
          rating: 4.9,
          bookingTip: 'Book 4 weeks ahead for the 5:30 PM sunset timeslot.'
        }
      ],
      meals: [
        {
          type: 'Dinner',
          venueName: 'Afuri Ramen Shibuya',
          cuisine: 'Yuzu Shio Ramen & Craft Beer',
          priceRange: '$',
          recommendation: 'Signature light chicken dashi broth with citrus yuzu and charcoal-charred chashu.',
          neighborhood: 'Shibuya, Tokyo'
        }
      ]
    },
    {
      dayNumber: 4,
      date: 'Day 4',
      title: 'Tokyo Contrast: Historic Asakusa to Futuristic Akihabara',
      summary: 'Explore Senso-ji temple, cruise the Sumida River, and dive into retro gaming and tech culture.',
      weatherForecast: {
        condition: 'Clear Blue Sky',
        tempHighC: 23,
        tempLowC: 14,
        icon: 'Sun'
      },
      dailyBudgetUSD: 290,
      localTransportTip: 'Tokyo Metro 72-Hour Pass for unlimited rides across all lines.',
      activities: [
        {
          id: 'act-4-1',
          time: '09:00 AM',
          period: 'morning',
          title: 'Senso-ji & Nakamise Dori Street Food',
          description: 'Walk through the grand Kaminarimon Thunder Gate and taste freshly baked Ningyo-yaki sweets.',
          location: 'Asakusa, Tokyo',
          category: 'culture',
          durationHours: 2,
          costEstimate: 12,
          rating: 4.8
        },
        {
          id: 'act-4-2',
          time: '02:00 PM',
          period: 'afternoon',
          title: 'Akihabara Vintage Tech & Capsule Toy Alleys',
          description: 'Hunt for rare electronics, retro Famicom games, and marvel at 6-story anime hubs.',
          location: 'Akihabara, Tokyo',
          category: 'shopping',
          durationHours: 2.5,
          costEstimate: 25,
          rating: 4.6
        },
        {
          id: 'act-4-3',
          time: '07:00 PM',
          period: 'evening',
          title: 'Shinjuku Omoide Yokocho (Memory Lane) Lantern Crawl',
          description: 'Dine in tiny 6-seat stalls under paper lanterns serving sizzling skewers of yakitori.',
          location: 'Shinjuku, Tokyo',
          category: 'dining',
          durationHours: 2,
          costEstimate: 40,
          rating: 4.8
        }
      ],
      meals: [
        {
          type: 'Lunch',
          venueName: 'Daikokuya Tempura',
          cuisine: 'Traditional Tokyo Tendon',
          priceRange: '$$',
          recommendation: 'Crispy jumbo tiger prawns coated in secret dark savory sweet sauce since 1887.',
          neighborhood: 'Asakusa'
        }
      ]
    }
  ],
  packingList: [
    { id: 'pk-1', item: 'Comfortable slip-on walking shoes (for temple visits)', category: 'essentials', isPacked: true },
    { id: 'pk-2', item: 'Pocket Wi-Fi or e-SIM card with unlimited data', category: 'electronics', isPacked: true },
    { id: 'pk-3', item: 'Coin purse for cash & vending machines', category: 'essentials', isPacked: false },
    { id: 'pk-4', item: 'Universal plug adapter (Type A)', category: 'electronics', isPacked: true },
    { id: 'pk-5', item: 'Light rain jacket & compact umbrella', category: 'clothing', isPacked: false },
    { id: 'pk-6', item: 'Small hand towel (restrooms often don’t provide paper towels)', category: 'toiletries', isPacked: false }
  ],
  localTips: [
    {
      title: 'No Tipping Culture',
      description: 'Tipping in Japan is not customary and can cause confusion. Exceptional service is built into every bill.',
      category: 'etiquette'
    },
    {
      title: 'Luggage Forwarding (Takkyubin)',
      description: 'Send large suitcases directly between Kyoto and Tokyo hotels for about $15 per bag so you can travel unburdened.',
      category: 'transit'
    },
    {
      title: 'Convenience Store Gourmet',
      description: '7-Eleven, Lawson, and FamilyMart offer chef-grade onigiri, egg salad sandwiches, and hot snacks for under $3.',
      category: 'savings'
    }
  ],
  secretGems: [
    {
      name: 'Otagi Nenbutsu-ji',
      description: 'Hidden hillside temple in Arashiyama with 1,200 whimsical hand-carved mossy stone disciples with smiling faces.',
      vibe: 'Peaceful, Quirky & Magical'
    },
    {
      name: 'Nezu Museum Garden Cafe',
      description: 'Glass-walled cafe hidden inside a lush private Japanese bamboo sanctuary right in central Tokyo.',
      vibe: 'Modern Serenity'
    }
  ],
  createdAt: '2026-08-31'
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: 'Explorer Free',
    tagline: 'Ideal for weekend getaways and curious wanderers',
    priceMonthly: 0,
    priceYearly: 0,
    features: [
      '3 AI-generated itineraries per month',
      'Basic day-by-day scheduling',
      'Curated destination inspiration library',
      'Standard weather forecasts & packing lists',
      'Mobile-friendly web access'
    ],
    notIncluded: [
      'Real-time collaborative planning with friends',
      'Dynamic budget optimizer & price alerts',
      'Offline PDF export & Apple Wallet sync',
      'Priority Gemini 3.7 Flash reasoning speed'
    ],
    ctaText: 'Start Free Journey'
  },
  {
    id: 'pro',
    name: 'Pro Adventurer',
    tagline: 'For avid travelers who want effortless, flaw-free vacations',
    priceMonthly: 14,
    priceYearly: 10,
    popular: true,
    badge: 'Most Popular Choice',
    features: [
      'Unlimited AI custom itineraries',
      'Real-time pacing & crowd avoidance',
      'Precision budget breakdowns & expense tracking',
      'Smart hidden gem discovery engine',
      'Interactive map route optimization',
      'Shareable live trip links & PDF export',
      'Sync with Google Calendar & Apple Notes'
    ],
    ctaText: 'Get Pro Adventurer'
  },
  {
    id: 'globetrotter',
    name: 'Globetrotter Club',
    tagline: 'For families, digital nomads & group trip coordinators',
    priceMonthly: 29,
    priceYearly: 22,
    badge: 'All-Inclusive Pass',
    features: [
      'Everything in Pro Adventurer',
      'Multi-city & multi-country complex routes',
      'Real-time group collaboration (up to 10 travelers)',
      'VIP Concierge AI: 24/7 on-trip adjustments via WhatsApp',
      'Automated flight & hotel price tracking alerts',
      'Priority offline map caching & emergency guides',
      'Dietary restriction & accessibility custom filters'
    ],
    ctaText: 'Unlock Globetrotter'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Elena Rostova',
    role: 'Product Designer & Solo Traveler',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    destination: 'Japan (Kyoto & Hakone)',
    quote: 'The AI itinerary was so thoughtful. It didn’t just suggest top sights—it spaced out walking distances logically and found a 1,200-year-old moss temple I never would have discovered on social media.',
    rating: 5,
    savedHours: 18,
    tripCostSavedUSD: 420,
    travelerType: 'Solo Explorer'
  },
  {
    id: 'test-2',
    name: 'Marcus & Chloe Vance',
    role: 'Travel Vloggers & Couple',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    destination: 'Amalfi Coast & Dolomites',
    quote: 'Planning our 2-week Italian honeymoon was giving us analysis paralysis. With Driftway, we plugged in our budget, romantic vibe, and favorite foods, and had a flawless itinerary in 15 seconds.',
    rating: 5,
    savedHours: 24,
    tripCostSavedUSD: 680,
    travelerType: 'Couple Getaway'
  },
  {
    id: 'test-3',
    name: 'Dr. David Chen',
    role: 'Father of 3 & Pediatrician',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    destination: 'Costa Rica Rainforest & Pacific',
    quote: 'Traveling with kids aged 6, 9, and 12 requires precise pacing. The AI balanced sloth reserves and gentle zip-lines with relaxed pool afternoons. Zero meltdowns, 100% pure joy.',
    rating: 5,
    savedHours: 15,
    tripCostSavedUSD: 350,
    travelerType: 'Family Vacation'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'planning',
    question: 'How does the AI create such hyper-realistic itineraries?',
    answer: 'Our engine uses Google Gemini 3.7 Flash trained on millions of real traveler reviews, transit transit timetables, opening hours, and geographic proximity data. It calculates walking fatigue, opening days, seasonal weather, and dietary restrictions to build logical, stress-free routes.'
  },
  {
    id: 'faq-2',
    category: 'ai-technology',
    question: 'Can I customize and tweak individual activities after generation?',
    answer: 'Absolutely! Every day, activity, and restaurant recommendation is fully interactive. You can swap activities, drag to reorder times, adjust budget caps, or ask the AI to "Find an outdoor alternative if it rains" with one click.'
  },
  {
    id: 'faq-3',
    category: 'pricing',
    question: 'Is there a free trial or money-back guarantee?',
    answer: 'Yes. You can generate 3 comprehensive multi-day itineraries on our Free Explorer tier with zero credit card required. Pro and Globetrotter plans come with a no-questions-asked 14-day money-back guarantee.'
  },
  {
    id: 'faq-4',
    category: 'export',
    question: 'Can I use my itinerary offline without mobile data or international roaming?',
    answer: 'Yes! Pro and Globetrotter users can export their trip to a printable PDF sheet, sync events directly with Apple Calendar and Google Calendar, or cache the trip directly inside the web app for offline access.'
  },
  {
    id: 'faq-5',
    category: 'planning',
    question: 'How accurate are the budget estimations and restaurant recommendations?',
    answer: 'Our cost algorithm tracks current local dining, entrance fees, and public transport averages across 120+ countries. We categorize meals into $, $$, $$$, and $$$$ tiers with accurate tip expectations.'
  }
];
