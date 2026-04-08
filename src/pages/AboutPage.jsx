import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageHero from "./../components/PageHero";

const team = [
  { name: "James Harrison", role: "Chief Executive Officer", img: "https://i.pravatar.cc/300?img=52" },
  { name: "Sophia Williams", role: "Chief Operating Officer", img: "https://i.pravatar.cc/300?img=47" },
  { name: "Marcus Chen", role: "Head of Strategy", img: "https://i.pravatar.cc/300?img=68" },
  { name: "Amelia Torres", role: "Creative Director", img: "https://i.pravatar.cc/300?img=35" },
];

const values = [
  {
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 4L28 10V22L16 28L4 22V10L16 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.6"/></svg>,
    title: "Innovation First",
    desc: "We embrace cutting-edge technologies and creative thinking to deliver transformative solutions.",
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.6"/><path d="M11 16l4 4 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: "Client Trust",
    desc: "Building lasting partnerships through transparency, integrity, and consistent delivery of excellence.",
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M6 26V20M11 26V14M16 26V18M21 26V10M26 26V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
    title: "Proven Results",
    desc: "Data-driven strategies that deliver measurable impact and sustainable growth for your business.",
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="12" cy="10" r="4" stroke="currentColor" strokeWidth="1.6"/><circle cx="22" cy="10" r="4" stroke="currentColor" strokeWidth="1.6"/><path d="M4 26c0-4.4 3.6-8 8-8h8c4.4 0 8 3.6 8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
    title: "Expert Team",
    desc: "Our diverse team of industry specialists brings decades of combined experience across every domain.",
  },
];

const milestones = [
  { year: "2010", title: "Company Founded", desc: "Started with a small team of 5 passionate consultants." },
  { year: "2014", title: "Global Expansion", desc: "Opened offices across 12 countries, serving 500+ clients." },
  { year: "2018", title: "Award Recognition", desc: "Won 18 industry awards including Clutch Global Leader." },
  { year: "2024", title: "Innovation Hub", desc: "Launched our AI-powered strategy platform with 2,400+ users." },
];

const Badge = ({ dark }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="9" height="9" rx="1.5" fill="#0abfbc"/>
    <rect x="13" y="2" width="9" height="9" rx="1.5" fill="#0abfbc" opacity=".5"/>
    <rect x="2" y="13" width="9" height="9" rx="1.5" fill="#0abfbc" opacity=".5"/>
    <rect x="13" y="13" width="9" height="9" rx="1.5" fill="#0abfbc" opacity=".25"/>
  </svg>
);

const useInView = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
};

/* ── STORY ── */
const StorySection = () => {
  const [ref, visible] = useInView();
  return (
    <section className={`ap-section ap-story ${visible ? "ap-visible" : ""}`} ref={ref}>
      <div className="ap-bg-mesh" />
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <div className="ap-story-imgs">
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&q=80" alt="team" className="ap-img-main" />
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80" alt="office" className="ap-img-secondary" />
              <div className="ap-exp-badge">
                <span className="ap-exp-num">13+</span>
                <span className="ap-exp-label">Years of<br/>Excellence</span>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="ap-story-content">
              <div className="ap-badge-pill text-dark fs-6 fw-bold"><Badge /> OUR STORY</div>
              <h2 className="ap-title">We Drive Business Growth<br/>with <em className="ap-teal">Purpose.</em></h2>
              <p className="ap-para">Since 2010, Bexon has been at the forefront of business transformation. We partner with companies of all sizes to unlock their full potential — combining deep industry expertise with innovative strategies that deliver lasting results.</p>
              <p className="ap-para">Our team of over 200 specialists across 12 countries brings a unique blend of analytical rigor and creative vision to every engagement.</p>
              <div className="ap-mini-stats">
                {[["2.4k+", "Happy Clients"], ["200+", "Team Members"], ["98%", "Success Rate"]].map(([n, l], i) => (
                  <div key={i} className="ap-mini-stat">
                    <span className="ap-mini-num">{n}</span>
                    <span className="ap-mini-lbl">{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

/* ── VALUES ── */
const ValuesSection = () => {
  const [ref, visible] = useInView();
  return (
    <section className={`ap-section ap-values ${visible ? "ap-visible" : ""}`} ref={ref}>
      <Container>
        <div className="ap-header">
          <div className="ap-badge-pill fs-6 fw-bold text-dark"><Badge /> OUR VALUES</div>
          <h2 className="ap-title">What Drives <em className="ap-teal">Us.</em></h2>
        </div>
        <Row className="g-4">
          {values.map((v, i) => (
            <Col lg={3} md={6} key={i}>
              <div className="ap-val-card" style={{ "--d": `${i * 0.12}s` }}>
                <div className="ap-val-icon">{v.icon}</div>
                <h3 className="ap-val-title">{v.title}</h3>
                <p className="ap-val-desc">{v.desc}</p>
                <div className="ap-val-line" />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

/* ── TIMELINE ── */
const TimelineSection = () => {
  const [ref, visible] = useInView();
  return (
    <section className={`ap-section ap-timeline ${visible ? "ap-visible" : ""}`} ref={ref}>
      <div className="ap-dark-bg" />
      <div className="ap-dark-mesh" />
      <Container>
        <div className="ap-header ap-header--dark">
          <div className="ap-badge-pill ap-badge-pill--dark fs-6 fw-bold"><Badge /> OUR JOURNEY</div>
          <h2 className="ap-title ap-title--white">Milestones That <em className="ap-teal">Shaped</em> Us.</h2>
        </div>
        <div className="ap-tl-wrap">
          <div className="ap-tl-line" />
          <Row className="g-4">
            {milestones.map((m, i) => (
              <Col md={3} key={i}>
                <div className="ap-tl-item" style={{ "--d": `${i * 0.15}s` }}>
                  <div className="ap-tl-dot" />
                  <div className="ap-tl-card">
                    <span className="ap-tl-year">{m.year}</span>
                    <h4 className="ap-tl-title">{m.title}</h4>
                    <p className="ap-tl-desc">{m.desc}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

/* ── TEAM ── */
const TeamSection = () => {
  const [ref, visible] = useInView();
  return (
    <section className={`ap-section ap-team ${visible ? "ap-visible" : ""}`} ref={ref}>
      <div className="ap-bg-mesh" />
      <Container>
        <div className="ap-header">
          <div className="ap-badge-pill text-dark fs-6 fw-bold"><Badge /> MEET THE TEAM</div>
          <h2 className="ap-title">The People Behind <em className="ap-teal">Bexon.</em></h2>
        </div>
        <Row className="g-4">
          {team.map((m, i) => (
            <Col lg={3} md={6} key={i}>
              <div className="ap-team-card" style={{ "--d": `${i * 0.12}s` }}>
                <div className="ap-team-img-wrap">
                  <img src={m.img} alt={m.name} className="ap-team-img" />
                  <div className="ap-team-overlay" />
                  <div className="ap-team-socials">
                    {["in","tw","fb"].map((s, si) => (
                      <a key={si} href="#" className="ap-soc-btn">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                          {s === "in" && <><rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.8"/><path d="M7 10v7M7 7v.5M12 10v7M12 13a3 3 0 016 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></>}
                          {s === "tw" && <path d="M4 4l16 16M4 20L20 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>}
                          {s === "fb" && <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>}
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="ap-team-info">
                  <h3 className="ap-team-name">{m.name}</h3>
                  <p className="ap-team-role">{m.role}</p>
                </div>
                <div className="ap-team-accent" />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

const AboutPage = () => (
  <div className="about-page page-enter">
    <PageHero title="About Us" breadcrumb="About Us" />
    <StorySection />
    <ValuesSection />
    <TimelineSection />
    <TeamSection />
  </div>
);

export default AboutPage;