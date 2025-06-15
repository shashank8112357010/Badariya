// Comprehensive dummy data for Badariya Pharma demo

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: string;
  speciality : string ;
  originalPrice?: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  images: string[];
  healthIssueId: string;
  category: string;
  description: string;
  ingredients: string[];
  benefits: string[];
  howToUse: string;
  inStock: boolean;
  options: ProductOption[];
}

export interface ProductOption {
  id: string;
  title: string;
  capsules: number;
  duration: string;
  price: number;
  isSelected?: boolean;
}

export interface HealthIssue {
  id: string;
  label: string;
  name: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  readTime: string;
  category: string;
  imageUrl: string;
  excerpt: string;
  content: string;
  healthIssueId?: string;
}

// Health Issues/Categories
export const healthIssues: HealthIssue[] = [
  {
    id: "joint-pain",
    label: "Joint Pain Relief",
    name: "Joint Pain & Arthritis",
    description:
      "Natural solutions for joint pain, arthritis, and mobility issues",
  },
  {
    id: "digestive",
    label: "Digestive Health",
    name: "Digestive Wellness",
    description: "Ayurvedic remedies for digestive problems and gut health",
  },
  {
    id: "respiratory",
    label: "Respiratory Care",
    name: "Respiratory Health",
    description: "Herbal solutions for respiratory and breathing issues",
  },
  {
    id: "immunity",
    label: "Immunity & Wellness",
    name: "Immunity Boost",
    description: "Natural immunity boosters and general wellness products",
  },
  {
    id: "diabetes",
    label: "Diabetes Care",
    name: "Diabetes Management",
    description: "Ayurvedic support for blood sugar management",
  },
  {
    id: "skin-care",
    label: "Skin Care",
    name: "Natural Skin Care",
    description: "Herbal solutions for healthy and glowing skin",
  },
];

// Products
export const products: Product[] = [
  // Joint Pain Products
  {
    id: "mubex-pain-gold",
    name: "Mubex Pain Gold Capsules",
    slug: "mubex-pain-gold",
    price: "845",
    speciality : 'Joint Pain Relief',
    originalPrice: "995",
    rating: 4.6,
    reviewCount: 2847,
    imageUrl:
      "https://images.pexels.com/photos/13787561/pexels-photo-13787561.jpeg",
    images: [
      "https://images.pexels.com/photos/13787561/pexels-photo-13787561.jpeg",
      "https://images.pexels.com/photos/6442509/pexels-photo-6442509.jpeg",
      "https://images.pexels.com/photos/3368291/pexels-photo-3368291.jpeg",
      "https://images.pexels.com/photos/8450354/pexels-photo-8450354.jpeg",
    ],
    healthIssueId: "joint-pain",
    category: "Pain Relief",
    description:
      "Premium Ayurvedic formula for effective joint pain relief and improved mobility",
    ingredients: [
      "Boswellia Serrata",
      "Turmeric Extract",
      "Ashwagandha",
      "Guggul",
      "Shallaki",
    ],
    benefits: [
      "Reduces joint pain",
      "Improves mobility",
      "Anti-inflammatory action",
      "Strengthens bones",
    ],
    howToUse: "Take 2 capsules twice daily after meals with warm water",
    inStock: true,
    options: [
      {
        id: "bottle-60",
        title: "1 Bottle Contains",
        capsules: 60,
        duration: "(Lasts upto 1 month)",
        price: 845,
        isSelected: true,
      },
      {
        id: "bottle-120",
        title: "2 Bottles Combo",
        capsules: 120,
        duration: "(Lasts upto 2 months)",
        price: 1590,
        isSelected: false,
      },
    ],
  },
  {
    id: "joint-flex-oil",
    name: "Joint Flex Massage Oil",
    slug: "joint-flex-oil",
    price: "425",
    originalPrice: "525",
    speciality : 'Joint Pain Relief',
    rating: 4.4,
    reviewCount: 1523,
    imageUrl:
      "https://images.pexels.com/photos/6442509/pexels-photo-6442509.jpeg",
    images: [
      "https://images.pexels.com/photos/6442509/pexels-photo-6442509.jpeg",
      "https://images.pexels.com/photos/3368291/pexels-photo-3368291.jpeg",
    ],
    healthIssueId: "joint-pain",
    category: "Topical Relief",
    description: "Therapeutic massage oil for external joint pain relief",
    ingredients: ["Sesame Oil", "Eucalyptus", "Wintergreen", "Camphor"],
    benefits: [
      "Quick pain relief",
      "Improves blood circulation",
      "Reduces stiffness",
    ],
    howToUse: "Massage gently on affected areas 2-3 times daily",
    inStock: true,
    options: [
      {
        id: "oil-100ml",
        title: "100ml Bottle",
        capsules: 100,
        duration: "(Lasts upto 3 weeks)",
        price: 425,
      },
    ],
  },

  // Digestive Health Products
  {
    id: "digest-care-capsules",
    name: "Digest Care Pro Capsules",
    slug: "digest-care-capsules",
    price: "385",
    originalPrice: "450",
    rating: 4.5,
    reviewCount: 1892,
    speciality : 'Digestive Health',
    imageUrl:
      "https://images.pexels.com/photos/13787561/pexels-photo-13787561.jpeg",
    images: [
      "https://images.pexels.com/photos/13787561/pexels-photo-13787561.jpeg",
      "https://images.pexels.com/photos/3368291/pexels-photo-3368291.jpeg",
    ],
    healthIssueId: "digestive",
    category: "Digestive Health",
    description: "Complete digestive wellness formula for healthy gut function",
    ingredients: ["Triphala", "Ajwain", "Ginger Extract", "Hing", "Jeera"],
    benefits: [
      "Improves digestion",
      "Reduces bloating",
      "Supports gut health",
      "Natural detox",
    ],
    howToUse: "Take 1 capsule before meals twice daily",
    inStock: true,
    options: [
      {
        id: "digest-60",
        title: "1 Bottle Contains",
        capsules: 60,
        duration: "(Lasts upto 1 month)",
        price: 385,
      },
    ],
  },
  {
    id: "acidity-relief-syrup",
    name: "Acidity Relief Herbal Syrup",
    slug: "acidity-relief-syrup",
    price: "245",
    speciality : 'Digestive Health',
    originalPrice: "295",
    rating: 4.3,
    reviewCount: 967,
    imageUrl:
      "https://images.pexels.com/photos/6442509/pexels-photo-6442509.jpeg",
    images: [
      "https://images.pexels.com/photos/6442509/pexels-photo-6442509.jpeg",
    ],
    healthIssueId: "digestive",
    category: "Acidity Relief",
    description: "Fast-acting herbal syrup for acidity and heartburn relief",
    ingredients: ["Amla", "Mulethi", "Saunf", "Pudina", "Coconut Water"],
    benefits: [
      "Quick acidity relief",
      "Soothes stomach",
      "Natural cooling effect",
    ],
    howToUse: "Take 2 teaspoons after meals or when needed",
    inStock: true,
    options: [
      {
        id: "syrup-200ml",
        title: "200ml Bottle",
        capsules: 200,
        duration: "(Lasts upto 2 weeks)",
        price: 245,
      },
    ],
  },

  // Respiratory Care Products
  {
    id: "breath-easy-capsules",
    name: "Breath Easy Respiratory Support",
    slug: "breath-easy-capsules",
    price: "395",
    originalPrice: "465",
    speciality : 'Respiratory Care',
    rating: 4.4,
    reviewCount: 1245,
    imageUrl:
      "https://images.pexels.com/photos/13787561/pexels-photo-13787561.jpeg",
    images: [
      "https://images.pexels.com/photos/13787561/pexels-photo-13787561.jpeg",
    ],
    healthIssueId: "respiratory",
    category: "Respiratory Care",
    description:
      "Natural respiratory support for better breathing and lung health",
    ingredients: ["Tulsi", "Vasaka", "Kantakari", "Bharangi", "Honey"],
    benefits: [
      "Supports respiratory health",
      "Clears airways",
      "Boosts lung function",
    ],
    howToUse: "Take 2 capsules twice daily with warm water",
    inStock: true,
    options: [
      {
        id: "breath-60",
        title: "1 Bottle Contains",
        capsules: 60,
        duration: "(Lasts upto 1 month)",
        price: 395,
      },
    ],
  },

  // Immunity & Wellness Products
  {
    id: "immunity-booster-gold",
    name: "Immunity Booster Gold",
    slug: "immunity-booster-gold",
    price: "675",
    originalPrice: "795",
    speciality : 'Immunity & Wellness',
    rating: 4.7,
    reviewCount: 3421,
    imageUrl:
      "https://images.pexels.com/photos/13787561/pexels-photo-13787561.jpeg",
    images: [
      "https://images.pexels.com/photos/13787561/pexels-photo-13787561.jpeg",
      "https://images.pexels.com/photos/3368291/pexels-photo-3368291.jpeg",
    ],
    healthIssueId: "immunity",
    category: "Immunity",
    description:
      "Premium immunity booster with 15 powerful herbs for complete protection",
    ingredients: [
      "Giloy",
      "Ashwagandha",
      "Amla",
      "Tulsi",
      "Mulethi",
      "Turmeric",
    ],
    benefits: [
      "Boosts immunity",
      "Increases energy",
      "Fights infections",
      "Anti-oxidant rich",
    ],
    howToUse: "Take 2 capsules daily with warm milk or water",
    inStock: true,
    options: [
      {
        id: "immunity-60",
        title: "1 Bottle Contains",
        capsules: 60,
        duration: "(Lasts upto 1 month)",
        price: 675,
      },
    ],
  },
  {
    id: "kamini-vidrawan-ras",
    name: "Kamini Vidrawan Ras Keshar Yukta",
    slug: "kamini-vidrawan-ras",
    price: "1245",
    speciality : 'Immunity & Wellness',
    originalPrice: "1450",
    rating: 4.8,
    reviewCount: 892,
    imageUrl:
      "https://images.pexels.com/photos/6442509/pexels-photo-6442509.jpeg",
    images: [
      "https://images.pexels.com/photos/6442509/pexels-photo-6442509.jpeg",
    ],
    healthIssueId: "immunity",
    category: "Ras Rasayan",
    description:
      "Premium Ras Rasayan formulation for vitality and strength enhancement",
    ingredients: [
      "Swarna Bhasma",
      "Rajat Bhasma",
      "Keshar",
      "Javitri",
      "Jaiphal",
    ],
    benefits: [
      "Enhances vitality",
      "Increases strength",
      "Improves stamina",
      "Rejuvenating",
    ],
    howToUse: "Take 1 tablet twice daily with milk as directed by physician",
    inStock: true,
    options: [
      {
        id: "kamini-30",
        title: "1 Bottle Contains",
        capsules: 30,
        duration: "(Lasts upto 15 days)",
        price: 1245,
      },
    ],
  },

  // Diabetes Care
  {
    id: "diabetes-care-capsules",
    name: "Diabetes Care Natural Support",
    slug: "diabetes-care-capsules",
    price: "495",
    speciality : 'Diabetes Care',
    originalPrice: "595",
    rating: 4.5,
    reviewCount: 1876,
    imageUrl:
      "https://images.pexels.com/photos/13787561/pexels-photo-13787561.jpeg",
    images: [
      "https://images.pexels.com/photos/13787561/pexels-photo-13787561.jpeg",
    ],
    healthIssueId: "diabetes",
    category: "Diabetes Care",
    description: "Natural blood sugar support with traditional Ayurvedic herbs",
    ingredients: ["Karela", "Jamun", "Methi", "Gudmar", "Neem"],
    benefits: [
      "Supports healthy blood sugar",
      "Natural glucose metabolism",
      "Pancreatic support",
    ],
    howToUse: "Take 2 capsules before meals twice daily",
    inStock: true,
    options: [
      {
        id: "diabetes-60",
        title: "1 Bottle Contains",
        capsules: 60,
        duration: "(Lasts upto 1 month)",
        price: 495,
      },
    ],
  },

  // Skin Care
  {
    id: "glow-skin-capsules",
    name: "Glow Skin Beauty Capsules",
    slug: "glow-skin-capsules",
    price: "525",
    originalPrice: "625",
    rating: 4.6,
    speciality : 'Skin Care',
    reviewCount: 2145,
    imageUrl:
      "https://images.pexels.com/photos/13787561/pexels-photo-13787561.jpeg",
    images: [
      "https://images.pexels.com/photos/13787561/pexels-photo-13787561.jpeg",
    ],
    healthIssueId: "skin-care",
    category: "Beauty & Skin",
    description: "Natural beauty enhancement for glowing and healthy skin",
    ingredients: ["Manjistha", "Sariva", "Chandan", "Rose Petals", "Aloe Vera"],
    benefits: [
      "Glowing skin",
      "Natural radiance",
      "Anti-aging properties",
      "Skin detox",
    ],
    howToUse: "Take 2 capsules daily with water after meals",
    inStock: true,
    options: [
      {
        id: "glow-60",
        title: "1 Bottle Contains",
        capsules: 60,
        duration: "(Lasts upto 1 month)",
        price: 525,
      },
    ],
  },
];

// Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: "joint-pain-ayurveda",
    title: "Natural Ways to Manage Joint Pain with Ayurveda",
    readTime: "8 mins",
    category: "Joint Care",
    imageUrl:
      "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
    excerpt:
      "Discover time-tested Ayurvedic remedies for joint pain relief and improved mobility.",
    content:
      "Joint pain affects millions worldwide, but Ayurveda offers natural, effective solutions...",
    healthIssueId: "joint-pain",
  },
  {
    id: "immunity-boost-herbs",
    title: "Top 10 Ayurvedic Herbs for Immunity Boosting",
    readTime: "12 mins",
    category: "Immunity",
    imageUrl:
      "https://images.pexels.com/photos/3368291/pexels-photo-3368291.jpeg",
    excerpt:
      "Learn about powerful herbs that can naturally strengthen your immune system.",
    content:
      "Building immunity naturally is crucial for long-term health. These herbs have been used...",
    healthIssueId: "immunity",
  },
  {
    id: "digestive-health-tips",
    title: "Ayurvedic Diet Tips for Better Digestion",
    readTime: "10 mins",
    category: "Digestive Health",
    imageUrl:
      "https://images.pexels.com/photos/8450354/pexels-photo-8450354.jpeg",
    excerpt:
      "Simple dietary changes based on Ayurvedic principles for optimal digestive health.",
    content:
      "Good digestion is the foundation of health in Ayurveda. Follow these guidelines...",
    healthIssueId: "digestive",
  },
  {
    id: "ras-rasayan-science",
    title: "Understanding the Ancient Science of Ras Rasayan",
    readTime: "15 mins",
    category: "Ras Rasayan",
    imageUrl:
      "https://images.pexels.com/photos/8450354/pexels-photo-8450354.jpeg",
    excerpt:
      "Deep dive into the sophisticated branch of Ayurveda dealing with metallic preparations.",
    content:
      "Ras Rasayan represents the pinnacle of Ayurvedic pharmaceutical science...",
  },
  {
    id: "respiratory-health-winter",
    title: "Keeping Your Lungs Healthy During Winter",
    readTime: "9 mins",
    category: "Respiratory Care",
    imageUrl:
      "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
    excerpt:
      "Essential tips and herbal remedies for maintaining respiratory health in cold weather.",
    content:
      "Winter can be challenging for respiratory health. Here are natural ways to protect...",
    healthIssueId: "respiratory",
  },
  {
    id: "diabetes-ayurvedic-management",
    title: "Ayurvedic Approach to Diabetes Management",
    readTime: "11 mins",
    category: "Diabetes Care",
    imageUrl:
      "https://images.pexels.com/photos/3368291/pexels-photo-3368291.jpeg",
    excerpt:
      "How ancient Ayurvedic wisdom can support modern diabetes management.",
    content:
      "Diabetes management in Ayurveda focuses on balancing doshas and supporting...",
    healthIssueId: "diabetes",
  },
];

// Carousel items for homepage
export const carouselItems = [
  {
    id: "intro-products",
    title: "Premium Ayurvedic Solutions",
    subtitle: "Discover our range of authentic herbal medicines",
    description:
      "From traditional formulations to modern capsules, find the perfect natural remedy for your health needs.",
    imageUrl:
      "https://images.pexels.com/photos/3368291/pexels-photo-3368291.jpeg",
  },
  {
    id: "pain-relief",
    title: "Joint Pain Relief Solutions",
    subtitle: "Mubex Pain - Our bestseller for joint care",
    description:
      "Clinically proven Ayurvedic formulation for effective joint pain relief and improved mobility.",
    imageUrl:
      "https://images.pexels.com/photos/13787561/pexels-photo-13787561.jpeg",
  },
  {
    id: "immunity-range",
    title: "Immunity Boosting Range",
    subtitle: "Strengthen your natural defenses",
    description:
      "Complete range of immunity enhancers with powerful herbs like Giloy, Ashwagandha, and Amla.",
    imageUrl:
      "https://images.pexels.com/photos/6442509/pexels-photo-6442509.jpeg",
  },
];
