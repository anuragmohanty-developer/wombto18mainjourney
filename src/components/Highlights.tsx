"use client";

import React, { useEffect, useRef, useState } from "react";
import { Trees, School, Award, ShieldCheck, HeartHandshake, Bell } from "lucide-react";
import styles from "./Highlights.module.css";

interface HighlightItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export default function Highlights() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const highlights: HighlightItem[] = [
    {
      icon: <Trees size={28} />,
      title: "One Tree at a Time",
      desc: "Every single enrollment makes a tangible, geotagged ecological contribution to build India's first Carbon-Neutral Child Cohort.",
    },
    {
      icon: <School size={28} />,
      title: "Health‑Promoting Schools",
      desc: "We integrate wellness checklists, safety programs, and environmental consciousness into everyday learning and school culture.",
    },
    {
      icon: <Award size={28} />,
      title: "WHO‑Aligned & Evidence‑Based",
      desc: "Our platform features proven frameworks and clinical vaccine schedules that boost both long-term health and academic outcomes.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "DPIIT‑Recognized Social Startup",
      desc: "A trusted, highly credible Social and ESG Impact Startup recognized under Startup India by the Government of India.",
    },
    {
      icon: <HeartHandshake size={28} />,
      title: "Parenting Meets Purpose",
      desc: "Supporting the journey from pregnancy to adulthood. We help you nurture your child's physical and mental health while planting trees.",
    },
    {
      icon: <Bell size={28} />,
      title: "Immunization Reminder System",
      desc: "Expertly timed alerts (SMS, WhatsApp, and Email) sent 3 times per vaccine schedule to ensure no child misses critical shots.",
    },
  ];

  return (
    <section className={styles.section} id="work" ref={sectionRef}>
      <div className="container">
        <div className={`${styles.titleArea} reveal ${visible ? "visible" : ""}`}>
          <span className={styles.subtitle}>Key Pillars</span>
          <h2 className={styles.title}>Empowering 25 Million Lives &amp; Families</h2>
          <p className={styles.intro}>
            We combine childhood wellness with active climate action. Here is how WombTo18 is creating a sustainable future, one child at a time.
          </p>
        </div>

        <div className={`${styles.grid} reveal-stagger ${visible ? "visible" : ""}`}>
          {highlights.map((item, index) => (
            <div key={index} className="card">
              <div className={styles.iconWrapper}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
