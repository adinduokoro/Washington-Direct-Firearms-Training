// AboutUs.jsx
import React from "react";
import styles from "./AboutUs.module.css";
import { Shield, Target, Award, Clock } from "lucide-react";

const valueItems = [
  {
    icon: <Shield className={styles.iconMedium} />,
    title: "SAFETY FIRST",
    text: "Every training begins with comprehensive safety protocols",
  },
  {
    icon: <Target className={styles.iconMedium} />,
    title: "PRECISION TRAINING",
    text: "Focused instruction on accuracy and technique",
  },
  {
    icon: <Award className={styles.iconMedium} />,
    title: "CERTIFIED EXPERTS",
    text: "Military and law enforcement backgrounds",
  },
  {
    icon: <Clock className={styles.iconMedium} />,
    title: "PROVEN METHODS",
    text: "Time-tested training methodologies",
  },
];

const imageCards = [
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
    alt: "Modern training facility",
    caption: "STATE-OF-THE-ART FACILITY",
  },
  {
    src: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=400&q=80",
    alt: "Safety equipment and gear",
    caption: "PROFESSIONAL EQUIPMENT",
  },
];

const AboutUs = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Side */}
          <div>
            <div className={styles.tagBox}>
              <Shield className={styles.iconSmall} />
              <span className={styles.tagText}>ABOUT US</span>
            </div>

            <h2 className={styles.title}>
              WASHINGTON'S PREMIER{" "}
              <span className={styles.highlight}>FIREARMS TRAINING</span>
            </h2>

            <p className={styles.paragraph}>
              Washington Direct Firearm Training is dedicated to providing the
              highest quality firearms education and tactical training in the
              Pacific Northwest. Our mission is to develop competent, confident,
              and safe shooters through professional instruction and proven
              methodologies.
            </p>

            <p className={styles.subParagraph}>
              Founded by military veterans and law enforcement professionals, we
              bring real-world experience to every training session. Whether
              you're a complete beginner or an experienced shooter looking to
              enhance your skills, our comprehensive programs are designed to
              meet you where you are and take you to the next level.
            </p>

            <div className={styles.valuesGrid}>
              {valueItems.map((item, index) => (
                <div key={index} className={styles.valueItem}>
                  <div className={styles.iconBox}>{item.icon}</div>
                  <div>
                    <h4 className={styles.valueTitle}>{item.title}</h4>
                    <p className={styles.valueText}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className={styles.rightSide}>
            <div className={styles.cardLarge}>
              <div className={styles.imageWrapperLarge}>
                <img
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80"
                  alt="Professional firearms instructors"
                  className={styles.image}
                />
                <div className={styles.overlay}></div>
                <div className={styles.caption}>
                  <h4>EXPERT INSTRUCTORS</h4>
                  <p>Military & Law Enforcement Veterans</p>
                </div>
              </div>
            </div>

            <div className={styles.gridImages}>
              {imageCards.map((img, idx) => (
                <div key={idx} className={styles.cardSmall}>
                  <div className={styles.imageWrapperSmall}>
                    <img src={img.src} alt={img.alt} className={styles.image} />
                    <div className={styles.overlay}></div>
                    <div className={styles.captionSmall}>
                      <p>{img.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
