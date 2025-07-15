// ProductsClasses.jsx
import React from "react";
import styles from "./ProductsClasses.module.css";
import { Calendar, Clock, Users, Star } from "lucide-react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

const ProductsClasses = () => {
  const classes = [
    {
      id: 1,
      title: "Basic Firearms Safety",
      category: "BEGINNER",
      duration: "4 hours",
      capacity: "12 students",
      price: "$149",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=600&q=80",
      description:
        "Essential firearm safety and handling fundamentals for new shooters.",
      features: [
        "Safety protocols",
        "Basic handling",
        "Range etiquette",
        "Certificate included",
      ],
      nextDate: "Jan 28, 2025",
      popular: false,
    },
    {
      id: 2,
      title: "Concealed Carry Permit",
      category: "CERTIFICATION",
      duration: "8 hours",
      capacity: "16 students",
      price: "$299",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80",
      description:
        "Complete CCW training including legal requirements and practical application.",
      features: [
        "Legal education",
        "Practical training",
        "Permit application",
        "Ongoing support",
      ],
      nextDate: "Feb 1, 2025",
      popular: true,
    },
    {
      id: 3,
      title: "Home Defense Tactics",
      category: "INTERMEDIATE",
      duration: "6 hours",
      capacity: "10 students",
      price: "$249",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=600&q=80",
      description:
        "Advanced home security strategies and defensive shooting techniques.",
      features: [
        "Threat assessment",
        "Room clearing",
        "Family safety",
        "Scenario training",
      ],
      nextDate: "Feb 5, 2025",
      popular: false,
    },
    {
      id: 4,
      title: "Tactical Rifle Course",
      category: "ADVANCED",
      duration: "Full Day",
      capacity: "8 students",
      price: "$449",
      rating: 5.0,
      image:
        "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=600&q=80",
      description:
        "Comprehensive tactical rifle training for serious operators.",
      features: [
        "Advanced techniques",
        "Movement drills",
        "Stress scenarios",
        "Equipment optimization",
      ],
      nextDate: "Feb 10, 2025",
      popular: false,
    },
    {
      id: 5,
      title: "Precision Marksmanship",
      category: "ADVANCED",
      duration: "6 hours",
      capacity: "6 students",
      price: "$349",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?auto=format&fit=crop&w=600&q=80",
      description: "Long-range shooting fundamentals and precision techniques.",
      features: [
        "Ballistics training",
        "Equipment setup",
        "Weather factors",
        "Competition prep",
      ],
      nextDate: "Feb 12, 2025",
      popular: false,
    },
    {
      id: 6,
      title: "Women's Self-Defense",
      category: "SPECIALTY",
      duration: "4 hours",
      capacity: "12 students",
      price: "$199",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
      description:
        "Empowering women with practical self-defense and firearm skills.",
      features: [
        "Personal safety",
        "Situational awareness",
        "Firearm basics",
        "Confidence building",
      ],
      nextDate: "Feb 15, 2025",
      popular: true,
    },
  ];

  return (
    <section id="classes" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerBlock}>
          <div className={styles.labelWrap}>
            <Calendar size={16} className={styles.icon} />
            <span className={styles.label}>TRAINING CLASSES</span>
          </div>
          <h2 className={styles.heading}>FEATURED <span>TRAINING PROGRAMS</span></h2>
          <p className={styles.subtext}>
            Choose from our comprehensive selection of training courses designed for all skill levels,
            from complete beginners to advanced tactical operators.
          </p>
        </div>

        <div className={styles.grid}>
          {classes.map((course) => (
            <div key={course.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={course.image}
                  alt={course.title}
                  className={styles.image}
                />
                <div className={styles.overlay}></div>
                <div className={styles.badges}>
                  <span className={styles.badge}>{course.category}</span>
                  {course.popular && <span className={styles.popular}>POPULAR</span>}
                </div>
                <div className={styles.price}><span>{course.price}</span></div>
                <div className={styles.rating}>
                  <Star size={14} className={styles.star} />
                  <span>{course.rating}</span>
                </div>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{course.title}</h3>
                <p className={styles.cardDescription}>{course.description}</p>
                <div className={styles.courseDetails}>
                  <div className={styles.detail}><Clock size={14} /><span>{course.duration}</span></div>
                  <div className={styles.detail}><Users size={14} /><span>{course.capacity}</span></div>
                </div>
                <div>
                  <h4 className={styles.includesTitle}>INCLUDES:</h4>
                  <ul className={styles.featuresList}>
                    {course.features.map((feature, idx) => (
                      <li key={idx} className={styles.featureItem}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.sessionBox}>
                  <div className={styles.sessionLabel}>NEXT SESSION</div>
                  <div className={styles.sessionDate}>{course.nextDate}</div>
                </div>
                <div className={styles.actions}>
                  <button className={styles.primaryBtn}>REGISTER NOW</button>
                  <button className={styles.secondaryBtn}>VIEW DETAILS</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottomCTA}>
          <h3>LOOKING FOR CUSTOM TRAINING?</h3>
          <p>
            We offer specialized training programs tailored to your organization's specific needs.
            Contact us to discuss custom curricula and group rates.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryBtn}>REQUEST CUSTOM TRAINING</button>
            <button className={styles.secondaryBtn}>VIEW ALL CLASSES</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsClasses;
