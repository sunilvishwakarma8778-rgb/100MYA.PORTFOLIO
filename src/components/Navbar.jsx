import React, { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Projects', 'Education', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 20px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.4s ease;
        }
        .navbar.scrolled {
          background: rgba(10,14,39,0.92);
          backdrop-filter: blur(16px);
          padding: 14px 40px;
          border-bottom: 1px solid rgba(245,166,35,0.15);
        }
        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          font-weight: 900;
          color: #fff;
          text-decoration: none;
          letter-spacing: -0.02em;
        }
        .nav-logo span { color: #F5A623; }
        .nav-links {
          display: flex;
          gap: 36px;
          list-style: none;
        }
        .nav-links a {
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #8892B0;
          text-decoration: none;
          transition: color 0.2s;
          position: relative;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px; left: 0;
          width: 0; height: 1px;
          background: #F5A623;
          transition: width 0.3s ease;
        }
        .nav-links a:hover { color: #F5A623; }
        .nav-links a:hover::after { width: 100%; }
        .nav-cta {
          background: transparent;
          border: 1px solid #F5A623;
          color: #F5A623;
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 8px 20px;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
        }
        .nav-cta:hover {
          background: #F5A623;
          color: #0A0E27;
        }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
        }
        .hamburger span {
          width: 24px; height: 2px;
          background: #F5A623;
          border-radius: 2px;
          transition: all 0.3s;
          display: block;
        }
        .mobile-menu {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(10,14,39,0.98);
          backdrop-filter: blur(24px);
          z-index: 99;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 40px;
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu a {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          color: #fff;
          text-decoration: none;
          transition: color 0.2s;
        }
        .mobile-menu a:hover { color: #F5A623; }
        .close-btn {
          position: absolute;
          top: 24px; right: 32px;
          font-size: 2rem;
          color: #F5A623;
          background: none;
          border: none;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .navbar { padding: 16px 20px; }
          .navbar.scrolled { padding: 12px 20px; }
          .nav-links, .nav-cta { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <a href="#hero" className="nav-logo">S<span>.</span>Singh</a>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
          ))}
        </ul>
        <a href="mailto:rajputsaumyasingh0@gmail.com" className="nav-cta">Hire Me</a>
        <button className="hamburger" onClick={() => setMenuOpen(true)}>
          <span /><span /><span />
        </button>
      </nav>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>×</button>
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{l}</a>
        ))}
        <a href="mailto:rajputsaumyasingh0@gmail.com" className="nav-cta" onClick={() => setMenuOpen(false)}>Hire Me</a>
      </div>
    </>
  )
}
