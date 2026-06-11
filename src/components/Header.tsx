"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>
          <a href="#" className={styles.logo} onClick={(e) => handleNavClick(e, "hero")}>
            <Image
              src="/images/WombTo18_Logo (1).png"
              alt="WombTo18 Logo"
              width={160}
              height={40}
              className={styles.logoImage}
              priority
            />
          </a>

          <nav className={styles.nav}>
            <a href="#about" className={styles.navLink} onClick={(e) => handleNavClick(e, "about")}>
              About Us
            </a>
            <a href="#work" className={styles.navLink} onClick={(e) => handleNavClick(e, "work")}>
              Our Work
            </a>
            <a href="#journey" className={styles.navLink} onClick={(e) => handleNavClick(e, "journey")}>
              Journey Map
            </a>
            <a href="#how-it-works" className={styles.navLink} onClick={(e) => handleNavClick(e, "how-it-works")}>
              How It Works
            </a>
            <a href="#contact" className={styles.navLink} onClick={(e) => handleNavClick(e, "contact")}>
              Contact
            </a>
          </nav>

          <div className={styles.actions}>
            <div className={styles.cta}>
              <a
                href="#register"
                className="btn-primary"
                style={{ padding: "10px 20px", fontSize: "0.9rem" }}
                onClick={(e) => handleNavClick(e, "register")}
              >
                Register Now <ArrowRight size={16} />
              </a>
            </div>

            <button
              className={styles.menuButton}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""} ${
          isScrolled ? styles.scrolledOffset : ""
        }`}
      >
        <a href="#about" className={styles.mobileLink} onClick={(e) => handleNavClick(e, "about")}>
          About Us
        </a>
        <a href="#work" className={styles.mobileLink} onClick={(e) => handleNavClick(e, "work")}>
          Our Work
        </a>
        <a href="#journey" className={styles.mobileLink} onClick={(e) => handleNavClick(e, "journey")}>
          Journey Map
        </a>
        <a href="#how-it-works" className={styles.mobileLink} onClick={(e) => handleNavClick(e, "how-it-works")}>
          How It Works
        </a>
        <a href="#contact" className={styles.mobileLink} onClick={(e) => handleNavClick(e, "contact")}>
          Contact
        </a>
        <div className={styles.mobileCta}>
          <a
            href="#register"
            className="btn-primary"
            style={{ width: "100%" }}
            onClick={(e) => handleNavClick(e, "register")}
          >
            Register Now <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </>
  );
}
