// components/ui/project-card.tsx
"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star, GitBranch } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type Props = {
  title: string;
  description?: string;
  descriptionKey?: string;
  stack: string[];
  gradient?: string;
  demoLink?: string;
  githubFrontend?: string;
  githubBackend?: string;
  githubMobile?: string;
};

export default function ProjectCard({
  title,
  description,
  descriptionKey,
  stack,
  gradient = "from-[#ff6b6b] to-[#feca57]",
  demoLink,
  githubFrontend,
  githubBackend,
  githubMobile,
}: Props) {
  const { t } = useLanguage();

  const hasMultipleRepos =
    [githubFrontend, githubBackend, githubMobile].filter(Boolean).length > 1;

  // Lấy description từ key nếu có, không thì dùng description trực tiếp
  const displayDescription = descriptionKey ? t(descriptionKey) : description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -12 }}
      transition={{ duration: 0.4 }}
      className="group relative"
    >
      {/* Hiệu ứng phát sáng phía sau card */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-3xl opacity-0 group-hover:opacity-40 blur-xl transition duration-500`}
      />

      {/* Card chính - hiệu ứng kính mờ */}
      <div className="relative glass rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
        {/* Thanh gradient animation trên cùng */}
        <div
          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} bg-[length:200%_100%] animate-shimmer`}
        />

        {/* Góc trang trí */}
        <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
          <div
            className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r ${gradient} rotate-45 opacity-5 group-hover:opacity-15 transition`}
          />
        </div>

        <div className="relative z-10 p-8">
          {/* Các nút liên kết */}
          <div className="flex items-center justify-end gap-2 flex-wrap">
            {demoLink && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-white/80 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:shadow-md"
              >
                <ExternalLink size={14} className="text-[#feca57]" />
                {t("projects.liveDemo") || "Bản demo"}
              </motion.a>
            )}

            {githubFrontend && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={githubFrontend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-white/80 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:shadow-md"
              >
                {hasMultipleRepos
                  ? t("projects.frontend") || "Frontend"
                  : t("projects.code") || "Mã nguồn"}
              </motion.a>
            )}

            {githubBackend && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={githubBackend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-white/80 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:shadow-md"
              >
                {t("projects.backend") || "Backend"}
              </motion.a>
            )}

            {githubMobile && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={githubMobile}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-white/80 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:shadow-md"
              >
                {t("projects.mobile") || "Mobile"}
              </motion.a>
            )}
          </div>

          {/* Tiêu đề với icon */}
          <div className="flex items-start gap-3 mt-4">
            <div
              className={`w-10 h-10 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center shadow-md`}
            >
              <Star size={18} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
          </div>

          {/* Mô tả dự án */}
          <p className="mt-4 text-white/60 leading-relaxed line-clamp-3">
            {displayDescription}
          </p>

          {/* Thống kê số lượng công nghệ */}
          <div className="mt-4 flex items-center gap-3 text-xs text-white/40">
            <span className="flex items-center gap-1">
              <GitBranch size={12} />
              {stack.length} {t("projects.technologies") || "công nghệ"}
            </span>
          </div>

          {/* Các thẻ công nghệ sử dụng */}
          <div className="mt-5 flex flex-wrap gap-2">
            {stack.map((item, idx) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.03 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 shadow-sm cursor-default
                  ${
                    idx % 3 === 0
                      ? "bg-gradient-to-r from-[#ff6b6b]/20 to-[#feca57]/20 text-[#feca57] hover:from-[#ff6b6b]/30 hover:to-[#feca57]/30"
                      : idx % 3 === 1
                        ? "bg-gradient-to-r from-[#feca57]/20 to-[#ff9f43]/20 text-[#ff9f43] hover:from-[#feca57]/30 hover:to-[#ff9f43]/30"
                        : "bg-gradient-to-r from-[#ff9f43]/20 to-[#ff6b6b]/20 text-[#ff6b6b] hover:from-[#ff9f43]/30 hover:to-[#ff6b6b]/30"
                  }`}
              >
                {item}
              </motion.span>
            ))}
          </div>

          {/* Liên kết xem chi tiết */}
          <motion.div
            whileHover={{ x: 5 }}
            className="mt-6 pt-4 border-t border-white/10"
          >
            <a
              href={demoLink || githubFrontend || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-sm font-medium ${demoLink ? "text-[#feca57]" : "text-white/40"} hover:gap-3 transition-all duration-300`}
            >
              {t("projects.viewDetails") || "Xem chi tiết dự án"}
              <ExternalLink size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
