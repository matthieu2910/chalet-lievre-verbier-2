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

export default function Home() {
  const galleryImages = getGalleryImages();
  const heroData = getHeroData();

  return (
    <main className="relative">
      <Header />
      <Hero heroData={heroData} />
      <About />
      <Amenities />
      <Gallery images={galleryImages} />
      <Bedrooms />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
