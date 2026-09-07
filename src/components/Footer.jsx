import React from 'react'

export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          border-top: 1px solid rgba(245,166,35,0.12);
          padding: 40px 0;
          background: #0A0E27;
        }
        .footer-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .footer-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          font-weight: 900;
          color: #fff;
          text-decoration: none;
        }
        .footer-logo span { color: #F5A623; }
        .footer-copy {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          color: #8892B0;
          text-align: center;
        }
        .footer-copy span { color: #F5A623; }
        .footer-portfolio {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          color: #8892B0;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .footer-dot {
          width: 6px; height: 6px;
          background: #4CAF50;
          border-radius: 50%;
          animation: pulse-ring 1.5s ease-out infinite;
        }
      `}</style>
      <footer className="footer">
        <div className="footer-inner">
          <a href="#hero" className="footer-logo">Saumya<span>.</span>Singh</a>
          {/* <div className="footer-copy">
            © 2024 Saumya Singh. Crafted with <span>♥</span> and lots of Photoshop.
          </div> */}
          <div className="footer-portfolio">
            <div className="footer-dot" />
            Portfolio available on request
          </div>
        </div>
      </footer>
    </>
  )
}
