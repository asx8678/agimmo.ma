export type PropertyStatus = 'For Sale' | 'For Rent' | 'Investment' | 'New Project';

export type Property = {
  slug: string;
  title: string;
  status: PropertyStatus;
  city: string;
  area: string;
  type: string;
  price: string;
  bedrooms: number | string;
  bathrooms: number | string;
  size: string;
  badge: string;
  summary: string;
  highlights: string[];
  seoTitle: string;
  seoDescription: string;
  accent: string;
};

export const properties: Property[] = [
  {
    slug: 'marrakech-palmeraie-private-villa',
    title: 'Private Villa Retreat in Marrakech Palmeraie',
    status: 'For Sale',
    city: 'Marrakech',
    area: 'Palmeraie',
    type: 'Villa',
    price: 'Price on request',
    bedrooms: 5,
    bathrooms: 5,
    size: '650 m² living · 2,400 m² land',
    badge: 'Prestige',
    summary:
      'A calm villa concept for buyers seeking garden privacy, resort-style hosting space and fast access to Marrakech city life.',
    highlights: ['Palm-lined garden', 'Pool terrace', 'Guest pavilion', 'Ideal for lifestyle investment'],
    seoTitle: 'Villa for Sale in Marrakech Palmeraie | AG Immo Morocco',
    seoDescription:
      'Explore a private villa opportunity in Marrakech Palmeraie with AG Immo, a Morocco real estate agency for villas, apartments and investment property.',
    accent: 'palmeraie'
  },
  {
    slug: 'casablanca-finance-city-apartment',
    title: 'Contemporary Apartment near Casablanca Finance City',
    status: 'For Sale',
    city: 'Casablanca',
    area: 'Casablanca Finance City',
    type: 'Apartment',
    price: 'From 2,950,000 MAD',
    bedrooms: 3,
    bathrooms: 2,
    size: '142 m²',
    badge: 'City Prime',
    summary:
      'A polished city-home profile for professionals, families and investors focused on transport, business districts and strong rental appeal.',
    highlights: ['Balcony', 'Secure residence', 'Parking', 'Near business amenities'],
    seoTitle: 'Apartment for Sale in Casablanca Finance City | AG Immo',
    seoDescription:
      'Find apartments in Casablanca Finance City with AG Immo. Smart real estate search, negotiation support and buyer guidance in Morocco.',
    accent: 'casablanca'
  },
  {
    slug: 'agadir-seafront-holiday-apartment',
    title: 'Agadir Seafront Holiday Apartment',
    status: 'For Rent',
    city: 'Agadir',
    area: 'Corniche',
    type: 'Apartment',
    price: 'Seasonal rate on request',
    bedrooms: 2,
    bathrooms: 2,
    size: '96 m²',
    badge: 'Coastal',
    summary:
      'A bright coastal apartment profile for holiday stays, remote-work breaks and medium-term rental demand near the beach.',
    highlights: ['Sea view potential', 'Furnished option', 'Beach access', 'Managed check-in'],
    seoTitle: 'Agadir Apartment for Rent near the Seafront | AG Immo',
    seoDescription:
      'Rent an apartment in Agadir with AG Immo. Discover coastal homes, furnished apartments and managed rental options in Morocco.',
    accent: 'agadir'
  },
  {
    slug: 'rabat-souissi-family-villa',
    title: 'Family Villa in Rabat Souissi',
    status: 'For Sale',
    city: 'Rabat',
    area: 'Souissi',
    type: 'Villa',
    price: 'Price on request',
    bedrooms: 4,
    bathrooms: 4,
    size: '480 m² living',
    badge: 'Family Choice',
    summary:
      'A refined family-home profile for buyers seeking calm streets, garden comfort and proximity to Rabat schools and embassies.',
    highlights: ['Garden', 'Staff room', 'Two salons', 'Quiet residential area'],
    seoTitle: 'Villa for Sale in Rabat Souissi | AG Immo Morocco',
    seoDescription:
      'Search villas in Rabat Souissi with AG Immo. Buyer representation, valuation guidance and property visits across Morocco.',
    accent: 'rabat'
  },
  {
    slug: 'tangier-medina-riad-investment',
    title: 'Tangier Medina Riad Investment',
    status: 'Investment',
    city: 'Tangier',
    area: 'Medina',
    type: 'Riad',
    price: 'Investment brief on request',
    bedrooms: 6,
    bathrooms: 6,
    size: '320 m²',
    badge: 'Character Asset',
    summary:
      'A character-led riad profile designed for buyers exploring boutique hospitality, restoration value and northern Morocco demand.',
    highlights: ['Rooftop potential', 'Historic character', 'Guest-house concept', 'Renovation advisory'],
    seoTitle: 'Riad for Sale in Tangier Medina | AG Immo Morocco',
    seoDescription:
      'Explore riad and boutique hospitality opportunities in Tangier with AG Immo, a Morocco real estate agency for investors and buyers.',
    accent: 'tangier'
  },
  {
    slug: 'mohammedia-new-project-apartments',
    title: 'New Apartment Project between Casablanca and Mohammedia',
    status: 'New Project',
    city: 'Mohammedia',
    area: 'Coastal belt',
    type: 'New development',
    price: 'Launch prices on request',
    bedrooms: '1–3',
    bathrooms: '1–2',
    size: '58–128 m²',
    badge: 'New Launch',
    summary:
      'A practical new-build profile for first homes, rental investments and buyers comparing Casablanca-area value with coastal convenience.',
    highlights: ['Payment-plan option', 'Elevator', 'Parking', 'Investor-friendly layouts'],
    seoTitle: 'New Apartments near Mohammedia | AG Immo Morocco',
    seoDescription:
      'Compare new apartment projects near Mohammedia and Casablanca with AG Immo. Request availability, pricing and buyer support.',
    accent: 'mohammedia'
  }
];

export const featuredProperties = properties.slice(0, 3);

export function getPropertyBySlug(slug: string) {
  return properties.find((property) => property.slug === slug);
}
