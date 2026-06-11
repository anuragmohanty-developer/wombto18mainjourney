"use client";

import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Video, Globe } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <a href="#" className={styles.logo} onClick={(e) => handleNavClick(e, "hero")}>
              <Image
                src="/images/WombTo18_Logo (1).png"
                alt="WombTo18 Logo"
                width={180}
                height={45}
                className={styles.logoImage}
              />
            </a>
            <p className={styles.desc}>
              India’s first digital wellness platform supporting mothers and children from pregnancy to 18 years,
              nurturing a healthier generation and a greener planet with a tree planted for every registration.
            </p>
            <div className={styles.sdgBadges}>
              <span className={`${styles.sdgBadge} ${styles.sdg3}`}>SDG 3: Health</span>
              <span className={`${styles.sdgBadge} ${styles.sdg4}`}>SDG 4: Education</span>
              <span className={`${styles.sdgBadge} ${styles.sdg13}`}>SDG 13: Climate</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={styles.colTitle}>Navigation</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="#" className={styles.link} onClick={(e) => handleNavClick(e, "hero")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className={styles.link} onClick={(e) => handleNavClick(e, "about")}>
                  Our Story
                </a>
              </li>
              <li>
                <a href="#work" className={styles.link} onClick={(e) => handleNavClick(e, "work")}>
                  Our Work
                </a>
              </li>
              <li>
                <a href="#careers" className={styles.link}>
                  Careers
                </a>
              </li>
              <li>
                <a href="#blog" className={styles.link}>
                  Blog
                </a>
              </li>
              <li>
                <a href="#join" className={styles.link} onClick={(e) => handleNavClick(e, "register")}>
                  Join The Movement
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Info */}
          <div>
            <h4 className={styles.colTitle}>Resources</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="#faq" className={styles.link}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#privacy" className={styles.link}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className={styles.link}>
                  Terms of Reference
                </a>
              </li>
              <li>
                <a href="#advisory" className={styles.link}>
                  Advisory Board
                </a>
              </li>
              <li>
                <a href="#youtube" className={styles.link} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Video size={16} /> Youtube Channel
                </a>
              </li>
              <li>
                <a href="#other" className={styles.link} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Globe size={16} /> Other Page
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className={styles.colTitle}>Find Us</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <a href="mailto:info@wombto18.com">
                  <Mail size={18} className={styles.contactIcon} />
                  <span className={styles.contactText}>info@wombto18.com</span>
                </a>
              </li>
              <li className={styles.contactItem}>
                <a href="tel:+918121881880">
                  <Phone size={18} className={styles.contactIcon} />
                  <span className={styles.contactText}>+91 81218 81880</span>
                </a>
              </li>
              <li className={styles.contactItem}>
                <div style={{ display: "flex" }}>
                  <MapPin size={18} className={styles.contactIcon} style={{ marginRight: "12px" }} />
                  <span className={styles.contactText}>
                    Parihar chowk, HR65+5Q6, First Floor, Sagar building, near ITI Road, Aundh, Pune, Maharashtra 411007
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & badges */}
        <div className={styles.bottom}>
          <div className={styles.copyText}>
            © {new Date().getFullYear()} WombTo18 | An Ai2Mind Initiative | Powered by OTAAT. All rights reserved.
          </div>
          <div className={styles.badges}>
            <span className={styles.badge}>ESG-Aligned</span>
            <span className={styles.badge}>SDG-Aligned</span>
            <span className={`${styles.badge} ${styles.badgeHighlight}`}>DPIIT Recognized Social Impact Startup</span>
            <span className={styles.badge}>Startup India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
