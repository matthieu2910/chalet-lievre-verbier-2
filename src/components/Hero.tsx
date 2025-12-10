"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2940&auto=format&fit=crop"
          alt="Luxury mountain view in Verbier"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-alpine-950/40 via-alpine-950/20 to-alpine-950/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold-300 text-sm md:text-base tracking-[0.3em] uppercase mb-6"
        >
          Verbier, Swiss Alps
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6 flex justify-center"
        >
          <Image
            src="/logo.png"
            alt="Chalet Lièvre Logo"
            width={500}
            height={400}
            className="w-auto h-auto max-w-[500px] max-h-[400px] object-contain drop-shadow-lg"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/80 text-lg md:text-xl lg:text-2xl font-light max-w-2xl mx-auto mb-12"
        >
          A stunning 4-bedroom alpine sanctuary where luxury meets the mountains
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-alpine-900 font-medium tracking-wider uppercase text-sm hover:bg-gold-100 transition-colors duration-300"
          >
            Book Your Stay
          </a>
          <a
            href="#gallery"
            className="px-8 py-4 border border-white/40 text-white font-medium tracking-wider uppercase text-sm hover:bg-white/10 transition-colors duration-300"
          >
            View Gallery
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.a>

      {/* Side Details */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 right-8 hidden md:flex flex-col items-end gap-1 text-white/60 text-sm"
      >
        <span>4 Bedrooms</span>
        <span>7 Guests</span>
        <span>110m²</span>
      </motion.div>
    </section>
  );
}
