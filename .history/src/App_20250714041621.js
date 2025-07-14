import { Header } from "./components";
import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { WhatWeOffer } from "./components/WhatWeOffer";
import { ProductsClasses } from "./components/ProductsClasses";
import { Gallery } from "./components/Gallery";
import { LocationInfo } from "./components/LocationInfo";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--background)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
