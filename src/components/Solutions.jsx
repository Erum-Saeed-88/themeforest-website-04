import React, { useState, useEffect, useRef, useCallback } from "react";
import { Container } from "react-bootstrap";

const solutions = [
  {
    id: 1,
    title: "Business Strategy Development",
    desc: "Through a combination of insights and innovative strategies, we work closely with you to deliver customized business solutions.",
    icon: (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <path d="M21 6L36 15V27L21 36L6 27V15L21 6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <circle cx="21" cy="21" r="5" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M21 6V16M36 15L28 19M36 27L28 23M21 36V26M6 27L14 23M6 15L14 19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Customer Experience Solutions",
    desc: "We design seamless customer journeys that build loyalty, increase retention, and drive meaningful engagement at every touchpoint.",
    icon: (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <circle cx="21" cy="21" r="14" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M21 7C21 7 14 14 14 21C14 28 21 35 21 35" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M21 7C21 7 28 14 28 21C28 28 21 35 21 35" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M7 21H35" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M9 15H33M9 27H33" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Sustainability and ESG Consulting",
    desc: "We help organizations integrate ESG principles into their core strategy, enabling sustainable growth and responsible business practices.",
    icon: (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <path d="M21 8L28 18H34L29 25H33L21 36L9 25H13L8 18H14L21 8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M17 22L20 25L25 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Training and Development Programs",
    desc: "Equip your workforce with future-ready skills through tailored training programs designed to accelerate individual and team performance.",
    icon: (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <circle cx="21" cy="21" r="13" stroke="currentColor" strokeWidth="1.6"/>
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam fuga pariatur quis laboriosam a, natus atque saepe delectus sit. Praesentium.
        </p>
        <path d="M21 8v4M21 30v4M8 21h4M30 21h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M21 15v6l4 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="21" cy="21" r="2" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: "Digital Transformation",
    desc: "Accelerate your digital journey with end-to-end transformation strategies that modernize operations and unlock new growth opportunities.",
    icon: (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <rect x="8" y="12" width="26" height="18" rx="3" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M15 30v4M27 30v4M12 34h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M14 20l4 4 4-6 4 4 4-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 6,
    title: "Financial Advisory Services",
    desc: "Navigate complex financial landscapes with expert guidance, helping your business optimize capital allocation and achieve sustainable profitability.",
    icon: (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <rect x="8" y="10" width="26" height="22" rx="3" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M21 16v10M17 19h8M17 23h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const VISIBLE = 4;

const Solutions = () => {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState("right");
  const [paused, setPaused] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add("sol-visible"); },
      { threshold: 0.1 }
    );
    if (headerRef.current) obs.observe(headerRef.current);
    return () => obs.disconnect();
  }, []);

  const goTo = useCallback((idx, d = "right") => {
    setDir(d);
    setActive(idx);
    setAnimKey((k) => k + 1);
  }, []);

  const next = useCallback(() => {
    goTo((active + 1) % solutions.length, "right");
  }, [active, goTo]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 3600);
    return () => clearInterval(t);
  }, [next, paused]);

  const visibleCards = Array.from({ length: VISIBLE }, (_, i) =>
    solutions[(active + i) % solutions.length]
  );

  return (
    <section
      className="solutions-section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="sol-bg-gradient" />
      <div className="sol-particles">
        {[...Array(20)].map((_, i) => (
          <span key={i} className="sol-dot-particle" style={{ "--i": i }} />
        ))}
      </div>

      <Container>
        <div className="sol-header" ref={headerRef}>
          <div className="sol-badge">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="9" height="9" rx="1.5" fill="#0abfbc" />
              <rect x="13" y="2" width="9" height="9" rx="1.5" fill="#0abfbc" opacity="0.5" />
              <rect x="2" y="13" width="9" height="9" rx="1.5" fill="#0abfbc" opacity="0.5" />
              <rect x="13" y="13" width="9" height="9" rx="1.5" fill="#0abfbc" opacity="0.25" />
            </svg>
            <span>OUR SOLUTIONS</span>
          </div>
          <h2 className="sol-title">
            Solutions to Transform
            <br />
            Your <em className="sol-teal">Business.</em>
          </h2>
        </div>

        <div className="sol-cards-wrapper" key={animKey}>
          {visibleCards.map((card, pos) => {
            const isActive = pos === VISIBLE - 1;
            return (
              <div
                key={card.id}
                className={`sol-card ${isActive ? "sol-card--active" : ""} sol-card--enter-${dir}`}
                style={{ "--pos": pos }}
              >
                {isActive && <div className="sol-active-bg" />}

                <div className="sol-card-body">
                  <div className={`sol-icon-wrap ${isActive ? "sol-icon-active" : ""}`}>
                    {card.icon}
                  </div>
                  
                  <h3 className="sol-card-title">{card.title}</h3>

                  {isActive && (
                    <div className="sol-active-content">
                      <p className="sol-card-desc">{card.desc}</p>
                      <button className="sol-learn-btn">
                        Learn More
                        <span className="sol-arrow-icon">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="sol-indicators">
          {solutions.map((_, i) => (
            <button
              key={i}
              className={`sol-indicator ${i === active ? "sol-indicator--active" : ""}`}
              onClick={() => goTo(i, i > active ? "right" : "left")}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Solutions;