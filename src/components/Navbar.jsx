import React from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ isMobileMenuOpen, toggleMobileMenu }) => (
  <header className="navbar">
    <div className="nav-inner">
      <div className="brand">
        <img src="/logo.png" alt="ETCollab" className="brand-logo" />
      </div>
      <nav className="nav-links">
        <a href="#waitlist-form" className="nav-link">Waitlist</a>
        <a href="#how" className="nav-link">How it works</a>
        <a href="#benefits" className="nav-link">Benefits</a>
        <a href="#contributors" className="nav-link">Contributors</a>
        
      </nav>
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
    <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <a href="#waitlist-form" className="mobile-nav-link" onClick={toggleMobileMenu}>Waitlist</a>
      <a href="#how" className="mobile-nav-link" onClick={toggleMobileMenu}>How it works</a>
      <a href="#benefits" className="mobile-nav-link" onClick={toggleMobileMenu}>Benefits</a>
      <a href="#contributors" className="mobile-nav-link" onClick={toggleMobileMenu}>Contributors</a>
    </div>
  </header>
);

export default Navbar;
