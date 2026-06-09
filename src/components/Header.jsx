import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 md:px-16 py-8 flex justify-between items-center bg-gradient-to-b from-[#050505]/80 to-transparent backdrop-blur-sm">
      <div className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">
        [ PORTFOLIO 2026 ]
      </div>

      <div>
        <a
          href="#"
          className="font-serif-luxury text-xl md:text-2xl tracking-[0.25em] uppercase font-light text-white"
        >
          GIA LAURENT
        </a>
      </div>

      <nav className="hidden md:flex space-x-12 text-[10px] uppercase tracking-[0.3em] text-neutral-300">
        <a
          href="#projets"
          className="hover:text-[#C5A880] smooth-transition italic font-serif-luxury"
        >
          Accueil
        </a>
        <a
          href="#projets"
          className="hover:text-[#C5A880] smooth-transition italic font-serif-luxury"
        >
          Projets
        </a>
        <a
          href="#about-contact"
          className="hover:text-[#C5A880] smooth-transition italic font-serif-luxury"
        >
          Contact
        </a>
      </nav>

      <div className="md:hidden w-5 h-px bg-white before:block before:w-5 before:h-px before:bg-white before:-translate-y-1.5 after:block after:w-3 after:h-px after:bg-white after:translate-y-1.5" />
    </header>
  );
}
