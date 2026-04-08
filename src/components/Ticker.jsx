import React from "react";

const brands = [
  {
    id: 1,
    name: "Audac",
    logo: (
      <svg width="90" height="32" viewBox="0 0 90 32" fill="none">
        <text x="0" y="24" fontFamily="Georgia, serif" fontSize="22" fontStyle="italic" fill="#1a2940" letterSpacing="-1">audac</text>
        <text x="72" y="14" fontFamily="Arial" fontSize="10" fill="#0abfbc">~</text>
      </svg>
    ),
  },
  {
    id: 2,
    name: "Flomodia",
    logo: (
      <svg width="110" height="32" viewBox="0 0 110 32" fill="none">
        <text x="0" y="24" fontFamily="Georgia, serif" fontSize="21" fontStyle="italic" fill="#1a2940" letterSpacing="-0.5">flomodia</text>
        <text x="100" y="10" fontFamily="Arial" fontSize="10" fill="#0abfbc">~</text>
      </svg>
    ),
  },
  {
    id: 3,
    name: "CTA",
    isCenter: true,
    logo: null,
  },
  {
    id: 4,
    name: "Influence4You",
    logo: (
      <svg width="140" height="32" viewBox="0 0 140 32" fill="none">
        <text x="0" y="24" fontFamily="Georgia, serif" fontSize="20" fontStyle="italic" fill="#1a2940">fluence</text>
        <rect x="73" y="6" width="50" height="20" rx="10" fill="#e8f5f5" stroke="#0abfbc" strokeWidth="1.2"/>
        <text x="80" y="21" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="600" fill="#0abfbc">4You</text>
      </svg>
    ),
  },
  {
    id: 5,
    name: "TSE",
    logo: (
      <svg width="70" height="32" viewBox="0 0 70 32" fill="none">
        <text x="0" y="26" fontFamily="Georgia, serif" fontSize="26" fontStyle="italic" fill="#1a2940" letterSpacing="-2">tse</text>
        <line x1="0" y1="28" x2="52" y2="28" stroke="#1a2940" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: 6,
    name: "Audac2",
    logo: (
      <svg width="90" height="32" viewBox="0 0 90 32" fill="none">
        <text x="0" y="24" fontFamily="Georgia, serif" fontSize="22" fontStyle="italic" fill="#1a2940" letterSpacing="-1">audac</text>
        <text x="72" y="14" fontFamily="Arial" fontSize="10" fill="#0abfbc">~</text>
      </svg>
    ),
  },
  {
    id: 7,
    name: "Flomodia2",
    logo: (
      <svg width="110" height="32" viewBox="0 0 110 32" fill="none">
        <text x="0" y="24" fontFamily="Georgia, serif" fontSize="21" fontStyle="italic" fill="#1a2940" letterSpacing="-0.5">flomodia</text>
        <text x="100" y="10" fontFamily="Arial" fontSize="10" fill="#0abfbc">~</text>
      </svg>
    ),
  },
  {
    id: 8,
    name: "CTA2",
    isCenter: true,
    logo: null,
  },
  {
    id: 9,
    name: "Influence4You2",
    logo: (
      <svg width="140" height="32" viewBox="0 0 140 32" fill="none">
        <text x="0" y="24" fontFamily="Georgia, serif" fontSize="20" fontStyle="italic" fill="#1a2940">fluence</text>
        <rect x="73" y="6" width="50" height="20" rx="10" fill="#e8f5f5" stroke="#0abfbc" strokeWidth="1.2"/>
        <text x="80" y="21" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="600" fill="#0abfbc">4You</text>
      </svg>
    ),
  },
  {
    id: 10,
    name: "TSE2",
    logo: (
      <svg width="70" height="32" viewBox="0 0 70 32" fill="none">
        <text x="0" y="26" fontFamily="Georgia, serif" fontSize="26" fontStyle="italic" fill="#1a2940" letterSpacing="-2">tse</text>
        <line x1="0" y1="28" x2="52" y2="28" stroke="#1a2940" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

const CtaCard = () => (
  <div className="ticker-cta mt-5 shadow-sm">
    <p className="cta-line1">
      Join Over{" "}
      <span className="cta-badge">1000+</span>
    </p>
    <p className="cta-line2">
      Companies with <strong>Bexon Here</strong>
    </p>
  </div>
);

const Ticker = () => {
  return (
    <section className="ticker-section mt-3 mb-3">

      <div className="ticker-fade ticker-fade-left" />
      <div className="ticker-fade ticker-fade-right" />

      <div className="ticker-track-wrapper">
        <div className="ticker-track">
          {brands.map((brand) =>
            brand.isCenter ? (
              <div className="ticker-item ticker-cta-item" key={brand.id}>
                <CtaCard />
              </div>
            ) : (
              <div className="ticker-item" key={brand.id}>
                <div className="ticker-logo">{brand.logo}</div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Ticker;