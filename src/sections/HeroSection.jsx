import React from "react";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-end justify-start px-6 md:px-16 pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Bạn có thể thay link ảnh đại diện lookbook của bạn vào đây */}
        <img
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1920&q=80"
          alt="Gia Laurent High Fashion Cover"
          className="w-full h-full object-cover object-center brightness-[0.4] scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl">
        <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A880] block mb-4">
          CHASING VISUAL BREAKTHROUGHS
        </span>
        <h1 className="font-serif-luxury text-4xl md:text-7xl font-light tracking-wide leading-[1.15] mb-8 text-white">
          Création et transmission <br />
          de <span className="italic">contenus de mode</span>
        </h1>
        <div className="flex items-center space-x-6">
          <a
            href="#projets"
            className="text-[10px] uppercase tracking-[0.3em] border-b border-white/40 pb-2 hover:border-[#C5A880] text-neutral-200 hover:text-white smooth-transition"
          >
            Découvrir Projets
          </a>
        </div>
      </div>
    </section>
  );
}
