import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 md:px-16 h-20 bg-white/80 backdrop-blur-md border-b border-neutral-100 flex items-center">
      {/* Sử dụng grid 3 cột bằng nhau để ép phần giữa luôn là tâm đối xứng tuyệt đối */}
      <div className="w-full grid grid-cols-2 md:grid-cols-3 items-center">
        {/* CỘT 1: PORTFOLIO (Ẩn trên mobile để text không đè nhau, hiện trên PC) */}
        <div className="text-neutral-900 hidden md:block text-[10px] tracking-[0.3em] italic font-serif-luxury font-semibold uppercase">
          Portfolio
        </div>

        {/* CỘT 2: LOGO CHÍNH - Luôn căn giữa tuyệt đối */}
        <div className="flex md:justify-center justify-start">
          <a
            href="#"
            className="font-serif-luxury text-xl md:text-2xl tracking-[0.25em] uppercase font-light"
          >
            GIA LR
          </a>
        </div>

        {/* CỘT 3: NAVBAR ĐIỀU HƯỚNG VÀ MENU MOBILE */}
        <div className="flex justify-end items-center">
          {/* Menu hiển thị trên PC */}
          <nav className="hidden md:flex space-x-10 text-[10px] uppercase tracking-[0.3em] text-neutral-500">
            <a
              href="#"
              className="hover:text-black smooth-transition italic font-serif-luxury text-neutral-900 font-semibold"
            >
              Accueil
            </a>
            <a
              href="#projets"
              className="hover:text-black smooth-transition italic font-serif-luxury text-neutral-900 font-semibold"
            >
              Projets
            </a>
            <a
              href="#about-contact"
              className="hover:text-black smooth-transition italic font-serif-luxury text-neutral-900 font-semibold"
            >
              Contact
            </a>
          </nav>

          {/* Nút Hamburger đổi sang màu đen hiển thị trên Mobile */}
          <div className="md:hidden w-5 h-px bg-neutral-900 relative before:content-[''] before:absolute before:w-5 before:h-px before:bg-neutral-900 before:-top-1.5 after:content-[''] after:absolute after:w-3 after:h-px after:bg-neutral-900 after:top-1.5" />
        </div>
      </div>
    </header>
  );
}
