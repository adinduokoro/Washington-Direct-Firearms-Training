// WhatWeOffer.jsx
import React from "react";
import styles from "./WhatWeOffer.module.css";
import { Shield, Target, Home, Users, Zap, Award } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "CONCEALED CARRY PERMITS",
    description:
      "Complete CCW training and certification process including legal requirements and practical skills.",
    features: ["Legal education", "Safe handling", "Marksmanship", "Permit assistance"],
  },
  {
    icon: Target,
    title: "TACTICAL TRAINING",
    description:
      "Advanced tactical shooting techniques for law enforcement, military, and serious enthusiasts.",
    features: ["Combat shooting", "Movement tactics", "Stress training", "Team coordination"],
  },
  {
    icon: Home,
    title: "HOME DEFENSE",
    description:
      "Comprehensive home security and defensive shooting strategies for family protection.",
    features: ["Threat assessment", "Room clearing", "Family safety", "Legal considerations"],
  },
  {
    icon: Users,
    title: "GROUP TRAINING",
    description:
      "Specialized programs for organizations, clubs, and corporate security teams.",
    features: ["Custom curricula", "Team building", "Group discounts", "On-site options"],
  },
  {
    icon: Zap,
    title: "ADVANCED MARKSMANSHIP",
    description:
      "Precision shooting techniques for competitive and long-range applications.",
    features: ["Precision rifles", "Competition prep", "Ballistics training", "Equipment selection"],
  },
  {
    icon: Award,
    title: "INSTRUCTOR DEVELOPMENT",
    description:
      "Train-the-trainer programs for aspiring firearms instructors and range safety officers.",
    features: ["Teaching methods", "Safety protocols", "Certification prep", "Mentorship"],
  },
];

const WhatWeOffer = () => {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.tagBox}>
            <Target className={styles.iconSmall} />
            <span className={styles.tagText}>WHAT WE OFFER</span>
          </div>
          <h2 className={styles.title}>
            COMPREHENSIVE <span className={styles.highlight}>TRAINING SERVICES</span>
          </h2>
          <p className={styles.description}>
            From basic safety to advanced tactical operations, we provide specialized training
            programs designed to meet your specific needs and skill level.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <service.icon className={styles.icon} />
                </div>
                <div className={styles.indexBox}>{String(index + 1).padStart(2, '0')}</div>
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <div>
                <h4 className={styles.includesTitle}>INCLUDES:</h4>
                <ul className={styles.featureList}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <div className={styles.bullet}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className={styles.learnMore}>LEARN MORE</button>
            </div>
          ))}
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            NOT SURE WHICH PROGRAM IS RIGHT FOR YOU?
          </h3>
          <p className={styles.ctaText}>
            Our experienced instructors will help you choose the perfect training program based on your goals and experience level.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryCta}>SCHEDULE CONSULTATION</button>
            <button className={styles.secondaryCta}>CALL (360) 555-0123</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
