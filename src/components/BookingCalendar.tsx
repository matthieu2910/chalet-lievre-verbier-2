"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function BookingCalendar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Extract the listing ID from the Airbnb URL
  const listingId = "1551342108913458049";
  const airbnbUrl = `https://www.airbnb.fr/rooms/${listingId}`;

  return (
    <section id="booking" ref={ref} className="section-padding bg-alpine-50">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-gold-600 tracking-[0.2em] uppercase text-sm mb-4">
            Disponibilités
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-alpine-900 mb-6">
            Réservez votre séjour
          </h2>
          <p className="text-alpine-600 max-w-2xl mx-auto">
            Consultez notre calendrier de disponibilités et réservez directement via Airbnb pour
            les meilleurs tarifs et une confirmation instantanée.
          </p>
        </motion.div>

        {/* Airbnb Calendar Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white border border-alpine-200 rounded-lg overflow-hidden shadow-lg p-4">
            <iframe
              src={`https://www.airbnb.fr/rooms/${listingId}/embed?check_in=&check_out=&adults=1&children=0&infants=0`}
              width="100%"
              height="650"
              frameBorder="0"
              allowTransparency={true}
              className="w-full"
              title="Airbnb Booking Calendar"
              style={{ minHeight: "650px", display: "block" }}
              allow="payment"
            />
          </div>

          {/* Direct Link */}
          <div className="text-center mt-8">
            <a
              href={airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-alpine-900 text-white font-medium tracking-wider uppercase text-sm hover:bg-alpine-800 transition-colors"
            >
              Réserver sur Airbnb
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
