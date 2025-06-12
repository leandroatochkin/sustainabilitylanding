// TitleSplitter.jsx
import { useEffect } from 'react';
import { useMobile } from '../hooks/Hooks';
import SplitType from 'split-type';
import gsap from 'gsap';

export default function TitleAndSubtitle() {

const isMobile = useMobile()

useEffect(() => {
  const splitTitle = new SplitType('.big-title2', { types: 'chars,lines' });

  gsap.from(splitTitle.lines, {
    opacity: 0,
    y: 20,
    delay: 0.5,
    stagger: 0.3, // each line will animate 0.3s after the previous one
    duration: 1,
  });

  gsap.to(splitTitle.chars[splitTitle.chars.length - 1],{
    rotate: 360,
    color: 'green',
    delay: 2.5,
    ease: 'back.in'
  })

  gsap.to(splitTitle.chars,{
    color: 'green',
    translateY: '2px',
    delay: 1,
    stagger:{
      each: 0.2,
      from: 'end'
    }
  })

  gsap.to(splitTitle.chars,{
    color: '#f5f5f5',
    delay: 2,
    stagger:{
      each: 0.2,
      from: 'end'
    }
  })

  gsap.from('.subtitle',{
    opacity: 0,
    delay: 3,
    ease: 'back.in'
  })

  gsap.to('.one',{
    color: 'rgb(200, 255, 20)',
    delay: 3.5,
    ease: 'back.in'
  })

  gsap.to('.tip',{
    color: 'rgb(200, 255, 20)',
    delay: 3.8,
    ease: 'back.in'
  })
}, []);


  return  (
  <div
  style={{
    marginTop: isMobile ? '20%' : 0
  }}
  >
  <h1 
  className="big-title2"
  style={{
    fontFamily: 'Inter, sans-serif',
    color: '#f5f5f5',
    fontSize: '7rem',
    textShadow: '0px 3px 10px rgba(0,0,0,0.5)',
    width: isMobile ? '100vw' : 'auto',
    margin: '0 0 0 20px',
  }}
  >
  <span style={{ display: 'block' }}>green</span>
  <span style={{ display: 'block' }}>
    life<span className="registered" style={{ fontSize: '4rem', verticalAlign: 'super' }}>®</span>
  </span>
  </h1>
  <p className="subtitle"
  style={{
    fontSize: '3rem',
    marginLeft: '20px',
    fontFamily: 'Inter, sans-serif',
    color: '#f5f5f5',
    textShadow: '0px 3px 10px rgba(0,0,0,0.5)',
  }}
  >Inspiring sustainable living,<br/> <span className='one'>one</span> <span className='tip'>tip</span> at a time.</p>
    </div>
  )
}
