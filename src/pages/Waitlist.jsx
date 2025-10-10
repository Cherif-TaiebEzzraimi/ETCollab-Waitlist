import React, { useState, useCallback } from "react";
import "./waitlist.css";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WaitlistForm from "../components/WaitlistForm";
import HowItWorks from "../components/HowItWorks";
import Benefits from "../components/Benefits";
import Contributors from "../components/Contributors";


// Main Waitlist Component
export default function Waitlist() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <>
      <Navbar isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />

      <main>
        <Hero onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })} />
        <WaitlistForm />
        <HowItWorks />
        <Benefits />
        <Contributors />
      </main>

     
    </>
  );
}
