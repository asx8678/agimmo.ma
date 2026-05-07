export const site = {
  name: 'AG Immo',
  legalName: 'AG Immo Morocco',
  url: 'https://agimmo.ma',
  domain: 'agimmo.ma',
  email: 'contact@agimmo.ma',
  phoneDisplay: '+212 6 00 00 00 00',
  whatsapp: '212600000000',
  address: 'Morocco',
  city: 'Morocco',
  locale: 'en_MA',
  description:
    'AG Immo helps buyers, renters, sellers and investors move confidently in Morocco with curated property search, valuation guidance and bilingual local support.',
  defaultTitle: 'AG Immo | Real Estate Agency in Morocco',
  defaultKeywords: [
    'real estate agency Morocco',
    'immobilier Maroc',
    'property for sale Morocco',
    'rent apartment Morocco',
    'villa Marrakech',
    'Casablanca real estate',
    'Agadir property agency',
    'Rabat apartments'
  ],
  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#'
  },
  nav: [
    { label: 'Buy', href: '/buy' },
    { label: 'Rent', href: '/rent' },
    { label: 'Sell', href: '/sell' },
    { label: 'Properties', href: '/properties' },
    { label: 'Areas', href: '/areas/marrakech' },
    { label: 'Contact', href: '/contact' }
  ],
  languages: [
    { label: 'EN', href: '/', lang: 'en-MA' },
    { label: 'FR', href: '/fr', lang: 'fr-MA' },
    { label: 'AR', href: '/ar', lang: 'ar-MA' }
  ]
} as const;

export const defaultSeo = {
  title: site.defaultTitle,
  description: site.description,
  image: '/og-image.svg'
};

export function absoluteUrl(path = '/') {
  return new URL(path, site.url).toString();
}
