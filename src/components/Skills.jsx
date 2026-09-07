import React from 'react'

const skills = [
  { name: 'Adobe Photoshop', color: '#31A8FF', icon: 'Ps' },
  { name: 'Adobe Illustrator', color: '#FF9A00', icon: 'Ai' },
  { name: 'Adobe After Effects', color: '#9999FF', icon: 'Ae' },
  { name: 'Figma', color: '#F24E1E', icon: 'Fi' },
  { name: 'Adobe Animate', color: '#FF0000', icon: 'An' },
  { name: 'Adobe Premiere Pro', color: '#9999FF', icon: 'Pr' },
]

function SkillRow({ skill }) {
  return (
    <div style={{ marginBottom: 24 }}>
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
    </div>
  )
}

export default function Skills() {
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
      <section className="section skills-bg" id="skills">
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
                <SkillRow key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
