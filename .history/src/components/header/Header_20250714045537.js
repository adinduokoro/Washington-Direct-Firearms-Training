// Header.jsx
import { useState } from "react";
import styles from "./Header.module.css";
import { Phone, Mail, Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: "HOME", id: "hero" },
    { label: "ABOUT", id: "about" },
    { label: "SERVICES", id: "services" },
    { label: "CLASSES", id: "classes" },
    { label: "GALLERY", id: "gallery" },
    { label: "LOCATION", id: "location" },
    { label: "CONTACT", id: "contact" },
  ];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <img
            src={logo}
            alt="Washington Direct Firearm Training"
            className={styles.logo}
          />
          <div className={styles.logoText}>
            <div className={styles.logoTitle}>WASHINGTON DIRECT</div>
            <div className={styles.logoSubtitle}>FIREARM TRAINING</div>
          </div>
        </div>

        <nav className={styles.navLinks}>
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={styles.navLink}
            >
              {link.label}
              <span className={styles.underline}></span>
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className={`${styles.mobileNav} $`}>
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={styles.mobileLink}
            >
              {link.label}
            </a>
          ))}
          <button className={styles.mobileBookBtn}>BOOK TRAINING</button>
        </div>
      )}
    </header>
  );
};

export default Header;
