import React from 'react'
import { AboutUs, Contact, Gallery, Hero, LocationInfo, ProductsClasses, WhatWeOffer } from '../../components'
// import { Hero } from "./components/Hero";
// import { AboutUs } from "./components/AboutUs";
// import { WhatWeOffer } from "./components/WhatWeOffer";
// import { ProductsClasses } from "./components/ProductsClasses";
// import { Gallery } from "./components/Gallery";
// import { LocationInfo } from "./components/LocationInfo";
// import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <WhatWeOffer />
      <ProductsClasses />
      <Gallery />
      <LocationInfo />
      <Contact />
    </div>
  )
}

export default HomePage
