import React from "react";

export default function ContactSection() {
  return (
    <section
      id="about-contact"
      className="w-full bg-white pt-24 pb-16 px-6 md:px-16 border-t border-neutral-100"
    >
      <div className="max-w-6xl mx-auto flex flex-col justify-between min-h-[50vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-start mb-16">
          {/* Bên trái: Text intro tiếng Pháp */}
          <div className="space-y-6  text-neutral-800 text-sm leading-relaxed tracking-wide">
            {/* <span className="text-[10px] uppercase tracking-[0.4em] text-[#A68253] block mb-2 font-medium">
              [ ABOUT GIA ]
            </span> */}
            <p className="text-xl text-neutral-900">
              Gia LR - Social Media Strategy & Marketing Communication.
            </p>
            <p className="text-neutral-600 font-light tracking-wider leading-loose">
              Experte en stratégie marketing et diplômée en marketing et brand
              management, j’allie vision stratégique et créativité pour
              développer la présence digitale des marques.
              <br /> <br />
              Spécialisée en social media, création de contenus et analyse de
              performance, j’adopte une approche adaptée aux codes du luxe et de
              la mode.
            </p>
          </div>

          {/* Bên phải: Nút Résumé khối đen sang trọng + Thông tin liên hệ */}
          <div class="md:pl-12 space-y-8 flex flex-col items-start w-full md:w-auto md:justify-self-end">
            <div className="w-full max-w-xs">
              <a
                href="https://drive.google.com/file/d/1ioZBp8nWtlJzGehdb8h9RAjZQ8nU8ZRp/view"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-neutral-950 text-white text-[10px] uppercase tracking-[0.3em] font-medium py-4 hover:bg-neutral-800 smooth-transition shadow-sm block text-center"
              >
                RÉSUMÉ / CV
              </a>
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
            <a
              href="https://www.instagram.com/g.rougee"
              target="_blank"
              className="hover:text-black smooth-transition"
            >
              Instagram
            </a>
            <a
              href="linkedin.com/in/gia14"
              target="_blank"
              className="hover:text-black smooth-transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
