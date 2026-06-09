import React from "react";

export default function CollectionCard({ image, title, year, category }) {
  return (
    <div className="w-full flex flex-col group cursor-pointer">
      {/* Khung ảnh ép cứng tỷ lệ 3:4 cho tất cả các dự án */}
      <div className="w-full overflow-hidden bg-neutral-900 aspect-[3/4]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center smooth-transition group-hover:scale-103 brightness-[0.85] group-hover:brightness-100"
          loading="lazy"
        />
      </div>

      {/* Phần thông tin chữ bên dưới ảnh */}
      <div className="mt-6 flex justify-between items-baseline border-b border-neutral-900/60 pb-4">
        <div>
          <span className="text-[9px] uppercase tracking-[0.25em] text-[#C5A880] block mb-1">
            {category}
          </span>
          <h3 className="font-serif-luxury text-xl md:text-2xl font-light tracking-wide text-neutral-300 group-hover:text-white smooth-transition">
            {title}
          </h3>
        </div>
        <span className="font-serif-luxury text-xs italic text-neutral-500 max-w-[180px] text-right truncate">
          {year}
        </span>
      </div>
    </div>
  );
}
