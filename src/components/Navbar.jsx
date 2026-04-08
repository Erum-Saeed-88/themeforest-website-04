import React, { useState, useEffect } from "react";
import { Navbar as BSNavbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BSNavbar
      expand="lg"
      className={`bexon-navbar ${scrolled ? "navbar-scrolled" : ""}`}
      variant="dark"
    >
      <Container fluid className="px-4 rounded nav-container">
        <BSNavbar.Brand href="#" className="bexon-brand">
          <span className="brand-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="9" height="9" rx="1.5" fill="#0ABFBC" />
              <rect x="13" y="2" width="9" height="9" rx="1.5" fill="#0ABFBC" opacity="0.6" />
              <rect x="2" y="13" width="9" height="9" rx="1.5" fill="#0ABFBC" opacity="0.6" />
              <rect x="13" y="13" width="9" height="9" rx="1.5" fill="#0ABFBC" opacity="0.3" />
            </svg>
          </span>
          <span className="brand-text">Bexon</span>
        </BSNavbar.Brand>

        <BSNavbar.Toggle
          aria-controls="bexon-nav"
          onClick={() => setMenuOpen(!menuOpen)}
          className="bexon-toggler"
        />

        <BSNavbar.Collapse id="bexon-nav">
          <Nav className="mx-auto bexon-nav-links">
            {["Home", "About", "Services", "Portfolio", "Blog", "Contact"].map((item) => (
              <div key={item} className="nav-item-wrapper">
                <Link to={`/${item.toLowerCase()}`} className="bexon-nav-item">{item}<FaChevronDown /></Link>
                
                <span className="nav-underline" />
              </div>
            ))}
          </Nav>

          <div className="bexon-nav-actions">
            <button className="icon-btn" aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <Button className="lets-talk-btn text-light" href="#">
              Let's Talk
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="btn-arrow">
                <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </Button>
            <button className="menu-icon-btn" aria-label="Menu">
              <span /><span /><span />
            </button>
          </div>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;