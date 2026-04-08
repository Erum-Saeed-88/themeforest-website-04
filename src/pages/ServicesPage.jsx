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


const services = [
  {
    id: 1,
    tag: "Strategy",
    title: "Business Strategy Development",
    desc: "We craft tailored business strategies combining market insights, competitive analysis, and innovative thinking to position your business for sustainable long-term growth.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <path d="M22 6L38 15V29L22 38L6 29V15L22 6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <circle cx="22" cy="22" r="5" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M22 6V17M38 15L29 19M38 29L29 25M22 38V27M6 29L15 25M6 15L15 19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    features: ["Market Analysis", "Competitive Positioning", "Growth Roadmap", "KPI Framework"],
  },
  {
    id: 2,
    tag: "Experience",
    title: "Customer Experience Solutions",
    desc: "Design seamless customer journeys that build loyalty, increase retention, and drive meaningful engagement through every touchpoint of your business ecosystem.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="15" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M22 7C22 7 14 14 14 22C14 30 22 37 22 37" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M22 7C22 7 30 14 30 22C30 30 22 37 22 37" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M7 22H37" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M9 16H35M9 28H35" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2"/>
      </svg>
    ),
    features: ["Journey Mapping", "UX Optimization", "Feedback Systems", "Loyalty Programs"],
  },
  {
    id: 3,
    tag: "Sustainability",
    title: "ESG & Sustainability Consulting",
    desc: "Integrate Environmental, Social, and Governance principles into your core operations, enabling responsible growth while meeting evolving stakeholder expectations.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <path d="M22 6C14 6 8 12 8 20C8 32 22 38 22 38C22 38 36 32 36 20C36 12 30 6 22 6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M22 6V38M8 20H36" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="3 2"/>
        <path d="M15 28l4 4 8-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    features: ["ESG Reporting", "Carbon Strategy", "Stakeholder Alignment", "Compliance"],
  },
  {
    id: 4,
    tag: "Training",
    title: "Training & Development Programs",
    desc: "Equip your workforce with future-ready skills through tailored programs designed to accelerate individual growth and build high-performance organizational culture.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="14" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M22 8v5M22 31v5M8 22h5M31 22h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M22 15v7l5 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    features: ["Skills Assessment", "Custom Curriculum", "Leadership Coaching", "Performance Tracking"],
  },
  {
    id: 5,
    tag: "Digital",
    title: "Digital Transformation",
    desc: "Accelerate your digital journey with end-to-end transformation strategies that modernize operations, enhance agility, and unlock entirely new growth opportunities.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="8" y="12" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M15 32v4M29 32v4M12 36h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M13 21l5 5 5-7 5 5 5-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    features: ["Tech Roadmap", "Process Automation", "Cloud Migration", "Data Analytics"],
  },
  {
    id: 6,
    tag: "Finance",
    title: "Financial Advisory Services",
    desc: "Navigate complex financial landscapes with expert guidance, optimizing capital allocation, mitigating risk, and building the financial foundation for lasting profitability.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="8" y="10" width="28" height="24" rx="3" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M22 17v10M18 20h8M18 24h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="22" cy="22" r="7" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2"/>
      </svg>
    ),
    features: ["Financial Planning", "Risk Assessment", "Investment Strategy", "Cost Optimization"],
  },
];


const process = [
  { step: "01", title: "Discovery", desc: "We deep-dive into your business, goals, and challenges through intensive workshops and stakeholder interviews." },
  { step: "02", title: "Strategy", desc: "Our experts design a customized roadmap with clear milestones, KPIs, and resource allocation plans." },
  { step: "03", title: "Execution", desc: "We implement solutions with agile sprints, continuous feedback loops, and real-time performance tracking." },
  { step: "04", title: "Growth", desc: "We monitor outcomes, optimize strategies, and scale successful initiatives for sustained long-term impact." },
];


const whyUs = [
  { num: "13+", label: "Years Experience" },
  { num: "2.4k+", label: "Happy Clients" },
  { num: "98%", label: "Success Rate" },
  { num: "50+", label: "Industry Awards" },
];


const ServicesGrid = () => {
  const [ref, visible] = useInView();
  return (
    <section className={`sp-section sp-grid-sec ${visible ? "sp-visible" : ""}`} ref={ref}>
      <div className="sp-bg-mesh" />
      <Container>
        <div className="sp-header">
          <div className="sp-badge text-dark fs-6 fw-bold"><BadgeIcon /> OUR SERVICES</div>
          <h2 className="sp-title">
            What We <em className="sp-teal">Offer.</em>
          </h2>
          <p className="sp-subtitle">Comprehensive solutions designed to transform your business across every dimension.</p>
        </div>

        <Row className="g-4">
          {services.map((svc, i) => (
            <Col lg={4} md={6} key={svc.id}>
              <div className="sp-card" style={{ "--d": `${i * 0.1}s` }}>
                
                <div className="sp-card-topline" />

          
                <span className="sp-tag">{svc.tag}</span>

              
                <div className="sp-icon">{svc.icon}</div>

                
                <h3 className="sp-card-title">{svc.title}</h3>
                <p className="sp-card-desc">{svc.desc}</p>

                
                <ul className="sp-features">
                  {svc.features.map((f, fi) => (
                    <li key={fi} className="sp-feature-item">
                      <span className="sp-feature-dot" />
                      {f}
                    </li>
                  ))}
                </ul>

                
                <button className="sp-learn-btn">
                  Learn More
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

            
                <div className="sp-shimmer" />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};


const ProcessSection = () => {
  const [ref, visible] = useInView();
  return (
    <section className={`sp-section sp-process-sec ${visible ? "sp-visible" : ""}`} ref={ref}>
      <div className="sp-dark-bg" />
      <div className="sp-dark-mesh" />
      <Container>
        <div className="sp-header sp-header--dark">
          <div className="sp-badge fs-6 fw-bold"><BadgeIcon /> HOW WE WORK</div>
          <h2 className="sp-title sp-title--white">
            Our Proven <em className="sp-teal">Process.</em>
          </h2>
          <p className="sp-subtitle sp-subtitle--muted">A structured approach that ensures consistent results every single time.</p>
        </div>

        <Row className="g-4 sp-process-row">
          {process.map((p, i) => (
            <Col lg={3} md={6} key={i}>
              <div className="sp-process-card" style={{ "--d": `${i * 0.13}s` }}>
          
                {i < process.length - 1 && <div className="sp-connector" />}

                <div className="sp-step-num">{p.step}</div>
                <h3 className="sp-step-title">{p.title}</h3>
                <p className="sp-step-desc">{p.desc}</p>

                <div className="sp-step-glow" />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};


const WhyUsSection = () => {
  const [ref, visible] = useInView();
  return (
    <section className={`sp-section sp-why-sec ${visible ? "sp-visible" : ""}`} ref={ref}>
      <div className="sp-bg-mesh" />
      <Container>
        <Row className="align-items-center g-5">
        
          <Col lg={6}>
            <div className="sp-why-content">
              <div className="sp-badge text-dark fs-6 fw-bold"><BadgeIcon /> WHY CHOOSE US</div>
              <h2 className="sp-title">
                The Bexon <em className="sp-teal">Advantage.</em>
              </h2>
              <p className="sp-para">We don't just deliver services — we deliver outcomes. Our client-first philosophy, deep expertise, and commitment to measurable results set us apart from the competition.</p>

              <div className="sp-checklist">
                {["Customized solutions for every client", "Dedicated project managers for each engagement", "Transparent pricing with no hidden fees", "Post-delivery support and ongoing optimization"].map((item, i) => (
                  <div key={i} className="sp-check-item" style={{ "--d": `${i * 0.1}s` }}>
                    <span className="sp-check-icon">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" fill="rgba(10,191,188,0.12)" stroke="#0abfbc" strokeWidth="1.4"/>
                        <path d="M5 8l2.5 2.5L11 5.5" stroke="#0abfbc" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="sp-check-text">{item}</span>
                  </div>
                ))}
              </div>

              <button className="sp-cta-btn">
                Get a Free Consultation
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </Col>

          
          <Col lg={6}>
            <div className="sp-stats-grid">
              {whyUs.map((s, i) => (
                <div key={i} className="sp-stat-box" style={{ "--d": `${i * 0.12}s` }}>
                  <span className="sp-stat-num">{s.num}</span>
                  <span className="sp-stat-label">{s.label}</span>
                  <div className="sp-stat-accent" />
                </div>
              ))}
              
              <div className="sp-stats-orb" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};


const CTAStrip = () => {
  const [ref, visible] = useInView();
  return (
    <section className={`sp-cta-strip ${visible ? "sp-visible" : ""}`} ref={ref}>
      <div className="sp-cta-bg" />
      <Container>
        <div className="sp-cta-inner">
          <div>
            <h2 className="sp-cta-title fw-6 fw-">Ready to Transform Your Business?</h2>
            <p className="sp-cta-sub">Let's build something great together. Talk to our experts today.</p>
          </div>
          <div className="sp-cta-actions">
            <button className="sp-cta-primary">Get Started Now
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="sp-cta-secondary">View Portfolio</button>
          </div>
        </div>
      </Container>
    </section>
  );
};


const ServicesPage = () => (
  <div className="services-page page-enter">
    <PageHero title="Service" breadcrumb="Service" />
    <ServicesGrid />
    <ProcessSection />
    <WhyUsSection />
    <CTAStrip />
  </div>
);

export default ServicesPage;