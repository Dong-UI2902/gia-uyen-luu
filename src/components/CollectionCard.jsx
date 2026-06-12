import React from "react";

export default function CollectionCard({ image, title, year, category, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="w-full flex flex-col group cursor-pointer">
        {/* Khung ảnh tỷ lệ 3:4 chuẩn bộ khung */}
        <div className="w-full overflow-hidden bg-neutral-100 aspect-[3/4]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center smooth-transition group-hover:scale-102 brightness-[0.98] group-hover:brightness-100"
            loading="lazy"
          />
        </div>

        {/* Phần thông tin chữ nền trắng */}
        {/* <div className="mt-5  border-b border-neutral-200 pb-4">
          <div className="flex justify-between items-baseline px-1">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#A68253] block mb-1 font-medium">
              {year}
            </span>
            <span className="text-neutral-500 max-w-[180px] text-right truncate text-[10px]">
              {category}
            </span>
          </div>
          <h3 className="font-serif-luxury text-xl md:text-2xl font-light tracking-wide text-neutral-900 group-hover:text-neutral-600 smooth-transition">
            {title}
          </h3>
        </div> */}
      </div>
    </a>
  );
}
