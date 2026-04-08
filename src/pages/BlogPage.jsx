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


const posts = [
  {
    id: 1, category: "Business", tag: "business",
    day: "28", month: "FEB", readTime: "5 min read",
    title: "Innovative Solutions for Every Business Success",
    excerpt: "Discover how cutting-edge strategies and technology integration are reshaping the modern business landscape and creating new opportunities for growth.",
    author: "Ellinien Loma", authorImg: "https://i.pravatar.cc/40?img=47",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80",
    featured: true,
  },
  {
    id: 2, category: "Digital", tag: "digital",
    day: "22", month: "FEB", readTime: "4 min read",
    title: "Harnessing Digital Transformation: A Roadmap for Businesses",
    excerpt: "A practical step-by-step guide to navigating digital transformation without disrupting your current operations.",
    author: "Marcus Chen", authorImg: "https://i.pravatar.cc/40?img=52",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80",
    featured: false,
  },
  {
    id: 3, category: "Strategy", tag: "strategy",
    day: "15", month: "FEB", readTime: "6 min read",
    title: "Mastering Change Management: Lessons for Businesses",
    excerpt: "Change is inevitable. Learn how top-performing organizations navigate transformation with minimal friction and maximum results.",
    author: "James Harrison", authorImg: "https://i.pravatar.cc/40?img=68",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80",
    featured: false,
  },
  {
    id: 4, category: "ESG", tag: "esg",
    day: "10", month: "FEB", readTime: "7 min read",
    title: "Building a Sustainable Business: ESG Principles in Practice",
    excerpt: "How leading companies are integrating environmental, social and governance frameworks to drive long-term profitability.",
    author: "Amelia Torres", authorImg: "https://i.pravatar.cc/40?img=35",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80",
    featured: false,
  },
  {
    id: 5, category: "Leadership", tag: "leadership",
    day: "05", month: "FEB", readTime: "5 min read",
    title: "The Future of Leadership in a Hybrid Workplace",
    excerpt: "What it takes to lead dispersed teams effectively while maintaining culture, performance and wellbeing in a post-pandemic world.",
    author: "Sophia Williams", authorImg: "https://i.pravatar.cc/40?img=16",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&q=80",
    featured: false,
  },
  {
    id: 6, category: "Business", tag: "business",
    day: "28", month: "JAN", readTime: "4 min read",
    title: "Customer Experience: The New Competitive Advantage",
    excerpt: "Why businesses that obsess over customer experience consistently outperform competitors across every metric that matters.",
    author: "Ellinien Loma", authorImg: "https://i.pravatar.cc/40?img=47",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=80",
    featured: false,
  },
];

const categories = ["All", "Business", "Digital", "Strategy", "ESG", "Leadership"];
const popularPosts = posts.slice(0, 4);


const FeaturedPost = ({ post }) => {
  const [ref, visible] = useInView();
  return (
    <div className={`bp-featured ${visible ? "bp-visible" : ""}`} ref={ref}>
      <div className="bp-featured-img-wrap">
        <img src={post.img} alt={post.title} className="bp-featured-img"/>
        <div className="bp-featured-overlay"/>
        <div className="bp-featured-date">
          <span className="bp-date-num">{post.day}</span>
          <span className="bp-date-mon">{post.month}</span>
        </div>
        <span className="bp-featured-badge">Featured</span>
      </div>
      <div className="bp-featured-body">
        <div className="bp-meta">
          <span className="bp-cat-pill">{post.category}</span>
          <span className="bp-read-time">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
              <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {post.readTime}
          </span>
        </div>
        <h2 className="bp-featured-title">{post.title}</h2>
        <p className="bp-featured-excerpt">{post.excerpt}</p>
        <div className="bp-author-row">
          <img src={post.authorImg} alt={post.author} className="bp-author-img"/>
          <span className="bp-author-name">By {post.author}</span>
        </div>
        <button className="bp-read-btn">
          Read Article
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
            <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};


const BlogCard = ({ post, delay }) => (
  <div className="bp-card" style={{ "--d": delay }}>
    <div className="bp-card-img-wrap">
      <img src={post.img} alt={post.title} className="bp-card-img"/>
      <div className="bp-card-overlay"/>
      <div className="bp-card-date">
        <span className="bp-date-num">{post.day}</span>
        <span className="bp-date-mon">{post.month}</span>
      </div>
      <div className="bp-card-topline"/>
    </div>
    <div className="bp-card-body">
      <div className="bp-meta">
        <span className="bp-cat-pill">{post.category}</span>
        <span className="bp-read-time">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
            <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {post.readTime}
        </span>
      </div>
      <h3 className="bp-card-title">{post.title}</h3>
      <p className="bp-card-excerpt">{post.excerpt}</p>
      <div className="bp-card-footer">
        <div className="bp-author-row">
          <img src={post.authorImg} alt={post.author} className="bp-author-img bp-author-img--sm"/>
          <span className="bp-author-name bp-author-name--sm">{post.author}</span>
        </div>
        <button className="bp-card-read-btn">
          Read More
          <span className="bp-card-arrow">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>
      </div>
    </div>
    <div className="bp-shimmer"/>
  </div>
);


const Sidebar = ({ activeTag, setActiveTag, searchTerm, setSearchTerm }) => {
  const [ref, visible] = useInView();
  return (
    <aside className={`bp-sidebar ${visible ? "bp-visible" : ""}`} ref={ref}>
      
      <div className="bp-sidebar-widget">
        <h4 className="bp-widget-title">Search</h4>
        <div className="bp-search-wrap">
          <input
            type="text"
            placeholder="Search articles..."
            className="bp-search-input"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button className="bp-search-btn" aria-label="Search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="bp-sidebar-widget">
        <h4 className="bp-widget-title">Categories</h4>
        <div className="bp-cat-list">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`bp-cat-btn ${activeTag === cat.toLowerCase() || (activeTag === "all" && cat === "All") ? "bp-cat-btn--active" : ""}`}
              onClick={() => setActiveTag(cat.toLowerCase())}
            >
              <span>{cat}</span>
              <span className="bp-cat-count">
                {cat === "All" ? posts.length : posts.filter(p => p.category === cat).length}
              </span>
            </button>
          ))}
        </div>
      </div>

    
      <div className="bp-sidebar-widget">
        <h4 className="bp-widget-title">Popular Posts</h4>
        <div className="bp-popular-list">
          {popularPosts.map((p, i) => (
            <div key={i} className="bp-popular-item">
              <img src={p.img} alt={p.title} className="bp-popular-img"/>
              <div className="bp-popular-content">
                <span className="bp-popular-date">{p.day} {p.month}</span>
                <h5 className="bp-popular-title">{p.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bp-sidebar-widget bp-newsletter-widget">
        <div className="bp-newsletter-bg"/>
        <div className="bp-newsletter-content">
          <BadgeIcon />
          <h4 className="bp-newsletter-title">Stay Updated</h4>
          <p className="bp-newsletter-text">Get the latest insights delivered straight to your inbox.</p>
          <div className="bp-newsletter-form">
            <input type="email" placeholder="Your email address" className="bp-newsletter-input"/>
            <button className="bp-newsletter-btn">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="bp-sidebar-widget">
        <h4 className="bp-widget-title">Tags</h4>
        <div className="bp-tags-wrap">
          {["Business", "Strategy", "Digital", "ESG", "Leadership", "Innovation", "Growth", "Consulting"].map((tag, i) => (
            <button
              key={i}
              className={`bp-tag ${activeTag === tag.toLowerCase() ? "bp-tag--active" : ""}`}
              onClick={() => setActiveTag(tag.toLowerCase())}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};


const BlogSection = () => {
  const [ref, visible] = useInView();
  const [activeTag, setActiveTag] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const PER_PAGE = 4;

  const filtered = posts.filter(p => {
    const matchTag  = activeTag === "all" || p.tag === activeTag || p.category.toLowerCase() === activeTag;
    const matchSearch = !searchTerm || p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchTag && matchSearch;
  });

  const featured = filtered.find(p => p.featured) || filtered[0];
  const rest = filtered.filter(p => p.id !== featured?.id);
  const paginated = rest.slice(0, page * PER_PAGE);
  const hasMore = paginated.length < rest.length;

  return (
    <section className={`bp-section ${visible ? "bp-visible" : ""}`} ref={ref}>
      <div className="bp-bg-mesh"/>
      <Container>

        <div className="bp-header">
          <div className="bp-badge"><BadgeIcon /> INSIGHTS & IDEAS</div>
          <h2 className="bp-title">The Ultimate <em className="bp-teal">Resource.</em></h2>
          <p className="bp-subtitle">Stay ahead of the curve with expert insights, industry trends, and actionable business strategies.</p>
        </div>

        <Row className="g-5">

          <Col lg={8}>
          
            {featured && <FeaturedPost post={featured}/>}

            
            <div className="bp-grid">
              {paginated.map((post, i) => (
                <BlogCard key={post.id} post={post} delay={`${i * 0.1}s`}/>
              ))}
            </div>

            
            {hasMore && (
              <div className="bp-load-more">
                <button className="bp-load-btn" onClick={() => setPage(p => p + 1)}>
                  Load More Articles
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            )}

            
            {filtered.length === 0 && (
              <div className="bp-no-results">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="8" stroke="#0abfbc" strokeWidth="1.5"/>
                  <path d="M21 21l-4.35-4.35" stroke="#0abfbc" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <p>No articles found. Try a different search or category.</p>
              </div>
            )}
          </Col>

          
          <Col lg={4}>
            <Sidebar
              activeTag={activeTag}
              setActiveTag={setActiveTag}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};


const CTAStrip = () => {
  const [ref, visible] = useInView();
  return (
    <section className={`bp-cta-strip ${visible ? "bp-visible" : ""}`} ref={ref}>
      <div className="bp-cta-bg"/>
      <Container>
        <div className="bp-cta-inner">
          <div>
            <h2 className="bp-cta-title">Want to Contribute?</h2>
            <p className="bp-cta-sub">Share your expertise with our growing community of business leaders.</p>
          </div>
          <div className="bp-cta-actions">
            <button className="bp-cta-primary">Submit an Article
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="bp-cta-outline">Subscribe to Newsletter</button>
          </div>
        </div>
      </Container>
    </section>
  );
};


const BlogPage = () => (
  <div className="blog-page page-enter">
    <PageHero title="Read Blog" breadcrumb="Blog"/>
    <BlogSection/>
    <CTAStrip/>
  </div>
);

export default BlogPage;