import React, { useState } from "react";
import styles from "./Gallery.module.css";
import { Camera, Play, Eye } from "lucide-react";
// import { Card } from "./ui/card";
// import { Button } from "./ui/button";
// import { Badge } from "./ui/badge";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const galleryItems = [
    // ... same as above (abbreviated for brevity)
  ];

  const filters = [
    { key: "all", label: "ALL" },
    { key: "training", label: "TRAINING" },
    { key: "facility", label: "FACILITY" },
    { key: "students", label: "STUDENTS" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className={styles.container}>
        <div className={styles.headerBlock}>
          <div className={styles.labelWrap}>
            <Camera className={styles.icon} />
            <span className={styles.label}>GALLERY</span>
          </div>
          <h2 className={styles.heading}>
            TRAINING IN <span>ACTION</span>
          </h2>
          <p className={styles.subtext}>
            See our world-class facilities, professional instructors, and
            successful students in action. Experience the quality of our
            training programs.
          </p>
        </div>

        <div className={styles.filters}>
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={
                activeFilter === filter.key
                  ? styles.activeFilterBtn
                  : styles.filterBtn
              }
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className={styles.galleryGrid}>
          {filteredItems.map((item) => (
            // <Card key={item.id} className={styles.card}>
              <div className={styles.mediaWrapper}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.image}
                />
                <div className={styles.overlay}></div>

                {item.type === "video" && (
                  <div className={styles.videoBadge}>
                    {/* <Badge className={styles.badge}> */}
                      <Play className={styles.playIcon} /> <span>VIDEO</span>
                    {/* </Badge> */}
                  </div>
                )}

                <div className={styles.hoverOverlay}>
                  {/* <Button className={styles.viewBtn}> */}
                    <Eye className={styles.eyeIcon} /> VIEW
                  {/* </Button> */}
                </div>

                <div className={styles.cardInfo}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </div>
            // </Card>
          ))}
        </div>

        <div className={styles.loadMoreWrapper}>
          {/* <Button className={styles.loadMoreBtn}>LOAD MORE IMAGES</Button> */}
        </div>

        <div className={styles.statsBox}>
          <div className={styles.statsGrid}>
            <div>
              <div className={styles.statNumber}>2500+</div>
              <div className={styles.statLabel}>STUDENTS TRAINED</div>
            </div>
            <div>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>YEARS EXPERIENCE</div>
            </div>
            <div>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>SAFETY RECORD</div>
            </div>
            <div>
              <div className={styles.statNumber}>4.9★</div>
              <div className={styles.statLabel}>AVERAGE RATING</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
