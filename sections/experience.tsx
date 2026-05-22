// sections/experience.tsx
"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const experiences = [
  {
    company: "Meta Art Company",
    roleKey: "exp.roleFullstack",
    period: "07/2025 - Present",
    locationKey: "exp.locationRemote",
    descriptionKeys: [
      "exp.metaDesc1",
      "exp.metaDesc2",
      "exp.metaDesc3",
      "exp.metaDesc4",
      "exp.metaDesc5",
      "exp.metaDesc6",
      "exp.metaDesc7",
    ],
  },
  {
    company: "Nam Phuong So Company",
    roleKey: "exp.roleFrontend",
    period: "11/2024 - 06/2025",
    locationKey: "exp.locationVietnam",
    descriptionKeys: [
      "exp.namDesc1",
      "exp.namDesc2",
      "exp.namDesc3",
      "exp.namDesc4",
      "exp.namDesc5",
    ],
  },
  {
    company: "UTA Company",
    roleKey: "exp.roleIntern",
    period: "05/2023 - 08/2023",
    locationKey: "exp.locationVietnam",
    descriptionKeys: [
      "exp.utaDesc1",
      "exp.utaDesc2",
      "exp.utaDesc3",
      "exp.utaDesc4",
    ],
  },
];

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass text-white/90 text-sm font-semibold mb-4">
            <Briefcase size={16} className="text-[#feca57]" />
            {t("exp.title")}
          </span>
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            {t("exp.subtitle")}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t("exp.description")}
          </p>
        </motion.div>

        <div className="mt-20 space-y-8">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ x: 10 }}
              className="group relative glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff6b6b] via-[#feca57] to-[#ff9f43] rounded-l-2xl" />

              <div className="pl-6">
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white group-hover:gradient-text transition-all">
                      {item.company}
                    </h3>
                    <p className="mt-2 text-[#feca57] font-medium">
                      {t(item.roleKey)}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Calendar size={14} />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <MapPin size={14} />
                      <span>{t(item.locationKey)}</span>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-2">
                  {item.descriptionKeys.map((descKey, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      className="text-slate-400 text-sm flex items-start gap-2"
                    >
                      <span className="text-[#ff6b6b] mt-1">▹</span>
                      {t(descKey)}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
