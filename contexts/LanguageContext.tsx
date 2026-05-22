/* eslint-disable react-hooks/set-state-in-effect */
// contexts/LanguageContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "vi" | "en";

type Translations = {
  [key: string]: {
    vi: string;
    en: string;
  };
};

const translations: Translations = {
  // Navbar
  "nav.about": { vi: "Giới thiệu", en: "About" },
  "nav.experience": { vi: "Kinh nghiệm", en: "Experience" },
  "nav.projects": { vi: "Dự án", en: "Projects" },
  "nav.contact": { vi: "Liên hệ", en: "Contact" },

  // Hero
  "hero.open": { vi: "Đang tìm kiếm cơ hội", en: "Open for opportunities" },
  "hero.title": { vi: "Kỹ sư Fullstack", en: "Fullstack Engineer" },
  "hero.name": { vi: "Nguyễn Anh Quốc", en: "Nguyen Anh Quoc" },
  "hero.description": {
    vi: "Xây dựng hệ thống doanh nghiệp mở rộng với React.js, Next.js, Node.js và kiến trúc backend hiện đại. Đã hoàn thành 8+ dự án.",
    en: "Building scalable enterprise systems with React.js, Next.js, Node.js, and modern backend architecture. 8+ projects delivered.",
  },
  "hero.viewProjects": { vi: "Xem dự án", en: "View Projects" },
  "hero.downloadCV": { vi: "Tải CV", en: "Download CV" },

  // About
  "about.title": { vi: "Về tôi", en: "About Me" },
  "about.subtitle": { vi: "Kỹ sư Fullstack", en: "Fullstack Developer" },
  "about.description": {
    vi: "Tôi là một Kỹ sư Fullstack với kinh nghiệm xây dựng hệ thống doanh nghiệp bao gồm RBAC, đồng bộ dữ liệu thời gian thực và hệ thống ghi nhật ký hoạt động. Thành thạo React.js, Node.js và các công nghệ web hiện đại, với trọng tâm mạnh mẽ vào hiệu suất và kiến trúc mở rộng.",
    en: "I'm a passionate Fullstack Web Developer with experience building enterprise systems including RBAC, real-time data synchronization, and activity logging systems. Skilled in React.js, Node.js, and modern web technologies, with a strong focus on performance and scalable architecture.",
  },
  "about.projects": { vi: "Dự án", en: "Projects" },
  "about.clients": { vi: "Khách hàng", en: "Clients" },
  "about.commits": { vi: "Commits", en: "Commits" },
  "about.experience": { vi: "Kinh nghiệm", en: "Experience" },
  "about.education": { vi: "Học vấn", en: "Education" },
  "about.university": { vi: "Đại học FPT", en: "FPT University" },
  "about.major": { vi: "Kỹ thuật phần mềm", en: "Software Engineering" },
  "about.award": {
    vi: "Sinh viên xuất sắc kỳ",
    en: "Honorable Student of the Semester",
  },

  // Tech Stack
  "tech.title": { vi: "Công nghệ", en: "Tech Stack" },
  "tech.subtitle": {
    vi: "Các công nghệ tôi sử dụng",
    en: "Technologies I work with",
  },
  "tech.description": {
    vi: "Những công cụ và framework hiện đại tôi dùng để xây dựng ứng dụng",
    en: "Modern tools and frameworks I use to build amazing applications",
  },
  "tech.frontend": { vi: "Giao diện", en: "Frontend" },
  "tech.backend": { vi: "Máy chủ", en: "Backend" },
  "tech.database": { vi: "Cơ sở dữ liệu", en: "Database" },
  "tech.tools": { vi: "Công cụ", en: "Tools" },
  "tech.frontendDesc": { vi: "Phát triển UI/UX", en: "UI/UX Development" },
  "tech.backendDesc": { vi: "Máy chủ & API", en: "Server & API" },
  "tech.databaseDesc": { vi: "Lưu trữ dữ liệu", en: "Data Storage" },
  "tech.toolsDesc": { vi: "DevOps & Công cụ", en: "DevOps & Tools" },

  // Experience
  "exp.title": { vi: "Kinh nghiệm làm việc", en: "Work Experience" },
  "exp.subtitle": {
    vi: "Hành trình chuyên nghiệp",
    en: "Professional Journey",
  },
  "exp.description": {
    vi: "Con đường phát triển phần mềm của tôi",
    en: "My path in software development",
  },

  // Projects
  "projects.title": { vi: "Dự án nổi bật", en: "Featured Projects" },
  "projects.subtitle": { vi: "Công việc của tôi", en: "My Work" },
  "projects.description": {
    vi: "Các ứng dụng cấp doanh nghiệp giải quyết vấn đề thực tế",
    en: "Enterprise level applications that solve real-world problems",
  },
  "projects.viewDetails": {
    vi: "Xem chi tiết dự án",
    en: "View Project Details",
  },
  "projects.technologies": { vi: "công nghệ", en: "technologies" },
  "projects.liveDemo": { vi: "Bản demo", en: "Live Demo" },

  // Contact
  "contact.title": { vi: "Liên hệ", en: "Contact" },
  "contact.subtitle": { vi: "Kết nối", en: "Get In Touch" },
  "contact.description": {
    vi: "Tôi luôn sẵn sàng thảo luận về dự án mới, ý tưởng sáng tạo hoặc cơ hội",
    en: "I'm always open to discussing new projects, creative ideas, or opportunities",
  },
  "contact.email": { vi: "Email", en: "Email" },
  "contact.phone": { vi: "Điện thoại", en: "Phone" },
  "contact.location": { vi: "Địa điểm", en: "Location" },
  "contact.sendEmail": { vi: "Gửi email", en: "Send Email" },
  "contact.github": { vi: "Hồ sơ GitHub", en: "GitHub Profile" },

  // Footer
  "footer.rights": { vi: "Đã đăng ký bản quyền", en: "All rights reserved" },
  "footer.built": { vi: "Xây dựng với", en: "Built with" },

  // Common
  "common.technologies": { vi: "công nghệ", en: "technologies" },

  // Thêm vào translations object:

  // About section

  // Experience section - Thêm vào translations object

  // Roles
  "exp.roleFullstack": { vi: "Kỹ sư Fullstack", en: "Fullstack Developer" },
  "exp.roleFrontend": { vi: "Kỹ sư Frontend", en: "Frontend Developer" },
  "exp.roleIntern": {
    vi: "Thực tập sinh Frontend",
    en: "Frontend Developer Intern",
  },

  // Locations
  "exp.locationRemote": { vi: "Từ xa", en: "Remote" },
  "exp.locationVietnam": { vi: "Việt Nam", en: "Vietnam" },

  // Meta Art Company descriptions
  "exp.metaDesc1": {
    vi: "Phát triển hệ thống fullstack sử dụng Node.js, React.js, TypeScript, JavaScript",
    en: "Developed fullstack systems using Node.js, React.js, TypeScript, JavaScript",
  },
  "exp.metaDesc2": {
    vi: "Thiết kế và xây dựng hệ thống quản lý hiện vật (giống CMMS) cho doanh nghiệp",
    en: "Designed and built artifact management system (CMMS-like) for enterprise usage",
  },
  "exp.metaDesc3": {
    vi: "Phát triển các module bổ sung như hệ thống blog và quản lý nội dung",
    en: "Developed additional modules such as blog system and content management",
  },
  "exp.metaDesc4": {
    vi: "Thiết kế và tối ưu cơ sở dữ liệu sử dụng MongoDB, MySQL, PostgreSQL",
    en: "Designed and optimized databases using MongoDB, MySQL, PostgreSQL",
  },
  "exp.metaDesc5": {
    vi: "Xây dựng RESTful API và tích hợp frontend với backend services",
    en: "Built RESTful APIs and integrated frontend with backend services",
  },
  "exp.metaDesc6": {
    vi: "Triển khai ứng dụng trên Render và Vercel",
    en: "Deployed applications on Render and Vercel",
  },
  "exp.metaDesc7": {
    vi: "Tối ưu hiệu suất hệ thống và cải thiện khả năng mở rộng",
    en: "Optimized system performance and improved scalability",
  },

  // Nam Phuong So Company descriptions
  "exp.namDesc1": {
    vi: "Phát triển và bảo trì giao diện web sử dụng React.js & TypeScript",
    en: "Developed and maintained web interfaces using React.js & TypeScript",
  },
  "exp.namDesc2": {
    vi: "Tích hợp frontend với backend APIs (RESTful APIs)",
    en: "Integrated frontend with backend APIs (RESTful APIs)",
  },
  "exp.namDesc3": {
    vi: "Xây dựng các component tái sử dụng và tối ưu hiệu suất UI",
    en: "Built reusable components and optimized UI performance",
  },
  "exp.namDesc4": {
    vi: "Làm việc trên các hệ thống nội bộ cho hoạt động hàng không",
    en: "Worked on internal systems for airline operations",
  },
  "exp.namDesc5": {
    vi: "Đảm bảo thiết kế responsive và cải thiện trải nghiệm người dùng",
    en: "Ensured responsive design and improved user experience",
  },

  // UTA Company descriptions
  "exp.utaDesc1": {
    vi: "Thiết kế và phát triển UI sử dụng React.js, HTML, CSS, JavaScript",
    en: "Designed and developed UI using React.js, HTML, CSS, JavaScript",
  },
  "exp.utaDesc2": {
    vi: "Tích hợp frontend với backend APIs (RESTful APIs)",
    en: "Integrated frontend with backend APIs (RESTful APIs)",
  },
  "exp.utaDesc3": {
    vi: "Xây dựng bố cục responsive và các component tái sử dụng",
    en: "Built responsive layouts and reusable components",
  },
  "exp.utaDesc4": {
    vi: "Hợp tác với nhóm để deliver các tính năng frontend",
    en: "Collaborated with team to deliver frontend features",
  },

  // Project descriptions - Thêm vào translations object
  "project.artifactDesc": {
    vi: "Nền tảng quản lý hiện vật doanh nghiệp với phân quyền RBAC, đồng bộ thời gian thực, quản lý kho và bảng điều khiển phân tích. Tính năng bao gồm tải ảnh lên Cloudinary, ghi nhật ký hoạt động xuất Excel và cảnh báo tồn kho thấp.",
    en: "Enterprise artifact management platform with RBAC authorization, realtime synchronization, inventory management and analytics dashboard. Features include Cloudinary image upload, activity logging with Excel export, and low stock alerts.",
  },
  "project.gagaDesc": {
    vi: "Hệ thống quản lý gara fullstack cho hoạt động sửa chữa xe. Bao gồm bảng điều khiển admin, theo dõi kho, hệ thống báo giá, quản lý lệnh sửa chữa và nhắc nhở bảo trì tự động.",
    en: "Fullstack garage management system for vehicle repair operations. Includes admin dashboard, inventory tracking, quotation system, work order management, and automated maintenance reminders.",
  },
  "project.cmmsDesc": {
    vi: "Hệ thống quản lý bảo trì máy tính cho hoạt động tòa nhà thông minh. Tính năng theo dõi SLA, lập lịch bảo trì phòng ngừa, phân tích kỹ thuật viên và hệ thống RBAC đa vai trò.",
    en: "Computerized Maintenance Management System for smart building operations. Features SLA tracking, preventive maintenance scheduling, technician analytics, and multi-role RBAC system.",
  },

  // Project card - Thêm vào translations object

  "projects.code": { vi: "Mã nguồn", en: "Code" },
  "projects.frontend": { vi: "Frontend", en: "Frontend" },
  "projects.backend": { vi: "Backend", en: "Backend" },
  "projects.mobile": { vi: "Mobile", en: "Mobile" },

  // Tech Stack

  "tech.technologies": { vi: "Công nghệ", en: "Technologies" }, // THÊM DÒNG NÀY
  "tech.yearsExp": { vi: "Năm kinh nghiệm", en: "Years Experience" }, // THÊM DÒNG NÀY
  "tech.projects": { vi: "Dự án", en: "Projects" }, // THÊM DÒNG NÀY

  // Project descriptions (nếu dùng descriptionKey)
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && (savedLang === "vi" || savedLang === "en")) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
