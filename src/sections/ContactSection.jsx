import React from "react";

export default function ContactSection() {
  return (
    <section
      id="about-contact"
      className="w-full bg-[#0a0a0a] pt-32 pb-16 px-6 md:px-16 border-t border-neutral-950"
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[60vh]">
        {/* Chia đôi: Trái chứa Text tiếng Pháp từ Canva, Phải chứa Contact & Résumé button */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-20">
          {/* Bên trái: Đoạn text intro tiếng Pháp */}
          <div className="space-y-6 max-w-lg text-neutral-300 text-sm leading-relaxed tracking-wide">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A880] block mb-4">
              [ ABOUT GIA ]
            </span>
            <p className="font-serif-luxury text-xl italic text-neutral-200">
              "Je suis Gia, avec un parcours en Marketing & Management de Marque
              ainsi qu'en Fashion Design."
            </p>
            <p className="text-neutral-400 font-light text-xs uppercase tracking-wider leading-loose">
              Mes points forts sont le social media, la création et la
              transmission de contenus, ainsi que le suivi des performances sur
              les réseaux sociaux pour les marques de mode et de luxe.
            </p>
          </div>

          {/* Bên phải: Nút Résumé khối vàng/trắng + Thông tin liên hệ */}
          <div className="md:pl-12 space-y-8 flex flex-col items-start w-full">
            <div className="w-full max-w-xs">
              <button className="w-full bg-white text-black text-[10px] uppercase tracking-[0.3em] font-medium py-4 hover:bg-[#C5A880] hover:text-black smooth-transition">
                RÉSUMÉ / CV
              </button>
            </div>

            <div className="space-y-4 pt-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                Direct Inquiries
              </p>
              <div className="space-y-2">
                <a
                  href="mailto:L.g.uyen14@gmail.com"
                  className="font-serif-luxury text-xl md:text-2xl font-light hover:text-[#C5A880] smooth-transition block text-white"
                >
                  L.g.uyen14@gmail.com
                </a>
                <p className="text-sm tracking-widest text-neutral-400">
                  +33 781429888
                </p>
                <p className="text-xs tracking-widest text-neutral-400 font-light">
                  linkedin.com/in/gia14
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Chân trang bản quyền */}
        <div className="pt-12 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-[9px] text-neutral-600 tracking-[0.3em] uppercase space-y-4 md:space-y-0">
          <div>© 2026 GIA LAURENT. All rights reserved.</div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white smooth-transition">
              Instagram
            </a>
            <a href="#" className="hover:text-white smooth-transition">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
