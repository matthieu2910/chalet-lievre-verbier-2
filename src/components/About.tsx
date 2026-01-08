"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import type { AboutData } from "@/lib/about";
import { useLanguage } from "@/contexts/LanguageContext";

interface AboutProps {
  aboutData?: AboutData | null;
}

const defaultAboutImage = "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2787&auto=format&fit=crop";
const defaultAboutAlt = "Luxury chalet living room with fireplace";

export function About({ aboutData }: AboutProps) {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const aboutImage = aboutData?.image || defaultAboutImage;
  const aboutAlt = aboutData?.alt || defaultAboutAlt;

  // Debug: log the image path
  if (typeof window !== 'undefined' && aboutData) {
    console.log('About image path:', aboutImage);
  }

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding bg-alpine-50 overflow-hidden"
    >
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] image-hover">
              <Image
                src={aboutImage}
                alt={aboutAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                onError={(e) => {
                  console.error('About image failed to load:', aboutImage);
                }}
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold-300 -z-10 hidden md:block" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gold-600 tracking-[0.2em] uppercase text-sm mb-4">
              {t.about.welcome}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-alpine-900 mb-8 leading-tight">
              {t.about.title}
              <br />
              <span className="italic font-light">{t.about.titleItalic}</span>
            </h2>
            <div className="space-y-6 text-alpine-700 leading-relaxed">
              <p>{t.about.description1}</p>
              <p>{t.about.description2}</p>
              <p>{t.about.description3}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-alpine-200">
              <div>
                <span className="font-serif text-4xl text-alpine-900">110</span>
                <p className="text-alpine-500 text-sm mt-1">{t.about.squareMeters}</p>
              </div>
              <div>
                <span className="font-serif text-4xl text-alpine-900">4</span>
                <p className="text-alpine-500 text-sm mt-1">{t.about.bedroomsWithBeds}</p>
              </div>
              <div>
                <span className="font-serif text-4xl text-alpine-900">7</span>
                <p className="text-alpine-500 text-sm mt-1">{t.about.guests}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
