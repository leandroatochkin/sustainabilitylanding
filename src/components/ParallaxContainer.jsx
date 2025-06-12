import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Navbar from './Navbar'; // Adjust import path
import Info from './Info'; // Adjust import path
import TitleAndSubtitle from './Title'; // Adjust import path
import SubscribeCard from './SubscribeCard'; // Adjust import path
import ErrorBoundary from './ERROR/ErrorBoundary';

gsap.registerPlugin(ScrollTrigger);

const ParallaxContainer = () => {
  const infoRef = useRef(null);

  useEffect(() => {
    gsap.utils.toArray('.section').forEach((section, index) => {
      gsap.to(section, {
        yPercent: -20 * (index + 1), // different speeds for parallax
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    });
  }, []);

  const sectionStyle = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '4rem',
    color: '#f5f5f5',
    position: 'relative',
    willChange: 'transform',
   // Safari support
  }

  return (
    <ErrorBoundary>
        <div className="parallax-container"
      style={{
        background: 'url(/sustainabilitybg.avif) top center',
        backgroundSize: 'cover',
      }}
    >
      <Navbar infoRef={infoRef} />
      <section className="section home" style={sectionStyle}>
        <TitleAndSubtitle/>
      </section>
      <section className="section info" style={sectionStyle}>
        <Info ref={infoRef} />
      </section>
      <section className="section subscribe" style={sectionStyle}>
        <SubscribeCard/>
      </section>
    </div>
    </ErrorBoundary>
  );
}

export default ParallaxContainer