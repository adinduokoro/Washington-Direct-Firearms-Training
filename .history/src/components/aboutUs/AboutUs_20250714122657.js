// About.jsx
import styles from "./AboutUs.module.css";
import { CheckCircle, Award, Target, Users, Clock } from "lucide-react";
// import { ImageWithFallback } from "../../figma/ImageWithFallback";

const AboutUs = () => {
  const credentials = [
    "Military Spec Instructors",
    "Special Forces Background",
    "20+ Years Combat Experience",
    "Licensed Training Facility",
    "Tactical Insurance & Bonded",
    "Ongoing Military Development",
  ];

  const stats = [
    { number: "5000+", label: "Operators Trained", icon: Users },
    { number: "15", label: "Years Active", icon: Clock },
    { number: "98%", label: "Mission Success", icon: Target },
    { number: "24/7", label: "Safety Record", icon: Award },
  ];

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.leftContent}>
            <div className={styles.badge}>
              <span className={styles.pulse}></span>
              <span className={styles.badgeText}>MISSION BRIEFING</span>
            </div>

            <h2 className={styles.heading}>
              PRECISION, DISCIPLINE, AND TACTICAL EXCELLENCE
            </h2>

            <p className={styles.paragraph}>
              At Tactical Firearms Training, we operate under military standards with zero tolerance for
              compromise. Our cadre of former special forces operators and law enforcement professionals
              brings decades of real-world combat experience to every training operation.
            </p>

            <p className={styles.paragraph}>
              Our facility maintains the highest operational security and safety protocols while delivering
              combat-proven training methodologies. Every operator receives comprehensive tactical education
              designed for real-world deployment scenarios.
            </p>

            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div key={index} className={`${styles.statBox} tactical-border`}>
                  <div className={styles.statIcon}>
                    <stat.icon className={styles.statIconSvg} />
                  </div>
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.rightContent}>
            <div className={styles.imageWrapper}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop"
                alt="Military tactical instructor"
                className={styles.image}
              />
              <div className={`${styles.corner} ${styles.topLeft}`}></div>
              <div className={`${styles.corner} ${styles.topRight}`}></div>
              <div className={`${styles.corner} ${styles.bottomLeft}`}></div>
              <div className={`${styles.corner} ${styles.bottomRight}`}></div>
            </div>

            <div className={styles.credentialsBox}>
              <h3 className={styles.credentialsTitle}>OPERATIONAL CREDENTIALS</h3>
              <div className={styles.credentialsList}>
                {credentials.map((credential, index) => (
                  <div key={index} className={styles.credentialItem}>
                    <CheckCircle className={styles.checkIcon} />
                    <span>{credential}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
