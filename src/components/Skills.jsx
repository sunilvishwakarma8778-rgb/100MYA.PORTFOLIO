import React, { useEffect, useRef, useState } from 'react'

const skills = [
  { name: 'Adobe Photoshop', level: 90, color: '#31A8FF', icon: 'Ps' },
  { name: 'Adobe Illustrator', level: 85, color: '#FF9A00', icon: 'Ai' },
  { name: 'Adobe After Effects', level: 78, color: '#9999FF', icon: 'Ae' },
  { name: 'Figma', level: 82, color: '#F24E1E', icon: 'Fi' },
  { name: 'Adobe Animate', level: 70, color: '#FF0000', icon: 'An' },
  { name: 'Adobe Premiere Pro', level: 75, color: '#9999FF', icon: 'Pr' },
]

function SkillBar({ skill, visible }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: skill.color + '22',
            border: `1px solid ${skill.color}44`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.65rem', fontWeight: 700,
            color: skill.color,
          }}>{skill.icon}</div>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: '#F0EEE8' }}>{skill.name}</span>
        </div>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', color: '#F5A623' }}>
          {skill.level}%
        </span>
      </div>
      <div style={{
        height: 6, borderRadius: 999,
        background: 'rgba(255,255,255,0.06)',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          width: visible ? `${skill.level}%` : '0%',
          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
          borderRadius: 999,
          transition: 'width 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
          transitionDelay: '0.2s',
          boxShadow: `0 0 12px ${skill.color}66`,
        }} />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <style>{`
        .skills-bg {
          background: linear-gradient(180deg, #0A0E27 0%, #111530 50%, #0A0E27 100%);
        }
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
        }
        .skills-intro {
          position: sticky;
          top: 120px;
        }
        .skills-tagline {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          color: var(--off-white);
          line-height: 1.5;
          margin-bottom: 20px;
        }
        .skills-tagline em { color: #F5A623; font-style: normal; }
        .skills-desc {
          color: var(--muted);
          font-size: 0.95rem;
          line-height: 1.8;
          margin-bottom: 28px;
        }
        .software-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .sw-chip {
          background: var(--navy-light);
          border: 1px solid var(--border);
          color: var(--off-white);
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.06em;
          padding: 6px 14px;
          border-radius: 999px;
        }
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr; }
          .skills-intro { position: static; }
        }
      `}</style>
      <section className="section skills-bg" id="skills" ref={ref}>
        <div className="container">
          <div className="section-label">Expertise</div>
          <h2 className="section-title">My Skills</h2>
          <div className="accent-line" />
          <div className="skills-grid">
            <div className="skills-intro">
              <p className="skills-tagline">
                Proficiency in <em>industry-standard</em> creative tools
              </p>
              <p className="skills-desc">
                From pixel-perfect photo manipulation to vector illustration, 
                motion graphics to UI design — I've built a versatile toolkit 
                to bring any creative vision to life.
              </p>
              <div className="software-chips">
                {['Adobe Suite', 'Figma', 'Motion Graphics', 'Branding', 'Video Editing'].map(t => (
                  <span className="sw-chip" key={t}>{t}</span>
                ))}
              </div>
            </div>
            <div>
              {skills.map(skill => (
                <SkillBar key={skill.name} skill={skill} visible={visible} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
