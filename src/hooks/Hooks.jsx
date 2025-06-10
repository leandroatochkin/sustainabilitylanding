import { useState, useEffect } from "react"
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const useScrollNavigation = () => {
  const [activeSection, setActiveSection] = useState('.home');
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Track scrollY position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Automatically update active section based on scroll
  useEffect(() => {
    const sections = ['.home', '.info', '.subscribe'];

    const triggers = sections.map((sectionSelector) => {
      const el = document.querySelector(sectionSelector);
      if (!el) return null;

      return ScrollTrigger.create({
        trigger: el,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveSection(sectionSelector),
        onEnterBack: () => setActiveSection(sectionSelector),
      });
    });

    return () => {
      triggers.forEach(trigger => trigger?.kill());
    };
  }, []);

  // Handle manual navigation
  const handleSectionClick = (section) => {
  setIsMenuOpen(false);
  const element = document.querySelector(section);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      ScrollTrigger.refresh(true); // ensure triggers are recalculated after scroll
    }, 600);
  }
};

  return {
    activeSection,
    scrollY,
    isMenuOpen,
    setIsMenuOpen,
    handleSectionClick,
  };
};

export function useMobile() {
    const [isMobile, setIsMobile] = useState(false)
  
    useEffect(() => {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth < 768)
      }
  
      // Check on initial load
      checkIfMobile()
  
      // Add event listener for window resize
      window.addEventListener("resize", checkIfMobile)
  
      // Clean up event listener
      return () => window.removeEventListener("resize", checkIfMobile)
    }, [])
  
    return isMobile
  }