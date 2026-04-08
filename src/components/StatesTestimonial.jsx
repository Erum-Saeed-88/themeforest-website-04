import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

const stats = [
  { value: 93, suffix: "%", label: "Projects Completed" },
  { value: 20, suffix: "M", label: "Reach Worldwide" },
  { value: 8.5, suffix: "X", label: "Faster Growth" },
  { value: 100, suffix: "+", label: "Awards Archived" },
];


const testimonials = [
  {
    id: 1,
    text: "The results we've seen after partnering with Bexon are beyond our expectations. They not only understood our vision but also brought new ideas to the table that have taken our business to the next level. Their expertise and commitment to success make them a trusted partner.",
    name: "Sarah Johnson",
    role: "CEO, TechVision Inc.",
    avatar: "https://i.pravatar.cc/56?img=47",
  },
  {
    id: 2,
    text: "We've been working with Bexon for years, and they continue to deliver outstanding results. Their team is proactive, responsive, and always goes the extra mile to ensure our needs are met. They've become a key contributor to our growth and success that really help us.",
    name: "Marcus Chen",
    role: "Founder, NexaScale",
    avatar: "https://i.pravatar.cc/56?img=52",
  },
  {
    id: 3,
    text: "Working with Bexon has been a game-changer for our business. Their team's professionalism, attention to detail, and innovative solutions have helped us streamline operations and achieve our goals faster than we imagined. We truly feel like a valued partner.",
    name: "Amelia Torres",
    role: "COO, BrightPath Ltd.",
    avatar: "https://i.pravatar.cc/56?img=35",
  },
  {
    id: 4,
    text: "Bexon transformed our digital presence completely. From strategy to execution, every step was handled with precision and creativity. Our revenue grew 3x within a year of collaboration. I would highly recommend them to anyone serious about scaling their business.",
    name: "David Kim",
    role: "Director, UrbanCore",
    avatar: "https://i.pravatar.cc/56?img=68",
  },
  {
    id: 5,
    text: "What sets Bexon apart is their genuine commitment to understanding your business. They don't just deliver services — they deliver results. The team is incredibly talented and easy to work with. We look forward to a long-term partnership.",
    name: "Priya Sharma",
    role: "VP Marketing, Luminary Group",
    avatar: "https://i.pravatar.cc/56?img=16",
  },
];


function useCounter(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const isDecimal = target % 1 !== 0;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current = Math.min(increment * step, target);
      setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [start, target, duration]);
  return count;
}


const StatItem = ({ value, suffix, label, started }) => {
  const count = useCounter(value, 1800, started);
  return (
    <div className="stat-item">
      <div className="stat-number">
        {count}
        <span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const VISIBLE = 3;

const StatsTestimonials = () => {
  const statsRef = useRef(null);
  const headerRef = useRef(null);
  const [statsStarted, setStatsStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animDir, setAnimDir] = useState("right");
  const [animKey, setAnimKey] = useState(0);


  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStatsStarted(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add("st-visible"); },
      { threshold: 0.1 }
    );
    if (headerRef.current) obs.observe(headerRef.current);
    return () => obs.disconnect();
  }, []);

  const goTo = (idx, d = "right") => {
    setAnimDir(d);
    setCurrent(idx);
    setAnimKey((k) => k + 1);
  };

  const prev = () => {
    goTo((current - 1 + testimonials.length) % testimonials.length, "left");
  };
  const next = () => {
    goTo((current + 1) % testimonials.length, "right");
  };


  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [current, paused]);

  const visible = Array.from({ length: VISIBLE }, (_, i) =>
    testimonials[(current + i) % testimonials.length]
  );

  return (
    <section className="st-section">
      <div className="st-bg-mesh" />

      <Container>
        <div className="stats-strip" ref={statsRef}>
          <div className="stats-strip-inner">
            {stats.map((s, i) => (
              <React.Fragment key={i}>
                <StatItem {...s} started={statsStarted} />
                {i < stats.length - 1 && <div className="stats-divider" />}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="st-header" ref={headerRef}>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="st-badge">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="9" height="9" rx="1.5" fill="#0abfbc" />
                  <rect x="13" y="2" width="9" height="9" rx="1.5" fill="#0abfbc" opacity="0.5" />
                  <rect x="2" y="13" width="9" height="9" rx="1.5" fill="#0abfbc" opacity="0.5" />
                  <rect x="13" y="13" width="9" height="9" rx="1.5" fill="#0abfbc" opacity="0.25" />
                </svg>
                <span className="text-dark fw-bold fs-6">CLIENTS FEEDBACK</span>
              </div>
              <h2 className="st-title">
                Success <em className="st-teal">Stories</em> Fuel
                <br />our Innovation.
              </h2>
            </Col>
            <Col lg={6} className="d-flex justify-content-end align-items-center gap-3">
              <button className="st-nav-btn" onClick={prev} aria-label="Previous">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="st-nav-btn" onClick={next} aria-label="Next">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </Col>
          </Row>
        </div>

        {/* ── TESTIMONIAL CARDS ── */}
        <div
          className="st-cards-track"
          key={animKey}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {visible.map((t, pos) => (
            <div
              key={t.id}
              className={`st-card ${pos === 1 ? "st-card--active" : ""} st-card--enter-${animDir}`}
              style={{ "--pos": pos }}
            >

              <div className="st-quote-icon">
                <svg width="32" height="26" viewBox="0 0 32 26" fill="none">
                  <path d="M0 26V15.6C0 7.07 4.8 1.87 14.4 0L16 2.6C10.67 3.93 7.73 7.27 7.73 12.6H13.87V26H0zm18.13 0V15.6C18.13 7.07 22.93 1.87 32.53 0L34.13 2.6C28.8 3.93 25.87 7.27 25.87 12.6H32V26H18.13z" fill="currentColor"/>
                </svg>
              </div>

          
              <p className="st-card-text text-muted">{t.text}</p>

      
              <div className="st-author">
                <img src={t.avatar} alt={t.name} className="st-avatar" />
                <div>
                  <div className="st-author-name">{t.name}</div>
                  <div className="st-author-role">{t.role}</div>
                </div>
              </div>

              {/* Bottom teal line */}
              <div className="st-card-line" />
            </div>
          ))}
        </div>

        {/* ── Dot indicators ── */}
        <div className="st-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`st-dot ${i === current ? "st-dot--active" : ""}`}
              onClick={() => goTo(i, i > current ? "right" : "left")}
              aria-label={`Go to ${i + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatsTestimonials;