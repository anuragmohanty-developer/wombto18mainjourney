"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Trees, Play } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./Hero.module.css";

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface LeafParticle {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({ days: 1664, hours: 10, minutes: 15, seconds: 41 });
  const [liveRegistrations, setLiveRegistrations] = useState(12847290);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [leafParticles] = useState<LeafParticle[]>(() =>
    Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * -15 - 5,
      size: Math.random() * 14 + 8,
      delay: Math.random() * 8,
      duration: Math.random() * 12 + 10,
    }))
  );

  // 1. Live registrations count up effect
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveRegistrations((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // 2. Real countdown logic targeting December 31, 2030
  useEffect(() => {
    const targetDate = new Date("2030-12-31T23:59:59").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // 3. Mouse move tracking for 3D parallax layers
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);



  // 5. GSAP staggered entrance animations
  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".heroRevealText",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" }
      );
      tl.fromTo(
        ".heroRevealCard",
        { opacity: 0, scale: 0.9, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "back.out(1.5)" },
        "-=0.4"
      );
    },
    { scope: heroRef }
  );

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.heroSection} id="hero" ref={heroRef}>
      {/* Background Floating Leaf Particles */}
      {leafParticles.map((leaf) => (
        <svg
          key={leaf.id}
          className={styles.heroLeafParticle}
          style={{
            left: `${leaf.left}%`,
            top: `${leaf.top}%`,
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
          }}
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M 0 50 C 35 15, 65 15, 100 50 C 65 85, 35 85, 0 50 Z" />
        </svg>
      ))}

      <div className={styles.bgDecoration} />
      <div className={styles.bgDecoration2} />

      <div className="container">
        <div className={styles.container}>
          {/* Left Column: Mission copy & Countdown */}
          <div className={styles.leftCol}>
            <span className="badge-green heroRevealText">One Life at a Time</span>
            <h1 className={styles.title + " heroRevealText"}>
              Touching <span className={styles.titleHighlight}>25 Million</span> Lives by 2030
            </h1>
            <p className={styles.sdgSubtitle + " heroRevealText"}>
              Aligned with United Nations Sustainable Development Goals (SDG) 3, 4 & 13
            </p>
            <p className={styles.desc + " heroRevealText"}>
              WombTo18™ is India’s first digital wellness platform supporting mothers and children through vaccine reminders, milestone tracking, health promoting, and emergency preparedness programs—with a tree planted for every registration, nurturing a healthier generation and a greener planet.
            </p>

            {/* CTAs */}
            <div className={styles.heroCtaGroup + " heroRevealText"}>
              <a
                href="#register-section"
                className="btn-primary"
                onClick={(e) => handleNavClick(e, "register-section")}
              >
                Register & Plant a Tree <Trees size={18} />
              </a>
              <a
                href="#journey"
                className="btn-secondary"
                onClick={(e) => handleNavClick(e, "journey")}
              >
                Explore Journey <Play size={16} fill="currentColor" />
              </a>
            </div>

            {/* Counters */}
            <div className={styles.counterContainer + " heroRevealCard"}>
              <div className={styles.counterVal}>
                {(liveRegistrations / 1000000).toFixed(2)}M
              </div>
              <div className={styles.counterText}>
                <span className={styles.counterLabel}>Lives Impacted</span>
                <span className={styles.counterDesc}>Racing towards 25M by 2030</span>
              </div>
            </div>

            {/* Countdown Clock */}
            <div className={styles.countdownSection + " heroRevealCard"}>
              <h3 className={styles.countdownTitle}>Time Remaining to Reach 2030 SDG Target</h3>
              <div className={styles.countdownGrid}>
                <div className={styles.countdownCard}>
                  <span className={styles.countdownNum}>{timeLeft.days}</span>
                  <span className={styles.countdownLabel}>Days</span>
                </div>
                <div className={styles.countdownCard}>
                  <span className={styles.countdownNum}>{timeLeft.hours.toString().padStart(2, "0")}</span>
                  <span className={styles.countdownLabel}>Hours</span>
                </div>
                <div className={styles.countdownCard}>
                  <span className={styles.countdownNum}>{timeLeft.minutes.toString().padStart(2, "0")}</span>
                  <span className={styles.countdownLabel}>Min</span>
                </div>
                <div className={styles.countdownCard}>
                  <span className={styles.countdownNum}>{timeLeft.seconds.toString().padStart(2, "0")}</span>
                  <span className={styles.countdownLabel}>Sec</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Dual-Image Illustration and Photo Card */}
          <div className={styles.rightCol + " heroRevealCard"}>
            <div className={styles.visualWrapper}>
              
              {/* Background Glow */}
              <div className={styles.glowBg} />

              {/* Main Premium Generated Artwork */}
              <div 
                className={styles.mainArtworkContainer}
                style={{ 
                  transform: `translate(${mousePos.x * -12}px, ${mousePos.y * -12}px)` 
                }}
              >
                <Image
                  src="/images/mother_child_hero.png"
                  alt="Maternal Health and Nature"
                  fill
                  className={styles.mainArtwork}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Overlapping Floating Polaroid-style Card with the original B&W photo */}
              <div 
                className={styles.floatingPhotoCard}
                style={{ 
                  transform: `translate(${mousePos.x * 24}px, ${mousePos.y * 24}px) rotate(${3 + mousePos.x * 12}deg)` 
                }}
              >
                <div className={styles.photoContainer}>
                  <Image
                    src="/images/mother child.jpg"
                    alt="Mother holding baby feet"
                    width={220}
                    height={290}
                    className={styles.polaroidPhoto}
                  />
                  <div className={styles.polaroidTag}>
                    <span className={styles.polaroidLabel}>Our Inspiration</span>
                    <span className={styles.polaroidDate}>WombTo18™ Wellness</span>
                  </div>
                </div>
              </div>

              {/* Floating Leaf Badges (Micro-animations / information chips) */}
              <div 
                className={`${styles.floatingBadge} ${styles.badgeTopLeft}`}
                style={{ transform: `translate(${mousePos.x * -8}px, ${mousePos.y * -16}px)` }}
              >
                <span className={styles.badgeEmoji}>🌱</span>
                <span className={styles.badgeText}>1 Register = 1 Tree</span>
              </div>

              <div 
                className={`${styles.floatingBadge} ${styles.badgeBottomRight}`}
                style={{ transform: `translate(${mousePos.x * 16}px, ${mousePos.y * -8}px)` }}
              >
                <span className={styles.badgeEmoji}>✨</span>
                <span className={styles.badgeText}>SDG-3 Health</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
