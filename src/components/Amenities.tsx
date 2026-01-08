"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mountain,
  Flame,
  Wifi,
  Car,
  Snowflake,
  UtensilsCrossed,
  Tv,
  ShowerHead,
  Coffee,
  WashingMachine,
  Thermometer,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const amenityIcons = [
  Mountain,
  Flame,
  Wifi,
  Car,
  Snowflake,
  UtensilsCrossed,
  Tv,
  ShowerHead,
  Coffee,
  WashingMachine,
  Thermometer,
];

const amenityKeys = [
  "mountainViews",
  "fireplace",
  "wifi",
  "parking",
  "skiRoom",
  "kitchen",
  "entertainment",
  "bathrooms",
  "nespresso",
  "laundry",
  "climate",
] as const;

export function Amenities() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const amenities = amenityKeys.map((key, index) => ({
    icon: amenityIcons[index],
    ...t.amenities.items[key],
  }));

  return (
    <section
      id="amenities"
      ref={ref}
      className="section-padding bg-alpine-100/50"
    >
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-gold-600 tracking-[0.2em] uppercase text-sm mb-4">
            {t.amenities.subtitle}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-alpine-900">
            {t.amenities.title} <span className="italic font-light">{t.amenities.titleItalic}</span>
          </h2>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group p-6 bg-white hover:bg-alpine-50 transition-colors duration-300 border border-alpine-200"
            >
              <amenity.icon className="w-8 h-8 text-gold-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-serif text-lg text-alpine-900 mb-2">
                {amenity.title}
              </h3>
              <p className="text-alpine-600 text-sm leading-relaxed">
                {amenity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
