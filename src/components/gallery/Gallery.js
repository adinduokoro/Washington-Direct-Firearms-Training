import React, { useState, useEffect } from "react";
import styles from "./Gallery.module.css";
import { Camera, ChevronLeft, ChevronRight, X, Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogOverlay,
} from "../../ui/dialog/Dialog";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const galleryItems = [
    {
      id: 1,
      type: "image",
      title: "Tactical Rifle Training",
      image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=400&q=80",
      description: "Advanced tactical rifle course in action",
    },
    {
      id: 2,
      type: "image",
      title: "Indoor Range Facility",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
      description: "State-of-the-art indoor shooting range",
    },
    {
      id: 3,
      type: "video",
      title: "CCW Training Session",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=400&q=80",
      description: "Concealed carry permit training highlights",
    },
    {
      id: 4,
      type: "image",
      title: "Women's Self-Defense Class",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80",
      description: "Empowering women through firearms training",
    },
    {
      id: 5,
      type: "image",
      title: "Precision Marksmanship",
      image: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?auto=format&fit=crop&w=400&q=80",
      description: "Long-range precision shooting techniques",
    },
    {
      id: 6,
      type: "image",
      title: "Equipment & Safety Gear",
      image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=400&q=80",
      description: "Professional training equipment and safety gear",
    },
    {
      id: 7,
      type: "video",
      title: "Home Defense Tactics",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=400&q=80",
      description: "Home defense scenario training",
    },
    {
      id: 8,
      type: "image",
      title: "Group Training Session",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=400&q=80",
      description: "Corporate group training program",
    },
    {
      id: 9,
      type: "image",
      title: "Outdoor Range",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?auto=format&fit=crop&w=400&q=80",
      description: "Outdoor tactical training range",
    },
  ];

  const openCarousel = (index) => setSelectedImageIndex(index);
  const closeCarousel = () => setSelectedImageIndex(null);
  const goToPrevious = () =>
    setSelectedImageIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  const goToNext = () =>
    setSelectedImageIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));

  const currentItem = selectedImageIndex !== null ? galleryItems[selectedImageIndex] : null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "Escape") closeCarousel();
    };
    if (selectedImageIndex !== null) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [selectedImageIndex]);

  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className={styles.container}>
        <div className={styles.textCenter}>
          <div className={styles.badge}>
            <Camera size={16} />
            <span>GALLERY</span>
          </div>
          <h2 className={styles.galleryTitle}>
            TRAINING IN <span>ACTION</span>
          </h2>
          <p className={styles.galleryDescription}>
            Click any image to explore our world-class facilities, professional instructors,
            and successful students in action.
          </p>
        </div>

        <div className={styles.galleryGrid}>
          {galleryItems.map((item, index) => (
            <div key={item.id} className={styles.galleryItem} onClick={() => openCarousel(index)}>
              <img src={item.thumbnail} alt={item.title} className={styles.thumbnail} />
              <div className={styles.overlay} />
              {item.type === "video" && (
                <div className={styles.videoIndicator}>
                  <Play size={12} />
                </div>
              )}
              <div className={styles.hoverOverlay}>
                <div className={styles.hoverOverlayText}>
                  <Camera size={24} />
                  <p>VIEW</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.stats}>
          <div className={styles.statsGrid}>
            <div>
              <div className={styles.statValue}>2500+</div>
              <div className={styles.statLabel}>STUDENTS TRAINED</div>
            </div>
            <div>
              <div className={styles.statValue}>15+</div>
              <div className={styles.statLabel}>YEARS EXPERIENCE</div>
            </div>
            <div>
              <div className={styles.statValue}>100%</div>
              <div className={styles.statLabel}>SAFETY RECORD</div>
            </div>
            <div>
              <div className={styles.statValue}>4.9★</div>
              <div className={styles.statLabel}>AVERAGE RATING</div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={selectedImageIndex !== null} onOpenChange={closeCarousel}>
        <DialogContent>
          {currentItem && (
            <>
              <DialogTitle className="sr-only">{currentItem.title}</DialogTitle>
              <DialogDescription className="sr-only">{currentItem.description}</DialogDescription>

              <div className="carouselContent">
                <button onClick={closeCarousel}>
                  <X />
                </button>
                <button onClick={goToPrevious}>
                  <ChevronLeft />
                </button>
                <button onClick={goToNext}>
                  <ChevronRight />
                </button>

                <div className="mainImageWrapper">
                  <img src={currentItem.image} alt={currentItem.title} style={{width: "100%"}}/>
                  {currentItem.type === "video" && (
                    <div className="videoPlay">
                      <Play size={32} />
                    </div>
                  )}
                </div>

                <div className="caption">
                  <h3>{currentItem.title}</h3>
                  <p>{currentItem.description}</p>
                  <small>
                    {selectedImageIndex + 1} of {galleryItems.length}
                  </small>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
