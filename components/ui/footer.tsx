// components/ui/footer.tsx
"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient line on top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#feca57] to-transparent" />

      {/* Main footer content */}
      <div className="border-t border-white/5 py-8 px-6 bg-gradient-to-b from-black/20 to-black/40">
        <div className="max-w-7xl mx-auto">
          {/* Centered content */}
          <div className="text-center">
            <p className="text-sm text-white/40">
              © {currentYear} Nguyễn Anh Quốc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
