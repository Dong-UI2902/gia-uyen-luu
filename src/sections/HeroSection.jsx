import React from "react";

export default function HeroSection() {
  return (
    <section className="w-full bg-white pt-24 pb-12 px-6">
      {/* Khung chứa 2 ảnh bằng nhau, tràn đều ra 2 bên */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Tấm bên trái: Quần Denim mác G.L.T.R */}
        <div className="w-full aspect-[3/4] bg-neutral-50 overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/d/17uN9BWhrmlm7QTvMl0-3esif79fik9A8"
            alt="Jean Paul Gaultier - Denim"
            className="w-full h-full object-cover smooth-transition hover:scale-101 duration-700"
          />
        </div>

        {/* Tấm bên phải: Áo Vest Sọc */}
        <div className="w-full aspect-[3/4] bg-neutral-50 overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/d/1fnU4V8hlbQ7HV1vYNBRMxwCM-Oc_-_Q7"
            alt="Jean Paul Gaultier - Suit"
            className="w-full h-full object-cover smooth-transition hover:scale-101 duration-700"
          />
        </div>
      </div>
    </section>
  );
}
