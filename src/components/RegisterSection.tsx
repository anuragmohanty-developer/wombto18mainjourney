"use client";

import React, { useState, useEffect } from "react";
import { Trees, CheckCircle, X, Download } from "lucide-react";
import confetti from "canvas-confetti";
import styles from "./RegisterSection.module.css";

export default function RegisterSection() {
  const [formData, setFormData] = useState({ parentName: "", contact: "", cohort: "expecting" });
  const [showModal, setShowModal] = useState(false);
  const [regNumber, setRegNumber] = useState("");
  const [liveRegistrations, setLiveRegistrations] = useState(12847290);

  // Live registrations count up effect
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveRegistrations((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.contact) return;

    // Create a mock registration number
    const rand = Math.floor(100000 + Math.random() * 900000);
    setRegNumber(`OTAAT-${rand}`);

    // Trigger confetti
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#225c34", "#3b7d4d", "#8cb899", "#c59b27", "#ffffff"],
    });

    setShowModal(true);
    setLiveRegistrations((prev) => prev + 1);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({ parentName: "", contact: "", cohort: "expecting" });
  };

  return (
    <section className={styles.section} id="register-section">
      <div className={styles.bgDecoration} />
      <div className="container">
        <div className={styles.grid}>
          {/* Left Column: Stats & Mission */}
          <div className={styles.infoCol}>
            <span className={styles.subtitle}>Take Action Today</span>
            <h2 className={styles.title}>Join the Movement & Plant a Tree</h2>
            <p className={styles.desc}>
              Your enrollment starts a lifecycle of protective healthcare for your child and active carbon absorption for India.
              Upon completing registration, we plant a geo-tagged native sapling in your child&rsquo;s name, letting them grow
              together.
            </p>

            <div className={styles.statsRow}>
              <div className={styles.statItem}>
                <div className={styles.statVal}>{(liveRegistrations / 1000000).toFixed(2)}M+</div>
                <div className={styles.statLabel}>Active Registrations</div>
                <div className={styles.statDesc}>Protecting lives and families</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statVal}>{(liveRegistrations / 1000000).toFixed(2)}M+</div>
                <div className={styles.statLabel}>Geotagged Trees Planted</div>
                <div className={styles.statDesc}>Nurturing a carbon-neutral future</div>
              </div>
            </div>

            <p className={styles.desc} style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
              WombTo18 is recognized under Startup India by the Department for Promotion of Industry and Internal Trade (DPIIT),
              committed to aligning child development with UN Sustainable Development Goals.
            </p>
          </div>

          {/* Right Column: Registration Card */}
          <div>
            <div className={styles.regCard}>
              <form onSubmit={handleRegister}>
                <div className={styles.formGroup}>
                  <label htmlFor="regParentName" className={styles.formLabel}>
                    Parent / Guardian Name
                  </label>
                  <input
                    type="text"
                    id="regParentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={styles.formInput}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="regContact" className={styles.formLabel}>
                    WhatsApp Number or Email
                  </label>
                  <input
                    type="text"
                    id="regContact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    placeholder="e.g. +91 99999 99999 or name@example.com"
                    className={styles.formInput}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="regCohort" className={styles.formLabel}>
                    Child&rsquo;s Current Age Stage
                  </label>
                  <select
                    id="regCohort"
                    name="cohort"
                    value={formData.cohort}
                    onChange={handleInputChange}
                    className={styles.formSelect}
                  >
                    <option value="expecting">Expecting Mother (Pregnancy)</option>
                    <option value="infant">Infant (0-1 Years)</option>
                    <option value="toddler">Toddler/Preschool (1-5 Years)</option>
                    <option value="school">School Age (6-12 Years)</option>
                    <option value="teen">Teenager (13-18 Years)</option>
                  </select>
                </div>

                <button type="submit" className="btn-primary" style={{ width: "100%", marginTop: "12px" }}>
                  Register Child & Plant Tree <Trees size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <div className={`${styles.modalOverlay} ${showModal ? styles.modalOverlayOpen : ""}`}>
        <div className={styles.modalContent}>
          <button className={styles.modalClose} onClick={closeModal} aria-label="Close">
            <X size={24} />
          </button>
          
          <CheckCircle size={54} strokeWidth={2} className={styles.successIcon} />
          
          <h2>Thank You for Registering!</h2>
          <p style={{ marginTop: "8px", fontSize: "0.95rem" }}>
            A Welcome message has been sent to <strong>{formData.contact}</strong>. Together we are driving SDG-aligned
            environmental & child health action!
          </p>

          <div className={styles.certBox}>
            <div className={styles.certTitle}>Certificate of Participation</div>
            <p className={styles.certText}>This certifies that the child represented by</p>
            <div className={styles.certName}>{formData.parentName}</div>
            <p className={styles.certText} style={{ marginBottom: "0", fontSize: "0.85rem" }}>
              is enrolled in the <strong>One Tree at a Time (OTAAT) Movement</strong>.<br />
              A geo-tagged sapling has been reserved for planting in India.
            </p>
            <div className={styles.certNo}>Registration Ref: {regNumber}</div>
          </div>

          <button className="btn-secondary" style={{ gap: "8px" }} onClick={() => alert("Certificate downloaded (Mock)")}>
            Download Certificate <Download size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
