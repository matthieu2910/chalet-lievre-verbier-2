export type Language = "fr" | "en";

export const translations = {
  fr: {
    // Header
    nav: {
      apartment: "L'Appartement",
      amenities: "Équipements",
      gallery: "Galerie",
      bedrooms: "Chambres",
      location: "Localisation",
      contact: "Réserver",
    },
    // Hero
    hero: {
      subtitle: "Verbier, Alpes Suisses",
      description: "Louez un appartement de luxe 4 chambres à Verbier. Un sanctuaire alpin où le luxe rencontre les montagnes",
      rentButton: "Réserver cet appartement",
      viewGallery: "Voir la galerie",
      bedrooms: "4 Chambres",
      guests: "7 Personnes",
    },
    // About
    about: {
      welcome: "Bienvenue",
      title: "Louez un chef-d'œuvre",
      titleItalic: "alpin",
      description1: "Louez le Chalet Lièvre, un magnifique appartement de 110 m² à Verbier, où le charme alpin rencontre le luxe contemporain. Ce chalet de location méticuleusement conçu avec 4 chambres et 2 salles de bain offre un espace de vie raffiné, parfait pour la détente et l'aventure.",
      description2: "Chaque détail a été soigneusement pensé—des fenêtres du sol au plafond qui encadrent des vues panoramiques sur les montagnes aux finitions premium qui ornent chaque surface. Que vous soyez attiré par le ski de classe mondiale ou les escapades estivales, cette location d'appartement à Verbier est votre sanctuaire dans les Alpes.",
      description3: "Commencez votre journée avec des levers de soleil époustouflants sur le Grand Combin, détendez-vous près de la cheminée après une journée sur les pistes, et imprégnez-vous de l'hospitalité légendaire de Verbier—le tout depuis le confort de votre havre alpin privé.",
      squareMeters: "Mètres carrés",
      bedroomsWithBeds: "Chambres avec lits queen",
      guests: "Personnes",
    },
    // Amenities
    amenities: {
      subtitle: "Équipements Premium",
      title: "Équipements &",
      titleItalic: "Services",
      items: {
        mountainViews: {
          title: "Vues sur les montagnes",
          description: "Vues panoramiques à 180° sur les Alpes suisses depuis chaque pièce",
        },
        fireplace: {
          title: "Cheminée",
          description: "Cheminée au bois chaleureuse dans le salon",
        },
        wifi: {
          title: "WiFi haute vitesse",
          description: "Internet fibre optique dans tout l'appartement",
        },
        parking: {
          title: "Parking privé",
          description: "Parking souterrain sécurisé pour un véhicule",
        },
        skiRoom: {
          title: "Local à skis",
          description: "Local à skis chauffé avec chauffe-bottes",
        },
        kitchen: {
          title: "Cuisine équipée",
          description: "Entièrement équipée avec des appareils premium",
        },
        entertainment: {
          title: "Divertissement",
          description: "TVs intelligentes, système audio Sonos dans tout l'appartement",
        },
        bathrooms: {
          title: "Salles de bain spa",
          description: "Salle de bain privative luxueuse avec douches à l'italienne",
        },
        nespresso: {
          title: "Nespresso",
          description: "Machine à café premium et sélection de thés",
        },
        laundry: {
          title: "Lave-linge",
          description: "Lave-linge et sèche-linge dans l'appartement",
        },
        climate: {
          title: "Climatisation",
          description: "Chauffage au sol et climatisation",
        },
      },
    },
    // Gallery
    gallery: {
      subtitle: "Visite virtuelle",
      title: "Galerie",
      noImages: "Aucune image de galerie disponible.",
      previousImage: "Image précédente",
      nextImage: "Image suivante",
    },
    // Bedrooms
    bedrooms: {
      subtitle: "Repos & Détente",
      title: "Les",
      titleItalic: "Chambres",
      description: "Quatre chambres magnifiquement aménagées, chacune conçue comme un havre de paix avec du linge de lit premium, des rideaux occultants et des touches attentionnées.",
      guests: "Personnes",
      ensuite: "Salle de bain privative",
      noBedrooms: "Aucune chambre disponible.",
    },
    // Location
    location: {
      subtitle: "Au cœur de Verbier, Savoleyres",
      title: "Emplacement",
      titleItalic: "Privilégié",
      description: "Le Chalet Lièvre bénéficie d'un emplacement privilégié dans l'un des quartiers les plus prestigieux de Verbier, proche du Chalet d'Adrien. À quelques pas de la télécabine Savoleyres—avec accès privé—et du centre animé du village, vous aurez un accès immédiat à tout ce que la station légendaire a à offrir, sans compromettre la tranquillité ou l'intimité.",
      distances: {
        savoleyres: "Télécabine Savoleyres",
        verbierCenter: "Centre de Verbier",
        genevaAirport: "Aéroport de Genève",
        leChable: "Gare du Châble",
      },
      walk: "à pied",
      drive: "en voiture",
      winter: "Hiver",
      summer: "Été",
      activities: {
        winter: [
          "Ski et snowboard de classe mondiale",
          "Aventures hors-piste",
          "Escalade sur glace",
          "Après-ski",
          "Spa & bien-être",
        ],
        summer: [
          "VTT",
          "Sentiers de randonnée",
          "Terrains de golf",
          "Parapente",
          "Gastronomie",
        ],
      },
      viewOnMaps: "Voir sur Google Maps",
    },
    // Contact
    contact: {
      subtitle: "Contactez-nous",
      title: "Réservez votre",
      titleItalic: "Évasion Alpine",
      description: "Prêt à découvrir la magie de Verbier depuis notre résidence de luxe ? Remplissez le formulaire de demande, et nous vous répondrons dans les 24 heures avec les disponibilités et tarifs adaptés à vos dates.",
      form: {
        fullName: "Nom complet",
        email: "Adresse e-mail",
        phone: "Numéro de téléphone",
        guests: "Nombre de personnes",
        dates: "Dates préférées",
        message: "Message",
        selectGuests: "Sélectionner le nombre",
        guestsOptions: {
          "1-2": "1-2 personnes",
          "3-4": "3-4 personnes",
          "5-6": "5-6 personnes",
          "7-8": "7-8 personnes",
        },
        datePlaceholder: "ex: 20-27 décembre 2024",
        messagePlaceholder: "Parlez-nous de vos projets de voyage, demandes spéciales ou questions...",
        send: "Envoyer la demande",
        namePlaceholder: "Jean Dupont",
        emailPlaceholder: "jean@exemple.com",
        phonePlaceholder: "+41 27 123 45 67",
      },
      success: {
        title: "Merci !",
        message: "Nous avons bien reçu votre demande et vous répondrons dans les 24 heures.",
      },
    },
    // Booking
    booking: {
      subtitle: "Disponibilités",
      title: "Réservez votre séjour",
      description: "Consultez les disponibilités et réservez directement via Airbnb pour les meilleurs tarifs et une confirmation instantanée.",
      bookNow: "Réserver maintenant sur Airbnb",
      bookDescription: "Cliquez sur le bouton ci-dessous pour accéder à notre page Airbnb, consulter le calendrier de disponibilités en temps réel, voir les tarifs et effectuer votre réservation en toute sécurité.",
      cta: "Voir les disponibilités et réserver",
      security: "Réservation sécurisée via Airbnb • Annulation flexible • Paiement sécurisé",
    },
    // Footer
    footer: {
      description: "Un appartement de luxe 4 chambres au cœur de Verbier, offrant des expériences alpines incomparables et un confort raffiné.",
      explore: "Explorer",
      contact: "Contact",
      rights: "Tous droits réservés",
      privacy: "Politique de confidentialité",
      terms: "Conditions générales",
    },
  },
  en: {
    // Header
    nav: {
      apartment: "L'Appartement",
      amenities: "Amenities",
      gallery: "Gallery",
      bedrooms: "Bedrooms",
      location: "Location",
      contact: "Inquire",
    },
    // Hero
    hero: {
      subtitle: "Verbier, Swiss Alps",
      description: "Rent a luxury 4-bedroom apartment in Verbier. Alpine sanctuary where luxury meets the mountains",
      rentButton: "Rent This Apartment",
      viewGallery: "View Gallery",
      bedrooms: "4 Bedrooms",
      guests: "7 Guests",
    },
    // About
    about: {
      welcome: "Welcome to",
      title: "Rent an Alpine",
      titleItalic: "Masterpiece",
      description1: "Rent Chalet Lièvre, a stunning 110 m² apartment for rent in Verbier, where alpine charm meets contemporary luxury. This meticulously designed 4-bedroom, 2-bathroom chalet rental offers a refined living space, perfect for both relaxation and adventure.",
      description2: "Every detail has been thoughtfully curated—from the floor-to-ceiling windows that frame panoramic mountain views to the premium finishes that adorn every surface. Whether you're drawn by world-class skiing or summer escapades, this Verbier apartment rental is your sanctuary in the Alps.",
      description3: "Begin your day with breathtaking sunrises over the Grand Combin, unwind by the fireplace after a day on the slopes, and immerse yourself in Verbier's legendary hospitality—all from the comfort of your private alpine haven.",
      squareMeters: "Square Meters",
      bedroomsWithBeds: "Bedrooms with queen size beds",
      guests: "Guests",
    },
    // Amenities
    amenities: {
      subtitle: "Premium Features",
      title: "Amenities &",
      titleItalic: "Services",
      items: {
        mountainViews: {
          title: "Mountain Views",
          description: "Panoramic 180deg views of the Swiss Alps from every room",
        },
        fireplace: {
          title: "Fireplace",
          description: "Cozy wood-burning fireplace in the living area",
        },
        wifi: {
          title: "High-Speed WiFi",
          description: "Fiber optic internet throughout the apartment",
        },
        parking: {
          title: "Private Parking",
          description: "Secure underground parking for one vehicle",
        },
        skiRoom: {
          title: "Ski Room",
          description: "Heated ski room with boot warmers",
        },
        kitchen: {
          title: "Gourmet Kitchen",
          description: "Fully equipped with premium appliances",
        },
        entertainment: {
          title: "Entertainment",
          description: "Smart TVs, Sonos sound system throughout",
        },
        bathrooms: {
          title: "Spa Bathrooms",
          description: "Luxurious en-suite with rain showers",
        },
        nespresso: {
          title: "Nespresso",
          description: "Premium coffee machine and tea selection",
        },
        laundry: {
          title: "Laundry",
          description: "In-unit washer and dryer",
        },
        climate: {
          title: "Climate Control",
          description: "Underfloor heating and air conditioning",
        },
      },
    },
    // Gallery
    gallery: {
      subtitle: "Visual Tour",
      title: "Gallery",
      noImages: "No gallery images available.",
      previousImage: "Previous image",
      nextImage: "Next image",
    },
    // Bedrooms
    bedrooms: {
      subtitle: "Rest & Retreat",
      title: "The",
      titleItalic: "Bedrooms",
      description: "Four beautifully appointed bedrooms, each designed as a peaceful haven with premium linens, blackout curtains, and thoughtful touches.",
      guests: "Guests",
      ensuite: "En-suite",
      noBedrooms: "No bedrooms available.",
    },
    // Location
    location: {
      subtitle: "At the Heart of Verbier, Savoleyres",
      title: "Prime",
      titleItalic: "Location",
      description: "Chalet Lièvre enjoys a prime location in one of Verbier's most prestigious neighborhoods, close to Chalet d'Adrien. Just steps from the Savoleyres lift—with private access—and the lively village center, you'll have immediate access to all the legendary resort has to offer, without compromising on tranquility or privacy.",
      distances: {
        savoleyres: "Savoleyres lift",
        verbierCenter: "Verbier Village Center",
        genevaAirport: "Geneva Airport",
        leChable: "Le Châble Train Station",
      },
      walk: "walk",
      drive: "drive",
      winter: "Winter",
      summer: "Summer",
      activities: {
        winter: [
          "World-class skiing & snowboarding",
          "Off-piste adventures",
          "Ice climbing",
          "après-ski",
          "Spa & wellness",
        ],
        summer: [
          "Mountain biking",
          "Hiking trails",
          "Golf courses",
          "Paragliding",
          "Fine dining",
        ],
      },
      viewOnMaps: "View on Google Maps",
    },
    // Contact
    contact: {
      subtitle: "Get in Touch",
      title: "Book Your",
      titleItalic: "Alpine Escape",
      description: "Ready to experience the magic of Verbier from our luxury residence? Fill out the inquiry form, and we'll get back to you within 24 hours with availability and pricing tailored to your dates.",
      form: {
        fullName: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        guests: "Number of Guests",
        dates: "Preferred Dates",
        message: "Message",
        selectGuests: "Select guests",
        guestsOptions: {
          "1-2": "1-2 guests",
          "3-4": "3-4 guests",
          "5-6": "5-6 guests",
          "7-8": "7-8 guests",
        },
        datePlaceholder: "e.g., Dec 20-27, 2024",
        messagePlaceholder: "Tell us about your trip plans, special requests, or questions...",
        send: "Send Inquiry",
        namePlaceholder: "John Smith",
        emailPlaceholder: "john@example.com",
        phonePlaceholder: "+1 234 567 890",
      },
      success: {
        title: "Thank You!",
        message: "We've received your inquiry and will respond within 24 hours.",
      },
    },
    // Booking
    booking: {
      subtitle: "Check Availability",
      title: "Book Your Stay",
      description: "Check our availability calendar and book directly through Airbnb for the best rates and instant confirmation.",
      bookNow: "Book now on Airbnb",
      bookDescription: "Click the button below to access our Airbnb page, view the real-time availability calendar, see rates and make your reservation securely.",
      cta: "View availability and book",
      security: "Secure booking via Airbnb • Flexible cancellation • Secure payment",
    },
    // Footer
    footer: {
      description: "A luxury 4-bedroom apartment in the heart of Verbier, offering unparalleled alpine experiences and refined comfort.",
      explore: "Explore",
      contact: "Contact",
      rights: "All rights reserved",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
    },
  },
};

