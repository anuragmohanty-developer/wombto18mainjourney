"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="about" ref={sectionRef}>
      {/* Grain texture overlay */}
      <div className="grain-overlay" />

      <div className="container">
        <div className={styles.grid}>
          {/* Left Column */}
          <div className={`${styles.leftCol} reveal ${visible ? "visible" : ""}`}>
            <span className={styles.subtitle}>Our Story</span>
            <h2 className={styles.title}>Parenting Meets Purpose</h2>
            <p className={styles.desc}>
              WombTo18™ is India&apos;s first integrated platform for child health, schools, and sustainability. We empower
              parents and schools with clinical-grade wellness tools, vaccine reminders, and developmental checklists.
            </p>
            <div className={styles.highlightText}>
              &ldquo;Together, we&rsquo;re racing towards 25 million registrations, 25 million trees, and 25 million lives changed by 2030.&rdquo;
            </div>
            <p className={styles.desc}>
              But we don&rsquo;t stop at health. We believe in nurturing a healthier generation and a greener planet. That is why for
              every child registered, we plant one geo-tagged tree to build India&rsquo;s first Carbon-Neutral Child Cohort.
            </p>
          </div>

          {/* Right Column: SDG Cards with stagger */}
          <div className={`${styles.rightCol} reveal-stagger ${visible ? "visible" : ""}`}>
            {/* SDG 3 */}
            <div className={styles.sdgCard}>
              <div className={`${styles.sdgIcon} ${styles.sdg3Bg}`}>3</div>
              <h3 className={styles.sdgTitle}>SDG 3</h3>
              <p className={styles.sdgTitle} style={{ fontSize: "0.85rem", color: "var(--color-primary)", marginTop: "-6px" }}>
                Good Health &amp; Well-being
              </p>
              <p className={styles.sdgDesc}>
                Personalized alerts for child immunizations from pregnancy to age 18, keeping kids safe and healthy.
              </p>
            </div>

            {/* SDG 4 */}
            <div className={styles.sdgCard}>
              <div className={`${styles.sdgIcon} ${styles.sdg4Bg}`}>4</div>
              <h3 className={styles.sdgTitle}>SDG 4</h3>
              <p className={styles.sdgTitle} style={{ fontSize: "0.85rem", color: "var(--color-primary)", marginTop: "-6px" }}>
                Quality Education
              </p>
              <p className={styles.sdgDesc}>
                Health-Promoting Schools embedding physical fitness, mental hygiene, and safety into everyday learning.
              </p>
            </div>

            {/* SDG 13 */}
            <div className={styles.sdgCard}>
              <div className={`${styles.sdgIcon} ${styles.sdg13Bg}`}>13</div>
              <h3 className={styles.sdgTitle}>SDG 13</h3>
              <p className={styles.sdgTitle} style={{ fontSize: "0.85rem", color: "var(--color-primary)", marginTop: "-6px" }}>
                Climate Action
              </p>
              <p className={styles.sdgDesc}>
                One child registration = one tree planted and geo-tagged. Helping families grow a greener tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
