import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import HowToBuy from "./components/HowToBuy";
import CommunityCTA from "./components/CommunityCTA";
import Footer from "./components/Footer";
import Starfield from "./components/Starfield";

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <main className="text-white selection:bg-kaspa-500/30 selection:text-white">
      <Starfield />
      <Navbar />
      <Hero />
      <About />
      <HowToBuy />
      <CommunityCTA />
      <Footer />
    </main>
  );
}
