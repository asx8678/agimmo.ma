export type Location = {
  slug: string;
  city: string;
  headline: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  neighborhoods: string[];
  services: string[];
  keywordLine: string;
};

export const locations: Location[] = [
  {
    slug: 'marrakech',
    city: 'Marrakech',
    headline: 'Marrakech property with soul, privacy and investment logic.',
    metaTitle: 'Real Estate Agency in Marrakech | Villas, Riads & Apartments | AG Immo',
    metaDescription:
      'Buy, sell or rent property in Marrakech with AG Immo. Villas, riads, apartments, land and investment guidance from a Morocco real estate agency.',
    intro:
      'From Palmeraie villas and Medina riads to Gueliz apartments and resort residences, Marrakech rewards buyers who understand lifestyle, title quality and long-term rental potential.',
    neighborhoods: ['Palmeraie', 'Gueliz', 'Hivernage', 'Medina', 'Route de l’Ourika', 'Agdal'],
    services: ['Private buyer search', 'Riad and villa valuation', 'Rental-yield positioning', 'Owner marketing'],
    keywordLine: 'immobilier Marrakech · villa Marrakech · riad à vendre Marrakech · appartement Gueliz'
  },
  {
    slug: 'casablanca',
    city: 'Casablanca',
    headline: 'Casablanca real estate for business, family and rental performance.',
    metaTitle: 'Real Estate Agency in Casablanca | Apartments & Villas | AG Immo',
    metaDescription:
      'Find property in Casablanca with AG Immo. Apartments, villas, offices and investment homes in key neighborhoods across Morocco’s business capital.',
    intro:
      'Casablanca is a market of micro-locations. We help clients compare lifestyle, transport, business access, building quality and resale confidence before making a move.',
    neighborhoods: ['Casablanca Finance City', 'Racine', 'Maarif', 'Ain Diab', 'Oasis', 'Bouskoura'],
    services: ['Apartment search', 'Corporate relocation', 'Seller pricing strategy', 'Investment screening'],
    keywordLine: 'immobilier Casablanca · appartement Casablanca · villa Bouskoura · location Casablanca'
  },
  {
    slug: 'agadir',
    city: 'Agadir',
    headline: 'Agadir coastal homes for sunny living and rental-ready stays.',
    metaTitle: 'Real Estate Agency in Agadir | Coastal Apartments & Villas | AG Immo',
    metaDescription:
      'Buy, rent or invest in Agadir property with AG Immo. Coastal apartments, villas, furnished rentals and property management in Morocco.',
    intro:
      'Agadir attracts lifestyle buyers, families and seasonal renters. The right asset balances beach access, building condition, furnishings and easy management.',
    neighborhoods: ['Corniche', 'Founty', 'Talborjt', 'Illigh', 'Taghazout', 'Tamraght'],
    services: ['Holiday rental sourcing', 'Furnished apartment search', 'Villa marketing', 'Rental management'],
    keywordLine: 'immobilier Agadir · appartement Agadir · villa Agadir · location vacances Agadir'
  },
  {
    slug: 'rabat',
    city: 'Rabat',
    headline: 'Rabat property for stable living, diplomatic moves and family comfort.',
    metaTitle: 'Real Estate Agency in Rabat | Villas & Apartments | AG Immo',
    metaDescription:
      'Search Rabat villas and apartments with AG Immo. Real estate support for buyers, sellers, renters and relocating families in Morocco.',
    intro:
      'Rabat’s appeal is calm, quality and convenience. We guide clients through school proximity, embassy districts, lease terms and family-ready layouts.',
    neighborhoods: ['Souissi', 'Hay Riad', 'Agdal', 'Hassan', 'Ocean', 'Temara'],
    services: ['Family villa search', 'Relocation rentals', 'Owner representation', 'Market-value guidance'],
    keywordLine: 'immobilier Rabat · villa Souissi · appartement Hay Riad · location Rabat'
  },
  {
    slug: 'tangier',
    city: 'Tangier',
    headline: 'Tangier real estate at the meeting point of culture, coast and commerce.',
    metaTitle: 'Real Estate Agency in Tangier | Riads, Apartments & Villas | AG Immo',
    metaDescription:
      'Explore Tangier property with AG Immo. Riads, apartments, villas and investment assets with practical buyer guidance in northern Morocco.',
    intro:
      'Tangier offers heritage, sea views and international momentum. We help buyers distinguish charm from risk and opportunity from overpricing.',
    neighborhoods: ['Medina', 'Malabata', 'Iberia', 'Marshan', 'City Center', 'Achakar'],
    services: ['Riad investment briefs', 'Sea-view apartment search', 'Villa marketing', 'Restoration advisory'],
    keywordLine: 'immobilier Tanger · riad Tanger · appartement Malabata · villa Tanger'
  }
];

export function getLocationBySlug(slug: string) {
  return locations.find((location) => location.slug === slug);
}
