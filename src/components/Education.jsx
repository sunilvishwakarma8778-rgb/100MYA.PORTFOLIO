import React, { useEffect, useRef, useState } from 'react'

const education = [
  {
    degree: 'B.Com',
    institution: 'IGNOU Delhi  ',
    status: 'Pursuing',
    year: '2023 – Present',
    icon: '🎓',
    color: '#F5A623',
  },
  {
    degree: 'DGWA Plus — Graphic Design',
    institution: 'MAAC, Gorakhpur',
    status: 'Completed',
    year: '2022 – 2023',
    icon: '🎨',
    color: '#31A8FF',
    highlight: true,
  },
  {
    degree: '12th (Maths)',
    institution: 'PS Inter College, Deoria, U.P.',
    status: 'Completed',
    year: '2020 – 2022',
    icon: '📚',
    color: '#4CAF50',
  },
  {
    degree: '10th',
    institution: 'APS Gopalganj, Bihar',
    status: 'Completed',
    year: '2018 – 2020',
    icon: '🏫',
    color: '#9999FF',
  },
]

export default function Education() {
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
        .edu-bg {
          background: linear-gradient(180deg, #0A0E27 0%, #111530 50%, #0A0E27 100%);
        }
        .edu-timeline {
          position: relative;
          padding-left: 40px;
          max-width: 700px;
          margin: 0 auto;
        }
        .edu-timeline::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, #F5A623, rgba(245,166,35,0.1));
        }
        .edu-item {
          position: relative;
          margin-bottom: 40px;
          opacity: 0;
          transform: translateX(-20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .edu-item.show {
          opacity: 1;
          transform: translateX(0);
        }
        .edu-dot {
          position: absolute;
          left: -46px;
          top: 16px;
          width: 12px; height: 12px;
          border-radius: 50%;
          border: 2px solid #F5A623;
          background: #0A0E27;
          transition: background 0.3s, box-shadow 0.3s;
        }
        .edu-item.show .edu-dot {
          background: #F5A623;
          box-shadow: 0 0 0 4px rgba(245,166,35,0.15);
        }
        .edu-card {
          background: var(--navy-light);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 24px 28px;
          transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
        }
        .edu-card:hover {
          border-color: #F5A623;
          box-shadow: 0 12px 36px rgba(245,166,35,0.1);
          transform: translateX(6px);
        }
        .edu-card.highlight {
          border-color: rgba(245,166,35,0.4);
          background: rgba(245,166,35,0.05);
        }
        .edu-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 10px;
        }
        .edu-icon {
          font-size: 1.5rem;
          line-height: 1;
          margin-top: 2px;
        }
        .edu-degree {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem;
          color: var(--off-white);
          line-height: 1.3;
          margin-bottom: 4px;
        }
        .edu-inst {
          color: var(--muted);
          font-size: 0.85rem;
        }
        .edu-meta {
          display: flex;
          gap: 12px;
          align-items: center;
          flex-wrap: wrap;
          margin-top: 12px;
        }
        .edu-year {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          color: var(--muted);
        }
        .edu-status {
          font-family: 'Space Mono', monospace;
          font-size: 0.62rem;
          letter-spacing: 0.1em;
          padding: 3px 10px;
          border-radius: 999px;
        }
        .edu-status.pursuing {
          background: rgba(245,166,35,0.15);
          color: #F5A623;
          border: 1px solid rgba(245,166,35,0.3);
        }
        .edu-status.completed {
          background: rgba(76,175,80,0.12);
          color: #4CAF50;
          border: 1px solid rgba(76,175,80,0.25);
        }
      `}</style>
      <section className="section edu-bg" id="education" ref={ref}>
        <div className="container">
          <div className="section-label">Background</div>
          <h2 className="section-title">Education</h2>
          <div className="accent-line" />
          <div className="edu-timeline">
            {education.map((e, i) => (
              <div
                key={i}
                className={`edu-item${visible ? ' show' : ''}${e.highlight ? '' : ''}`}
                style={{ transitionDelay: visible ? `${i * 0.15}s` : '0s' }}
              >
                <div className="edu-dot" />
                <div className={`edu-card${e.highlight ? ' highlight' : ''}`}>
                  <div className="edu-header">
                    <div className="edu-icon">{e.icon}</div>
                    <div>
                      <div className="edu-degree">{e.degree}</div>
                      <div className="edu-inst">{e.institution}</div>
                    </div>
                  </div>
                  <div className="edu-meta">
                    <span className="edu-year">{e.year}</span>
                    <span className={`edu-status ${e.status.toLowerCase()}`}>{e.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
