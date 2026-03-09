export type PropertyCategory = 'room' | 'flat' | 'house';

export interface Property {
  id: string;
  title: string;
  category: PropertyCategory;
  price: number;
  currency: string;
  location: string;
  lat: number;
  lng: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  images: string[];
  description: string;
  tags: string[];
  owner: {
    name: string;
    phone: string;
    email: string;
    avatar: string;
  };
  featured: boolean;
  createdAt: string;
}

export const TAGS = [
  'Pet Friendly', 'Parking', 'Furnished', 'WiFi', 'Garden',
  'Balcony', 'Gym', 'Pool', 'Security', 'Laundry',
  'Near Transport', 'Bills Included', 'Student Friendly', 'Family Friendly',
];

export const properties: Property[] = [
  {
    id: '1',
    title: 'Cozy Studio Room in City Center',
    category: 'room',
    price: 450,
    currency: '£',
    location: 'Manchester, M1 2JB',
    lat: 53.4808,
    lng: -2.2426,
    bedrooms: 1,
    bathrooms: 1,
    area: 25,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop',
    ],
    description: 'A beautifully furnished studio room in the heart of Manchester. Walking distance to shops, restaurants, and public transport. All bills included.',
    tags: ['Furnished', 'WiFi', 'Bills Included', 'Near Transport'],
    owner: { name: 'Sarah Johnson', phone: '+44 7700 900123', email: 'sarah@example.com', avatar: 'https://i.pravatar.cc/100?img=1' },
    featured: true,
    createdAt: '2026-03-01',
  },
  {
    id: '2',
    title: 'Modern 2-Bed Flat with Balcony',
    category: 'flat',
    price: 1200,
    currency: '£',
    location: 'London, E1 6AN',
    lat: 51.5155,
    lng: -0.0722,
    bedrooms: 2,
    bathrooms: 1,
    area: 75,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop',
    ],
    description: 'Stunning modern flat in East London. Features an open-plan living area, fully equipped kitchen, and a private balcony with city views.',
    tags: ['Balcony', 'Furnished', 'WiFi', 'Security'],
    owner: { name: 'James Carter', phone: '+44 7700 900456', email: 'james@example.com', avatar: 'https://i.pravatar.cc/100?img=3' },
    featured: true,
    createdAt: '2026-03-03',
  },
  {
    id: '3',
    title: 'Spacious Family House with Garden',
    category: 'house',
    price: 1800,
    currency: '£',
    location: 'Birmingham, B15 2TT',
    lat: 52.4714,
    lng: -1.9273,
    bedrooms: 4,
    bathrooms: 2,
    area: 150,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=500&fit=crop',
    ],
    description: 'A lovely 4-bedroom family house with a large garden, garage, and quiet neighborhood. Perfect for families looking for space and comfort.',
    tags: ['Garden', 'Parking', 'Family Friendly', 'Pet Friendly'],
    owner: { name: 'Emily Roberts', phone: '+44 7700 900789', email: 'emily@example.com', avatar: 'https://i.pravatar.cc/100?img=5' },
    featured: true,
    createdAt: '2026-03-05',
  },
  {
    id: '4',
    title: 'Bright Double Room in Shared House',
    category: 'room',
    price: 550,
    currency: '£',
    location: 'Leeds, LS1 4AP',
    lat: 53.7996,
    lng: -1.5491,
    bedrooms: 1,
    bathrooms: 1,
    area: 18,
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&h=500&fit=crop',
    ],
    description: 'Large double room in a friendly shared house. Close to the university and city center. Great for students or young professionals.',
    tags: ['Furnished', 'WiFi', 'Student Friendly', 'Near Transport', 'Laundry'],
    owner: { name: 'Tom Williams', phone: '+44 7700 900321', email: 'tom@example.com', avatar: 'https://i.pravatar.cc/100?img=7' },
    featured: false,
    createdAt: '2026-03-06',
  },
  {
    id: '5',
    title: 'Luxury 3-Bed Penthouse Flat',
    category: 'flat',
    price: 2500,
    currency: '£',
    location: 'London, SW1A 1AA',
    lat: 51.5014,
    lng: -0.1419,
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=500&fit=crop',
    ],
    description: 'Exquisite penthouse in central London with panoramic views, concierge service, gym access, and underground parking.',
    tags: ['Gym', 'Pool', 'Security', 'Parking', 'Balcony'],
    owner: { name: 'Diana Chen', phone: '+44 7700 900654', email: 'diana@example.com', avatar: 'https://i.pravatar.cc/100?img=9' },
    featured: true,
    createdAt: '2026-03-07',
  },
  {
    id: '6',
    title: 'Charming Cottage in the Countryside',
    category: 'house',
    price: 950,
    currency: '£',
    location: 'Cotswolds, GL54 1BN',
    lat: 51.8330,
    lng: -1.8433,
    bedrooms: 2,
    bathrooms: 1,
    area: 90,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop',
    ],
    description: 'Beautiful stone cottage in the Cotswolds with original features, cozy fireplace, and a lovely garden. Perfect countryside retreat.',
    tags: ['Garden', 'Pet Friendly', 'Parking', 'Furnished'],
    owner: { name: 'Richard Brown', phone: '+44 7700 900987', email: 'richard@example.com', avatar: 'https://i.pravatar.cc/100?img=11' },
    featured: false,
    createdAt: '2026-03-08',
  },
];
