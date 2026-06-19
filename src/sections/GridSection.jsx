import React from "react";
import CollectionCard from "../components/CollectionCard";

const myCanvaProjects = [
  {
    title: "Steven Passaro",
    year: "Réseaux Sociaux Stagiaire",
    category: "GIA",
    image:
      "https://lh3.googleusercontent.com/d/1N6BYbWw4G_wMn85NmubbuOpI437SxLJ9",
    href: "https://drive.google.com/file/d/1f_nmlSh5UXScK3DjWaqE3F07kO9E-ctd/view?usp=drive_link",
  },
  {
    title: "Jean Paul Gaultier",
    year: "Réseaux Sociaux Project",
    category: "GIA",
    image:
      "https://lh3.googleusercontent.com/d/19aUEv44EXLGxU8OC6Rt8PQl3NwKWgmM2",
    href: "https://drive.google.com/file/d/1Anm8O6QqKa6RKgnkZSktke1E8d2qq_G0/view",
  },
  {
    title: "Louis Vuitton",
    year: "International Business",
    category: "GIA",
    image:
      "https://lh3.googleusercontent.com/d/1TVBT2hVPqOgWpanpj7D2_khx00WNa8JD",
    href: "https://drive.google.com/file/d/1M-md_cLbTntbV7GWtonvVyliWR_R7psh/view?usp=drive_link",
  },
  {
    title: "A-COLD-WALL*",
    year: "Principle of Marketing ",
    category: "GIA",
    image:
      "https://lh3.googleusercontent.com/d/145WbffzegeQkEjceU20RCAo8lCHbjvls",
    href: "https://drive.google.com/file/d/1B-DP1IfgCeAY1LFBeJskfzQpXSx1zx3q/view?usp=drive_link",
  },
  {
    title: "LOEWE",
    year: "leather & accessories",
    category: "GROUP PROJECT",
    image:
      "https://lh3.googleusercontent.com/d/1ZNJYXVSvq6zbMtH2a4tu_vLpZSXHndJq",
    href: "https://drive.google.com/file/d/1cQuFIXCdRRVXu69gEyATxRkGloeOZ6GE/view?usp=drive_link",
  },
  {
    title: "KHRISTMAS",
    year: "visual merchandise",
    category: "GROUP PROJECT",
    image:
      "https://lh3.googleusercontent.com/d/1KoNiwdt_ddOEN27bd9uCxxr3w62c2qmV",
    href: "https://drive.google.com/file/d/1j7tXapYvJgpLqIUsTY2FuFj20lOd8LXi/view?usp=drive_link",
  },
  {
    title: "SKIMS",
    year: "Marketing strategy",
    category: "GROUP PROJECT",
    image:
      "https://lh3.googleusercontent.com/d/1gvNIAWc_d8C3YNnv1690q27USo6oXFC2",
    href: "https://drive.google.com/file/d/1aJl_cFoRamo4yc5tyoxpNoiCT3OcdF00/view?usp=drive_link",
  },
  {
    title: "A-COLD-WALL*",
    year: "Mme Chansel Anne Laure",
    category: "PRINCIPLE OF MARKETING",
    image:
      "https://lh3.googleusercontent.com/d/145WbffzegeQkEjceU20RCAo8lCHbjvls",
  },
];

export default function GridSection() {
  return (
    <section id="projets" className="w-full py-24 md:py-36 px-6 bg-white">
      {/* Tiêu đề mục trên nền trắng */}
      {/* <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 md:mb-28 items-start">
        <h2 className="text-3xl md:text-5xl font-light-bold tracking-wide md:col-span-2 max-w-2xl leading-snug text-neutral-950">
          PROJETS <br />
          ACADÉMIQUES &{" "}
          <span className="italic text-[#A68253]">PROFESSIONNELS</span>
        </h2>
        <p className="text-[10px] text-neutral-500 tracking-widest leading-relaxed uppercase pt-2 md:text-right">
          [ Selected Archives ] <br />
          Curated projects focused on fashion branding and social media
          strategy.
        </p>
      </div> */}
      <div className="max-w-7xl mx-auto  mb-10 md:mb-15">
        <h2 className="text-center font-bold underline tracking-[0.15em]">
          PROJETS ACADÉMIQUES & PROFESSIONNELS
        </h2>
      </div>

      {/* Lưới 2 cột đều nhau tăm tắp đúng ý khách */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-20">
        {myCanvaProjects.map((item, index) => (
          <CollectionCard
            key={index}
            // title={item.title}
            // year={item.year}
            // category={item.category}
            image={item.image}
            href={item.href}
          />
        ))}
      </div>
      <div className="max-w-[800px] mx-auto pt-24">
        <img
          src="https://lh3.googleusercontent.com/d/18AeNINj-DR4jKUOxak-HXQ7ZSUjJ7x5P"
          alt="Jean Paul Gaultier - Denim"
          className="w-full"
        />
      </div>
    </section>
  );
}
