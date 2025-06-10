import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TitleAndSubtitle from './Title';
import SubscribeCard from './SubscribeCard';
import Info from './Info';
import Navbar from './Navbar';

gsap.registerPlugin(ScrollTrigger);

const ParallaxContainer = () => {
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
  willChange: 'transform'
  }

  return (
    <div className="parallax-container"
    style={{
        background: 'url(/sustainabilitybg.avif) top center',
        backgroundSize: 'cover',
    }}
    >
    <Navbar />
      <section className="section home" style={sectionStyle}>
        <TitleAndSubtitle/>
        </section>
      <section className="section info" style={sectionStyle}><Info/></section>
      <section className="section subscribe" style={sectionStyle}><SubscribeCard/></section>
    </div>
  );
}

export default ParallaxContainer
