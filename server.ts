import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// Fallback high-quality itinerary generator for instant responsive experience
function generateFallbackItinerary(body: any) {
  const destination = body.destination || 'Amalfi Coast, Italy';
  const durationDays = Math.min(Math.max(Number(body.durationDays) || 5, 2), 10);
  const style = body.travelStyle || 'cultural';
  const pace = body.pace || 'moderate';
  const budget = body.budgetLevel || 'moderate';
  const travelersCount = Number(body.travelersCount) || 2;
  const travelersType = body.travelersType || 'couple';

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

  const days = [];
  const themes = [
    'Arrival, Neighborhood Discovery & Sunset Welcome',
    'Historic Landmarks & Authentic Artisan Workshops',
    'Scenic Panoramas, Hidden Lookout Points & Local Food Tour',
    'Nature Immersion, Coastal Walk or Mountain Trail',
    'Cultural Masterpieces, Vibrant Markets & Farewell Celebration',
    'Off-the-beaten-path Day Excursion to Surrounding Villages',
    'Leisure Morning, Specialty Coffee & Souvenir Hunting'
  ];

  for (let i = 1; i <= durationDays; i++) {
    const theme = themes[(i - 1) % themes.length];
    days.push({
      dayNumber: i,
      date: `Day ${i}`,
      title: `${destination}: ${theme}`,
      summary: `Day ${i} is calibrated for a ${pace} pace, focusing on immersive ${style} highlights with strategic rest intervals.`,
      weatherForecast: {
        condition: i % 2 === 0 ? 'Sunny & Mild' : 'Clear Skies',
        tempHighC: 22 + (i % 4),
        tempLowC: 14 + (i % 3),
        icon: 'Sun'
      },
      dailyBudgetUSD: Math.round(totalUSD / durationDays),
      localTransportTip: `Use regional transit passes or local ferries/trains for optimal convenience.`,
      activities: [
        {
          id: `act-${i}-1`,
          time: '09:00 AM',
          period: 'morning',
          title: `Morning Exploration at ${destination} Prime Landmark`,
          description: `Early visit before the midday crowds. Take in iconic architecture and tranquil morning light.`,
          location: `Central ${destination}`,
          category: 'sightseeing',
          durationHours: 2.5,
          costEstimate: budget === 'budget' ? 5 : 25,
          rating: 4.9,
          bookingTip: 'Book early entry tickets online to bypass the main ticket queue.'
        },
        {
          id: `act-${i}-2`,
          time: '02:00 PM',
          period: 'afternoon',
          title: `Curated ${style === 'foodie' ? 'Culinary Tasting' : 'Hidden Gem Alley Walk'}`,
          description: `Discover artisanal workshops and quiet courtyards tucked away from the bustling main thoroughfares.`,
          location: `Historic Quarter, ${destination}`,
          category: 'culture',
          durationHours: 2,
          costEstimate: budget === 'budget' ? 10 : 35,
          rating: 4.8
        },
        {
          id: `act-${i}-3`,
          time: '06:30 PM',
          period: 'evening',
          title: `Golden Hour Sunset Spot & Evening Promenade`,
          description: `Watch twilight settle over the city from a scenic vantage point, followed by relaxed drinks.`,
          location: `Panoramic Viewpoint, ${destination}`,
          category: 'relaxation',
          durationHours: 1.5,
          costEstimate: 0,
          rating: 5.0
        }
      ],
      meals: [
        {
          type: 'Lunch',
          venueName: `Trattoria / Bistro de ${destination}`,
          cuisine: `Local Seasonal Regional Specialties`,
          priceRange: budget === 'budget' ? '$' : budget === 'luxury' ? '$$$' : '$$',
          recommendation: 'Ask for the daily chef special featuring freshly sourced regional produce.',
          neighborhood: 'Old Town District'
        },
        {
          type: 'Dinner',
          venueName: `Sunset Terrace Restaurant`,
          cuisine: `Refined Traditional Dining`,
          priceRange: budget === 'budget' ? '$$' : budget === 'luxury' ? '$$$$' : '$$$',
          recommendation: 'Pair meal with local wine or crafted botanical drinks with panoramic views.',
          neighborhood: 'Riverside / Hillside'
        }
      ]
    });
  }

  return {
    id: `trip-${Date.now()}`,
    title: `${durationDays}-Day Personalized ${destination} Journey`,
    destination,
    country: 'Destination Country',
    region: 'Popular Travel Corridor',
    heroImage,
    tagline: `Hand-crafted for ${travelersCount} ${travelersType} traveler${travelersCount > 1 ? 's' : ''} seeking a ${pace}-paced ${style} trip.`,
    durationDays,
    travelStyle: style,
    pace,
    budgetLevel: budget,
    travelersCount,
    travelersType,
    seasonRecommendation: 'Spring & Autumn Shoulder Months',
    bestMonthsToVisit: ['April', 'May', 'September', 'October'],
    matchScore: 97,
    overallBudget: {
      accommodationUSD,
      foodAndDiningUSD,
      activitiesUSD,
      localTransportUSD,
      bufferUSD,
      totalUSD
    },
    days,
    packingList: [
      { id: 'pk-1', item: 'Comfortable broken-in walking shoes', category: 'essentials', isPacked: true },
      { id: 'pk-2', item: 'Universal power adapter & high-capacity power bank', category: 'electronics', isPacked: true },
      { id: 'pk-3', item: 'Breathable layers & light rain windbreaker', category: 'clothing', isPacked: false },
      { id: 'pk-4', item: 'Refillable insulated water bottle', category: 'essentials', isPacked: false },
      { id: 'pk-5', item: 'Local currency cash for small vendors', category: 'essentials', isPacked: false }
    ],
    localTips: [
      {
        title: 'Local Tipping & Etiquette',
        description: 'Check local norms; in many regions service charges are included on the final bill.',
        category: 'etiquette'
      },
      {
        title: 'Transit Card Advantage',
        description: 'Purchase an integrated contactless travel pass upon arrival for seamless subway and bus rides.',
        category: 'transit'
      },
      {
        title: 'Smart Spending Tip',
        description: 'Have lunch at upscale venues where lunch menus often offer the same food as dinner for 40% less.',
        category: 'savings'
      }
    ],
    secretGems: [
      {
        name: `The Hidden Garden of ${destination}`,
        description: 'A serene enclosed courtyard beloved by locals for quiet reading and artisanal espresso.',
        vibe: 'Tranquil & Authentic'
      },
      {
        name: `Panoramic Rooftop Lookout`,
        description: 'Free public observation terrace offering 360-degree sunset views without tourist crowds.',
        vibe: 'Scenic & Romantic'
      }
    ],
    createdAt: new Date().toISOString()
  };
}

// API endpoint for AI trip planning
app.post('/api/generate-trip', async (req, res) => {
  try {
    const {
      destination,
      durationDays = 5,
      travelersType = 'couple',
      travelersCount = 2,
      travelStyle = 'cultural',
      pace = 'moderate',
      budgetLevel = 'moderate',
      interests = [],
      dietaryRestrictions = [],
      specialRequests = ''
    } = req.body;

    if (!destination || typeof destination !== 'string') {
      return res.status(400).json({ error: 'Destination is required' });
    }

    const ai = getGeminiClient();

    if (!ai) {
      // Return high quality structured fallback if API key is not yet set
      const fallback = generateFallbackItinerary(req.body);
      return res.json({ itinerary: fallback, source: 'curated-generator' });
    }

    const prompt = `You are a world-class luxury travel planner and local concierge.
Create a hyper-detailed, realistic, logically paced travel itinerary for:
- Destination: "${destination}"
- Duration: ${durationDays} days
- Travelers: ${travelersCount} people (${travelersType})
- Travel Style: ${travelStyle}
- Preferred Pace: ${pace}
- Budget Tier: ${budgetLevel}
- Specific Interests: ${interests.join(', ') || 'Culture, Food, Scenic Views'}
- Dietary Needs: ${dietaryRestrictions.join(', ') || 'None'}
- Special Notes: ${specialRequests || 'None'}

Ensure realistic walking distances, specific authentic restaurant names, specific timings, actual landmark highlights, practical tips, and precise cost estimates in USD. Return strictly structured JSON matching the requested schema.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.7-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        systemInstruction: 'You are an elite travel concierge. Always output strictly valid JSON matching the requested schema without any markdown formatting or commentary.',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            destination: { type: Type.STRING },
            country: { type: Type.STRING },
            region: { type: Type.STRING },
            tagline: { type: Type.STRING },
            durationDays: { type: Type.INTEGER },
            travelStyle: { type: Type.STRING },
            pace: { type: Type.STRING },
            budgetLevel: { type: Type.STRING },
            travelersCount: { type: Type.INTEGER },
            travelersType: { type: Type.STRING },
            seasonRecommendation: { type: Type.STRING },
            bestMonthsToVisit: { type: Type.ARRAY, items: { type: Type.STRING } },
            matchScore: { type: Type.INTEGER },
            overallBudget: {
              type: Type.OBJECT,
              properties: {
                accommodationUSD: { type: Type.NUMBER },
                foodAndDiningUSD: { type: Type.NUMBER },
                activitiesUSD: { type: Type.NUMBER },
                localTransportUSD: { type: Type.NUMBER },
                bufferUSD: { type: Type.NUMBER },
                totalUSD: { type: Type.NUMBER },
              },
              required: ['accommodationUSD', 'foodAndDiningUSD', 'activitiesUSD', 'localTransportUSD', 'bufferUSD', 'totalUSD'],
            },
            days: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  dayNumber: { type: Type.INTEGER },
                  date: { type: Type.STRING },
                  title: { type: Type.STRING },
                  summary: { type: Type.STRING },
                  weatherForecast: {
                    type: Type.OBJECT,
                    properties: {
                      condition: { type: Type.STRING },
                      tempHighC: { type: Type.NUMBER },
                      tempLowC: { type: Type.NUMBER },
                      icon: { type: Type.STRING },
                    },
                    required: ['condition', 'tempHighC', 'tempLowC', 'icon']
                  },
                  dailyBudgetUSD: { type: Type.NUMBER },
                  localTransportTip: { type: Type.STRING },
                  activities: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        id: { type: Type.STRING },
                        time: { type: Type.STRING },
                        period: { type: Type.STRING },
                        title: { type: Type.STRING },
                        description: { type: Type.STRING },
                        location: { type: Type.STRING },
                        category: { type: Type.STRING },
                        durationHours: { type: Type.NUMBER },
                        costEstimate: { type: Type.NUMBER },
                        rating: { type: Type.NUMBER },
                        bookingTip: { type: Type.STRING },
                      },
                      required: ['id', 'time', 'period', 'title', 'description', 'location', 'category', 'durationHours', 'costEstimate'],
                    },
                  },
                  meals: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        type: { type: Type.STRING },
                        venueName: { type: Type.STRING },
                        cuisine: { type: Type.STRING },
                        priceRange: { type: Type.STRING },
                        recommendation: { type: Type.STRING },
                        neighborhood: { type: Type.STRING },
                      },
                      required: ['type', 'venueName', 'cuisine', 'priceRange', 'recommendation', 'neighborhood'],
                    },
                  },
                },
                required: ['dayNumber', 'title', 'summary', 'dailyBudgetUSD', 'localTransportTip', 'activities', 'meals'],
              },
            },
            packingList: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  item: { type: Type.STRING },
                  category: { type: Type.STRING },
                  isPacked: { type: Type.BOOLEAN },
                },
                required: ['id', 'item', 'category', 'isPacked'],
              },
            },
            localTips: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  description: { type: Type.STRING },
                  category: { type: Type.STRING },
                },
                required: ['title', 'description', 'category'],
              },
            },
            secretGems: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  description: { type: Type.STRING },
                  vibe: { type: Type.STRING },
                },
                required: ['name', 'description', 'vibe'],
              },
            },
          },
          required: ['title', 'destination', 'country', 'tagline', 'durationDays', 'overallBudget', 'days', 'packingList', 'localTips', 'secretGems'],
        },
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error('No text returned from Gemini API');
    }

    const parsed = JSON.parse(text);
    parsed.id = `trip-ai-${Date.now()}`;
    parsed.heroImage = 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=85';
    parsed.createdAt = new Date().toISOString();

    res.json({ itinerary: parsed, source: 'gemini-3.7-flash' });
  } catch (error: any) {
    console.error('Error in /api/generate-trip:', error);
    // Graceful fallback to avoid leaving user stranded
    const fallback = generateFallbackItinerary(req.body);
    res.json({ itinerary: fallback, source: 'curated-generator', errorNotice: error?.message });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true, host: '0.0.0.0', port: 3000 },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`AI Travel Planner Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
