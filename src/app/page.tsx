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

  return (
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
  );
}
