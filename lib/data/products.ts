export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  images: string[]
  category: 'women' | 'men' | 'accessories'
  rating: number
  reviews: number
  isNew?: boolean
  isTrending?: boolean
  sizes: string[]
  colors: { name: string; hex: string }[]
  description?: string
}

export interface Category {
  id: string
  name: string
  slug: string
  image: string
  description: string
  productCount: number
}

export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  comment: string
  date: string
  verified: boolean
  avatar?: string
}

export interface Feature {
  id: string
  title: string
  description: string
  icon: string
}

// Mock Categories
export const categories: Category[] = [
  {
    id: '1',
    name: 'Women',
    slug: 'women',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1000&fit=crop',
    description: 'Elegant dresses, tops, and ethnic wear',
    productCount: 150,
  },
  {
    id: '2',
    name: 'Men',
    slug: 'men',
    image: 'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=800&h=1000&fit=crop',
    description: 'Stylish shirts, kurtas, and formal wear',
    productCount: 120,
  },
  {
    id: '3',
    name: 'Accessories',
    slug: 'accessories',
    image: 'https://images.unsplash.com/photo-1611923134239-b9be5816e23e?w=800&h=1000&fit=crop',
    description: 'Bags, jewelry, and fashion accessories',
    productCount: 80,
  },
]

// Mock Products
export const products: Product[] = [
  {
    id: '1',
    name: 'Embroidered Silk Saree',
    price: 2499,
    originalPrice: 3499,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1583391733956-6c78276aba4f?w=600&h=800&fit=crop',
    ],
    category: 'women',
    rating: 4.8,
    reviews: 124,
    isNew: true,
    isTrending: true,
    sizes: ['Free Size'],
    colors: [
      { name: 'Royal Blue', hex: '#1e3a8a' },
      { name: 'Maroon', hex: '#7f1d1d' },
    ],
    description: 'Luxurious embroidered silk saree with intricate zari work.',
  },
  {
    id: '2',
    name: 'Designer Anarkali Suit',
    price: 1899,
    originalPrice: 2599,
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1583391733956-6c78276aba4f?w=600&h=800&fit=crop',
    ],
    category: 'women',
    rating: 4.6,
    reviews: 89,
    isNew: false,
    isTrending: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Teal', hex: '#0d9488' },
      { name: 'Pink', hex: '#ec4899' },
    ],
  },
  {
    id: '3',
    name: 'Cotton Kurta Set',
    price: 1299,
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1583391733956-6c78276aba4f?w=600&h=800&fit=crop',
    ],
    category: 'women',
    rating: 4.5,
    reviews: 67,
    isNew: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'White', hex: '#ffffff' },
      { name: 'Beige', hex: '#d4a574' },
    ],
  },
  {
    id: '4',
    name: 'Premium Linen Shirt',
    price: 999,
    originalPrice: 1499,
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=800&fit=crop',
    ],
    category: 'men',
    rating: 4.7,
    reviews: 156,
    isTrending: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Sky Blue', hex: '#7dd3fc' },
      { name: 'White', hex: '#ffffff' },
      { name: 'Olive', hex: '#84cc16' },
    ],
  },
  {
    id: '5',
    name: 'Silk Kurta Pajama',
    price: 2199,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1583391733956-6c78276aba4f?w=600&h=800&fit=crop',
    ],
    category: 'men',
    rating: 4.9,
    reviews: 203,
    isNew: true,
    isTrending: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Ivory', hex: '#fffff0' },
      { name: 'Gold', hex: '#C9A050' },
    ],
  },
  {
    id: '6',
    name: 'Formal Blazer',
    price: 3499,
    originalPrice: 4999,
    images: [
      'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=800&fit=crop',
    ],
    category: 'men',
    rating: 4.6,
    reviews: 78,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Navy', hex: '#1e3a8a' },
      { name: 'Charcoal', hex: '#374151' },
    ],
  },
  {
    id: '7',
    name: 'Leather Handbag',
    price: 1799,
    originalPrice: 2499,
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1611923134239-b9be5816e23e?w=600&h=800&fit=crop',
    ],
    category: 'accessories',
    rating: 4.8,
    reviews: 92,
    isTrending: true,
    sizes: ['One Size'],
    colors: [
      { name: 'Tan', hex: '#d97706' },
      { name: 'Black', hex: '#1a1a1a' },
    ],
  },
  {
    id: '8',
    name: 'Pearl Necklace Set',
    price: 899,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1611923134239-b9be5816e23e?w=600&h=800&fit=crop',
    ],
    category: 'accessories',
    rating: 4.7,
    reviews: 145,
    isNew: true,
    sizes: ['One Size'],
    colors: [
      { name: 'Pearl White', hex: '#fafafa' },
      { name: 'Gold', hex: '#C9A050' },
    ],
  },
]

// Mock Testimonials
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    comment: 'Absolutely love the quality of fabrics! The saree I ordered exceeded my expectations. Will definitely shop again.',
    date: '2024-01-15',
    verified: true,
  },
  {
    id: '2',
    name: 'Rahul Verma',
    location: 'Delhi',
    rating: 5,
    comment: 'Best kurta I have ever owned. The stitching is impeccable and it fits perfectly. Highly recommend Eden Attire!',
    date: '2024-01-10',
    verified: true,
  },
  {
    id: '3',
    name: 'Ananya Patel',
    location: 'Bangalore',
    rating: 4,
    comment: 'Beautiful designs and quick delivery. The customer service team was very helpful with size recommendations.',
    date: '2024-01-08',
    verified: true,
  },
  {
    id: '4',
    name: 'Vikram Singh',
    location: 'Chennai',
    rating: 5,
    comment: 'Premium quality at reasonable prices. The formal shirt I bought gets compliments every time I wear it.',
    date: '2024-01-05',
    verified: true,
  },
  {
    id: '5',
    name: 'Meera Krishnan',
    location: 'Hyderabad',
    rating: 5,
    comment: 'The packaging was so elegant! Every detail shows they care about quality. My go-to brand for ethnic wear.',
    date: '2024-01-02',
    verified: true,
  },
]

// Mock Features
export const features: Feature[] = [
  {
    id: '1',
    title: 'Premium Quality',
    description: 'Hand-picked fabrics and materials for lasting elegance',
    icon: 'gem',
  },
  {
    id: '2',
    title: 'Latest Fashion',
    description: 'Curated collections following global trends',
    icon: 'sparkles',
  },
  {
    id: '3',
    title: 'Fast Delivery',
    description: 'Free shipping on orders above Rs. 999',
    icon: 'truck',
  },
  {
    id: '4',
    title: 'Secure Payments',
    description: 'Multiple payment options with 100% security',
    icon: 'shield-check',
  },
  {
    id: '5',
    title: 'Easy Returns',
    description: '7-day hassle-free return policy',
    icon: 'refresh-cw',
  },
]

// Navigation Items
export const navItems = [
  { name: 'Women', href: '/women' },
  { name: 'Men', href: '/men' },
  { name: 'Accessories', href: '/accessories' },
  { name: 'New Arrivals', href: '/new-arrivals' },
  { name: 'Trending', href: '/trending' },
  { name: 'Sale', href: '/sale' },
]

// Helper function to get trending products
export const getTrendingProducts = () => products.filter(p => p.isTrending)

// Helper function to get new arrivals
export const getNewArrivals = () => products.filter(p => p.isNew)

// Helper function to format price
export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price)
}
