import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const PageHero = ({ title, breadcrumb }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => {
      heroRef.current?.classList.add("ph-visible");
    }, 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="page-hero-section" ref={heroRef}>
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=80"
        alt="page hero"
        className="ph-bg-img"
      />

    
      <div className="ph-overlay-dark" />
      <div className="ph-overlay-teal" />

      
      <div className="ph-particles">
        {[...Array(14)].map((_, i) => (
          <span key={i} className="ph-particle" style={{ "--i": i }} />
        ))}
      </div>

    
      <div className="ph-dot-grid" />

      <Container className="ph-content">
      
        <h1 className="ph-title">{title}</h1>

      
        <div className="ph-breadcrumb">
          <span className="ph-bc-icon">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </span>
          <Link to="/" className="ph-bc-link">Home</Link>
          <span className="ph-bc-sep">›</span>
          <span className="ph-bc-current">{breadcrumb}</span>
        </div>
      </Container>

    
      <div className="ph-wave">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
          <path
            d="M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z"
            fill="#eef1f6"
          />
        </svg>
      </div>
    </section>
  );
};

export default PageHero;