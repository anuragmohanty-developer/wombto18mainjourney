"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./ImpactBar.module.css";

const CURRENT = 12847290;
const GOAL = 25000000;
const PERCENT = ((CURRENT / GOAL) * 100).toFixed(1);

interface CountUpProps {
  end: number;
  decimals?: number;
  duration?: number;
  suffix?: string;
  startTrigger: boolean;
}

const CountUp: React.FC<CountUpProps> = ({ end, decimals = 0, duration = 1800, suffix = "", startTrigger }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startTrigger) return;
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function: easeOutQuad
      const easedProgress = progress * (2 - progress);
      setCount(easedProgress * end);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, startTrigger]);

  return (
    <>
      {count.toFixed(decimals)}
      {suffix}
    </>
  );
};

const stats = [
  { endValue: 12.8, decimals: 1, suffix: "M+", label: "Lives Impacted", sub: "Active registrations" },
  { endValue: 12.8, decimals: 1, suffix: "M+", label: "Trees Planted", sub: "Geo-tagged saplings" },
  { endValue: 3,    decimals: 0, suffix: "",    label: "Platforms",      sub: "Maternal · School · Clinic" },
  { endValue: 18,   decimals: 0, suffix: "yrs", label: "Life Coverage",  sub: "Womb to adulthood" },
];

export default function ImpactBar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef} aria-label="Impact Progress">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      <div className="container">
        {/* Stats Row */}
        <div className={`${styles.statsRow} reveal-stagger ${visible ? "visible" : ""}`}>
          {stats.map((s, i) => (
            <div key={i} className={styles.statItem}>
              <span className={styles.statValue}>
                <CountUp
                  end={s.endValue}
                  decimals={s.decimals}
                  suffix={s.suffix}
                  startTrigger={visible}
                />
              </span>
              <span className={styles.statLabel}>{s.label}</span>
              <span className={styles.statSub}>{s.sub}</span>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className={`${styles.progressArea} ${visible ? styles.progressAreaVisible : ""}`}>
          <div className={styles.progressHeader}>
            <span className={styles.progressTitle}>
              🌱 Progress to <strong>25 Million Lives</strong> by 2030
            </span>
            <span className={styles.progressPercent}>{PERCENT}%</span>
          </div>

          <div className={styles.trackWrap}>
            <div className={styles.track}>
              <div
                ref={barRef}
                className={styles.fill}
                style={
                  {
                    "--target-width": `${PERCENT}%`,
                    width: visible ? `${PERCENT}%` : "0%",
                  } as React.CSSProperties
                }
              >
                <span className={styles.fillLabel}>{CURRENT.toLocaleString("en-IN")}</span>
              </div>
            </div>
            <div className={styles.goalLabel}>
              <span>25,000,000</span>
              <span className={styles.goalBadge}>🎯 Goal 2030</span>
            </div>
          </div>

          <p className={styles.caption}>
            Every registration = one child protected + one tree planted in India.
          </p>
        </div>
      </div>
    </section>
  );
}

