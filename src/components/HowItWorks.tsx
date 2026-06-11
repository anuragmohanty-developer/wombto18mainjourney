"use client";

import React from "react";
import { UserPlus, BellRing, TreePine, Check } from "lucide-react";
import styles from "./HowItWorks.module.css";

interface StepItem {
  number: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  features: string[];
}

export default function HowItWorks() {
  const steps: StepItem[] = [
    {
      number: "01",
      icon: <UserPlus size={24} />,
      title: "Sign Up in Seconds",
      desc: "Expectant mothers and parents of children (0–18 years) can register. Instantly receive an enrollment welcome message.",
      features: [
        "Unique registration number",
        "Certificate of Participation in the OTAAT Movement",
        "Greener Tomorrow WhatsApp/Email invitation",
      ],
    },
    {
      number: "02",
      icon: <BellRing size={24} />,
      title: "Get Smart Reminders",
      desc: "Never miss a health milestones or immunization target. Get timely alerts tailored to your child's age group.",
      features: [
        "Vaccine alerts (2 days before, on due date, and 2 days after)",
        "Delivery via Text Message, WhatsApp, and Email",
        "Age-specific milestones and wellness checklists",
      ],
    },
    {
      number: "03",
      icon: <TreePine size={24} />,
      title: "Plant & Track a Tree",
      desc: "Every registration makes an environmental impact. We plant a geo-tagged tree and register it under your child's name.",
      features: [
        "One child = One tree planted",
        "Track growth on the live national impact dashboard",
        "Contribute to India's first Carbon-Neutral Child Cohort",
      ],
    },
  ];

  return (
    <section className={styles.section} id="how-it-works">
      <div className="container">
        <div className={styles.titleArea}>
          <span className={styles.subtitle}>Process</span>
          <h2 className={styles.title}>How It Works — Just 3 Simple Steps</h2>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.iconWrapper}>{step.icon}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
              
              <ul className={styles.featureList}>
                {step.features.map((feat, fIndex) => (
                  <li key={fIndex} className={styles.featureItem}>
                    <Check size={16} className={styles.checkIcon} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
