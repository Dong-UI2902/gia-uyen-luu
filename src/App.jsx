import React from "react";
import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";
import GridSection from "./sections/GridSection";
import ContactSection from "./sections/ContactSection";

export default function App() {
  return (
    <div className="bg-[#050505] selection:bg-[#C5A880] selection:text-black">
      <Header />
      <main>
        <HeroSection />
        <GridSection />
      </main>
      <ContactSection />
    </div>
  );
}
