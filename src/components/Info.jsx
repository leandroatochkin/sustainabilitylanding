import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react'
import { useMobile } from '../hooks/Hooks';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Info = forwardRef((props, ref) => {
  const isMobile = useMobile()
  const benefits = [
    {text: '🌍 Actionable eco-friendly tips you can apply immediately.', link: '/info/ecoTips'},
    {text: '🛒 Product recommendations that align with your values.', link: '/info/ecoTips'},
    {text: '💡 Mindful living habits backed by science.', link: '/info/ecoTips'},
    {text: '📅 One short email every Sunday — clean and simple.', link: '/info/ecoTips'}
  ];

  const containerRef = useRef(null)
  const animationTriggeredRef = useRef(false)

  // Expose method to manually trigger animation
  useImperativeHandle(ref, () => ({
    triggerAnimation: () => {
      if (!animationTriggeredRef.current) {
        const targets = gsap.utils.toArray('.benefit-container');
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2, // Changed from 1 to 0.2 for better timing
          ease: 'power3.out'
        });
        animationTriggeredRef.current = true;
      }
    }
  }));

  useEffect(() => {
    const targets = gsap.utils.toArray('.benefit-container');
    
    gsap.set(targets, { opacity: 0, y: 40 });

    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        if (!animationTriggeredRef.current) {
          gsap.to(targets, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
          });
          animationTriggeredRef.current = true;
        }
      }
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: isMobile ? '30%' : 0
      }}
    >
      {benefits.map((benefit, i) => (
        <div className="benefit-container"
          style={{
            width: isMobile ? '86vw' : '400px',
            backgroundColor: '#f5f5f5',
            borderRadius: '1rem',
            padding: '1.2rem',
            marginBottom: '1.5rem',
            fontFamily: 'Inter, sans-serif',
            height: '100px',
            color: '#333',
            fontSize: '1rem',
            willChange: 'transform opacity',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          key={i}
        >
          <p className="benefit">
            {benefit.text} <a href={benefit.link}>See more...</a>
          </p>
        </div>
      ))}
    </div>
  )
})

export default Info







