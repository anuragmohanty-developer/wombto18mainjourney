import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Highlights from "@/components/Highlights";
import Services from "@/components/Services";
import ScrollytellingJourney from "@/components/ScrollytellingJourney";
import HowItWorks from "@/components/HowItWorks";
import RegisterSection from "@/components/RegisterSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ flex: "1 0 auto", marginTop: "80px" }}>
        <Hero />
        <About />
        <Highlights />
        <Services />
        <ScrollytellingJourney />
        <HowItWorks />
        <RegisterSection />
      </main>
      <Footer />
    </>
  );
}
