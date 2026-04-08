import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  const sectionRef = useRef(null);
  const elemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("anim-visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    elemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const ref = (i) => (el) => (elemRefs.current[i] = el);

  return (
    <section className="about-section w-100 h-30 bg-tertiary mb-5" ref={sectionRef}>
      <div className="about-bg-mesh" />

      <Container fluid className="px-0">
        <h2 className="text-center fw-bold text-secondary mb-5 display-5">About Us</h2>
        <Row className="g-0 about-row">

          <Col lg={5} className="about-left">
            <div className="about-img-wrapper" ref={ref(0)}>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80"
                alt="Team"
                className="about-img"
              />
              <div className="about-img-overlay" />

              <div className="about-stat-card" ref={ref(1)}>
                <span className="stat-label">Experiences</span>
                <div className="stat-number">
                  <span className="stat-count">13</span>
                  <span className="stat-plus">+</span>
                </div>
                <span className="stat-sub">Decades of Experience<br />Endless Innovation</span>
              </div>
            </div>
          </Col>

          <Col lg={7} className="about-right">
            <div className="about-right-inner">

              <div className="about-badge text-center" ref={ref(2)}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="9" height="9" rx="1.5" fill="#0abfbc" />
                  <rect x="13" y="2" width="9" height="9" rx="1.5" fill="#0abfbc" opacity="0.5" />
                  <rect x="2" y="13" width="9" height="9" rx="1.5" fill="#0abfbc" opacity="0.5" />
                  <rect x="13" y="13" width="9" height="9" rx="1.5" fill="#0abfbc" opacity="0.25" />
                </svg>
                <span className="text-dark fw-bold">GET TO KNOW US</span>
              </div>

              <h2 className="about-title" ref={ref(3)}>
                Empowering Businesses<br />
                with Innovation, Expertise,<br />
                and for <em className="teal-word">Success.</em>
              </h2>

              <div className="about-learn" ref={ref(4)}>
                <span className="learn-text">Learn More</span>
                <button className="learn-btn" aria-label="Learn more">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              <Row className="g-3 about-bottom-row">

                <Col md={7}>
                  <div className="testimonial-card" ref={ref(5)}>
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8l-6.2 3.3 1.2-6.9L2 9.3l6.9-1z" />
                        </svg>
                      ))}
                    </div>

                    <p className="testimonial-text">
                      We believe in building lasting relationships with our clients through trust, innovation, and exceptional service.
                    </p>

                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <span className="author-name">Esther Howard</span>
                        <span className="author-role">Co-Founder</span>
                      </div>
                      <div className="quote-icon">
                        <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
                          <path d="M0 22V13.2C0 5.87 4.2 1.53 12.6 0l1.4 2.2C9.33 3.27 6.8 6.13 6.8 10.8H12V22H0zm16 0V13.2C16 5.87 20.2 1.53 28.6 0L30 2.2C25.33 3.27 22.8 6.13 22.8 10.8H28V22H16z" fill="rgba(255,255,255,0.3)" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col md={5}>
                  <div className="video-card" ref={ref(6)}>
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                      alt="Video preview"
                      className="video-card-img"
                    />
                    <div className="video-overlay" />
                    <button className="play-btn" aria-label="Play video">
                      <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                        <path d="M1 1l16 9-16 9V1z" fill="white" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </Col>

              </Row>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default About;