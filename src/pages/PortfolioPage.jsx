import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageHero from "../components/PageHero";

/* ── useInView hook ── */
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

/* ── Projects data ── */
const projects = [
  {
    id: 1, category: "branding",
    tag: "Branding", title: "Nexus Brand Identity",
    desc: "Complete visual identity redesign for a fintech startup — logo, typography system, and brand guidelines.",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80",
    large: true,
  },
  {
    id: 2, category: "digital",
    tag: "Digital", title: "E-Commerce Growth Campaign",
    desc: "Performance marketing strategy that delivered 3x revenue growth within 6 months.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    large: false,
  },
  {
    id: 3, category: "strategy",
    tag: "Strategy", title: "Market Entry Roadmap",
    desc: "End-to-end market entry strategy for a European SaaS company expanding into Southeast Asia.",
    img: "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?w=600&q=80",
    large: false,
  },
  {
    id: 4, category: "digital",
    tag: "Digital", title: "AI-Powered Analytics Platform",
    desc: "Built a real-time business intelligence dashboard consolidating data across 12 enterprise systems.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    large: false,
  },
  {
    id: 5, category: "strategy",
    tag: "Strategy", title: "Retail Transformation",
    desc: "Omnichannel strategy that bridged physical and digital experiences for a 200-store retail chain.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
    large: false,
  },
  {
    id: 6, category: "branding",
    tag: "Branding", title: "Event Management Platform",
    desc: "End-to-end brand ecosystem for a global events management company across 14 markets.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&q=80",
    large: true,
  },
  {
    id: 7, category: "esg",
    tag: "ESG", title: "Sustainability Report Design",
    desc: "Comprehensive ESG reporting framework and visual communication for a Fortune 500 company.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    large: false,
  },
  {
    id: 8, category: "esg",
    tag: "ESG", title: "Green Supply Chain",
    desc: "Carbon footprint audit and sustainable supply chain redesign cutting emissions by 40%.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    large: false,
  },
];

const filters = ["all", "branding", "digital", "strategy", "esg"];

/* ── Testimonials ── */
const testimonials = [
  {
    text: "Bexon transformed our entire brand identity in just 8 weeks. The results exceeded every expectation and our customer recognition jumped by 60%.",
    name: "Sarah Johnson", role: "CEO, NexaScale", img: "https://i.pravatar.cc/56?img=47",
  },
  {
    text: "The digital strategy Bexon crafted for us generated 3x ROI in six months. Their team is sharp, responsive and genuinely invested in your success.",
    name: "Marcus Chen", role: "Founder, BrightPath", img: "https://i.pravatar.cc/56?img=52",
  },
  {
    text: "Working with Bexon on our ESG framework was a game-changer. They made a complex process feel seamless and delivered outstanding documentation.",
    name: "Amelia Torres", role: "COO, UrbanCore", img: "https://i.pravatar.cc/56?img=35",
  },
];

/* ══════════════════════════
   PORTFOLIO FILTER GRID
══════════════════════════ */
const PortfolioGrid = () => {
  const [ref, visible] = useInView();
  const [active, setActive] = useState("all");
  const [animKey, setAnimKey] = useState(0);

  const filtered = active === "all"
    ? projects
    : projects.filter(p => p.category === active);

  const handleFilter = (f) => {
    setActive(f);
    setAnimKey(k => k + 1);
  };

  return (
    <section className={`pp-section pp-grid-sec ${visible ? "pp-visible" : ""}`} ref={ref}>
      <div className="pp-bg-mesh" />
      <Container>
        {/* Header */}
        <div className="pp-header">
          <div className="pp-badge text-dark fs-6 fw-bold"><BadgeIcon /> OUR PORTFOLIO</div>
          <h2 className="pp-title">Work That <em className="pp-teal">Speaks.</em></h2>
          <p className="pp-subtitle">Explore our diverse portfolio of transformative projects across industries and disciplines.</p>
        </div>

        {/* Filter tabs */}
        <div className="pp-filters">
          {filters.map(f => (
            <button
              key={f}
              className={`pp-filter-btn ${active === f ? "pp-filter-btn--active" : ""}`}
              onClick={() => handleFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
              {active === f && <span className="pp-filter-dot" />}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className="pp-projects-grid" key={animKey}>
          {/* Large cards */}
          {filtered.filter(p => p.large).map((p, i) => (
            <div key={p.id} className="pp-card pp-card--large" style={{ "--d": `${i * 0.1}s` }}>
              <img src={p.img} alt={p.title} className="pp-img" />
              <div className="pp-overlay" />
              <div className="pp-card-info">
                <span className="pp-card-tag">{p.tag}</span>
                <h3 className="pp-card-title">{p.title}</h3>
                <p className="pp-card-desc">{p.desc}</p>
                <button className="pp-view-btn">
                  View Project
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className="pp-card-arrow">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="pp-shimmer" />
            </div>
          ))}

          {/* Small cards grid */}
          <div className="pp-small-grid">
            {filtered.filter(p => !p.large).map((p, i) => (
              <div key={p.id} className="pp-card pp-card--small" style={{ "--d": `${(i + 2) * 0.08}s` }}>
                <img src={p.img} alt={p.title} className="pp-img" />
                <div className="pp-overlay" />
                <div className="pp-card-info">
                  <span className="pp-card-tag">{p.tag}</span>
                  <h3 className="pp-card-title">{p.title}</h3>
                </div>
                <div className="pp-card-arrow">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="pp-shimmer" />
              </div>
            ))}
          </div>
        </div>

        {/* Load more */}
        <div className="pp-load-more">
          <button className="pp-load-btn">
            Load More Projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </Container>
    </section>
  );
};

/* ══════════════════════════
   STATS STRIP
══════════════════════════ */
const StatsStrip = () => {
  const [ref, visible] = useInView();
  const stats = [
    { num: "120+", label: "Projects Delivered" },
    { num: "40+", label: "Industry Sectors" },
    { num: "98%", label: "Client Satisfaction" },
    { num: "15+", label: "Design Awards" },
  ];
  return (
    <div className={`pp-stats-strip ${visible ? "pp-visible" : ""}`} ref={ref}>
      <Container>
        <div className="pp-stats-inner">
          {stats.map((s, i) => (
            <React.Fragment key={i}>
              <div className="pp-stat" style={{ "--d": `${i * 0.12}s` }}>
                <span className="pp-stat-num">{s.num}</span>
                <span className="pp-stat-label">{s.label}</span>
              </div>
              {i < stats.length - 1 && <div className="pp-stat-divider" />}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </div>
  );
};


const TestimonialsSection = () => {
  const [ref, visible] = useInView();
  return (
    <section className={`pp-section pp-testi-sec ${visible ? "pp-visible" : ""}`} ref={ref}>
      <div className="pp-bg-mesh" />
      <Container>
        <div className="pp-header">
          <div className="pp-badge text-dark fs-6 fw-bold"><BadgeIcon /> CLIENT STORIES</div>
          <h2 className="pp-title">What Our Clients <em className="pp-teal">Say.</em></h2>
        </div>
        <Row className="g-4">
          {testimonials.map((t, i) => (
            <Col lg={4} md={6} key={i}>
              <div className="pp-testi-card" style={{ "--d": `${i * 0.13}s` }}>
        
                <div className="pp-quote-icon">
                  <svg width="30" height="24" viewBox="0 0 30 24" fill="none">
                    <path d="M0 24V14.4C0 6.5 4.4 1.7 13.2 0L14.7 2.4C9.8 3.6 7.1 6.7 7.1 11.6H12.7V24H0ZM16.6 24V14.4C16.6 6.5 21 1.7 29.8 0L31.3 2.4C26.4 3.6 23.7 6.7 23.7 11.6H29.3V24H16.6Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="pp-testi-text">{t.text}</p>
                <div className="pp-testi-author">
                  <img src={t.img} alt={t.name} className="pp-testi-avatar" />
                  <div>
                    <span className="pp-testi-name">{t.name}</span>
                    <span className="pp-testi-role">{t.role}</span>
                  </div>
                </div>
                <div className="pp-testi-line" />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};


const CTABanner = () => {
  const [ref, visible] = useInView();
  return (
    <section className={`pp-cta-sec ${visible ? "pp-visible" : ""}`} ref={ref}>
      <Container>
        <div className="pp-cta-banner">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=80" alt="cta" className="pp-cta-img"/>
          <div className="pp-cta-overlay" />
          <div className="pp-cta-orb" />
          <div className="pp-cta-content">
            <h2 className="pp-cta-title">Have a Project in Mind?</h2>
            <p className="pp-cta-sub">Let's collaborate to build something extraordinary together.</p>
            <div className="pp-cta-btns">
              <button className="pp-cta-primary">Start a Project
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button className="pp-cta-outline">View All Work</button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};


const PortfolioPage = () => (
  <div className="portfolio-page page-enter">
    <PageHero title="Portfolio" breadcrumb="Portfolio" />
    <PortfolioGrid />
    <StatsStrip />
    <TestimonialsSection />
    <CTABanner />
  </div>
);

export default PortfolioPage;