// sections/contact.tsx
"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      {/* Animated background orbs */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-r from-[#ff6b6b]/10 to-[#feca57]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-[#feca57]/10 to-[#ff9f43]/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass text-white/90 text-sm font-semibold mb-4"
          >
            <Sparkles size={16} className="text-[#feca57]" />
            {t("contact.subtitle")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold gradient-text mb-4"
          >
            {t("contact.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            {t("contact.description")}
          </motion.p>
        </motion.div>

        {/* Main Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-16"
        >
          <div className="group relative">
            {/* Glow effect on hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff6b6b] via-[#feca57] to-[#ff9f43] rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition duration-500" />

            {/* Card content */}
            <div className="relative glass rounded-3xl p-8 md:p-12 hover:bg-white/10 transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left side - Contact Info */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <MessageCircle size={20} className="text-[#feca57]" />
                    Contact Information
                  </h3>

                  {/* Email */}
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="group/contact flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-r from-[#ff6b6b]/20 to-[#feca57]/20 group-hover/contact:scale-110 transition-transform duration-300">
                      <Mail className="text-[#feca57]" size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-wider">
                        {t("contact.email")}
                      </p>
                      <p className="text-white font-medium">
                        quocna.work@gmail.com
                      </p>
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="group/contact flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-r from-[#feca57]/20 to-[#ff9f43]/20 group-hover/contact:scale-110 transition-transform duration-300">
                      <Phone className="text-[#ff9f43]" size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-wider">
                        {t("contact.phone")}
                      </p>
                      <p className="text-white font-medium">0329 555 190</p>
                    </div>
                  </motion.div>

                  {/* Location */}
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="group/contact flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-r from-[#ff9f43]/20 to-[#ff6b6b]/20 group-hover/contact:scale-110 transition-transform duration-300">
                      <MapPin className="text-[#ff6b6b]" size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-wider">
                        {t("contact.location")}
                      </p>
                      <p className="text-white font-medium">
                        Kien Giang City, Vietnam
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Right side - Social & CTA */}
                <div className="flex flex-col justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                      <Sparkles size={20} className="text-[#feca57]" />
                      Connect With Me
                    </h3>

                    {/* Social Links - Chỉ còn GitHub */}
                    <div>
                      <motion.a
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://github.com/AnhQuoc2903"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl glass hover:bg-white/20 transition-all duration-300 text-white font-medium"
                      >
                        GitHub
                      </motion.a>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-4">
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="mailto:quocna.work@gmail.com"
                      className="group relative w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#ff6b6b] to-[#feca57] text-white font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-[#ff6b6b]/25 overflow-hidden"
                    >
                      {/* Animated background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#feca57] to-[#ff9f43] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10 flex items-center gap-2">
                        <Send
                          size={18}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                        {t("contact.sendEmail")}
                      </span>
                    </motion.a>

                    <p className="text-center text-xs text-white/40 mt-4">
                      Usually responds within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Decorative footer text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-white/30 text-sm flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-white/20"></span>
            Available for freelance work
            <span className="w-8 h-px bg-white/20"></span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
