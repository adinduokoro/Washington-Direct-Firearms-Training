// AboutUs.jsx
import React from "react";
import styles from "./AboutUs.module.css";
import { Shield, Target, Award, Clock } from "lucide-react";
// import { ImageWithFallback } from "../figma/ImageWithFallback";

const AboutUs = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.leftContent}>
            <div className={styles.badge}>
              <Shield className={styles.badgeIcon} />
              <span className={styles.badgeText}>ABOUT US</span>
            </div>

            <h2 className={styles.heading}>
              WASHINGTON'S PREMIER
              <span className={styles.highlight}>FIREARMS TRAINING</span>
            </h2>

            <p className={styles.description}>
              Washington Direct Firearm Training is dedicated to providing the highest quality firearms 
              education and tactical training in the Pacific Northwest. Our mission is to develop competent, 
              confident, and safe shooters through professional instruction and proven methodologies.
            </p>

            <p className={styles.subDescription}>
              Founded by military veterans and law enforcement professionals, we bring real-world experience 
              to every training session. Whether you're a complete beginner or an experienced shooter looking 
              to enhance your skills, our comprehensive programs are designed to meet you where you are and 
              take you to the next level.
            </p>

            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}><Shield /></div>
                <div>
                  <h4 className={styles.valueTitle}>SAFETY FIRST</h4>
                  <p className={styles.valueText}>Every training begins with comprehensive safety protocols</p>
                </div>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}><Target /></div>
                <div>
                  <h4 className={styles.valueTitle}>PRECISION TRAINING</h4>
                  <p className={styles.valueText}>Focused instruction on accuracy and technique</p>
                </div>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}><Award /></div>
                <div>
                  <h4 className={styles.valueTitle}>CERTIFIED EXPERTS</h4>
                  <p className={styles.valueText}>Military and law enforcement backgrounds</p>
                </div>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}><Clock /></div>
                <div>
                  <h4 className={styles.valueTitle}>PROVEN METHODS</h4>
                  <p className={styles.valueText}>Time-tested training methodologies</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.rightContent}>
            <div className={styles.imageCard}>
              <div className={styles.imageWrapper}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80"
                  alt="Professional firearms instructors"
                  className={styles.image}
                />
                <div className={styles.imageOverlay}></div>
                <div className={styles.imageCaption}>
                  <h4>EXPERT INSTRUCTORS</h4>
                  <p>Military & Law Enforcement Veterans</p>
                </div>
              </div>
            </div>

            <div className={styles.smallGrid}>
              <div className={styles.smallCard}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80"
                  alt="Modern training facility"
                  className={styles.image}
                />
                <div className={styles.imageOverlay}></div>
                <div className={styles.imageCaptionSmall}>STATE-OF-THE-ART FACILITY</div>
              </div>
              <div className={styles.smallCard}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=400&q=80"
                  alt="Safety equipment and gear"
                  className={styles.image}
                />
                <div className={styles.imageOverlay}></div>
                <div className={styles.imageCaptionSmall}>PROFESSIONAL EQUIPMENT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
