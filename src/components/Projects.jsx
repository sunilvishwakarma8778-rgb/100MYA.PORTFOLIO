import React, { useEffect, useRef, useState } from 'react'

const projects = [
  {
    num: '01',
    title: 'Social Media Design',
    desc: 'Designed scroll-stopping social media posts, posters, and creative advertisements for brands across platforms.',
    tags: ['Photoshop', 'Illustrator', 'Canva'],
    icon: '📱',
    color: '#31A8FF',
  },
  {
    num: '02',
    title: 'Logo & Brand Identity',
    desc: 'Created comprehensive logo concepts and branding systems — from initial sketches to final brand guidelines.',
    tags: ['Illustrator', 'Figma', 'Branding'],
    icon: '✏️',
    color: '#F5A623',
  },
  {
    num: '03',
    title: 'Print & Promotional Design',
    desc: 'Developed brochures, flyers, and promotional materials with a strong focus on hierarchy and print-ready layouts.',
    tags: ['Photoshop', 'InDesign', 'Print'],
    icon: '🖨️',
    color: '#4CAF50',
  },
  {
    num: '04',
    title: 'Motion Graphics',
    desc: 'Brought brands to life through animated intros, kinetic typography, and dynamic motion graphics sequences.',
    tags: ['After Effects', 'Adobe Animate'],
    icon: '🎬',
    color: '#9999FF',
  },
  {
    num: '05',
    title: 'Video Content Creation',
    desc: 'Edited and produced polished video content with professional cuts, color grading, and sound design.',
    tags: ['Premiere Pro', 'After Effects'],
    icon: '🎥',
    color: '#E040FB',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <style>{`
        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .project-row {
          display: grid;
          grid-template-columns: 80px 1fr auto;
          gap: 28px;
          align-items: start;
          padding: 32px 0;
          border-bottom: 1px solid rgba(245,166,35,0.1);
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(24px);
          cursor: default;
        }
        .project-row.show {
          opacity: 1;
          transform: translateY(0);
        }
        .project-row:hover .project-icon-wrap {
          background: rgba(245,166,35,0.15);
          border-color: #F5A623;
          transform: scale(1.08);
        }
        .project-row:hover .project-title {
          color: #F5A623;
        }
        .project-num-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .project-num {
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          color: rgba(245,166,35,0.5);
          letter-spacing: 0.1em;
        }
        .project-icon-wrap {
          width: 52px; height: 52px;
          border-radius: 12px;
          background: var(--navy-light);
          border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.4rem;
          transition: all 0.3s ease;
        }
        .project-body { }
        .project-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.35rem;
          color: var(--off-white);
          margin-bottom: 8px;
          transition: color 0.2s;
        }
        .project-desc {
          color: var(--muted);
          font-size: 0.9rem;
          line-height: 1.7;
          margin-bottom: 12px;
          max-width: 500px;
        }
        .project-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .project-arrow {
          color: rgba(245,166,35,0.3);
          font-size: 1.5rem;
          align-self: center;
          transition: color 0.2s, transform 0.2s;
        }
        .project-row:hover .project-arrow {
          color: #F5A623;
          transform: translateX(4px);
        }
        @media (max-width: 600px) {
          .project-row {
            grid-template-columns: 56px 1fr;
          }
          .project-arrow { display: none; }
        }
      `}</style>
      <section className="section" id="projects" ref={ref}>
        <div className="container">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">Projects &amp; Work</h2>
          <div className="accent-line" />
          <div className="projects-list">
            {projects.map((p, i) => (
              <div
                key={p.num}
                className={`project-row${visible ? ' show' : ''}`}
                style={{ transitionDelay: visible ? `${i * 0.1}s` : '0s' }}
              >
                <div className="project-num-col">
                  <span className="project-num">{p.num}</span>
                  <div className="project-icon-wrap" style={{ borderColor: p.color + '44' }}>
                    {p.icon}
                  </div>
                </div>
                <div className="project-body">
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tags">
                    {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                  </div>
                </div>
                <div className="project-arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
