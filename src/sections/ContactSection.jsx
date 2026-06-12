import React from "react";

export default function ContactSection() {
  return (
    <section
      id="about-contact"
      className="w-full bg-white pt-24 pb-16 px-6 md:px-16 border-t border-neutral-100"
    >
      <div className="max-w-6xl mx-auto flex flex-col justify-between min-h-[50vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-40 items-start mb-16">
          {/* Bên trái: Text intro tiếng Pháp */}
          <div className="space-y-6 max-w-lg text-neutral-800 text-sm leading-relaxed tracking-wide">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#A68253] block mb-2 font-medium">
              [ ABOUT GIA ]
            </span>
            <p className="text-xl italic text-neutral-900">
              "Je suis Gia, avec un parcours en Marketing & Management de Marque
              ainsi qu'en Fashion Design."
            </p>
            <p className="text-neutral-600 font-light text-xs uppercase tracking-wider leading-loose">
              Mes points forts sont le social media, la création et la
              transmission de contenus, ainsi que le suivi des performances sur
              les réseaux sociaux pour les marques de mode et de luxe.
            </p>
          </div>

          {/* Bên phải: Nút Résumé khối đen sang trọng + Thông tin liên hệ */}
          <div class="md:pl-12 space-y-8 flex flex-col items-start w-full md:w-auto md:justify-self-end">
            <div className="w-full max-w-xs">
              <button className="w-full bg-neutral-950 text-white text-[10px] uppercase tracking-[0.3em] font-medium py-4 hover:bg-neutral-800 smooth-transition shadow-sm">
                RÉSUMÉ / CV
              </button>
            </div>

            <div className="space-y-4 pt-2">
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-medium">
                Direct Inquiries
              </p>
              <div className="space-y-2">
                <a
                  href="mailto:L.g.uyen14@gmail.com"
                  className=" text-xl md:text-2xl font-light hover:text-[#A68253] smooth-transition block text-neutral-950"
                >
                  L.g.uyen14@gmail.com
                </a>
                <p className="text-sm tracking-widest text-neutral-600">
                  +33 781429888
                </p>
                <p className="text-xs tracking-widest text-neutral-500 font-light">
                  linkedin.com/in/gia14
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Chân trang */}
        <div className="pt-12 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center text-[9px] text-neutral-400 tracking-[0.3em] uppercase space-y-4 md:space-y-0">
          <div>© 2026 GIA LAURENT. All rights reserved.</div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-black smooth-transition">
              Instagram
            </a>
            <a href="#" className="hover:text-black smooth-transition">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
