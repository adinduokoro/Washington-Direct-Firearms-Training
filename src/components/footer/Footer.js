import React from "react";
import styles from "./Footer.module.css";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Shield, Award, Users } from "lucide-react";
import logoImage from "../../assets/images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Training Programs', href: '#classes' },
    { label: 'Facility Tour', href: '#location' },
    { label: 'Contact Us', href: '#contact' }
  ];

  const services = [
    { label: 'CCW Permits', href: '#services' },
    { label: 'Tactical Training', href: '#services' },
    { label: 'Home Defense', href: '#services' },
    { label: 'Group Training', href: '#services' }
  ];

  const legal = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Safety Policies', href: '#' },
    { label: 'Refund Policy', href: '#' }
  ];

  const certifications = [
    { icon: Shield, label: 'NRA Certified' },
    { icon: Award, label: 'State Licensed' },
    { icon: Users, label: 'Military Veteran Owned' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logoWrap}>
              <img src={logoImage} alt="Washington Direct Firearm Training" className={styles.logo} />
              <div>
                <div className={styles.brandName}>WASHINGTON DIRECT</div>
                <div className={styles.tagline}>FIREARM TRAINING</div>
              </div>
            </div>
            <p className={styles.description}>
              Washington's premier firearms training facility, providing professional instruction 
              for all skill levels. Safety, precision, and excellence in every program.
            </p>
            <div className={styles.certifications}>
              <h4>CERTIFICATIONS</h4>
              {certifications.map((cert, index) => (
                <div key={index} className={styles.certItem}>
                  <cert.icon className={styles.certIcon} />
                  <span>{cert.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className={styles.title}>QUICK LINKS</h3>
            <ul className={styles.linkList}>
              {quickLinks.map((link, index) => (
                <li key={index}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
            <h3 className={`${styles.title} ${styles.mt}`}>LEGAL</h3>
            <ul className={styles.linkList}>
              {legal.map((link, index) => (
                <li key={index}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.title}>SERVICES</h3>
            <ul className={styles.linkList}>
              {services.map((service, index) => (
                <li key={index}><a href={service.href}>{service.label}</a></li>
              ))}
            </ul>
            <div className={styles.contactSection}>
              <h3 className={styles.title}>CONTACT</h3>
              <div className={styles.contactItem}><Phone className={styles.icon} /><span>(360) 555-0123</span></div>
              <div className={styles.contactItem}><Mail className={styles.icon} /><span>info@wdfirearms.com</span></div>
              <div className={styles.contactItem}>
                <MapPin className={styles.icon} />
                <span>1234 Range Road<br />Spokane, WA 99201</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className={styles.title}>STAY CONNECTED</h3>
            <p className={styles.description}>Get training tips, safety updates, and class announcements.</p>
            <div className={styles.newsletter}>
              <input type="email" placeholder="Enter email address" className={styles.input} />
              <button className={styles.button}>JOIN</button>
            </div>
            <h4 className={styles.subheading}>FOLLOW US</h4>
            <div className={styles.socialIcons}>
              <button className={styles.socialBtn}><Facebook /></button>
              <button className={styles.socialBtn}><Instagram /></button>
              <button className={styles.socialBtn}><Twitter /></button>
            </div>
            <div className={styles.hours}>
              <h4 className={styles.subheading}>HOURS</h4>
              <div><span>Mon - Fri</span><span>9AM - 6PM</span></div>
              <div><span>Saturday</span><span>8AM - 5PM</span></div>
              <div><span>Sunday</span><span>By Appointment</span></div>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div>© {currentYear} Washington Direct Firearm Training. All rights reserved.</div>
          <div className={styles.legalLine}>
            <span>Licensed & Insured</span>
            <span>•</span>
            <span>NRA Certified Instructors</span>
            <span>•</span>
            <span>100% Safety Record</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;