import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Amenities } from "@/components/Amenities";
import { Gallery } from "@/components/Gallery";
import { Bedrooms } from "@/components/Bedrooms";
import { Location } from "@/components/Location";
import { Contact } from "@/components/Contact";
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
      "name": "Chalet Lièvre - Rent Apartment in Verbier",
      "description": "Rent a luxury apartment in Verbier at Chalet Lièvre. Stunning 110 m², 4-bedroom chalet rental with panoramic 180° mountain views. Perfect for ski holidays and summer adventures.",
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
          "name": "Panoramic 180deg views",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Private parking",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Fireplace",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Fully equipped kitchen",
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
      "name": "Chalet Lièvre - Verbier Apartment Rental",
      "description": "Rent a luxury 4-bedroom apartment in Verbier. 110 m² chalet rental with panoramic mountain views, perfect for ski holidays.",
      "image": "https://chalet-lievre-verbier.com/images/uploads/exterieur.jpg",
      "brand": {
        "@type": "Brand",
        "name": "Chalet Lièvre"
      },
      "category": "Vacation Rental",
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
      "description": "Luxury apartment and chalet rental in Verbier, Switzerland",
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
        <Footer />
      </main>
    </>
  );
}
