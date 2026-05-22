// components/ui/language-switcher.tsx
"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages, ChevronRight } from "lucide-react";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, x: 50, y: 50 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 300, delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b6b] to-[#feca57] rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />

      {/* Main button group */}
      <div className="relative glass rounded-full p-1 shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-0.5">
          {/* EN Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLanguage("en")}
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 overflow-hidden ${
              language === "en"
                ? "text-white shadow-lg"
                : "text-white/60 hover:text-white"
            }`}
          >
            {/* Active background */}
            {language === "en" && (
              <motion.div
                layoutId="activeLang"
                className="absolute inset-0 bg-gradient-to-r from-[#ff6b6b] to-[#feca57] rounded-full"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1">
              <span className="text-base">🇬🇧</span>
              <span className="hidden sm:inline">EN</span>
            </span>
          </motion.button>

          {/* VI Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLanguage("vi")}
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 overflow-hidden ${
              language === "vi"
                ? "text-white shadow-lg"
                : "text-white/60 hover:text-white"
            }`}
          >
            {/* Active background */}
            {language === "vi" && (
              <motion.div
                layoutId="activeLang"
                className="absolute inset-0 bg-gradient-to-r from-[#ff6b6b] to-[#feca57] rounded-full"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1">
              <span className="text-base">🇻🇳</span>
              <span className="hidden sm:inline">VI</span>
            </span>
          </motion.button>

          {/* Separator */}
          <div className="w-px h-5 bg-white/20 mx-1" />

          {/* Icon indicator */}
          <motion.div
            animate={{ rotate: language === "en" ? 0 : 180 }}
            transition={{ duration: 0.3 }}
            className="px-2 text-white/40"
          >
            <Languages size={16} />
          </motion.div>
        </div>
      </div>

      {/* Tooltip hint */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-full right-0 mb-2 px-2 py-1 text-xs text-white/40 whitespace-nowrap"
      >
        Switch language
      </motion.div>
    </motion.div>
  );
}
