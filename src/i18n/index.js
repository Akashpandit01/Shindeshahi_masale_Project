import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      home: 'Home',
      products: 'Products',
      cart: 'Cart',
      contact: 'Contact',
      login: 'Login',
      logout: 'Logout',
      
      // Hero Section
      welcome: 'Welcome to Shindeshai Masale',
      heroSubtitle: 'Authentic Indian Spices & Masalas',
      heroDescription: 'Discover the finest collection of traditional Indian spices, powders, and masalas crafted with care.',
      shopNow: 'Shop Now',
      locationWelcome: 'Welcome from',
      
      // Slider
      slide1Title: 'Welcome to Shindeshai Masale',
      slide1Subtitle: 'Authentic Indian Spices & Masalas',
      slide1Description: 'Discover the finest collection of traditional Indian spices, powders, and masalas crafted with care.',
      slide2Title: 'Premium Quality Spices',
      slide2Subtitle: 'Hand-picked from the finest farms across India',
      slide2Description: 'Experience the authentic taste of India with our carefully selected premium spices.',
      slide3Title: 'Traditional Family Recipes',
      slide3Subtitle: 'Passed down through generations',
      slide3Description: 'Authentic masalas made using time-tested traditional methods and secret family recipes.',
      
      // Footer
      trustedSource: 'Your trusted source for authentic Indian spices, powders, and masalas.',
      bringFinest: 'We bring you the finest quality traditional ingredients to make your cooking special.',
      quickLinks: 'Quick Links',
      aboutUs: 'About Us',
      contactInfo: 'Contact Info',
      allRightsReserved: 'All rights reserved.',
      
      // Slider
      slide1Title: 'Premium Quality Spices',
      slide1Subtitle: 'Hand-picked from the finest farms across India',
      slide2Title: 'Traditional Masalas',
      slide2Subtitle: 'Authentic recipes passed down through generations',
      slide3Title: 'Fresh & Natural',
      slide3Subtitle: 'No preservatives, just pure goodness',
      
      // Products
      searchPlaceholder: 'Search spices...',
      filterBy: 'Filter by Category',
      allProducts: 'All Products',
      powders: 'Powders',
      masalas: 'Masalas',
      chutneys: 'Chutneys',
      addToCart: 'Add to Cart',
      viewDetails: 'View Details',
      inStock: 'In Stock',
      outOfStock: 'Out of Stock',
      
      // Cart
      yourCart: 'Your Cart',
      cartEmpty: 'Your cart is empty',
      quantity: 'Quantity',
      remove: 'Remove',
      subtotal: 'Subtotal',
      total: 'Total',
      proceedToCheckout: 'Proceed to Checkout',
      
      // Checkout
      checkout: 'Checkout',
      shippingAddress: 'Shipping Address',
      fullName: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      city: 'City',
      state: 'State',
      pincode: 'Pincode',
      paymentMethod: 'Payment Method',
      cardPayment: 'Card Payment',
      placeOrder: 'Place Order',
      
      // Authentication
      loginTitle: 'Login to Your Account',
      signupTitle: 'Create New Account',
      enterPhone: 'Enter your phone number',
      sendOTP: 'Send OTP',
      enterOTP: 'Enter OTP',
      verifyOTP: 'Verify OTP',
      dontHaveAccount: "Don't have an account?",
      signUp: 'Sign Up',
      haveAccount: 'Already have an account?',
      
      // Contact
      contactUs: 'Contact Us',
      getInTouch: 'Get in Touch',
      name: 'Name',
      message: 'Message',
      send: 'Send',
      
      // Order Confirmation
      orderConfirmed: 'Order Confirmed!',
      orderNumber: 'Order Number',
      thankYou: 'Thank you for your order',
      
      // Product Names
      tomatoPowder: 'Tomato Powder',
      garlicPowder: 'Garlic Powder',
      tamarindPowder: 'Tamarind Powder',
      amlaPowder: 'Amla Powder',
      carrotPowder: 'Carrot Powder',
      moringaPowder: 'Moringa Powder',
      beetrootPowder: 'Beetroot Powder',
      onionPowder: 'Onion Powder',
      curryLeavesPowder: 'Curry Leaves Powder',
      amlaCandy: 'Amla Candy',
      corianderPowder: 'Coriander Powder',
      groundnutChutney: 'Groundnut Chutney',
      garlicCoconutChutney: 'Garlic Coconut Chutney',
      nigerSeedsChutney: 'Niger Seeds Chutney',
      flaxseedChutney: 'Flaxseed Chutney',
      onionGarlicMasala: 'Onion Garlic Masala',
      biryaniMasala: 'Biryani Masala',
      chickenMasala: 'Chicken Masala',
      sambarMasala: 'Sambar Masala',
      meatMasala: 'Meat Masala',
      
      // Product Descriptions
      tomatoPowderDesc: 'Pure tomato powder made from sun-dried tomatoes. Rich in lycopene and perfect for cooking.',
      garlicPowderDesc: 'Fresh garlic powder with intense flavor. Essential for Indian cooking.',
      tamarindPowderDesc: 'Tangy tamarind powder perfect for sambar, rasam, and chutneys.',
      amlaPowderDesc: 'Pure amla powder rich in Vitamin C. Great for health and immunity.',
      carrotPowderDesc: 'Natural carrot powder rich in beta-carotene and vitamins.',
      moringaPowderDesc: 'Nutrient-dense moringa leaf powder. Superfood for daily nutrition.',
      beetrootPowderDesc: 'Natural beetroot powder for health drinks and natural coloring.',
      onionPowderDesc: 'Pure onion powder for enhanced flavor in all dishes.',
      curryLeavesPowderDesc: 'Aromatic curry leaves powder for authentic South Indian flavor.',
      amlaCandyDesc: 'Sweet and tangy amla candy. Healthy snack rich in Vitamin C.',
      corianderPowderDesc: 'Fresh ground coriander powder. Essential spice for Indian cooking.',
      groundnutChutneyDesc: 'Spicy groundnut chutney powder. Perfect with idli, dosa, and rice.',
      garlicCoconutChutneyDesc: 'Traditional garlic coconut chutney powder. Authentic Maharashtrian taste.',
      nigerSeedsChutneyDesc: 'Nutritious niger seeds chutney powder. Rich in healthy fats.',
      flaxseedChutneyDesc: 'Healthy flaxseed chutney powder rich in Omega-3 fatty acids.',
      onionGarlicMasalaDesc: 'Perfect blend of onion and garlic for all vegetable dishes.',
      biryaniMasalaDesc: 'Authentic biryani masala blend. Perfect for aromatic biryani.',
      chickenMasalaDesc: 'Special chicken masala blend for delicious chicken curries.',
      sambarMasalaDesc: 'Traditional South Indian sambar masala for authentic taste.',
      meatMasalaDesc: 'Premium meat masala blend for rich and flavorful meat dishes.',

      // Notifications
      addedToCart: 'Added to cart successfully!',
      removedFromCart: 'Removed from cart',
      orderPlaced: 'Order placed successfully!',
      otpSent: 'OTP sent successfully',
      otpVerified: 'OTP verified successfully',
      loginSuccess: 'Login successful!'
    }
  },
  hi: {
    translation: {
      // Navigation
      home: 'होम',
      products: 'उत्पाद',
      cart: 'कार्ट',
      contact: 'संपर्क',
      login: 'लॉगिन',
      logout: 'लॉगआउट',
      
      // Hero Section
      welcome: 'शिंदेशाही मसाले में आपका स्वागत है',
      heroSubtitle: 'प्रामाणिक भारतीय मसाले और पाउडर',
      heroDescription: 'परंपरागत भारतीय मसालों, पाउडर और मसालों का बेहतरीन संग्रह खोजें।',
      shopNow: 'अभी खरीदें',
      locationWelcome: 'से स्वागत',
      
      // Slider
      slide1Title: 'शिंदेशाही मसाले में आपका स्वागत है',
      slide1Subtitle: 'प्रामाणिक भारतीय मसाले और पाउडर',
      slide1Description: 'परंपरागत भारतीय मसालों, पाउडर और मसालों का बेहतरीन संग्रह खोजें।',
      slide2Title: 'प्रीमियम गुणवत्ता के मसाले',
      slide2Subtitle: 'भारत भर के बेहतरीन खेतों से चुने गए',
      slide2Description: 'हमारे सावधानी से चुने गए प्रीमियम मसालों के साथ भारत का प्रामाणिक स्वाद अनुभव करें।',
      slide3Title: 'पारंपरिक पारिवारिक रेसिपी',
      slide3Subtitle: 'पीढ़ियों से चली आ रही',
      slide3Description: 'समय-परीक्षित पारंपरिक तरीकों और गुप्त पारिवारिक रेसिपी का उपयोग करके बनाए गए प्रामाणिक मसाले।',
      
      // Footer
      trustedSource: 'प्रामाणिक भारतीय मसाले, पाउडर और मसालों के लिए आपका विश्वसनीय स्रोत।',
      bringFinest: 'हम आपके खाना पकाने को विशेष बनाने के लिए बेहतरीन गुणवत्ता की पारंपरिक सामग्री लाते हैं।',
      quickLinks: 'त्वरित लिंक',
      aboutUs: 'हमारे बारे में',
      contactInfo: 'संपर्क जानकारी',
      allRightsReserved: 'सभी अधिकार सुरक्षित।',
      
      // Slider
      slide1Title: 'प्रीमियम गुणवत्ता के मसाले',
      slide1Subtitle: 'भारत भर के बेहतरीन खेतों से चुने गए',
      slide2Title: 'पारंपरिक मसाले',
      slide2Subtitle: 'पीढ़ियों से चली आ रही प्रामाणिक रेसिपी',
      slide3Title: 'ताज़ा और प्राकृतिक',
      slide3Subtitle: 'कोई परिरक्षक नहीं, केवल शुद्ध अच्छाई',
      
      // Products
      searchPlaceholder: 'मसाले खोजें...',
      filterBy: 'श्रेणी के अनुसार फ़िल्टर करें',
      allProducts: 'सभी उत्पाद',
      powders: 'पाउडर',
      masalas: 'मसाले',
      chutneys: 'चटनी',
      addToCart: 'कार्ट में जोड़ें',
      viewDetails: 'विवरण देखें',
      inStock: 'स्टॉक में',
      outOfStock: 'स्टॉक खत्म',
      
      // Cart
      yourCart: 'आपका कार्ट',
      cartEmpty: 'आपका कार्ट खाली है',
      quantity: 'मात्रा',
      remove: 'हटाएं',
      subtotal: 'उप-योग',
      total: 'कुल',
      proceedToCheckout: 'चेकआउट पर जाएं',
      
      // Checkout
      checkout: 'चेकआउट',
      shippingAddress: 'शिपिंग पता',
      fullName: 'पूरा नाम',
      email: 'ईमेल',
      phone: 'फोन',
      address: 'पता',
      city: 'शहर',
      state: 'राज्य',
      pincode: 'पिनकोड',
      paymentMethod: 'भुगतान विधि',
      cardPayment: 'कार्ड भुगतान',
      placeOrder: 'ऑर्डर दें',
      
      // Authentication
      loginTitle: 'अपने खाते में लॉगिन करें',
      signupTitle: 'नया खाता बनाएं',
      enterPhone: 'अपना फोन नंबर दर्ज करें',
      sendOTP: 'OTP भेजें',
      enterOTP: 'OTP दर्ज करें',
      verifyOTP: 'OTP सत्यापित करें',
      dontHaveAccount: 'खाता नहीं है?',
      signUp: 'साइन अप',
      haveAccount: 'पहले से खाता है?',
      
      // Contact
      contactUs: 'संपर्क करें',
      getInTouch: 'संपर्क में रहें',
      name: 'नाम',
      message: 'संदेश',
      send: 'भेजें',
      
      // Order Confirmation
      orderConfirmed: 'ऑर्डर पुष्ट!',
      orderNumber: 'ऑर्डर नंबर',
      thankYou: 'आपके ऑर्डर के लिए धन्यवाद',
      
      // Product Names
      tomatoPowder: 'टमाटर पाउडर',
      garlicPowder: 'लहसुन पाउडर',
      tamarindPowder: 'इमली पाउडर',
      amlaPowder: 'आंवला पाउडर',
      carrotPowder: 'गाजर पाउडर',
      moringaPowder: 'मोरिंगा पाउडर',
      beetrootPowder: 'चुकंदर पाउडर',
      onionPowder: 'प्याज पाउडर',
      curryLeavesPowder: 'करी पत्ता पाउडर',
      amlaCandy: 'आंवला कैंडी',
      corianderPowder: 'धनिया पाउडर',
      groundnutChutney: 'मूंगफली चटनी',
      garlicCoconutChutney: 'लहसुन नारियल चटनी',
      nigerSeedsChutney: 'राम तिल चटनी',
      flaxseedChutney: 'अलसी चटनी',
      onionGarlicMasala: 'प्याज लहसुन मसाला',
      biryaniMasala: 'बिरयानी मसाला',
      chickenMasala: 'चिकन मसाला',
      sambarMasala: 'सांबर मसाला',
      meatMasala: 'मांस मसाला',
      
      // Product Descriptions
      tomatoPowderDesc: 'सूखे टमाटर से बना शुद्ध टमाटर पाउडर। लाइकोपीन से भरपूर और खाना पकाने के लिए बिल्कुल सही।',
      garlicPowderDesc: 'तीव्र स्वाद के साथ ताजा लहसुन पाउडर। भारतीय खाना पकाने के लिए आवश्यक।',
      tamarindPowderDesc: 'खट्टा इमली पाउडर सांबर, रसम और चटनी के लिए बिल्कुल सही।',
      amlaPowderDesc: 'विटामिन सी से भरपूर शुद्ध आंवला पाउडर। स्वास्थ्य और प्रतिरक्षा के लिए बेहतरीन।',
      carrotPowderDesc: 'बीटा-कैरोटीन और विटामिन से भरपूर प्राकृतिक गाजर पाउडर।',
      moringaPowderDesc: 'पोषक तत्वों से भरपूर मोरिंगा पत्ती पाउडर। दैनिक पोषण के लिए सुपरफूड।',
      beetrootPowderDesc: 'स्वास्थ्य पेय और प्राकृतिक रंग के लिए प्राकृतिक चुकंदर पाउडर।',
      onionPowderDesc: 'सभी व्यंजनों में बेहतर स्वाद के लिए शुद्ध प्याज पाउडर।',
      curryLeavesPowderDesc: 'प्रामाणिक दक्षिण भारतीय स्वाद के लिए सुगंधित करी पत्ता पाउडर।',
      amlaCandyDesc: 'मीठी और खट्टी आंवला कैंडी। विटामिन सी से भरपूर स्वस्थ नाश्ता।',
      corianderPowderDesc: 'ताजा पिसा हुआ धनिया पाउडर। भारतीय खाना पकाने के लिए आवश्यक मसाला।',
      groundnutChutneyDesc: 'मसालेदार मूंगफली चटनी पाउडर। इडली, डोसा और चावल के साथ बिल्कुल सही।',
      garlicCoconutChutneyDesc: 'पारंपरिक लहसुन नारियल चटनी पाउडर। प्रामाणिक महाराष्ट्रीयन स्वाद।',
      nigerSeedsChutneyDesc: 'पौष्टिक राम तिल चटनी पाउडर। स्वस्थ वसा से भरपूर।',
      flaxseedChutneyDesc: 'ओमेगा-3 फैटी एसिड से भरपूर स्वस्थ अलसी चटनी पाउडर।',
      onionGarlicMasalaDesc: 'सभी सब्जी व्यंजनों के लिए प्याज और लहसुन का बेहतरीन मिश्रण।',
      biryaniMasalaDesc: 'प्रामाणिक बिरयानी मसाला मिश्रण। सुगंधित बिरयानी के लिए बिल्कुल सही।',
      chickenMasalaDesc: 'स्वादिष्ट चिकन करी के लिए विशेष चिकन मसाला मिश्रण।',
      sambarMasalaDesc: 'प्रामाणिक स्वाद के लिए पारंपरिक दक्षिण भारतीय सांबर मसाला।',
      meatMasalaDesc: 'समृद्ध और स्वादिष्ट मांस व्यंजनों के लिए प्रीमियम मांस मसाला मिश्रण।',

      // Notifications
      addedToCart: 'कार्ट में सफलतापूर्वक जोड़ा गया!',
      removedFromCart: 'कार्ट से हटा दिया गया',
      orderPlaced: 'ऑर्डर सफलतापूर्वक दिया गया!',
      otpSent: 'OTP सफलतापूर्वक भेजा गया',
      otpVerified: 'OTP सफलतापूर्वक सत्यापित',
      loginSuccess: 'लॉगिन सफल!'
    }
  },
  mr: {
    translation: {
      // Navigation
      home: 'मुख्यपृष्ठ',
      products: 'उत्पादने',
      cart: 'कार्ट',
      contact: 'संपर्क',
      login: 'लॉगिन',
      logout: 'लॉगआउट',
      
      // Hero Section
      welcome: 'शिंदेशाही मसाल्यांमध्ये आपले स्वागत',
      heroSubtitle: 'अस्सल भारतीय मसाले आणि पावडर',
      heroDescription: 'पारंपारिक भारतीय मसाले, पावडर आणि मसाल्यांचा उत्कृष्ट संग्रह शोधा.',
      shopNow: 'आता खरेदी करा',
      locationWelcome: 'येथून स्वागत',
      
      // Slider
      slide1Title: 'शिंदेशाही मसाल्यांमध्ये आपले स्वागत',
      slide1Subtitle: 'अस्सल भारतीय मसाले आणि पावडर',
      slide1Description: 'पारंपारिक भारतीय मसाले, पावडर आणि मसाल्यांचा उत्कृष्ट संग्रह शोधा.',
      slide2Title: 'प्रीमियम दर्जाचे मसाले',
      slide2Subtitle: 'भारतातील उत्कृष्ट शेतातून निवडलेले',
      slide2Description: 'आमच्या काळजीपूर्वक निवडलेल्या प्रीमियम मसाल्यांसह भारताचा अस्सल स्वाद अनुभवा.',
      slide3Title: 'पारंपारिक कौटुंबिक रेसिपी',
      slide3Subtitle: 'पिढ्यानपिढ्या चालत आलेल्या',
      slide3Description: 'काळाच्या कसोटीवर उतरलेल्या पारंपारिक पद्धती आणि गुप्त कौटुंबिक रेसिपी वापरून बनवलेले अस्सल मसाले.',
      
      // Footer
      trustedSource: 'अस्सल भारतीय मसाले, पावडर आणि मसाल्यांसाठी तुमचा विश्वसनीय स्रोत.',
      bringFinest: 'आम्ही तुमचे स्वयंपाक विशेष बनवण्यासाठी उत्कृष्ट दर्जाचे पारंपारिक घटक आणतो.',
      quickLinks: 'द्रुत दुवे',
      aboutUs: 'आमच्याबद्दल',
      contactInfo: 'संपर्क माहिती',
      allRightsReserved: 'सर्व हक्क राखीव.',
      
      // Slider
      slide1Title: 'प्रीमियम दर्जाचे मसाले',
      slide1Subtitle: 'भारतातील उत्कृष्ट शेतातून निवडलेले',
      slide2Title: 'पारंपारिक मसाले',
      slide2Subtitle: 'पिढ्यानपिढ्या चालत आलेल्या अस्सल रेसिपी',
      slide3Title: 'ताजे आणि नैसर्गिक',
      slide3Subtitle: 'कोणतेही परिरक्षक नाही, फक्त शुद्ध चांगुलपणा',
      
      // Products
      searchPlaceholder: 'मसाले शोधा...',
      filterBy: 'श्रेणीनुसार फिल्टर करा',
      allProducts: 'सर्व उत्पादने',
      powders: 'पावडर',
      masalas: 'मसाले',
      chutneys: 'चटणी',
      addToCart: 'कार्टमध्ये जोडा',
      viewDetails: 'तपशील पहा',
      inStock: 'स्टॉकमध्ये',
      outOfStock: 'स्टॉक संपला',
      
      // Cart
      yourCart: 'तुमचा कार्ट',
      cartEmpty: 'तुमचा कार्ट रिकामा आहे',
      quantity: 'प्रमाण',
      remove: 'काढा',
      subtotal: 'उप-एकूण',
      total: 'एकूण',
      proceedToCheckout: 'चेकआउटला जा',
      
      // Checkout
      checkout: 'चेकआउट',
      shippingAddress: 'शिपिंग पत्ता',
      fullName: 'पूर्ण नाव',
      email: 'ईमेल',
      phone: 'फोन',
      address: 'पत्ता',
      city: 'शहर',
      state: 'राज्य',
      pincode: 'पिनकोड',
      paymentMethod: 'पेमेंट पद्धत',
      cardPayment: 'कार्ड पेमेंट',
      placeOrder: 'ऑर्डर द्या',
      
      // Authentication
      loginTitle: 'तुमच्या खात्यात लॉगिन करा',
      signupTitle: 'नवीन खाते तयार करा',
      enterPhone: 'तुमचा फोन नंबर टाका',
      sendOTP: 'OTP पाठवा',
      enterOTP: 'OTP टाका',
      verifyOTP: 'OTP सत्यापित करा',
      dontHaveAccount: 'खाते नाही?',
      signUp: 'साइन अप',
      haveAccount: 'आधीच खाते आहे?',
      
      // Contact
      contactUs: 'आमच्याशी संपर्क साधा',
      getInTouch: 'संपर्कात रहा',
      name: 'नाव',
      message: 'संदेश',
      send: 'पाठवा',
      
      // Order Confirmation
      orderConfirmed: 'ऑर्डर पुष्ट!',
      orderNumber: 'ऑर्डर नंबर',
      thankYou: 'तुमच्या ऑर्डरसाठी धन्यवाद',
      
      // Product Names
      tomatoPowder: 'टोमेटो पावडर',
      garlicPowder: 'लसूण पावडर',
      tamarindPowder: 'चिंच पावडर',
      amlaPowder: 'आवळा पावडर',
      carrotPowder: 'गाजर पावडर',
      moringaPowder: 'शेवगा पावडर',
      beetrootPowder: 'बीटरूट पावडर',
      onionPowder: 'कांदा पावडर',
      curryLeavesPowder: 'कढीपत्ता पावडर',
      amlaCandy: 'आवळा कँडी',
      corianderPowder: 'धनिया पावडर',
      groundnutChutney: 'शेंगदाणा चटणी',
      garlicCoconutChutney: 'लसूण नारळ चटणी',
      nigerSeedsChutney: 'रामतील चटणी',
      flaxseedChutney: 'जवस चटणी',
      onionGarlicMasala: 'कांदा लसूण मसाला',
      biryaniMasala: 'बिर्याणी मसाला',
      chickenMasala: 'चिकन मसाला',
      sambarMasala: 'सांबर मसाला',
      meatMasala: 'मांस मसाला',
      
      // Product Descriptions
      tomatoPowderDesc: 'वाळलेल्या टोमॅटोपासून बनवलेले शुद्ध टोमॅटो पावडर। लायकोपीनने भरपूर आणि स्वयंपाकासाठी योग्य.',
      garlicPowderDesc: 'तीव्र चवीसह ताजे लसूण पावडर. भारतीय स्वयंपाकासाठी आवश्यक.',
      tamarindPowderDesc: 'आंबट चिंच पावडर सांबर, रसम आणि चटणीसाठी योग्य.',
      amlaPowderDesc: 'व्हिटॅमिन सी ने भरपूर शुद्ध आवळा पावडर. आरोग्य आणि रोगप्रतिकारक शक्तीसाठी उत्तम.',
      carrotPowderDesc: 'बीटा-कॅरोटीन आणि जीवनसत्वांनी भरपूर नैसर्गिक गाजर पावडर.',
      moringaPowderDesc: 'पोषक तत्वांनी भरपूर शेवगा पानांचे पावडर. दैनंदिन पोषणासाठी सुपरफूड.',
      beetrootPowderDesc: 'आरोग्य पेये आणि नैसर्गिक रंगासाठी नैसर्गिक बीटरूट पावडर.',
      onionPowderDesc: 'सर्व पदार्थांमध्ये वाढीव चवीसाठी शुद्ध कांदा पावडर.',
      curryLeavesPowderDesc: 'अस्सल दक्षिण भारतीय चवीसाठी सुगंधी कढीपत्ता पावडर.',
      amlaCandyDesc: 'गोड आणि आंबट आवळा कँडी. व्हिटॅमिन सी ने भरपूर आरोग्यदायी नाश्ता.',
      corianderPowderDesc: 'ताजे दळलेले धनिया पावडर. भारतीय स्वयंपाकासाठी आवश्यक मसाला.',
      groundnutChutneyDesc: 'मसालेदार शेंगदाणा चटणी पावडर. इडली, डोसा आणि भातासोबत योग्य.',
      garlicCoconutChutneyDesc: 'पारंपारिक लसूण नारळ चटणी पावडर. अस्सल महाराष्ट्रीयन चव.',
      nigerSeedsChutneyDesc: 'पौष्टिक रामतील चटणी पावडर. आरोग्यदायी चरबीने भरपूर.',
      flaxseedChutneyDesc: 'ओमेगा-3 फॅटी अॅसिडने भरपूर आरोग्यदायी जवस चटणी पावडर.',
      onionGarlicMasalaDesc: 'सर्व भाजी पदार्थांसाठी कांदा आणि लसूणचे उत्तम मिश्रण.',
      biryaniMasalaDesc: 'अस्सल बिर्याणी मसाला मिश्रण. सुगंधी बिर्याणीसाठी योग्य.',
      chickenMasalaDesc: 'स्वादिष्ट चिकन करीसाठी विशेष चिकन मसाला मिश्रण.',
      sambarMasalaDesc: 'अस्सल चवीसाठी पारंपारिक दक्षिण भारतीय सांबर मसाला.',
      meatMasalaDesc: 'समृद्ध आणि चवदार मांस पदार्थांसाठी प्रीमियम मांस मसाला मिश्रण.',

      // Notifications
      addedToCart: 'कार्टमध्ये यशस्वीरित्या जोडले!',
      removedFromCart: 'कार्टमधून काढले',
      orderPlaced: 'ऑर्डर यशस्वीरित्या दिले!',
      otpSent: 'OTP यशस्वीरित्या पाठवले',
      otpVerified: 'OTP यशस्वीरित्या सत्यापित',
      loginSuccess: 'लॉगिन यशस्वी!'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'mr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;