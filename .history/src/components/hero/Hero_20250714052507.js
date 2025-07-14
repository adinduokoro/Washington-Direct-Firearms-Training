// Hero.jsx
import React from "react";
import styles from "./Hero.module.css";
import { Award, Play, Shield, Users } from "lucide-react";

const stats = [
  { value: "15+", label: "YEARS EXPERIENCE" },
  { value: "2500+", label: "STUDENTS TRAINED" },
  { value: "100%", label: "SAFETY RECORD" },
];

const features = [
  {
    icon: <Award className={styles.icon} />, 
    title: "CERTIFIED INSTRUCTORS", 
    text: "NRA & Military trained professionals"
  },
  {
    icon: <Shield className={styles.icon} />, 
    title: "SAFETY FIRST", 
    text: "Comprehensive safety protocols"
  },
  {
    icon: <Users className={styles.icon} />, 
    title: "ALL SKILL LEVELS", 
    text: "From beginners to advanced operators"
  }
];

const Hero = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.backgroundImageWrapper}>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=2000&q=80"
          alt="Tactical firearms training background"
          className={styles.backgroundImage}
        />
        <div className={styles.overlayDark}></div>
        <div className={styles.overlayGradient}></div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.gridWrapper}>
          <div className={styles.leftContent}>
            <div className={styles.badge}>
              <Shield className={styles.badgeIcon} />
              <span className={styles.badgeText}>WASHINGTON STATE CERTIFIED</span>
            </div>
            <h1 className={styles.mainTitle}>TRAIN WITH <span className={styles.highlight}>THE BEST</span></h1>
            <p className={styles.subheadline}>
              Professional firearms training for civilians, law enforcement, and military personnel.
              <span className={styles.subText}>Master your skills. Build confidence. Stay safe.</span>
            </p>

            <div className={styles.ctaWrapper}>
              <button className={styles.primaryBtn}>BOOK YOUR TRAINING</button>
              <button className={styles.secondaryBtn}>
                <Play className={styles.playIcon} /> WATCH VIDEO
              </button>
            </div>

            <div className={styles.statsWrapper}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statBox}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.rightContent}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIconWrapper}>{feature.icon}</div>
                <div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureText}>{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicatorWrapper}>
        <div className={styles.scrollIndicatorContainer}>
          <div className={styles.scrollDot}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
