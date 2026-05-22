// components/ui/hero.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const [particles, setParticles] = useState<
    Array<{ left: string; delay: number; duration: number; initialY: number }>
  >([]);

  const [floatingIcons, setFloatingIcons] = useState<
    Array<{
      icon: string;
      left: string;
      startX: number;
      startY: number;
      duration: number;
      delay: number;
    }>
  >([]);

  useEffect(() => {
    // Tạo particles
    const newParticles = [...Array(30)].map(() => ({
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: Math.random() * 5 + 3,
      initialY:
        Math.random() *
        (typeof window !== "undefined" ? window.innerHeight : 800),
    }));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(newParticles);

    // Tạo floating icons với giá trị random
    const techIcons = [
      "⚛️",
      "▲",
      "💚",
      "🍃",
      "🔌",
      "📘",
      "🎨",
      "🚀",
      "🐘",
      "💿",
    ];
    const newFloatingIcons = techIcons.map(() => ({
      icon: techIcons[Math.floor(Math.random() * techIcons.length)],
      left: `${Math.random() * 100}%`,
      startX:
        Math.random() *
        (typeof window !== "undefined" ? window.innerWidth : 1000),
      startY:
        Math.random() *
        (typeof window !== "undefined" ? window.innerHeight : 800),
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 5,
    }));
    setFloatingIcons(newFloatingIcons);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-linear-to-r from-[#ff6b6b] to-secondary rounded-full"
            initial={{
              y: particle.initialY,
              opacity: 0,
            }}
            animate={{
              y: [null, -150, -300],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
            style={{
              left: particle.left,
            }}
          />
        ))}
      </div>

      {/* Floating tech icons decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-10"
            initial={{
              x: icon.startX,
              y: icon.startY,
            }}
            animate={{
              y: [null, -80, -160],
              opacity: [0.05, 0.15, 0],
            }}
            transition={{
              duration: icon.duration,
              repeat: Infinity,
              delay: icon.delay,
            }}
            style={{
              left: icon.left,
            }}
          >
            {icon.icon}
          </motion.div>
        ))}
      </div>

      {/* Gradient orbs - Sunset colors với glow effect */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-linear-to-r from-[#ff6b6b] to-secondary rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-linear-to-r from-secondary to-accent rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-linear-to-r from-[#ff6b6b] to-accent rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse delay-700" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="text-sm text-slate-300">
                ✨ {t("hero.open")}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-linear-to-r from-[#ff6b6b] to-secondary text-white text-sm font-semibold mb-4"
            >
              <Sparkles size={14} />
              {t("hero.title")}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]"
            >
              <span className="gradient-text">{t("hero.name")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-6 text-slate-300 text-lg max-w-2xl mx-auto lg:mx-0 leading-8"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8 flex items-center justify-center lg:justify-start gap-4 flex-wrap"
            >
              <a
                href="#projects"
                className="group relative px-8 py-3 rounded-2xl bg-linear-to-r from-[#ff6b6b] to-secondary text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6b6b]/25"
              >
                {t("hero.viewProjects")}
                <ArrowDown
                  className="inline ml-2 group-hover:translate-y-1 transition-transform"
                  size={18}
                />
              </a>

              <a
                href="/cv.pdf"
                className="px-8 py-3 rounded-2xl glass text-slate-200 font-semibold transition-all duration-300 hover:scale-105 hover:bg-white/10 flex items-center gap-2"
              >
                <Download size={18} />
                {t("hero.downloadCV")}
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-8 flex items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="https://github.com/AnhQuoc2903"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-white/10 transition-all duration-300 hover:scale-110"
              ></a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-white/10 transition-all duration-300 hover:scale-110"
              ></a>
              <a
                href="mailto:quocna.work@gmail.com"
                className="p-2 rounded-full glass hover:bg-white/10 transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} className="text-slate-300 hover:text-white" />
              </a>
            </motion.div>
          </div>

          {/* Right side - Avatar Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
            className="flex-1 flex justify-center"
          >
            <div className="relative group">
              {/* Animated ring around avatar */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#ff6b6b] via-[#feca57] to-[#ff9f43] rounded-full opacity-75 group-hover:opacity-100 blur-2xl transition duration-500 animate-spin-slow" />

              {/* Avatar image with floating animation */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl animate-float">
                <Image
                  src="/images/avatar.jpg"
                  alt={t("hero.name")}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Decorative dots */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-[#feca57] to-[#ff9f43] rounded-full opacity-60 animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-[#ff6b6b] to-[#feca57] rounded-full opacity-60 animate-pulse delay-700" />

              {/* Online status badge */}
              <div className="absolute bottom-4 right-4 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-16 flex items-center justify-center gap-3 flex-wrap"
        >
          {[
            "React.js",
            "Next.js",
            "Node.js",
            "MongoDB",
            "Socket.io",
            "TypeScript",
            "TailwindCSS",
            "Express.js",
          ].map((tech, idx) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + idx * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-4 py-2 rounded-full glass text-sm text-slate-300 hover:text-white transition-all duration-300 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
