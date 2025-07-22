 import Tomato_front from "../assets/Tomato_front.jpeg"
  import Tomato_back from "../assets/Tomato_back.jpeg"
  import Amla_front from "../assets/Amla Powder-front.jpg"
  import Amla_Back from "../assets/Amla Powder-back.jpg"
  import garlic_front from "../assets/Garlic Powder-front.jpg"
  import garlic_Back from "../assets/Garlic Powder-back.jpg"
   import tamarind_front from "../assets/Tamrind Powder-fronts.jpg"
   import tamarind_back from "../assets/Tamrind Powder-back.jpg"
  import carrot_front from "../assets/Carrot Powder-front.jpg"
    import carrot_back from "../assets/Carrot Powder-back.jpg"
    import Moringa_f from "../assets/Moringa Powder-front.jpg"
    import Moringa_back from "../assets/Moringa Powder-back.jpg"
    import Coriander_front from "../assets/Coriander Powder-front.jpg"
   import Coriander_back from "../assets/Coriander Powder-back.jpg"
   import Beetroot_front from "../assets/Beetroot Powder-front.jpg"
   import Beetroot_back from "../assets/Beetroot Powder-back.jpg"
   import onion_front from "../assets/Onion Powder-front.jpg"
   import onion_back from "../assets/Beetroot Powder-back.jpg"
   import Curry_front from "../assets/Curry Leaves Powder-front.jpg"
      import Candy_front from "../assets/Amla Candy-front.jpg"
      import Candy_back from "../assets/Amla Candy-back.jpg"



export const products = [
  {
    id: 1,
    name: 'Tomato Powder',
    nameKey: 'tomatoPowder',
    originalPrice: 150,
    price: 120, // 20% discount
    images: [
      Tomato_front,
     Tomato_back
    ],
    category: 'powders',
    descriptionKey: 'tomatoPowderDesc',
    inStock: true,
    weight: '100g',
    benefits: ['Rich in Lycopene', 'Natural Antioxidants', 'No Preservatives'],
    discount: 50// Calculated: ((150-120)/150)*100 = 20%
  },
  {
    id: 2,
    name: 'Garlic Powder',
    nameKey: 'garlicPowder',
    originalPrice: 100,
    price: 80, // 20% discount
    images: [
       garlic_front,
      garlic_Back
    ],
    category: 'powders',
    descriptionKey: 'garlicPowderDesc',
    inStock: true,
    weight: '100g',
    benefits: ['Boosts Immunity', 'Natural Antibacterial', 'Heart Healthy'],
    discount: 20 // Calculated: ((100-80)/100)*100 = 20%
  },
  {
    id: 3,
    name: 'Tamarind Powder',
    nameKey: 'tamarindPowder',
    price: 80,
    originalPrice: 90,
    images: [
     tamarind_front,
     tamarind_back 
    ],
    category: 'powders',
    descriptionKey: 'tamarindPowderDesc',
    inStock: true,
    weight: '100g',
    benefits: ['Rich in Vitamin C', 'Aids Digestion', 'Natural Antioxidants'],
    discount: 0 // No discount
  },
  {
    id: 4,
    name: 'Amla Powder',
    nameKey: 'amlaPowder',
    originalPrice: 140,
    price: 110, // 21% discount
    images: [
       Amla_front,
      Amla_Back
    ],
    category: 'powders',
    descriptionKey: 'amlaPowderDesc',
    inStock: true,
    weight: '100g',
    benefits: ['High Vitamin C', 'Boosts Immunity', 'Antioxidant Rich'],
    discount: 21 // Calculated: ((140-110)/140)*100 = 21%
  },
  {
    id: 5,
    name: 'Carrot Powder',
    nameKey: 'carrotPowder',
    originalPrice: 120,
    price: 95, // 21% discount
    images: [
      carrot_front,
      carrot_back 
    ],
    category: 'powders',
    descriptionKey: 'carrotPowderDesc',
    inStock: true,
    weight: '100g',
    benefits: ['Rich in Beta-Carotene', 'Good for Eyes', 'Natural Sweetness'],
    discount: 21 // Calculated: ((120-95)/120)*100 = 21%
  },
  {
    id: 6,
    name: 'Moringa Powder',
    nameKey: 'moringaPowder',
    originalPrice: 180,
    price: 140, // 22% discount
    images: [
      Moringa_f,
      Moringa_back
    ],
    category: 'powders',
    descriptionKey: 'moringaPowderDesc',
    inStock: true,
    weight: '100g',
    benefits: ['Superfood', 'High Protein', 'Rich in Iron'],
    discount: 22 // Calculated: ((180-140)/180)*100 = 22%
  },
  {
    id: 7,
    name: 'Beetroot Powder',
    nameKey: 'beetrootPowder',
    originalPrice: 85,
    images: [
      Beetroot_front,
      Beetroot_back
    ],
    category: 'powders',
    descriptionKey: 'beetrootPowderDesc',
    inStock: true,
    weight: '100g',
    benefits: ['Natural Coloring', 'Rich in Nitrates', 'Boosts Energy'],
    discount: 0 // No discount
  },
  {
    id: 8,
    name: 'Onion Powder',
    nameKey: 'onionPowder',
    originalPrice: 110,
    price: 85, // 23% discount
    images: [
      onion_front,
      onion_back
    ],
    category: 'powders',
    descriptionKey: 'onionPowderDesc',
    inStock: true,
    weight: '100g',
    benefits: ['Rich Flavor', 'Natural Preservative', 'Antioxidants'],
    discount: 23 // Calculated: ((110-85)/110)*100 = 23%
  },
  {
    id: 9,
    name: 'Curry Leaves Powder',
    nameKey: 'curryLeavesPowder',
    originalPrice: 95,
    price: 75, // 21% discount
    images: [
      Curry_front,
      'https://images.pexels.com/photos/1342460/pexels-photo-1342460.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'powders',
    descriptionKey: 'curryLeavesPowderDesc',
    inStock: true,
    weight: '50g',
    benefits: ['Authentic Flavor', 'Hair Health', 'Aids Digestion'],
    discount: 21 // Calculated: ((95-75)/95)*100 = 21%
  },
  {
    id: 10,
    name: 'Amla Candy',
    nameKey: 'amlaCandy',
    originalPrice: 160,
    price: 130, // 19% discount
    images: [
     Candy_front,
      Candy_back
    ],
    category: 'powders',
    descriptionKey: 'amlaCandyDesc',
    inStock: true,
    weight: '200g',
    benefits: ['Vitamin C Rich', 'Healthy Snack', 'Natural Immunity Booster'],
    discount: 19 // Calculated: ((160-130)/160)*100 = 19%
  },
  {
    id: 11,
    name: 'Coriander Powder',
    nameKey: 'corianderPowder',
    originalPrice: 70,
    images: [
      'https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/357743/pexels-photo-357743.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'powders',
    descriptionKey: 'corianderPowderDesc',
    inStock: true,
    weight: '100g',
    benefits: ['Essential Spice', 'Aids Digestion', 'Rich Aroma'],
    discount: 0 // No discount
  },
  {
    id: 12,
    name: 'Groundnut Chutney',
    nameKey: 'groundnutChutney',
    originalPrice: 180,
    price: 150, // 17% discount
    images: [
      'https://images.pexels.com/photos/4518664/pexels-photo-4518664.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'chutneys',
    descriptionKey: 'groundnutChutneyDesc',
    inStock: true,
    weight: '200g',
    benefits: ['High Protein', 'Traditional Recipe', 'Ready to Eat'],
    discount: 17 // Calculated: ((180-150)/180)*100 = 17%
  },
  {
    id: 13,
    name: 'Garlic Coconut Chutney',
    nameKey: 'garlicCoconutChutney',
    originalPrice: 200,
    price: 160, // 20% discount
    images: [
      'https://images.pexels.com/photos/1435073/pexels-photo-1435073.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/4518664/pexels-photo-4518664.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'chutneys',
    descriptionKey: 'garlicCoconutChutneyDesc',
    inStock: true,
    weight: '200g',
    benefits: ['Traditional Taste', 'Coconut Benefits', 'Garlic Goodness'],
    discount: 20 // Calculated: ((200-160)/200)*100 = 20%
  },
  {
    id: 14,
    name: 'Niger Seeds Chutney',
    nameKey: 'nigerSeedsChutney',
    originalPrice: 175,
    price: 140, // 20% discount
    images: [
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1029898/pexels-photo-1029898.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'chutneys',
    descriptionKey: 'nigerSeedsChutneyDesc',
    inStock: true,
    weight: '150g',
    benefits: ['Healthy Fats', 'High Protein', 'Traditional Recipe'],
    discount: 20 // Calculated: ((175-140)/175)*100 = 20%
  },
  {
    id: 15,
    name: 'Flaxseed Chutney',
    nameKey: 'flaxseedChutney',
    originalPrice: 190,
    price: 155, // 18% discount
    images: [
      'https://images.pexels.com/photos/1029898/pexels-photo-1029898.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'chutneys',
    descriptionKey: 'flaxseedChutneyDesc',
    inStock: true,
    weight: '150g',
    benefits: ['Omega-3 Rich', 'Heart Healthy', 'High Fiber'],
    discount: 18 // Calculated: ((190-155)/190)*100 = 18%
  },
  {
    id: 16,
    name: 'Onion Garlic Masala',
    nameKey: 'onionGarlicMasala',
    originalPrice: 120,
    price: 95, // 21% discount
    images: [
      'https://images.pexels.com/photos/1435058/pexels-photo-1435058.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'masalas',
    descriptionKey: 'onionGarlicMasalaDesc',
    inStock: true,
    weight: '100g',
    benefits: ['Perfect Blend', 'Enhances Flavor', 'All-Purpose'],
    discount: 21 // Calculated: ((120-95)/120)*100 = 21%
  },
  {
    id: 17,
    name: 'Biryani Masala',
    nameKey: 'biryaniMasala',
    originalPrice: 150,
    price: 120, // 20% discount
    images: [
      'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1435058/pexels-photo-1435058.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'masalas',
    descriptionKey: 'biryaniMasalaDesc',
    inStock: true,
    weight: '100g',
    benefits: ['Authentic Blend', 'Aromatic', 'Traditional Recipe'],
    discount: 20 // Calculated: ((150-120)/150)*100 = 20%
  },
  {
    id: 18,
    name: 'Chicken Masala',
    nameKey: 'chickenMasala',
    originalPrice: 140,
    price: 110, // 21% discount
    images: [
      'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1435058/pexels-photo-1435058.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'masalas',
    descriptionKey: 'chickenMasalaDesc',
    inStock: false,
    weight: '100g',
    benefits: ['Special Blend', 'Rich Flavor', 'Perfect for Chicken'],
    discount: 21 // Calculated: ((140-110)/140)*100 = 21%
  },
  {
    id: 19,
    name: 'Sambar Masala',
    nameKey: 'sambarMasala',
    originalPrice: 85,
    price: 85,
    images: [
      'https://images.pexels.com/photos/1435058/pexels-photo-1435058.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'masalas',
    descriptionKey: 'sambarMasalaDesc',
    inStock: true,
    weight: '100g',
    benefits: ['South Indian Style', 'Authentic Taste', 'Traditional Recipe'],
    discount: 0 // No discount
  },
  {
    id: 20,
    name: 'Meat Masala',
    nameKey: 'meatMasala',
    originalPrice: 155,
    price: 125, // 19% discount
    images: [
      'https://images.pexels.com/photos/1435058/pexels-photo-1435058.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    category: 'masalas',
    descriptionKey: 'meatMasalaDesc',
    inStock: true,
    weight: '100g',
    benefits: ['Premium Blend', 'Rich Flavor', 'Perfect for Meat'],
    discount: 19 // Calculated: ((155-125)/155)*100 = 19%
  }
];

export const sliderImages = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=1200',
    titleKey: 'slide1Title',
    subtitleKey: 'slide1Subtitle'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/1435058/pexels-photo-1435058.jpeg?auto=compress&cs=tinysrgb&w=1200',
    titleKey: 'slide2Title',
    subtitleKey: 'slide2Subtitle'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/4198337/pexels-photo-4198337.jpeg?auto=compress&cs=tinysrgb&w=1200',
    titleKey: 'slide3Title',
    subtitleKey: 'slide3Subtitle'
  }
];