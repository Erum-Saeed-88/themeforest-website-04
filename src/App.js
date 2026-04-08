import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";


import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Services from "./components/Services";
import About from "./components/About";
import Solutions from "./components/Solutions";
import Portfolio from "./components/Portfolio";
import StatsTestimonials from "./components/StatesTestimonial";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Blog from "./components/Blog";


import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

import "./App.css";


const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};


const HomePage = () => (
  <>
    <Hero />
    <Ticker />
    <Services />
    <About />
    <Solutions />
    <Portfolio />
    <StatsTestimonials />
    <FAQ />
    <Contact />
    <Blog />
  </>
);


const Layout = ({ children }) => (
  <>
    <Navbar />
    <main style={{ paddingTop: 0 }}>{children}</main>
    <Footer />
    <BackToTop />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/"          element={<HomePage />} />
          <Route path="/home"      element={<HomePage />} />
          <Route path="/about"     element={<AboutPage />} />
          <Route path="/services"  element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/blog"      element={<BlogPage />} />
          <Route path="/contact"   element={<ContactPage />} />
          {/* 404 fallback */}
          <Route path="*" element={
            <div style={{
              minHeight: "80vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Syne, sans-serif",
              color: "#0c1a2e",
              gap: "16px"
            }}>
              <h1 style={{ fontSize: "6rem", fontWeight: 800, margin: 0, color: "#0abfbc" }}>404</h1>
              <p style={{ fontSize: "1.2rem", color: "#6b7a90" }}>Page not found</p>
              <a href="/" style={{
                background: "#0abfbc", color: "#fff",
                padding: "12px 28px", borderRadius: "100px",
                textDecoration: "none", fontWeight: 600, fontSize: "0.9rem"
              }}>Go Home</a>
            </div>
          }/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;