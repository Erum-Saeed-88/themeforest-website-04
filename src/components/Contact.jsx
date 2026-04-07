import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

/* Dot locations on the world map (% positions) */
const mapDots = [
  { top: "38%", left: "22%", size: 10 },
  { top: "32%", left: "38%", size: 8 },
  { top: "55%", left: "28%", size: 8 },
  { top: "28%", left: "52%", size: 6 },
  { top: "30%", left: "62%", size: 6 },
  { top: "35%", left: "73%", size: 6 },
  { top: "50%", left: "68%", size: 6 },
];

const serviceOptions = [
  "Choose a option",
  "Business Strategy",
  "Digital Marketing",
  "Sustainability Consulting",
  "Training & Development",
  "Financial Advisory",
  "Other",
];

const Contact = () => {
  const formRef = useRef(null);
  const mapRef = useRef(null);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("ct-visible");
        }),
      { threshold: 0.1 }
    );
    if (formRef.current) obs.observe(formRef.current);
    if (mapRef.current) obs.observe(mapRef.current);
    return () => obs.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section className="contact-section">
      {/* Dark animated bg */}
      <div className="ct-bg-gradient" />
      <div className="ct-bg-grid" />

      <Container fluid className="px-0 h-100">
        <Row className="g-0 align-items-stretch contact-row">

          {/* ── LEFT: World Map ── */}
          <Col lg={6} className="ct-map-col" ref={mapRef}>
            <div className="ct-map-wrapper">
              {/* SVG World Map (dot-grid style) */}
              <svg
                className="ct-world-svg"
                viewBox="0 0 800 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Generate dot grid pattern */}
                {Array.from({ length: 55 }, (_, row) =>
                  Array.from({ length: 90 }, (_, col) => {
                    const x = col * 9 + 5;
                    const y = row * 9 + 5;
                    // Rough world map mask
                    const inMap = isInWorldMap(x, y);
                    if (!inMap) return null;
                    return (
                      <circle
                        key={`${row}-${col}`}
                        cx={x}
                        cy={y}
                        r="1.4"
                        fill="rgba(10,191,188,0.35)"
                        style={{
                          animation: `dotFade ${(Math.random() * 3 + 2).toFixed(1)}s ease-in-out ${(Math.random() * 2).toFixed(1)}s infinite alternate`,
                        }}
                      />
                    );
                  })
                )}
              </svg>

              {/* Glowing location dots */}
              {mapDots.map((dot, i) => (
                <div
                  key={i}
                  className="ct-map-dot"
                  style={{
                    top: dot.top,
                    left: dot.left,
                    width: dot.size,
                    height: dot.size,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}

              {/* Vertical teal scan line */}
              <div className="ct-scan-line" />
            </div>
          </Col>

          {/* ── RIGHT: Contact Form ── */}
          <Col lg={6} className="ct-form-col">
            <div className="ct-form-wrapper mt-5 mb-5" ref={formRef}>
              {/* Badge */}
              <div className="ct-badge">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="9" height="9" rx="1.5" fill="#0abfbc" />
                  <rect x="13" y="2" width="9" height="9" rx="1.5" fill="#0abfbc" opacity="0.5" />
                  <rect x="2" y="13" width="9" height="9" rx="1.5" fill="#0abfbc" opacity="0.5" />
                  <rect x="13" y="13" width="9" height="9" rx="1.5" fill="#0abfbc" opacity="0.25" />
                </svg>
                <span>GET IN TOUCH</span>
              </div>

              <h2 className="ct-title">
                Drop Us a <em className="ct-teal">Line.</em>
              </h2>

              {/* Success message */}
              {submitted && (
                <div className="ct-success">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#0abfbc" strokeWidth="2"/>
                    <path d="M8 12l3 3 5-5" stroke="#0abfbc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Message sent! We'll be in touch soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="ct-form" noValidate>
                {/* Row 1: Name + Email */}
                <Row className="g-3 mb-3">
                  <Col sm={6}>
                    <div className={`ct-field ${focused === "name" ? "ct-field--focused" : ""} ${form.name ? "ct-field--filled" : ""}`}>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                        required
                        autoComplete="off"
                      />
                      <label>Full Name <span>*</span></label>
                      <div className="ct-field-line" />
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className={`ct-field ${focused === "email" ? "ct-field--focused" : ""} ${form.email ? "ct-field--filled" : ""}`}>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        required
                        autoComplete="off"
                      />
                      <label>Email Address <span>*</span></label>
                      <div className="ct-field-line" />
                    </div>
                  </Col>
                </Row>

                {/* Row 2: Phone + Service */}
                <Row className="g-3 mb-3">
                  <Col sm={6}>
                    <div className={`ct-field ${focused === "phone" ? "ct-field--focused" : ""} ${form.phone ? "ct-field--filled" : ""}`}>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        onFocus={() => setFocused("phone")}
                        onBlur={() => setFocused(null)}
                        required
                        autoComplete="off"
                      />
                      <label>Phone number <span>*</span></label>
                      <div className="ct-field-line" />
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className={`ct-field ct-field--select ${focused === "service" ? "ct-field--focused" : ""} ${form.service ? "ct-field--filled" : ""}`}>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        onFocus={() => setFocused("service")}
                        onBlur={() => setFocused(null)}
                      >
                        {serviceOptions.map((opt, i) => (
                          <option key={i} value={i === 0 ? "" : opt}>{opt}</option>
                        ))}
                      </select>
                      <label className="select-label">Choose a option</label>
                      <div className="ct-field-line" />
                      <div className="ct-select-arrow">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                          <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                  </Col>
                </Row>

                {/* Row 3: Message */}
                <Row className="g-3 mb-5">
                  <Col sm={12}>
                    <div className={`ct-field ct-field--textarea ${focused === "message" ? "ct-field--focused" : ""} ${form.message ? "ct-field--filled" : ""}`}>
                      <textarea
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        required
                      />
                      <label>Type message <span>*</span></label>
                      <div className="ct-field-line" />
                    </div>
                  </Col>
                </Row>

                {/* Submit */}
                <button type="submit" className="ct-submit-btn">
                  <span>Send Message</span>
                  <span className="ct-btn-icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 14L14 2M14 2H6M14 2V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

/* Rough world map mask function */
function isInWorldMap(x, y) {
  const px = x / 800;
  const py = y / 500;

  // North America
  if (px > 0.03 && px < 0.28 && py > 0.1 && py < 0.55) {
    if (px > 0.05 && py > 0.12 && py < 0.48) return true;
  }
  // South America
  if (px > 0.18 && px < 0.32 && py > 0.5 && py < 0.92) return true;
  // Europe
  if (px > 0.42 && px < 0.57 && py > 0.08 && py < 0.42) return true;
  // Africa
  if (px > 0.43 && px < 0.58 && py > 0.38 && py < 0.85) return true;
  // Asia
  if (px > 0.55 && px < 0.88 && py > 0.08 && py < 0.62) return true;
  // Australia
  if (px > 0.72 && px < 0.88 && py > 0.6 && py < 0.85) return true;
  // Greenland
  if (px > 0.28 && px < 0.42 && py > 0.04 && py < 0.28) return true;

  return false;
}

export default Contact;