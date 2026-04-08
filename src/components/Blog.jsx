import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

const posts = [
  {
    id: 1,
    day: "28",
    month: "FEB",
    category: "Business",
    author: "By Ellinien Loma",
    title: "Innovative Solutions for every Business Success.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80",
  },
  {
    id: 2,
    day: "28",
    month: "FEB",
    category: "Business",
    author: "By Ellinien Loma",
    title: "Harnessing Digital Transform a Roadmap Businesses.",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80",
  },
  {
    id: 3,
    day: "28",
    month: "FEB",
    category: "Business",
    author: "By Ellinien Loma",
    title: "Mastering Change Management Lessons for Businesses.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80",
  },
];

const Blog = () => {
  const headerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("bl-visible");
        }),
      { threshold: 0.12 }
    );
    if (headerRef.current) obs.observe(headerRef.current);
    cardRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="blog-section">
      <div className="bl-bg-mesh" />

      <Container>
        <div className="bl-header" ref={headerRef}>
          <div className="bl-badge">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="9" height="9" rx="1.5" fill="#0abfbc" />
              <rect x="13" y="2" width="9" height="9" rx="1.5" fill="#0abfbc" opacity="0.5" />
              <rect x="2" y="13" width="9" height="9" rx="1.5" fill="#0abfbc" opacity="0.5" />
              <rect x="13" y="13" width="9" height="9" rx="1.5" fill="#0abfbc" opacity="0.25" />
            </svg>
            <span className="text-dark fs-6 fw-bold">INSIGHTS &amp; IDEAS</span>
          </div>
          <h2 className="bl-title">
            The Ultimate <em className="bl-teal">Resource.</em>
          </h2>
        </div>

        <Row className="g-4">
          {posts.map((post, i) => (
            <Col lg={4} md={6} key={post.id}>
              <article
                className="bl-card"
                ref={(el) => (cardRefs.current[i] = el)}
                style={{ "--delay": `${i * 0.13}s` }}
              >
                <div className="bl-img-wrap">
                  <img src={post.img} alt={post.title} className="bl-img" />
                  <div className="bl-img-overlay" />

                  <div className="bl-date">
                    <span className="bl-day">{post.day}</span>
                    <span className="bl-month">{post.month}</span>
                  </div>

                  <div className="bl-top-line" />
                </div>

                <div className="bl-content">
                  <div className="bl-meta">
                    <span className="bl-category">{post.category}</span>
                    <span className="bl-sep">|</span>
                    <span className="bl-author">{post.author}</span>
                  </div>

                  <h3 className="bl-post-title">{post.title}</h3>

                  <button className="bl-read-btn">
                    Read More
                    <span className="bl-read-icon">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M2 12L12 2M12 2H5M12 2V9"
                          stroke="currentColor"
                          strokeWidth="1.9"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </div>

                <div className="bl-shimmer" />
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blog;