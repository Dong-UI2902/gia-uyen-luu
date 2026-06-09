import React from "react";
import CollectionCard from "../components/CollectionCard";

// Dữ liệu 4 dự án từ Canva - Bây giờ vai trò hiển thị ngang hàng hoàn toàn
const myCanvaProjects = [
  {
    title: "Steven Passaro",
    year: "Stagiaire",
    category: "RÉSEAUX SOCIAUX",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Jean Paul Gaultier",
    year: "Project",
    category: "RÉSEAUX SOCIAUX",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Louis Vuitton",
    year: "Mr. Thomas Dencausse",
    category: "INTERNATIONAL BUSINESS",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "A-COLD-WALL*",
    year: "Mme Chansel Anne Laure",
    category: "PRINCIPLE OF MARKETING",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function GridSection() {
  return (
    <section
      id="projets"
      className="w-full py-32 md:py-48 px-6 md:px-16 bg-[#050505]"
    >
      {/* Khối tiêu đề đầu Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 md:mb-36 items-start">
        <h2 className="font-serif-luxury text-3xl md:text-5xl font-light tracking-wide md:col-span-2 max-w-2xl leading-snug text-white">
          PROJETS <br />
          ACADÉMIQUES &{" "}
          <span className="italic text-[#C5A880]">PROFESSIONNELS</span>
        </h2>
        <p className="text-[10px] text-neutral-400 tracking-widest leading-relaxed uppercase pt-2 md:text-right">
          [ Selected Archives ] <br />
          Curated projects focused on fashion branding and social media
          strategy.
        </p>
      </div>

      {/* Lưới 2 cột cân bằng tuyệt đối trên Desktop, 1 cột trên Mobile */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
        {myCanvaProjects.map((item, index) => (
          <CollectionCard
            key={index}
            title={item.title}
            year={item.year}
            category={item.category}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}
