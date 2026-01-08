"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { getGalleryImages, type GalleryImage } from "@/lib/gallery";

// Fallback images if no CMS images are available
const fallbackImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2787&auto=format&fit=crop",
    alt: "Luxurious living room with mountain views",
    span: "col-span-2 row-span-2",
    order: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2940&auto=format&fit=crop",
    alt: "Modern kitchen with premium finishes",
    span: "col-span-1 row-span-1",
    order: 2,
  },
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2874&auto=format&fit=crop",
    alt: "Elegant dining area",
    span: "col-span-1 row-span-1",
    order: 3,
  },
  {
    src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2880&auto=format&fit=crop",
    alt: "Master bedroom with cozy bedding",
    span: "col-span-1 row-span-1",
    order: 4,
  },
  {
    src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2787&auto=format&fit=crop",
    alt: "Spa-like bathroom",
    span: "col-span-1 row-span-1",
    order: 5,
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2940&auto=format&fit=crop",
    alt: "Stunning alpine mountain views",
    span: "col-span-2 row-span-1",
    order: 6,
  },
];

interface GalleryProps {
  images?: GalleryImage[];
}

export function Gallery({ images }: GalleryProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Use provided images, CMS images, or fallback
  const galleryImages = images && images.length > 0 
    ? images 
    : fallbackImages;

  const handlePrev = () => {
    setSelectedImage((prev) =>
      prev !== null ? (prev === 0 ? galleryImages.length - 1 : prev - 1) : null
    );
  };

  const handleNext = () => {
    setSelectedImage((prev) =>
      prev !== null ? (prev === galleryImages.length - 1 ? 0 : prev + 1) : null
    );
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // Minimum distance for a swipe

    if (distance > minSwipeDistance) {
      // Swipe left - next image
      handleNext();
    } else if (distance < -minSwipeDistance) {
      // Swipe right - previous image
      handlePrev();
    }

    // Reset
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id="gallery" ref={ref} className="section-padding bg-alpine-50">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-gold-600 tracking-[0.2em] uppercase text-sm mb-4">
            Visual Tour
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-alpine-900">
            Gallery
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        {galleryImages.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative image-hover cursor-pointer ${image.span}`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-alpine-950/0 hover:bg-alpine-950/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-alpine-600">No gallery images available.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-alpine-950/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation */}
            <button
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white active:text-white transition-colors z-10 p-2 md:p-0"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Image précédente"
            >
              <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            <button
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white active:text-white transition-colors z-10 p-2 md:p-0"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Image suivante"
            >
              <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
