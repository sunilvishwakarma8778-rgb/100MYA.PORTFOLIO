import React, { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <style>{`
        .contact-bg {
          background: linear-gradient(180deg, #0A0E27 0%, #111530 100%);
        }
        .contact-inner {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .contact-inner.show {
          opacity: 1;
          transform: translateY(0);
        }
        .contact-headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 3.2rem);
          color: var(--white);
          line-height: 1.2;
          margin-bottom: 20px;
        }
        .contact-headline span { color: #F5A623; }
        .contact-sub {
          color: var(--muted);
          font-size: 1rem;
          line-height: 1.8;
          margin-bottom: 48px;
        }
        .contact-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 48px;
        }
        .contact-card {
          background: var(--navy-light);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 24px 16px;
          text-decoration: none;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .contact-card:hover {
          border-color: #F5A623;
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(245,166,35,0.12);
        }
        .contact-card-icon {
          font-size: 1.8rem;
        }
        .contact-card-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          color: var(--muted);
          text-transform: uppercase;
        }
        .contact-card-val {
          font-size: 0.82rem;
          color: var(--off-white);
          word-break: break-all;
          text-align: center;
        }
        .contact-cta-row {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        @media (max-width: 600px) {
          .contact-cards { grid-template-columns: 1fr; }
        }
      `}</style>
      <section className="section contact-bg" id="contact" ref={ref}>
        <div className="container">
          <div className={`contact-inner${visible ? ' show' : ''}`}>
            <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>Get In Touch</div>
            <h2 className="contact-headline">
              Let's Create Something<br /><span>Beautiful Together</span>
            </h2>
            <p className="contact-sub">
              Whether you need a brand identity, social media visuals, motion graphics, 
              or just want to talk design — my inbox is always open.
            </p>
            <div className="contact-cards">
              <a href="tel:9905837334" className="contact-card">
                <div className="contact-card-icon">📞</div>
                <div className="contact-card-label">Phone</div>
                <div className="contact-card-val">9905837334</div>
              </a>
              <a href="mailto:rajputsaumyasingh0@gmail.com" className="contact-card">
                <div className="contact-card-icon">✉️</div>
                <div className="contact-card-label">Email</div>
                <div className="contact-card-val">rajputsaumyasingh0@gmail.com</div>
              </a>
              <div className="contact-card">
                <div className="contact-card-icon">📍</div>
                <div className="contact-card-label">Location</div>
                <div className="contact-card-val">Gopalganj, Bihar</div>
              </div>
            </div>
            <div className="contact-cta-row">
              <a href="mailto:rajputsaumyasingh0@gmail.com" className="btn-primary">
                Send Me an Email
              </a>
              <a href="tel:9905837334" className="btn-outline">
                Call Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
