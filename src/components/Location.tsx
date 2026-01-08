"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Mountain, Clock, Plane, Train, Car } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const distanceIcons = [Mountain, MapPin, Plane, Train];
const distanceKeys = ["savoleyres", "verbierCenter", "genevaAirport", "leChable"] as const;

export function Location() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const distances = distanceKeys.map((key, index) => {
    let distance = "";
    if (key === "savoleyres") {
      distance = `3-5 min ${t.location.walk}`;
    } else if (key === "verbierCenter") {
      distance = `10 min ${t.location.walk}`;
    } else if (key === "genevaAirport") {
      distance = "2 hours";
    } else {
      distance = `10 min ${t.location.drive}`;
    }
    return {
      icon: distanceIcons[index],
      name: t.location.distances[key],
      distance,
    };
  });

  return (
    <section id="location" ref={ref} className="section-padding bg-alpine-900">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold-400 tracking-[0.2em] uppercase text-sm mb-4">
              {t.location.subtitle}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              {t.location.title} <span className="italic font-light">{t.location.titleItalic}</span>
            </h2>
            <p className="text-alpine-300 leading-relaxed mb-8">
              {t.location.description}
            </p>

            {/* Distances */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              {distances.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-alpine-800/50 border border-alpine-700"
                >
                  <item.icon className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white text-sm font-medium">{item.name}</p>
                    <p className="text-alpine-400 text-xs">{item.distance}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Activities */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-xl text-white mb-4">
                  {t.location.winter}
                </h3>
                <ul className="space-y-2">
                  {t.location.activities.winter.map((item) => (
                    <li
                      key={item}
                      className="text-alpine-300 text-sm flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-gold-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-xl text-white mb-4">
                  {t.location.summer}
                </h3>
                <ul className="space-y-2">
                  {t.location.activities.summer.map((item) => (
                    <li
                      key={item}
                      className="text-alpine-300 text-sm flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-gold-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right: Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full"
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] bg-alpine-800 border border-alpine-700 flex items-center justify-center overflow-hidden rounded-sm">
              {/* Stylized Map Placeholder */}
              <div className="text-center p-4 sm:p-6 md:p-8 w-full h-full flex flex-col items-center justify-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-gold-600/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-gold-400" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-white mb-2">
                  Verbier, Switzerland
                </h3>
                <p className="text-alpine-400 text-xs sm:text-sm mb-4 sm:mb-6">
                  1936m altitude Valais Canton
                </p>
                <a
                  href="https://maps.google.com/?q=Verbier,Switzerland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gold-600 text-white text-xs sm:text-sm font-medium tracking-wider uppercase hover:bg-gold-500 transition-colors rounded"
                >
                  {t.location.viewOnMaps}
                </a>
              </div>
            </div>

            {/* Decorative Border */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-gold-600/30 -z-10 hidden lg:block pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
