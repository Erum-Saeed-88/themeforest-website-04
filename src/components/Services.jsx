import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

const services = [
  {
    id: 1,
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <circle cx="26" cy="22" r="12" stroke="currentColor" strokeWidth="1.8" />
        <path d="M20 32c0 3.3 2.7 6 6 6s6-2.7 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M26 10V7M18 13l-2-2M34 13l2-2M15 22h-3M40 22h-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="26" cy="22" r="4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M22 42h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M26 38v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Innovative Solutions",
    desc: "We stay ahead of the curve, leveraging cutting-edge technologies and strategies to keep you competitive in a marketplace.",
    highlight: false,
  },
  {
    id: 2,
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <path d="M26 8l3.5 10.5H40l-9 6.5 3.5 10.5L26 29l-8.5 6.5 3.5-10.5-9-6.5h10.5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="26" cy="22" r="5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M20 38h12M23 38v4M29 38v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M14 44h24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Award-Winning Expertise",
    desc: "Recognized by industry leaders, our award-winning team has a proven record of delivering excellence across projects.",
    highlight: true,
  },
  {
    id: 3,
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <path d="M10 20c0-8.8 7.2-16 16-16s16 7.2 16 16c0 5.5-2.8 10.4-7 13.3V36H17v-2.7C12.8 30.4 10 25.5 10 20z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M17 40h18M19 44h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="32" cy="14" r="3" fill="currentColor" opacity="0.4" />
        <path d="M22 20h2l2-4 2 8 2-4h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Dedicated Support",
    desc: "Our team is always available to address your concerns, providing quick and effective solution to keep your business.",
    highlight: false,
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    cardRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section pt-5" ref={sectionRef}>
      <div className="services-bg-mesh" />

      <Container>
  
        <div className="services-header">
          <div className="services-badge text-dark">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="9" height="9" rx="1.5" fill="#0abfbc" />
              <rect x="13" y="2" width="9" height="9" rx="1.5" fill="#0abfbc" opacity="0.5" />
              <rect x="2" y="13" width="9" height="9" rx="1.5" fill="#0abfbc" opacity="0.5" />
              <rect x="13" y="13" width="9" height="9" rx="1.5" fill="#0abfbc" opacity="0.25" />
            </svg>
            <span>CHOOSE THE BEST</span>
          </div>

          <h2 className="services-title">
            Empowering Business
            <br />
            with <em className="teal-em">Expertise.</em>
          </h2>
        </div>

        <Row className="g-4 services-cards-row ">
          {services.map((svc, i) => (
            <Col lg={4} md={6} key={svc.id}>
              <div
                className={`service-card ${svc.highlight ? "card-highlight" : ""}`}
                ref={(el) => (cardRefs.current[i] = el)}
                style={{ "--delay": `${i * 0.15}s` }}
              >

                <div className="card-top-line" />

  
                <div className="card-icon-wrap">
                  <div className="card-icon">{svc.icon}</div>
                  <div className="icon-glow" />
                </div>

                
                <div className="card-content">
                  <h3 className="card-title">{svc.title}</h3>
                  <p className="card-desc text-muted">{svc.desc}</p>
                </div>

                <div className="card-arrow">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 15L15 3M15 3H7M15 3V11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

  
                <div className="card-shimmer" />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;