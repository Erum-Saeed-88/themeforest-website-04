import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

const projects = [
  {
    id: 1,
    tag: "Connect",
    title: "Event Management Platform",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
    large: true,
  },
  {
    id: 2,
    tag: "Empower",
    title: "Digital Marketing Campaign",
    img: "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?w=600&q=80",
    large: false,
  },
  {
    id: 3,
    tag: "Innovate",
    title: "Brand Identity Redesign",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
    large: false,
  },
  {
    id: 4,
    tag: "Scale",
    title: "E-Commerce Growth Strategy",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    large: false,
  },
];

const Portfolio = () => {
  const headerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("pf-visible");
        }),
      { threshold: 0.12 }
    );
    if (headerRef.current) obs.observe(headerRef.current);
    cardRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="portfolio-section">
      <div className="pf-bg-mesh" />

      <Container>
        {/* ── Header Row ── */}
        <div className="pf-header" ref={headerRef}>
          <Row className="align-items-center g-4">
            <Col lg={4} md={12}>
              <div className="pf-badge fs-6">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="9" height="9" rx="1.5" fill="#0abfbc" />
                  <rect x="13" y="2" width="9" height="9" rx="1.5" fill="#0abfbc" opacity="0.5" />
                  <rect x="2" y="13" width="9" height="9" rx="1.5" fill="#0abfbc" opacity="0.5" />
                  <rect x="13" y="13" width="9" height="9" rx="1.5" fill="#0abfbc" opacity="0.25" />
                </svg>
                <span className="text-dark fw-bold fs-6">OUR PROJECTS</span>
              </div>
              <h2 className="pf-title">
                Breaking Boundaries,
                <br />
                Building <em className="pf-teal">Dreams.</em>
              </h2>
            </Col>

            <Col lg={5} md={8}>
              <p className="pf-desc">
                We work closely with our clients to understand their unique needs
                and craft tailored solutions that address challenges.
              </p>
            </Col>

            <Col lg={3} md={4} className="text-md-end">
              <button className="pf-more-btn">
                More Projects
                <span className="pf-more-icon">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 12L12 2M12 2H5M12 2V9"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </Col>
          </Row>
        </div>

        {/* ── Cards Grid ── */}
        <div className="pf-grid">
          {/* Large card */}
          <div
            className="pf-card pf-card--large"
            ref={(el) => (cardRefs.current[0] = el)}
            style={{ "--delay": "0s" }}
          >
            <img src={projects[0].img} alt={projects[0].title} className="pf-img" />
            <div className="pf-overlay" />
            <div className="pf-card-info">
              <span className="pf-tag">{projects[0].tag}</span>
              <h3 className="pf-card-title">{projects[0].title}</h3>
            </div>
            <button className="pf-card-arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="pf-shimmer" />
          </div>

          {/* Small cards column */}
          <div className="pf-col-right">
            {projects.slice(1).map((proj, i) => (
              <div
                key={proj.id}
                className="pf-card pf-card--small"
                ref={(el) => (cardRefs.current[i + 1] = el)}
                style={{ "--delay": `${(i + 1) * 0.12}s` }}
              >
                <img src={proj.img} alt={proj.title} className="pf-img" />
                <div className="pf-overlay" />
                <div className="pf-card-info">
                  <span className="pf-tag">{proj.tag}</span>
                  <h3 className="pf-card-title">{proj.title}</h3>
                </div>
                <button className="pf-card-arrow">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className="pf-shimmer" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;