import React from "react";
import CollectionCard from "../components/CollectionCard";

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
  {
    title: "Louis Vuitton",
    year: "Mr. Thomas Dencausse",
    category: "INTERNATIONAL BUSINESS",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "A-COLD-WALL",
    year: "Mme Chansel Anne Laure",
    category: "PRINCIPLE OF MARKETING",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80",
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
    <section id="projets" className="w-full py-24 md:py-36 px-6 bg-white">
      {/* Tiêu đề mục trên nền trắng */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 md:mb-28 items-start">
        <h2 className="font-serif-luxury text-3xl md:text-5xl font-light tracking-wide md:col-span-2 max-w-2xl leading-snug text-neutral-950">
          PROJETS <br />
          ACADÉMIQUES &{" "}
          <span className="italic text-[#A68253]">PROFESSIONNELS</span>
        </h2>
        <p className="text-[10px] text-neutral-500 tracking-widest leading-relaxed uppercase pt-2 md:text-right">
          [ Selected Archives ] <br />
          Curated projects focused on fashion branding and social media
          strategy.
        </p>
      </div>

      {/* Lưới 2 cột đều nhau tăm tắp đúng ý khách */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-20">
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
