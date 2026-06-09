import React, { useEffect, useRef, useState } from 'react'

const strengths = [
  {
    icon: '💡',
    title: 'Creative Thinking',
    desc: 'Consistently bringing fresh perspectives and original ideas to every design challenge.',
    color: '#F5A623',
  },
  {
    icon: '🎯',
    title: 'Attention to Detail',
    desc: 'Obsessive about pixel-perfect execution, typography, and the small things that make big differences.',
    color: '#31A8FF',
  },
  {
    icon: '⏱️',
    title: 'Time Management',
    desc: 'Delivering quality work on schedule — juggling academics and design projects efficiently.',
    color: '#4CAF50',
  },
  {
    icon: '💬',
    title: 'Communication',
    desc: 'Translating client briefs into visual language and presenting design decisions with clarity.',
    color: '#E040FB',
  },
]

export default function Strengths() {
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
        .strengths-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .strength-card {
          background: var(--navy-light);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 32px 24px;
          text-align: center;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.6s ease, transform 0.6s ease, border-color 0.3s, box-shadow 0.3s;
          position: relative;
          overflow: hidden;
        }
        .strength-card.show {
          opacity: 1;
          transform: translateY(0);
        }
        .strength-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .strength-card:hover::before { opacity: 1; }
        .strength-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.3);
        }
        .strength-icon-wrap {
          width: 64px; height: 64px;
          border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.8rem;
          margin: 0 auto 20px;
          transition: transform 0.3s;
        }
        .strength-card:hover .strength-icon-wrap {
          transform: scale(1.1) rotate(-4deg);
        }
        .strength-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.05rem;
          color: var(--off-white);
          margin-bottom: 10px;
        }
        .strength-desc {
          font-size: 0.82rem;
          color: var(--muted);
          line-height: 1.7;
        }
        @media (max-width: 900px) {
          .strengths-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 500px) {
          .strengths-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <section className="section" id="strengths" ref={ref}>
        <div className="container">
          <div className="section-label">What I Bring</div>
          <h2 className="section-title">My Strengths</h2>
          <div className="accent-line" />
          <div className="strengths-grid">
            {strengths.map((s, i) => (
              <div
                key={s.title}
                className={`strength-card${visible ? ' show' : ''}`}
                style={{
                  transitionDelay: visible ? `${i * 0.12}s` : '0s',
                  '--card-color': s.color,
                }}
              >
                <style>{`
                  .strength-card:nth-child(${i + 1})::before {
                    background: ${s.color};
                  }
                `}</style>
                <div
                  className="strength-icon-wrap"
                  style={{
                    background: s.color + '18',
                    border: `1px solid ${s.color}33`,
                  }}
                >
                  {s.icon}
                </div>
                <div className="strength-title">{s.title}</div>
                <p className="strength-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
