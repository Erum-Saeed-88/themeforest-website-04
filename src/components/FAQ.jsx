import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

const faqs = [
  {
    id: 1,
    question: "What services does Bexon offer to clients?",
    answer:
      "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we'll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.",
    defaultOpen: true,
  },
  {
    id: 2,
    question: "How do I get started with Corporate Business?",
    answer:
      "Starting with Bexon is straightforward. Book a free consultation call, share your goals and challenges, and our team will design a customized roadmap tailored specifically to your business needs and objectives.",
  },
  {
    id: 3,
    question: "How do you ensure the success of a project?",
    answer:
      "We follow a structured methodology combining strategy, agile execution, and continuous feedback loops. Every project has a dedicated manager and milestone reviews to ensure quality, timeliness, and alignment with your goals.",
  },
  {
    id: 4,
    question: "How long will it take to complete my project?",
    answer:
      "Timelines vary based on project scope and complexity. After our initial discovery call, we provide a detailed project timeline. Most engagements range from 4 to 16 weeks, with regular updates at every stage.",
  },
  {
    id: 5,
    question: "Can I track the progress of my project?",
    answer:
      "Absolutely. Every client gets access to a dedicated project dashboard with real-time updates, milestone tracking, and a direct communication channel with your project team.",
  },
];

const FAQItem = ({ faq, isOpen, onToggle, index }) => {
  const bodyRef = useRef(null);

  return (
    <div
      className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
      style={{ "--delay": `${index * 0.08}s` }}
    >
      <button className="faq-question" onClick={onToggle}>
        <span className="faq-q-text">{faq.question}</span>
        <span className={`faq-icon ${isOpen ? "faq-icon--open" : ""}`}>
          {isOpen ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5" />
              <path d="M5.5 9h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5" />
              <path d="M9 5.5v7M5.5 9h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </span>
      </button>

      <div
        className="faq-body"
        ref={bodyRef}
        style={{
          maxHeight: isOpen ? `${bodyRef.current?.scrollHeight || 300}px` : "0px",
        }}
      >
        <p className="faq-answer">{faq.answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState(1);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("faq-visible");
        }),
      { threshold: 0.1 }
    );
    if (leftRef.current) obs.observe(leftRef.current);
    if (rightRef.current) obs.observe(rightRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="faq-section">
      <div className="faq-bg-mesh" />

      <Container>
        <Row className="g-5 align-items-start">
          {/* ── LEFT: Image + CTA card ── */}
          <Col lg={5} ref={leftRef} className="faq-left">
            <div className="faq-img-wrapper">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80"
                alt="Need Help"
                className="faq-img"
              />
              <div className="faq-img-overlay" />

              {/* Heading on image */}
              <div className="faq-img-heading">
                <h2>Need Help? Start<br />Here...</h2>
              </div>

              {/* Floating CTA card */}
              <div className="faq-cta-card">
                <p className="faq-cta-title">Get Started<br />Free Call?</p>
                <div className="faq-cta-phone-row">
                  <div className="faq-phone-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.6 21 3 14.4 3 6.5c0-.6.4-1 1-1H7.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <a href="tel:18884521505" className="faq-phone-number">
                    1-888-452-1505
                  </a>
                </div>
              </div>
            </div>
          </Col>

          {/* ── RIGHT: FAQ Accordion ── */}
          <Col lg={7} ref={rightRef} className="faq-right">
            <div className="faq-list">
              {faqs.map((faq, i) => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  index={i}
                  isOpen={openId === faq.id}
                  onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQ;