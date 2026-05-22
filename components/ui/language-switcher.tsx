// components/ui/language-switcher.tsx
"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="glass rounded-full p-1.5 shadow-lg">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setLanguage("en")}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
              language === "en"
                ? "bg-gradient-to-r from-[#ff6b6b] to-[#feca57] text-white shadow-md"
                : "text-white/60 hover:text-white hover:bg-white/10"
            }`}
          >
            🇬🇧 EN
          </button>
          <button
            onClick={() => setLanguage("vi")}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
              language === "vi"
                ? "bg-gradient-to-r from-[#ff6b6b] to-[#feca57] text-white shadow-md"
                : "text-white/60 hover:text-white hover:bg-white/10"
            }`}
          >
            🇻🇳 VI
          </button>
        </div>
      </div>
    </motion.div>
  );
}
