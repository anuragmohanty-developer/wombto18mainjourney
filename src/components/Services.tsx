"use client";

import React, { useEffect, useRef, useState } from "react";
import { HeartPulse, GraduationCap, Building2, ArrowRight } from "lucide-react";
import styles from "./Services.module.css";

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  link: string;
  colorClass: string;
}

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const services: ServiceCard[] = [
    {
      icon: <HeartPulse size={36} />,
      title: "Maternal Platform",
      subtitle: "Pregnancy to Early Years",
      description: "Nurturing mothers and children with automated vaccine alerts, milestone logs, child development tracking, and pregnancy wellness guides.",
      features: ["Vaccine Schedule Tracker", "Child Development Logs", "Prenatal Care Guides"],
      link: "#register-section",
      colorClass: styles.maternal,
    },
    {
      icon: <GraduationCap size={36} />,
      title: "School Platform",
      subtitle: "Nurturing Healthy Campuses",
      description: "Orchestrating digital school health camps, tracking BMI growth indicators, performing eye and hearing screenings, and promoting nutrition checks.",
      features: ["Digital Health Camps", "Body Growth Tracker", "Nutrition & Diet Logs"],
      link: "#register-section",
      colorClass: styles.school,
    },
    {
      icon: <Building2 size={36} />,
      title: "Hospital, Doctor & Clinic",
      subtitle: "Integrated Care Ecosystem",
      description: "Empowering clinical teams to track patient wellness histories, monitor health trends, coordinate appointments, and issue digital health records.",
      features: ["Patient Tracking Registry", "Appointment Organizer", "Digital Health Records"],
      link: "#register-section",
      colorClass: styles.clinic,
    },
  ];

  return (
    <section className={styles.servicesSection} id="services" ref={sectionRef}>
      {/* Grain texture overlay */}
      <div className="grain-overlay" />
      
      <div className={styles.bgGlow} />
      <div className="container">
        <div className={`${styles.header} reveal ${visible ? "visible" : ""}`}>
          <span className="badge-green">Our Care Ecosystem</span>
          <h2 className={styles.title}>Three Specialized Digital Wellness Platforms</h2>
          <p className={styles.subtitleText}>
            WombTo18™ bridges health gaps by connecting mothers, schools, and healthcare clinics in an integrated digital ecosystem.
          </p>
        </div>

        <div className={`${styles.grid} reveal-stagger ${visible ? "visible" : ""}`}>
          {services.map((service, index) => (
            <div key={index} className={`${styles.card} ${service.colorClass}`}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>{service.icon}</div>
                <div className={styles.cardHeaderTitles}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <span className={styles.cardSubtitle}>{service.subtitle}</span>
                </div>
              </div>
              
              <p className={styles.cardDesc}>{service.description}</p>
              
              <ul className={styles.featureList}>
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className={styles.featureItem}>
                    <span className={styles.bullet}>•</span> {feature}
                  </li>
                ))}
              </ul>
              
              <a href={service.link} className={styles.link}>
                Get Started <ArrowRight size={16} className={styles.linkArrow} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

