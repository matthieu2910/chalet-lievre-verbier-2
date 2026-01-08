"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Send, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    guests: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Submit to Netlify Forms
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('form-name', 'contact');
    formDataToSubmit.append('name', formData.name);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('phone', formData.phone);
    formDataToSubmit.append('dates', formData.dates);
    formDataToSubmit.append('guests', formData.guests);
    formDataToSubmit.append('message', formData.message);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSubmit as any).toString(),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Still show success message to user
      setIsSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={ref} className="section-padding bg-alpine-50">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold-600 tracking-[0.2em] uppercase text-sm mb-4">
              {t.contact.subtitle}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-alpine-900 mb-8">
              {t.contact.title}
              <br />
              <span className="italic font-light">{t.contact.titleItalic}</span>
            </h2>
            <p className="text-alpine-600 leading-relaxed mb-12">
              {t.contact.description}
            </p>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {isSubmitted ? (
              <div className="h-full flex items-center justify-center bg-alpine-100 p-12 text-center">
                <div>
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-serif text-2xl text-alpine-900 mb-4">
                    {t.contact.success.title}
                  </h3>
                  <p className="text-alpine-600">
                    {t.contact.success.message}
                  </p>
                </div>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="bg-white border border-alpine-200 p-8 md:p-10"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-alpine-700 text-sm mb-2"
                    >
                      {t.contact.form.fullName} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-alpine-200 bg-alpine-50 text-alpine-900 focus:outline-none focus:border-gold-400 transition-colors"
                      placeholder={t.contact.form.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-alpine-700 text-sm mb-2"
                    >
                      {t.contact.form.email} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-alpine-200 bg-alpine-50 text-alpine-900 focus:outline-none focus:border-gold-400 transition-colors"
                      placeholder={t.contact.form.emailPlaceholder}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-alpine-700 text-sm mb-2"
                    >
                      {t.contact.form.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-alpine-200 bg-alpine-50 text-alpine-900 focus:outline-none focus:border-gold-400 transition-colors"
                      placeholder={t.contact.form.phonePlaceholder}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="guests"
                      className="block text-alpine-700 text-sm mb-2"
                    >
                      {t.contact.form.guests} *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      required
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-alpine-200 bg-alpine-50 text-alpine-900 focus:outline-none focus:border-gold-400 transition-colors"
                    >
                      <option value="">{t.contact.form.selectGuests}</option>
                      <option value="1-2">{t.contact.form.guestsOptions["1-2"]}</option>
                      <option value="3-4">{t.contact.form.guestsOptions["3-4"]}</option>
                      <option value="5-6">{t.contact.form.guestsOptions["5-6"]}</option>
                      <option value="7-8">{t.contact.form.guestsOptions["7-8"]}</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="dates"
                    className="block text-alpine-700 text-sm mb-2"
                  >
                    {t.contact.form.dates} *
                  </label>
                  <input
                    type="text"
                    id="dates"
                    name="dates"
                    required
                    value={formData.dates}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-alpine-200 bg-alpine-50 text-alpine-900 focus:outline-none focus:border-gold-400 transition-colors"
                    placeholder={t.contact.form.datePlaceholder}
                  />
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="message"
                    className="block text-alpine-700 text-sm mb-2"
                  >
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-alpine-200 bg-alpine-50 text-alpine-900 focus:outline-none focus:border-gold-400 transition-colors resize-none"
                    placeholder={t.contact.form.messagePlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-alpine-900 text-white font-medium tracking-wider uppercase text-sm hover:bg-alpine-800 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  {t.contact.form.send}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
