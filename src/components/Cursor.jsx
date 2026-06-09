import React, { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`
      requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMove)
    animate()

    // Hover effect on links/buttons
    const interactives = document.querySelectorAll('a, button, [data-hover]')
    const onEnter = () => ring.classList.add('ring-hover')
    const onLeave = () => ring.classList.remove('ring-hover')

    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      <style>{`
        .cursor-dot {
          position: fixed;
          top: -4px; left: -4px;
          width: 8px; height: 8px;
          background: #F5A623;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          will-change: transform;
        }
        .cursor-ring {
          position: fixed;
          top: -18px; left: -18px;
          width: 36px; height: 36px;
          border: 1.5px solid rgba(245,166,35,0.6);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          will-change: transform;
          transition: width 0.2s, height 0.2s, border-color 0.2s;
        }
        .cursor-ring.ring-hover {
          width: 56px; height: 56px;
          top: -28px; left: -28px;
          border-color: #F5A623;
          background: rgba(245,166,35,0.08);
        }
        @media (max-width: 768px) {
          .cursor-dot, .cursor-ring { display: none; }
        }
      `}</style>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}
