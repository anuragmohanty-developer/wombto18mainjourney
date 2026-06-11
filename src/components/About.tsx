"use client";

import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className="container">
        <div className={styles.grid}>
          {/* Left Column: Mission Description */}
          <div className={styles.leftCol}>
            <span className={styles.subtitle}>Our Story</span>
            <h2 className={styles.title}>Parenting Meets Purpose</h2>
            <p className={styles.desc}>
              WombTo18™ is India’s first integrated platform for child health, schools, and sustainability. We empower
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

          {/* Right Column: SDG Alignment */}
          <div className={styles.rightCol}>
            {/* SDG 3 */}
            <div className={styles.sdgCard}>
              <div className={`${styles.sdgIcon} ${styles.sdg3Bg}`}>3</div>
              <h3 className={styles.sdgTitle}>SDG 3</h3>
              <p className={styles.sdgTitle} style={{ fontSize: "0.85rem", color: "var(--color-primary)", marginTop: "-6px" }}>
                Good Health & Well-being
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
