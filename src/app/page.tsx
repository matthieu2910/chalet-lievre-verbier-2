import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Amenities } from "@/components/Amenities";
import { Gallery } from "@/components/Gallery";
import { Bedrooms } from "@/components/Bedrooms";
import { Location } from "@/components/Location";
import { Contact } from "@/components/Contact";
import { BookingCalendar } from "@/components/BookingCalendar";
import { Footer } from "@/components/Footer";
import { getGalleryImages } from "@/lib/gallery";
import { getHeroData } from "@/lib/hero";
import { getAboutData } from "@/lib/about";
import { getBedroomsData } from "@/lib/bedrooms";

export default function Home() {
  const galleryImages = getGalleryImages();
  const heroData = getHeroData();
  const aboutData = getAboutData();
  const bedroomsData = getBedroomsData();

  // Structured data for SEO - Rental Property
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Accommodation",
      "@id": "https://chalet-lievre-verbier.com/#accommodation",
      "name": "Chalet Lièvre - Location Appartement à Verbier",
      "description": "Louez un appartement de luxe à Verbier au Chalet Lièvre. Magnifique location de chalet de 110 m², 4 chambres avec vues panoramiques à 180° sur les montagnes. Parfait pour les vacances au ski et les aventures estivales.",
      "image": [
        "https://chalet-lievre-verbier.com/images/uploads/exterieur.jpg",
        "https://chalet-lievre-verbier.com/images/uploads/img-20251124-wa0007.jpg"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Verbier",
        "addressLocality": "Verbier",
        "addressRegion": "Valais",
        "addressCountry": "CH",
        "postalCode": "1936"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "46.1000",
        "longitude": "7.2333"
      },
      "numberOfRooms": "4",
      "numberOfBathroomsTotal": "2",
      "floorSize": {
        "@type": "QuantitativeValue",
        "value": "110",
        "unitCode": "MTK"
      },
      "occupancy": {
        "@type": "QuantitativeValue",
        "maxValue": "7"
      },
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "Vues panoramiques à 180°",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Parking privé",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Fireplace",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Cuisine entièrement équipée",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "WiFi",
          "value": true
        }
      ],
      "starRating": {
        "@type": "Rating",
        "ratingValue": "5"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Chalet Lièvre - Location Appartement à Verbier",
      "description": "Louez un appartement de luxe 4 chambres à Verbier. Location de chalet de 110 m² avec vues panoramiques sur les montagnes, parfait pour les vacances au ski.",
      "image": "https://chalet-lievre-verbier.com/images/uploads/exterieur.jpg",
      "brand": {
        "@type": "Brand",
        "name": "Chalet Lièvre"
      },
      "category": "Location de vacances",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "CHF",
        "url": "https://chalet-lievre-verbier.com",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "priceCurrency": "CHF",
          "unitCode": "DAY"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "1"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://chalet-lievre-verbier.com/#business",
      "name": "Chalet Lièvre",
      "description": "Location d'appartement et chalet de luxe à Verbier, Suisse",
      "image": "https://chalet-lievre-verbier.com/images/uploads/exterieur.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Verbier",
        "addressRegion": "Valais",
        "addressCountry": "CH",
        "postalCode": "1936"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "46.1000",
        "longitude": "7.2333"
      },
      "url": "https://chalet-lievre-verbier.com",
      "priceRange": "$$$",
      "telephone": "+41"
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="relative">
        <Header />
        <Hero heroData={heroData} />
        <About aboutData={aboutData} />
        <Amenities />
        <Gallery images={galleryImages} />
        <Bedrooms bedrooms={bedroomsData} />
        <Location />
        <Contact />
        <BookingCalendar />
        <Footer />
      </main>
    </>
  );
}
