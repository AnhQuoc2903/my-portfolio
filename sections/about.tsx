// sections/about.tsx
"use client";

import { motion } from "framer-motion";
import {
  Award,
  Code2,
  Users,
  TrendingUp,
  Rocket,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Code2,
      label: t("about.projects"),
      value: "8+",
      color: "#ff6b6b",
      delay: 0.1,
    },
    {
      icon: Users,
      label: t("about.clients"),
      value: "5+",
      color: "#feca57",
      delay: 0.2,
    },
    {
      icon: TrendingUp,
      label: t("about.commits"),
      value: "500+",
      color: "#ff9f43",
      delay: 0.3,
    },
    {
      icon: Rocket,
      label: t("about.experience"),
      value: "over 1 year",
      color: "#ff6b6b",
      delay: 0.4,
    },
  ];

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass text-white/90 text-sm font-semibold mb-4">
            <Sparkles size={16} className="text-[#feca57]" />
            {t("about.title")}
          </span>
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            {t("about.subtitle")}
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
            {t("about.description")}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: stat.delay, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-2xl glass hover:bg-white/10 transition-all duration-300"
            >
              <div
                className="inline-flex p-3 rounded-xl mb-4"
                style={{ background: `${stat.color}20` }}
              >
                <stat.icon style={{ color: stat.color }} size={28} />
              </div>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-white/60 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 p-8 rounded-3xl glass hover:bg-white/10 transition-all duration-300"
        >
          <h3 className="text-2xl font-semibold text-center mb-6 text-white">
            🎓 {t("about.education")}
          </h3>
          <div className="text-center">
            <p className="text-xl font-medium text-white">
              {t("about.university")}
            </p>
            <p className="text-white/70 mt-1">{t("about.major")}</p>
            <a
              href="https://drive.google.com/file/d/1AZl5hLA6leawrloXH5RT51S78SHm6sy9/view?pli=1" // Thay link của bạn vào đây
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#ff6b6b]/20 to-[#feca57]/20 border border-white/20 hover:from-[#ff6b6b]/30 hover:to-[#feca57]/30 transition-all duration-300"
            >
              <Award size={16} className="text-[#feca57]" />
              <span className="text-sm text-white/90 font-medium">
                🏆 {t("about.award")}
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
