import React from "react";
import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";
import GridSection from "./sections/GridSection";
import ContactSection from "./sections/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white">
      <Header />
      <HeroSection />
      <GridSection />
      <ContactSection />
    </div>
  );
}
