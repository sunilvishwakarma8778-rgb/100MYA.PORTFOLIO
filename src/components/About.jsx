import React, { useEffect, useRef, useState } from "react";

export default function About() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .about-visual {
          position: relative;
        }
        .about-card-main {
          background: var(--navy-light);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 40px;
          position: relative;
          overflow: hidden;
        }
        .about-card-main::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #F5A623, transparent);
        }
        .about-monogram {
          display: block;
          width: 100%;
          height: clamp(260px, 32vw, 420px);
          object-fit: cover;
          border-radius: 14px;
          margin-bottom: 24px;
        }
        .about-quote {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          color: var(--off-white);
          line-height: 1.6;
          font-style: italic;
          margin-bottom: 20px;
        }
        .about-quote::before { content: '"'; color: #F5A623; }
        .about-quote::after { content: '"'; color: #F5A623; }
        .about-location {
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          color: var(--muted);
          letter-spacing: 0.12em;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .about-location::before {
          content: '📍';
          font-size: 0.85rem;
        }
        .about-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 20px;
        }
        .stat-box {
          background: rgba(245,166,35,0.06);
          border: 1px solid rgba(245,166,35,0.15);
          border-radius: 12px;
          padding: 20px;
          text-align: center;
        }
        .stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 900;
          color: #F5A623;
          display: block;
          line-height: 1;
          margin-bottom: 4px;
        }
        .stat-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.62rem;
          letter-spacing: 0.1em;
          color: var(--muted);
          text-transform: uppercase;
        }
        .about-text p {
          color: var(--muted);
          font-size: 1rem;
          line-height: 1.85;
          margin-bottom: 20px;
        }
        .about-text p strong { color: var(--off-white); font-weight: 500; }
        .about-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 28px;
        }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <section className="section" id="about" ref={ref}>
        <div className="container">
          <div
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.7s ease",
            }}
          >
            <div className="section-label">Who I Am</div>
            <h2 className="section-title">About Me</h2>
            <div className="accent-line" />
            <div className="about-grid">
              <div className="about-visual">
                <div className="about-card-main">
                  {/* <img
                    className="about-monogram"
                    src="/public/s."
                    alt="Saumya Singh"
                  /> */}
                  <p className="about-quote">
                    Design is not just what it looks like — design is how it
                    works.
                  </p>
                  <div className="about-location">Gopalganj, Bihar </div>
                  <div className="about-stats">
                    <div className="stat-box">
                      <span className="stat-num">6+</span>
                      <span className="stat-label">Tools</span>
                    </div>
                    <div className="stat-box">
                      <span className="stat-num">MAAC</span>
                      <span className="stat-label">Certified</span>
                    </div>
                    <div className="stat-box">
                      <span className="stat-num">∞</span>
                      <span className="stat-label">Creativity</span>
                    </div>
                    <div className="stat-box">
                      <span className="stat-num">2</span>
                      <span className="stat-label">Languages</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-text">
                <p>
                  Hi! I'm <strong>Saumya Singh</strong>, a creative and
                  detail-oriented
                  <strong> Graphic Designer</strong> based in Delhi, pursuing
                  B.Com from IGNOU while building my design career.
                </p>
                <p>
                  I specialize in crafting{" "}
                  <strong>
                    visual identities, social media graphics, branding, and
                    motion graphics
                  </strong>
                  . My toolkit includes the full Adobe Creative Suite and Figma
                  — tools I've mastered through my
                  <strong>
                    {" "}
                    Diploma in Graphics, Web and Animation (DGWA Plus)
                    certification from MAAC, Gorakhpur
                  </strong>
                  .
                </p>
                <p>
                  I'm passionate about transforming ideas into compelling
                  visuals — whether it's a logo that tells a story, a poster
                  that stops the scroll, or a motion graphic that brings a brand
                  to life.
                </p>
                <div className="about-pills">
                  {[
                    "Branding",
                    "Social Media Design",
                    "Motion Graphics",
                    "Digital Creatives",
                    "Logo Design",
                    "Video Editing",
                  ].map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
