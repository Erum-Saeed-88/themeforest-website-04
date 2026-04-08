import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const serviceLinks = [
  "Customer Experience",
  "Training Programs",
  "Business Strategy",
  "Training Program",
  "ESG Consulting",
  "Development Hub",
];

const resourceLinks = [
  { label: "Contact us", badge: null },
  { label: "Team Member", badge: null },
  { label: "Recognitions", badge: null },
  { label: "Careers", badge: "NEW" },
  { label: "News", badge: null },
  { label: "Feedback", badge: null },
];

const Footer = () => {
  const ctaRef = useRef(null);
  const footerRef = useRef(null);
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("ft-visible");
        }),
      { threshold: 0.1 }
    );
    if (ctaRef.current) obs.observe(ctaRef.current);
    if (footerRef.current) obs.observe(footerRef.current);
    return () => obs.disconnect();
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !agreed) return;
    setSubscribed(true);
    setEmail("");
    setAgreed(false);
    setTimeout(() => setSubscribed(false), 3500);
  };

  return (
    <>
      <section className="cta-section">
        <Container>
          <div className="cta-banner" ref={ctaRef}>

            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80"
              alt="CTA background"
              className="cta-bg-img"
            />
            <div className="cta-overlay" />


            <div className="cta-orb" />

            <div className="cta-content">
              <h2 className="cta-title">
                Let's Build Future<br />Together.
              </h2>
              <button className="cta-btn">
                Get Started Now
                <span className="cta-btn-icon">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path
                      d="M2 13L13 2M13 2H5.5M13 2V9.5"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </Container>
      </section>

      
      <footer className="site-footer mt-5" ref={footerRef}>
        <div className="ft-bg-mesh" />

        <Container>
          <Row className="ft-main-row g-5">


            <Col lg={3} md={6}>
              <div className="ft-brand">
                <div className="ft-logo">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="9" height="9" rx="1.5" fill="#0abfbc" />
                    <rect x="13" y="2" width="9" height="9" rx="1.5" fill="#0abfbc" opacity="0.6" />
                    <rect x="2" y="13" width="9" height="9" rx="1.5" fill="#0abfbc" opacity="0.6" />
                    <rect x="13" y="13" width="9" height="9" rx="1.5" fill="#0abfbc" opacity="0.3" />
                  </svg>
                  <span className="ft-logo-text">Bexon</span>
                </div>

                <p className="ft-brand-desc">
                  Developing personalize our customer journeys to increase
                  satisfaction &amp; loyalty of our expansion.
                </p>

              
                <div className="ft-awards">
                  {[
                    { num: "18", label: "CLUTCH\nAWARDS" },
                    { num: "5", label: "AWWWARDS" },
                  ].map((award, i) => (
                    <div key={i} className="ft-award-badge">
                      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                        <path
                          d="M26 4 L30 10 L37 8 L35 15 L42 18 L37 23 L40 30 L33 30 L30 37 L26 32 L22 37 L19 30 L12 30 L15 23 L10 18 L17 15 L15 8 L22 10 Z"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          fill="none"
                        />
                        <text x="26" y="22" textAnchor="middle" fontSize="10" fontWeight="700" fontFamily="Syne,sans-serif" fill="currentColor">{award.num}</text>
                        {award.label.split("\n").map((ln, li) => (
                          <text key={li} x="26" y={`${31 + li * 7}`} textAnchor="middle" fontSize="5" fontFamily="DM Sans,sans-serif" fill="currentColor" opacity="0.7">{ln}</text>
                        ))}
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </Col>

            
            <Col lg={2} md={6}>
              <div className="ft-col">
                <h4 className="ft-col-title text-light">Services</h4>
                <ul className="ft-links">
                  {serviceLinks.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="ft-link">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>

            
            <Col lg={2} md={6}>
              <div className="ft-col">
                <h4 className="ft-col-title text-light">Resources</h4>
                <ul className="ft-links">
                  {resourceLinks.map((item, i) => (
                    <li key={i}>
                      <a href="#" className="ft-link">
                        {item.label}
                        {item.badge && (
                          <span className="ft-badge">{item.badge}</span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>

            
            <Col lg={4} md={6}>
              <div className="ft-col">
                <h4 className="ft-newsletter-title">
                  Subscribe to Our<br />Newsletter.
                </h4>

                {subscribed ? (
                  <div className="ft-subscribed">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="#0abfbc" strokeWidth="2"/>
                      <path d="M8 12l3 3 5-5" stroke="#0abfbc" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Subscribed! Thank you.
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="ft-subscribe-form">
                    <div className="ft-email-wrap">
                      <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="ft-email-input"
                        required
                      />
                      <button type="submit" className="ft-send-btn" aria-label="Subscribe">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                    <label className="ft-checkbox-label">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="ft-checkbox"
                      />
                      <span className="ft-checkbox-custom" />
                      <span className="ft-checkbox-text">
                        Agree to our <a href="#" className="ft-terms">Terms &amp; Condition?</a>
                      </span>
                    </label>
                  </form>
                )}
              </div>
            </Col>
          </Row>

          
          <div className="ft-bottom">
            
            <div className="ft-contact-row">
              <a href="tel:+10095447818" className="ft-contact-link">
                <span className="ft-contact-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.6 21 3 14.4 3 6.5c0-.6.4-1 1-1H7.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" fill="currentColor"/>
                  </svg>
                </span>
                +1 (009) 544-7818
              </a>
              <a href="mailto:info@bexon.com" className="ft-contact-link">
                <span className="ft-contact-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.8"/>
                    <path d="M2 8l10 6 10-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </span>
                info@bexon.com
              </a>
            </div>

            
            <div className="ft-social">
              {[
            
                <path key="fb" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>,
          
                <><rect key="ig1" x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8"/><circle key="ig2" cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8"/><circle key="ig3" cx="17.5" cy="6.5" r="1" fill="currentColor"/></>,
          
                <path key="tw" d="M4 4l16 16M4 20L20 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>,
          
                <><rect key="li1" x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.8"/><path key="li2" d="M7 10v7M7 7v.5M12 10v7M12 13a3 3 0 016 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></>,
              ].map((icon, i) => (
                <a key={i} href="#" className="ft-social-link" aria-label={`social-${i}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">{icon}</svg>
                </a>
              ))}
            </div>

        
            <p className="ft-copy">© 2026 Bexon All right reserved</p>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;