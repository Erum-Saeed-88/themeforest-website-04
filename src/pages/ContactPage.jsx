import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageHero from "../components/PageHero";


const useInView = (threshold = 0.1) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
};

const BadgeIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="9" height="9" rx="1.5" fill="#0abfbc"/>
    <rect x="13" y="2" width="9" height="9" rx="1.5" fill="#0abfbc" opacity=".5"/>
    <rect x="2" y="13" width="9" height="9" rx="1.5" fill="#0abfbc" opacity=".5"/>
    <rect x="13" y="13" width="9" height="9" rx="1.5" fill="#0abfbc" opacity=".25"/>
  </svg>
);


const contactCards = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.6 21 3 14.4 3 6.5c0-.6.4-1 1-1H7.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" fill="currentColor"/>
      </svg>
    ),
    label: "Call Us Anytime",
    value: "+1 (009) 544-7818",
    sub: "Mon–Fri, 9am–6pm EST",
    href: "tel:+10095447818",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M2 8l10 6 10-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    label: "Drop an Email",
    value: "info@bexon.com",
    sub: "We reply within 24 hours",
    href: "mailto:info@bexon.com",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
    label: "Visit Our Office",
    value: "123 Business Ave, NY",
    sub: "New York, USA 10001",
    href: "#map",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Business Hours",
    value: "Mon – Fri: 9am – 6pm",
    sub: "Weekend: By appointment",
    href: null,
  },
];

const serviceOptions = [
  "Choose a Service",
  "Business Strategy",
  "Customer Experience",
  "ESG Consulting",
  "Digital Transformation",
  "Training & Development",
  "Financial Advisory",
  "Other",
];


const ContactMain = () => {
  const [ref, visible] = useInView();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    }, 1500);
  };

  return (
    <section className={`cp-section cp-main-sec ${visible ? "cp-visible" : ""}`} ref={ref}>
      <div className="cp-bg-mesh" />

      <Container>
      
        <div className="cp-header">
          <div className="cp-badge"><BadgeIcon /> GET IN TOUCH</div>
          <h2 className="cp-title">We'd Love to <em className="cp-teal">Hear From You.</em></h2>
          <p className="cp-subtitle">Reach out through any channel that works best for you. Our team is ready to help.</p>
        </div>

        <Row className="g-3 mb-5">
          {contactCards.map((card, i) => (
            <Col lg={3} md={6} key={i}>
              <div
                className="cp-info-card"
                style={{ "--d": `${i * 0.1}s` }}
                onClick={() => card.href && card.href !== "#map" && window.open(card.href)}
              >
                <div className="cp-info-icon">{card.icon}</div>
                <div className="cp-info-content">
                  <span className="cp-info-label">{card.label}</span>
                  <span className="cp-info-value">{card.value}</span>
                  <span className="cp-info-sub">{card.sub}</span>
                </div>
                <div className="cp-info-line" />
              </div>
            </Col>
          ))}
        </Row>

        {/* ── Form + Side panel ── */}
        <Row className="g-5 align-items-start">
          {/* Left side panel */}
          <Col lg={4}>
            <div className="cp-side-panel">
              <div className="cp-side-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&q=80"
                  alt="Contact"
                  className="cp-side-img"
                />
                <div className="cp-side-overlay" />
              </div>

              <div className="cp-side-content">
                <h3 className="cp-side-title">Let's Build Something Great</h3>
                <p className="cp-side-text">Our experts are available for free consultations to understand your goals and propose the best solution.</p>

                <div className="cp-side-socials">
                  {[
                    { label: "Facebook", icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/> },
                    { label: "Instagram", icon: <><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></> },
                    { label: "LinkedIn", icon: <><rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.8"/><path d="M7 10v7M7 7v.5M12 10v7M12 13a3 3 0 016 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></> },
                    { label: "Twitter", icon: <path d="M4 4l16 16M4 20L20 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/> },
                  ].map((s, i) => (
                    <a key={i} href="#" className="cp-social-btn" aria-label={s.label}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">{s.icon}</svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Col>

      
          <Col lg={8}>
            <div className="cp-form-card">
              <div className="cp-form-header">
                <h3 className="cp-form-title">Send Us a Message</h3>
                <p className="cp-form-sub">Fill in the details and we'll get back to you within 24 hours.</p>
              </div>

              {submitted && (
                <div className="cp-success">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#0abfbc" strokeWidth="2"/>
                    <path d="M8 12l3 3 5-5" stroke="#0abfbc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Your message was sent successfully! We'll be in touch soon.
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <Row className="g-3">
                  
                  <Col sm={6}>
                    <div className={`cp-field ${focused === "name" ? "cp-field--focus" : ""} ${form.name ? "cp-field--filled" : ""}`}>
                      <input type="text" name="name" value={form.name} onChange={handleChange}
                        onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} required autoComplete="off"/>
                      <label>Full Name <span>*</span></label>
                      <div className="cp-field-bar" />
                    </div>
                  </Col>

          
                  <Col sm={6}>
                    <div className={`cp-field ${focused === "email" ? "cp-field--focus" : ""} ${form.email ? "cp-field--filled" : ""}`}>
                      <input type="email" name="email" value={form.email} onChange={handleChange}
                        onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} required autoComplete="off"/>
                      <label>Email Address <span>*</span></label>
                      <div className="cp-field-bar" />
                    </div>
                  </Col>

                
                  <Col sm={6}>
                    <div className={`cp-field ${focused === "phone" ? "cp-field--focus" : ""} ${form.phone ? "cp-field--filled" : ""}`}>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                        onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)} autoComplete="off"/>
                      <label>Phone Number</label>
                      <div className="cp-field-bar" />
                    </div>
                  </Col>

                
                  <Col sm={6}>
                    <div className={`cp-field cp-field--select text-secondary ${focused === "service" ? "cp-field--focus" : ""} ${form.service ? "cp-field--filled" : ""}`}>
                      <select name="service" value={form.service} onChange={handleChange}
                        onFocus={() => setFocused("service")} onBlur={() => setFocused(null)}>
                        {serviceOptions.map((o, i) => (
                          <option key={i} value={i === 0 ? "" : o}>{o}</option>
                        ))}
                      </select>
                
                      <div className="cp-field-bar" />
                      <span className="cp-select-arrow">
                        <svg width="11" height="7" viewBox="0 0 12 8" fill="none">
                          <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                        </svg>
                      </span>
                    </div>
                  </Col>

                  
                  <Col sm={12}>
                    <div className={`cp-field cp-field--textarea ${focused === "message" ? "cp-field--focus" : ""} ${form.message ? "cp-field--filled" : ""}`}>
                      <textarea name="message" rows={5} value={form.message} onChange={handleChange}
                        onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} required/>
                      <label>Your Message <span>*</span></label>
                      <div className="cp-field-bar" />
                    </div>
                  </Col>

              
                  <Col sm={12}>
                    <button type="submit" className={`cp-submit-btn ${loading ? "cp-submit-btn--loading" : ""}`} disabled={loading}>
                      {loading ? (
                        <>
                          <span className="cp-spinner" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                            <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </>
                      )}
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const MapSection = () => {
  const [ref, visible] = useInView();
  return (
    <section className={`cp-map-sec ${visible ? "cp-visible" : ""}`} ref={ref} id="map">
      <Container>
        <div className="cp-map-wrap">
          <div className="cp-map-label">
            <span className="cp-map-pin">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#0abfbc"/>
                <circle cx="12" cy="9" r="2.5" fill="white"/>
              </svg>
            </span>
            123 Business Ave, New York, USA 10001
          </div>
          
          <div className="cp-map-frame">
            <div className="cp-map-bg" />
            <div className="cp-map-grid" />
          
            <div className="cp-map-scan" />
            
            <div className="cp-map-center-pin">
              <div className="cp-pin-dot" />
              <div className="cp-pin-ring" />
              <div className="cp-pin-ring cp-pin-ring--2" />
              <div className="cp-pin-label">Bexon HQ</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};


const faqs = [
  { q: "How quickly do you respond to inquiries?", a: "We respond to all inquiries within 24 business hours. For urgent matters, please call us directly at +1 (009) 544-7818." },
  { q: "Do you offer free consultations?", a: "Yes! We offer a complimentary 30-minute discovery call to understand your needs and explore how Bexon can best support your goals." },
  { q: "Can we schedule an in-person meeting?", a: "Absolutely. Our New York office is open Monday through Friday, 9am–6pm. You can also book virtual meetings at your convenience." },
  { q: "What information should I include in my message?", a: "Please include your company name, the type of service you're interested in, your timeline, and any specific challenges you're facing — this helps us respond with the most relevant insights." },
];

const FAQSection = () => {
  const [ref, visible] = useInView();
  const [openId, setOpenId] = useState(0);
  const bodyRefs = useRef([]);

  return (
    <section className={`cp-section cp-faq-sec ${visible ? "cp-visible" : ""}`} ref={ref}>
      <div className="cp-bg-mesh" />
      <Container>
        <Row className="align-items-start g-5">
          <Col lg={5}>
            <div className="cp-faq-left">
              <div className="cp-badge"><BadgeIcon /> FAQ</div>
              <h2 className="cp-title" style={{ textAlign: "left" }}>Common <em className="cp-teal">Questions.</em></h2>
              <p className="cp-para">Everything you need to know about reaching and working with us. Can't find the answer? Just send us a message.</p>
              <div className="cp-faq-img-wrap">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80" alt="FAQ" className="cp-faq-img"/>
                <div className="cp-faq-img-overlay"/>
                <div className="cp-faq-badge">
                  <span className="cp-faq-badge-num">24h</span>
                  <span className="cp-faq-badge-lbl">Response<br/>Time</span>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={7}>
            <div className="cp-faq-list">
              {faqs.map((faq, i) => (
                <div key={i} className={`cp-faq-item ${openId === i ? "cp-faq-item--open" : ""}`} style={{ "--d": `${i * 0.08}s` }}>
                  <button className="cp-faq-q" onClick={() => setOpenId(openId === i ? null : i)}>
                    <span className="cp-faq-q-text">{faq.q}</span>
                    <span className={`cp-faq-icon ${openId === i ? "cp-faq-icon--open" : ""}`}>
                      {openId === i ? (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M5.5 9h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                        </svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M9 5.5v7M5.5 9h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                        </svg>
                      )}
                    </span>
                  </button>
                  <div
                    className="cp-faq-body"
                    ref={el => bodyRefs.current[i] = el}
                    style={{ maxHeight: openId === i ? `${bodyRefs.current[i]?.scrollHeight || 200}px` : "0px" }}
                  >
                    <p className="cp-faq-answer">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const ContactPage = () => (
  <div className="contact-page page-enter">
    <PageHero title="Contact Us" breadcrumb="Contact Us" />
    <ContactMain />
    <MapSection />
    <FAQSection />
  </div>
);

export default ContactPage;