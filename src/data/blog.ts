export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  sections: { heading: string; body: string }[];
};

export const posts: BlogPost[] = [
  {
    slug: 'buying-property-in-morocco-guide',
    title: 'Buying Property in Morocco: A Practical Guide for Confident Decisions',
    excerpt:
      'A clear overview of search, due diligence, offer strategy, notary steps and the questions buyers should ask before committing.',
    date: '2026-05-07',
    readTime: '6 min read',
    category: 'Buyer Guide',
    metaTitle: 'Buying Property in Morocco Guide | AG Immo',
    metaDescription:
      'Learn how to approach buying property in Morocco with search strategy, due diligence, valuation checks and practical questions for your agency.',
    sections: [
      {
        heading: 'Start with a precise brief',
        body:
          'A strong search brief defines the city, lifestyle priorities, minimum surface, budget comfort, financing expectations and whether the property should be easy to rent, renovate or resell.'
      },
      {
        heading: 'Compare more than price per square meter',
        body:
          'The right decision also depends on building quality, title clarity, neighborhood liquidity, fees, renovation cost, furnishing standard and long-term maintenance.'
      },
      {
        heading: 'Use professional checks before committing',
        body:
          'A qualified notary and local specialists can help review title, permits, co-ownership documents, tax exposure and the safest payment milestones.'
      }
    ]
  },
  {
    slug: 'sell-property-morocco-faster',
    title: 'How to Sell Property in Morocco Faster without Underselling It',
    excerpt:
      'The best-performing listings usually combine realistic pricing, strong photography, persuasive copy and fast response workflows.',
    date: '2026-05-07',
    readTime: '5 min read',
    category: 'Seller Strategy',
    metaTitle: 'Sell Property in Morocco Faster | AG Immo Seller Guide',
    metaDescription:
      'Seller tips for Morocco real estate: pricing, presentation, buyer qualification, listing copy and negotiation preparation with AG Immo.',
    sections: [
      {
        heading: 'Price for the market you actually have',
        body:
          'A credible asking price starts with comparable listings, location quality, property condition, title status and the urgency of the owner’s timeline.'
      },
      {
        heading: 'Make the first viewing happen online',
        body:
          'Clear photography, room-by-room details, neighborhood context and a concise value story help serious buyers decide to book a visit.'
      },
      {
        heading: 'Qualify interest before negotiation',
        body:
          'A good agency filters casual inquiries, clarifies buyer capacity and keeps the process focused on offers that can realistically close.'
      }
    ]
  },
  {
    slug: 'marrakech-villa-or-casablanca-apartment',
    title: 'Marrakech Villa or Casablanca Apartment: Which Investment Profile Fits You?',
    excerpt:
      'Lifestyle-driven villa demand and city-apartment liquidity can both be attractive, but they serve different buyer goals.',
    date: '2026-05-07',
    readTime: '4 min read',
    category: 'Investment',
    metaTitle: 'Marrakech Villa vs Casablanca Apartment Investment | AG Immo',
    metaDescription:
      'Compare Morocco real estate investment profiles: Marrakech villas, Casablanca apartments, rental appeal, liquidity and management needs.',
    sections: [
      {
        heading: 'Marrakech villas are lifestyle assets',
        body:
          'Villas often appeal to buyers seeking privacy, garden space, hospitality potential and a distinctive Moroccan lifestyle experience.'
      },
      {
        heading: 'Casablanca apartments focus on liquidity',
        body:
          'Well-located apartments can suit professionals, families and tenants who value business access, transport and everyday convenience.'
      },
      {
        heading: 'Management changes the equation',
        body:
          'Investors should compare maintenance complexity, furnishing needs, occupancy assumptions, tenant profiles and hands-on management time.'
      }
    ]
  }
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
