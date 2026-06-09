import React, { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef(null)

  // Particle background
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight
    let particles = []

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)

    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.5 + 0.3,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.1,
      })
    }

    let raf
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(245,166,35,${p.alpha})`
        ctx.fill()
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > w) p.dx *= -1
        if (p.y < 0 || p.y > h) p.dy *= -1
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <>
      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: radial-gradient(ellipse at 60% 50%, #111530 0%, #0A0E27 70%);
        }
        .hero-canvas {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 32px;
          padding-top: 100px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          width: 100%;
        }
        .hero-left { }
        .hero-eyebrow {
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.25em;
          color: #F5A623;
          text-transform: uppercase;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          animation: fadeUp 0.6s ease both;
        }
        .hero-eyebrow::before {
          content: '';
          width: 32px; height: 1px;
          background: #F5A623;
        }
        .hero-name {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3.2rem, 7vw, 5.5rem);
          font-weight: 900;
          color: #fff;
          line-height: 1.05;
          margin-bottom: 8px;
          animation: fadeUp 0.7s ease 0.1s both;
        }
        .hero-name .gold { color: #F5A623; }
        .hero-role {
          font-family: 'Space Mono', monospace;
          font-size: clamp(0.85rem, 1.5vw, 1rem);
          letter-spacing: 0.18em;
          color: #8892B0;
          text-transform: uppercase;
          margin-bottom: 28px;
          animation: fadeUp 0.7s ease 0.2s both;
        }
        .hero-desc {
          font-size: 1rem;
          color: #8892B0;
          line-height: 1.8;
          max-width: 480px;
          margin-bottom: 40px;
          animation: fadeUp 0.7s ease 0.3s both;
        }
        .hero-desc strong { color: #F0EEE8; font-weight: 500; }
        .hero-btns {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          animation: fadeUp 0.7s ease 0.4s both;
        }
        .btn-primary {
          background: #F5A623;
          color: #0A0E27;
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 14px 32px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          font-weight: 700;
          transition: all 0.25s;
          text-decoration: none;
          display: inline-block;
        }
        .btn-primary:hover {
          background: #FFD080;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(245,166,35,0.35);
        }
        .btn-outline {
          background: transparent;
          color: #F0EEE8;
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 14px 32px;
          border-radius: 4px;
          border: 1px solid rgba(245,166,35,0.35);
          cursor: pointer;
          transition: all 0.25s;
          text-decoration: none;
          display: inline-block;
        }
        .btn-outline:hover {
          border-color: #F5A623;
          color: #F5A623;
          transform: translateY(-2px);
        }
        .hero-right {
          display: flex;
          justify-content: center;
          animation: fadeIn 1s ease 0.3s both;
        }
        .hero-avatar-wrap {
          position: relative;
          width: 340px;
          height: 420px;
        }
        .hero-avatar-bg {
          position: absolute;
          inset: 0;
          border-radius: 200px 200px 160px 160px;
          background: linear-gradient(135deg, rgba(245,166,35,0.18) 0%, rgba(245,166,35,0.04) 100%);
          border: 1px solid rgba(245,166,35,0.25);
        }
        .hero-avatar-ring {
          position: absolute;
          top: -16px; left: -16px; right: -16px; bottom: -16px;
          border-radius: 210px 210px 170px 170px;
          border: 1px dashed rgba(245,166,35,0.2);
          animation: spin-slow 30s linear infinite;
        }
        .hero-initials {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Playfair Display', serif;
          font-size: 7rem;
          font-weight: 900;
          color: rgba(245,166,35,0.12);
          letter-spacing: -0.04em;
          user-select: none;
        }
        .hero-badge {
          position: absolute;
          bottom: 30px;
          right: -20px;
          background: #F5A623;
          color: #0A0E27;
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          padding: 10px 16px;
          border-radius: 8px;
          text-align: center;
          animation: float 3s ease-in-out infinite;
          box-shadow: 0 8px 24px rgba(245,166,35,0.3);
        }
        .hero-badge-num {
          display: block;
          font-size: 1.6rem;
          font-weight: 700;
          line-height: 1;
        }
        .hero-tools {
          position: absolute;
          top: 40px;
          left: -24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .hero-tool-pill {
          background: #1A2045;
          border: 1px solid rgba(245,166,35,0.2);
          color: #F0EEE8;
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          padding: 6px 12px;
          border-radius: 999px;
          white-space: nowrap;
          animation: float 4s ease-in-out infinite;
        }
        .hero-tool-pill:nth-child(2) { animation-delay: -1.5s; }
        .hero-tool-pill:nth-child(3) { animation-delay: -3s; }
        .scroll-indicator {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          animation: fadeIn 1s ease 1s both;
          z-index: 2;
        }
        .scroll-indicator span {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          color: #8892B0;
          text-transform: uppercase;
        }
        .scroll-line {
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, #F5A623, transparent);
          animation: fadeUp 1s ease-in-out infinite;
        }
        @media (max-width: 900px) {
          .hero-inner {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-eyebrow { justify-content: center; }
          .hero-desc { margin: 0 auto 40px; }
          .hero-btns { justify-content: center; }
          .hero-right { display: none; }
        }
      `}</style>
      <section className="hero" id="hero">
        <canvas ref={canvasRef} className="hero-canvas" />
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-eyebrow">Available for freelance work</div>
            <h1 className="hero-name">
              Saumya<br /><span className="gold">Singh</span>
            </h1>
            <div className="hero-role">Graphic Designer &amp; Visual Creator</div>
            <p className="hero-desc">
              Crafting <strong>visual identities, brand stories</strong>, and digital creatives 
              that make people stop scrolling. Skilled in the full Adobe suite, Figma, 
              and motion graphics.
            </p>
            <div className="hero-btns">
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="#contact" className="btn-outline">Let's Connect</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-avatar-wrap">
              <div className="hero-avatar-bg" />
              <div className="hero-avatar-ring" />
              <div className="hero-initials">SS</div>
              <div className="hero-tools">
                <div className="hero-tool-pill">🎨 Photoshop</div>
                <div className="hero-tool-pill">✏️ Illustrator</div>
                <div className="hero-tool-pill">🎬 After Effects</div>
              </div>
              <div className="hero-badge">
                <span className="hero-badge-num">6+</span>
                Tools Mastered
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>
    </>
  )
}
