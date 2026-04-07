import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Services from "./components/Services"
import About from "./components/About";
import Solutions from "./components/Solutions";
import Portfolio from "./components/Portfolio";
import StatsTestimonials from "./components/StatesTestimonial";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="app-root">
      <Navbar />
      <Hero />
      <Ticker />
      <Services />
      <About />
      <Solutions />
      <Portfolio />
      <StatsTestimonials />
      <FAQ />
      <Contact />
    </div>
  );
}

export default App;