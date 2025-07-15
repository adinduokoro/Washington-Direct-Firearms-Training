import React from "react";
import styles from "./LocationInfo.module.css";
import { MapPin, Clock, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const LocationInfo = () => {
  const businessHours = [
    { day: 'Monday', hours: '9:00 AM - 6:00 PM', available: true },
    { day: 'Tuesday', hours: '9:00 AM - 6:00 PM', available: true },
    { day: 'Wednesday', hours: '9:00 AM - 6:00 PM', available: true },
    { day: 'Thursday', hours: '9:00 AM - 8:00 PM', available: true },
    { day: 'Friday', hours: '9:00 AM - 8:00 PM', available: true },
    { day: 'Saturday', hours: '8:00 AM - 5:00 PM', available: true },
    { day: 'Sunday', hours: 'By Appointment', available: false }
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: 'PHONE',
      value: '(360) 555-0123',
      action: 'Call Now',
      href: 'tel:+13605550123'
    },
    {
      icon: Mail,
      label: 'EMAIL',
      value: 'info@wdfirearms.com',
      action: 'Send Email',
      href: 'mailto:info@wdfirearms.com'
    },
    {
      icon: MapPin,
      label: 'ADDRESS',
      value: '1234 Range Road, Spokane, WA 99201',
      action: 'Get Directions',
      href: 'https://maps.google.com/?q=1234+Range+Road+Spokane+WA'
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <section id="location" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <MapPin className={styles.iconSmall} />
            <span>LOCATION & HOURS</span>
          </div>
          <h2 className={styles.title}>VISIT OUR <span>TRAINING FACILITY</span></h2>
          <p className={styles.description}>
            Located in Spokane, Washington, our state-of-the-art facility offers both indoor and outdoor 
            ranges with modern equipment and professional instruction.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.leftColumn}>
            <div className={styles.card}>
              <h4>CONTACT INFORMATION</h4>
              <div className={styles.cardContent}>
                {contactInfo.map((contact, index) => (
                  <div key={index} className={styles.contactBox}>
                    <div className={styles.contactIcon}><contact.icon className={styles.iconSmall} /></div>
                    <div className={styles.contactDetails}>
                      <div className={styles.label}>{contact.label}</div>
                      <div className={styles.value}>{contact.value}</div>
                      <button className={styles.button} onClick={() => window.open(contact.href, '_blank')}>
                        {contact.action}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.card}>
              <h4><Clock className={styles.iconSmall} /> BUSINESS HOURS</h4>
              <div className={styles.cardContent}>
                {businessHours.map((schedule, index) => (
                  <div key={index} className={styles.hoursRow}>
                    <div>{schedule.day}</div>
                    <div className={styles.hoursInfo}>
                      <span className={schedule.available ? styles.open : styles.closed}>{schedule.hours}</span>
                      {schedule.available && <span className={styles.badgeOpen}>OPEN</span>}
                    </div>
                  </div>
                ))}
                <div className={styles.specialBox}>
                  <div className={styles.label}>SPECIAL HOURS</div>
                  <div className={styles.notes}>
                    • Extended hours available for private training sessions<br />
                    • Holiday hours may vary - please call ahead<br />
                    • 24/7 emergency training available for law enforcement
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <h4>FOLLOW US</h4>
              <div className={styles.socialButtons}>
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    className={styles.button}
                    onClick={() => window.open(social.href, '_blank')}
                  >
                    <social.icon className={styles.iconSmall} /> {social.label}
                  </button>
                ))}
              </div>
              <p className={styles.notes}>Stay updated with our latest training sessions, safety tips, and community events.</p>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.mapCard}>
              <div className={styles.mockMap}>
                <MapPin className={styles.iconLarge} />
                <div>INTERACTIVE MAP</div>
                <div>1234 Range Road, Spokane, WA</div>
                <button
                  className={styles.button}
                  onClick={() => window.open('https://maps.google.com/?q=1234+Range+Road+Spokane+WA', '_blank')}
                >
                  OPEN IN GOOGLE MAPS
                </button>
              </div>
              <span className={styles.badgeMap}>CLICK TO VIEW</span>
            </div>

            <div className={styles.card}>
              <h4>DIRECTIONS & PARKING</h4>
              <div className={styles.directions}>
                <div>
                  <div className={styles.bullet}></div>
                  <div>
                    <strong>From I-90 East/West</strong>
                    <p>Take Exit 281, follow signs to Range Road</p>
                  </div>
                </div>
                <div>
                  <div className={styles.bullet}></div>
                  <div>
                    <strong>From Downtown Spokane</strong>
                    <p>15 minute drive via Highway 2 North</p>
                  </div>
                </div>
                <div>
                  <div className={styles.bullet}></div>
                  <div>
                    <strong>Parking Available</strong>
                    <p>Free parking for all students and visitors</p>
                  </div>
                </div>
              </div>
              <div className={styles.specialBox}>
                <div className={styles.label}>FACILITY FEATURES</div>
                <div className={styles.notes}>
                  ✓ Climate-controlled indoor ranges<br />
                  ✓ Outdoor tactical training area<br />
                  ✓ Equipment rental available<br />
                  ✓ Ammunition sales on-site<br />
                  ✓ Handicap accessible
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationInfo;