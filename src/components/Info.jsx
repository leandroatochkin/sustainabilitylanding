import React, { useEffect, useRef } from 'react'
import { useMobile } from '../hooks/Hooks';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Info = () => {

const isMobile = useMobile()

const benefits = [
  '🌍 Actionable eco-friendly tips you can apply immediately',
  '🛒 Product recommendations that align with your values',
  '💡 Mindful living habits backed by science',
  '📅 One short email every Sunday — clean and simple'
];

const containerRef = useRef(null)

useEffect(() => {
    const targets = gsap.utils.toArray('.benefit-container');

    gsap.set(targets, { opacity: 0, y: 40 });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 1,
          ease: 'power3.out'
        });
      }
    });
  }, []);

  return (
  <div
  ref={containerRef} 
  className="container"
  style={{
  marginTop: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  }}
  >
  {benefits.map((benefit, i) => (
  <div className="benefit-container" 
  style={{
  width: isMobile ? '86vw' : 'auto',
  backgroundColor: '#f5f5f5',
  borderRadius: '1rem',
  padding: '1.2rem',
  marginBottom: '1.5rem',
  fontFamily: 'Inter, sans-serif',
  height: '100px',
  color: '#333',
  fontSize: '1rem',
  willChange: 'transform opacity'
    }}
  key={i}
    >
      <p className="benefit">
        {benefit}
      </p>
    </div>
  ))}
</div>
  )
}

export default Info








