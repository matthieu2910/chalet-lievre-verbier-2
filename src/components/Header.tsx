"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: t.nav.apartment },
    { href: "#amenities", label: t.nav.amenities },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#bedrooms", label: t.nav.bedrooms },
    { href: "#location", label: t.nav.location },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-alpine-50/95 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container-wide flex items-center justify-between px-6 md:px-12 lg:px-20">
          {/* Logo */}
          <a
            href="#"
            className={`font-serif text-2xl md:text-3xl font-medium tracking-wide transition-colors ${
              isScrolled ? "text-alpine-900" : "text-white"
            }`}
          >
            Chalet Lièvre
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wider uppercase transition-colors hover:text-gold-600 ${
                  isScrolled ? "text-alpine-700" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
            
            {/* Language Selector */}
            <div className="flex items-center gap-2 ml-4">
              <Globe className={`w-4 h-4 ${isScrolled ? "text-alpine-700" : "text-white/90"}`} />
              <button
                onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
                className={`text-sm font-medium tracking-wider uppercase transition-colors hover:text-gold-600 ${
                  isScrolled ? "text-alpine-700" : "text-white/90"
                }`}
                aria-label="Changer la langue"
              >
                {language === "fr" ? "EN" : "FR"}
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? "text-alpine-900" : "text-white"
            }`}
            aria-label="Ouvrir le menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-alpine-950/95 backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6">
                <span className="font-serif text-2xl text-white">
                  Chalet Lièvre
                </span>
                <div className="flex items-center gap-4">
                  {/* Language Selector Mobile */}
                  <button
                    onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
                    aria-label="Changer la langue"
                  >
                    <Globe className="w-5 h-5" />
                    <span className="text-sm uppercase">{language === "fr" ? "EN" : "FR"}</span>
                  </button>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-white"
                    aria-label="Fermer le menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <nav className="flex flex-col items-center justify-center flex-1 gap-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-3xl text-white hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
