import React from "react";

export default function HeroSection() {
  return (
    <section className="w-full bg-white pt-24 pb-12 px-6">
      {/* Khung chứa 2 ảnh bằng nhau, tràn đều ra 2 bên */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Tấm bên trái: Quần Denim mác G.L.T.R */}
        <div className="w-full aspect-[3/4] bg-neutral-50 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80"
            alt="Jean Paul Gaultier - Denim"
            className="w-full h-full object-cover smooth-transition hover:scale-101 duration-700"
          />
        </div>

        {/* Tấm bên phải: Áo Vest Sọc */}
        <div className="w-full aspect-[3/4] bg-neutral-50 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80"
            alt="Jean Paul Gaultier - Suit"
            className="w-full h-full object-cover smooth-transition hover:scale-101 duration-700"
          />
        </div>
      </div>
    </section>
  );
}
