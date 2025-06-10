import React from 'react'
import { useScrollNavigation, useMobile } from '../hooks/Hooks'

const Navbar = () => {

const {handleSectionClick, activeSection} = useScrollNavigation()
const isMobile = useMobile()

  return (
    <div
    style={{
        width: isMobile ? '86vw' : 'auto',
        height: '35px',
        position: 'sticky',
        top: 10,
        left: 28,    
        display: 'flex',
        zIndex: 999,
        fontFamily: 'Inter, sans-serif',
    }}
    >
        <button
        onClick={
            ()=>handleSectionClick('.home')
        }
        disabled={activeSection === '.home'}
        style={{
            cursor: 'pointer',
            flex: 1,
            background: '#f5f5f5',
            borderRadius: '50px 0 0 50px',
            border: '1px solid #ccc'
        }}
        >home</button>
        <button
        onClick={
            ()=>handleSectionClick('.info')
        }
        disabled={activeSection === '.info'}
        style={{
            cursor: 'pointer',
            flex: 1,
            background: '#f5f5f5',
            border: '1px solid #ccc'
        }}
        >info</button>
        <button
        onClick={
            ()=>handleSectionClick('.subscribe')
        }
        disabled={activeSection === '.subscribe'}
        style={{
            cursor: 'pointer',
            flex: 1,
            background: '#f5f5f5',
            borderRadius: '0 50px 50px 0',
            border: '1px solid #ccc'
        }}
        >subscribe</button>
    </div>
  )
}

export default Navbar