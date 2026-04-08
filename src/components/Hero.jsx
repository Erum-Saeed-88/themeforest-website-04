import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

const avatars = [
  "https://i.pravatar.cc/40?img=11",
  "https://i.pravatar.cc/40?img=22",
  "https://i.pravatar.cc/40?img=33",
];

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heroRef.current?.classList.add("hero-visible");
        }
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      
      <div className="hero-orb orb-1" />
      <div className="hero-orb orb-2" />
      <div className="hero-grid-lines" />

      <Container fluid className="h-100 px-0">
        <Row className="h-100 g-0">
          
          <Col lg={6} className="hero-left">
            <div className="hero-left-inner">
            
              <div className="hero-badge">
                <span className="badge-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="9" height="9" rx="1.5" fill="#0ABFBC" />
                    <rect x="13" y="2" width="9" height="9" rx="1.5" fill="#0ABFBC" opacity="0.5" />
                    <rect x="2" y="13" width="9" height="9" rx="1.5" fill="#0ABFBC" opacity="0.5" />
                    <rect x="13" y="13" width="9" height="9" rx="1.5" fill="#0ABFBC" opacity="0.25" />
                  </svg>
                </span>
                <span>RECOGNIZED FOR EXCELLENCE</span>
              </div>

            
              <h1 className="hero-title">
                <span className="title-line line-1">Driving Excellence</span>
                <span className="title-line line-2">Through Evolution</span>
                <span className="title-line line-3">
                  and <em className="teal-word">Trust.</em>
                </span>
              </h1>

              
              <div className="hero-desc-row">
                <div className="arrow-box">
                  <svg width="48" height="48" viewBox="0 0 60 60" fill="none">
                    <rect width="60" height="60" rx="8" fill="rgba(255,255,255,0.05)" />
                    <path
                      d="M18 42L42 18M42 18H24M42 18V36"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="hero-desc">
                  Represents growth, expansion, and modern business solution present
                  growth, expansion.
                </p>
              </div>

          
              <div className="hero-social-row">
                <div className="avatar-stack">
                  {avatars.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`user-${i}`}
                      className="avatar-img"
                      style={{ animationDelay: `${1.4 + i * 0.1}s` }}
                    />
                  ))}
                  <div className="avatar-plus">+</div>
                </div>
                <div className="hero-stats">
                  <span className="stat-number">2.4k+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
              </div>
            </div>
          </Col>

      
          <Col lg={6} className="hero-right">
            <div className="hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                alt="Professional"
                className="hero-img"
              />
              <div className="hero-image-overlay" />

      
              <div className="hero-float-card">
                <div className="float-avatars">
                  {avatars.map((src, i) => (
                    <img key={i} src={src} alt="" className="float-avatar" />
                  ))}
                  <div className="float-plus">+</div>
                </div>
                <div className="float-text">
                  <span className="float-number">500+</span>
                  <span className="float-label">Projects Done</span>
                </div>
              </div>

          
              <div className="hero-accent-dot" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;