// components/ui/tech-stack.tsx
"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Wrench,
  Sparkles,
  Cpu,
  Cloud,
  Shield,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const stacks = {
  Frontend: {
    icon: Code2,
    gradient: "from-[#ff6b6b] to-[#feca57]",
    bgGradient: "from-[#ff6b6b]/20 to-[#feca57]/20",
    color: "#ff6b6b",
    descriptionKey: "tech.frontendDesc",
    titleKey: "tech.frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Ant Design",
      "Framer Motion",
    ],
  },
  Backend: {
    icon: Server,
    gradient: "from-[#feca57] to-[#ff9f43]",
    bgGradient: "from-[#feca57]/20 to-[#ff9f43]/20",
    color: "#feca57",
    descriptionKey: "tech.backendDesc",
    titleKey: "tech.backend",
    items: [
      "Node.js",
      "Express.js",
      "Socket.io",
      "JWT",
      "REST APIs",
      "GraphQL",
    ],
  },
  Database: {
    icon: Database,
    gradient: "from-[#ff9f43] to-[#ff6b6b]",
    bgGradient: "from-[#ff9f43]/20 to-[#ff6b6b]/20",
    color: "#ff9f43",
    descriptionKey: "tech.databaseDesc",
    titleKey: "tech.database",
    items: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "Firebase",
      "Redis",
    ],
  },
  Tools: {
    icon: Wrench,
    gradient: "from-[#ff6b6b] to-[#ff9f43]",
    bgGradient: "from-[#ff6b6b]/20 to-[#ff9f43]/20",
    color: "#ff6b6b",
    descriptionKey: "tech.toolsDesc",
    titleKey: "tech.tools",
    items: ["Git", "GitHub", "Postman", "Docker", "Render", "Vercel", "AWS"],
  },
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function TechStack() {
  const { t } = useLanguage();

  const stats = [
    { label: t("tech.technologies"), value: "24+", icon: Cpu },
    { label: t("tech.yearsExp"), value: "2+", icon: Cloud },
    { label: t("tech.projects"), value: "8+", icon: Shield },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      {/* Animated background circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-[#ff6b6b]/10 to-[#feca57]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-[#feca57]/10 to-[#ff9f43]/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto relative z-10">
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
            {t("tech.title")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold gradient-text mb-4"
          >
            {t("tech.subtitle")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            {t("tech.description")}
          </motion.p>
        </motion.div>

        {/* Stats counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 mt-12 mb-12"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-6 py-3 rounded-full glass"
            >
              <stat.icon size={20} className="text-[#feca57]" />
              <div>
                <span className="text-white font-bold">{stat.value}</span>
                <span className="text-white/60 text-sm ml-1">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {Object.entries(stacks).map(
            (
              [
                title,
                {
                  icon: Icon,
                  gradient,
                  bgGradient,
                  color,
                  descriptionKey,
                  titleKey,
                  items,
                },
              ],
              idx,
            ) => (
              <motion.div
                key={title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-3xl opacity-0 group-hover:opacity-40 blur-xl transition duration-500`}
                />

                {/* Card content */}
                <div className="relative glass rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Animated gradient bar on top */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} bg-[length:200%_100%] animate-shimmer`}
                  />

                  {/* Decorative icon background */}
                  <div
                    className={`absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-r ${gradient} opacity-5 group-hover:opacity-15 transition duration-500`}
                  />

                  <div className="relative z-10">
                    {/* Icon with animated border */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${bgGradient} mb-4`}
                    >
                      <Icon size={28} style={{ color }} />
                    </motion.div>

                    {/* Title and description */}
                    <h3 className="text-xl font-bold text-white mb-1">
                      {t(titleKey)}
                    </h3>
                    <p className="text-xs text-white/50 mb-4">
                      {t(descriptionKey)}
                    </p>

                    {/* Tech items */}
                    <div className="flex flex-wrap gap-2">
                      {items.map((item, i) => (
                        <motion.span
                          key={item}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.03 }}
                          whileHover={{
                            scale: 1.08,
                            y: -2,
                            transition: { type: "spring", stiffness: 400 },
                          }}
                          className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-default
                          ${
                            idx === 0
                              ? "bg-gradient-to-r from-[#ff6b6b]/20 to-[#feca57]/20 text-[#feca57] hover:from-[#ff6b6b]/30 hover:to-[#feca57]/30"
                              : idx === 1
                                ? "bg-gradient-to-r from-[#feca57]/20 to-[#ff9f43]/20 text-[#ff9f43] hover:from-[#feca57]/30 hover:to-[#ff9f43]/30"
                                : idx === 2
                                  ? "bg-gradient-to-r from-[#ff9f43]/20 to-[#ff6b6b]/20 text-[#ff6b6b] hover:from-[#ff9f43]/30 hover:to-[#ff6b6b]/30"
                                  : "bg-gradient-to-r from-[#ff6b6b]/20 to-[#ff9f43]/20 text-[#feca57] hover:from-[#ff6b6b]/30 hover:to-[#ff9f43]/30"
                          }`}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}
