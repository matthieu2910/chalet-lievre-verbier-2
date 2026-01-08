"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function BookingCalendar() {
  const { t } = useLanguage();
  // Extract the listing ID from the Airbnb URL
  const listingId = "1551342108913458049";
  const airbnbUrl = `https://www.airbnb.fr/rooms/${listingId}`;

  return (
    <section id="booking" className="section-padding bg-alpine-50">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold-600 tracking-[0.2em] uppercase text-sm mb-4">
            {t.booking.subtitle}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-alpine-900 mb-6">
            {t.booking.title}
          </h2>
          <p className="text-alpine-600 max-w-2xl mx-auto">
            {t.booking.description}
          </p>
        </div>

        {/* Booking Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-alpine-200 rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 md:p-12 text-center">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gold-100 rounded-full mb-6">
                  <svg
                    className="w-10 h-10 text-gold-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-alpine-900 mb-4">
                  {t.booking.bookNow}
                </h3>
                <p className="text-alpine-600 mb-8 max-w-lg mx-auto">
                  {t.booking.bookDescription}
                </p>
              </div>

              {/* CTA Button */}
              <a
                href={airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-alpine-900 text-white font-medium tracking-wider uppercase text-base hover:bg-alpine-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl rounded"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                {t.booking.cta}
              </a>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-alpine-200">
                <p className="text-alpine-500 text-sm">
                  {t.booking.security}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
