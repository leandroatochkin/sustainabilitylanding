import {useState} from 'react'
import { useScrollNavigation, useMobile } from '../hooks/Hooks'

const Navbar = ({ infoRef }) => {
  const [selectedSection, setSelectedSection] = useState('home')
  const {handleSectionClick, activeSection} = useScrollNavigation(infoRef)
  const isMobile = useMobile()

  return (
    <div
    style={{
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
           position: 'sticky',
        top: 10,
        left: 28,
           zIndex: 999,  
    }}
    >
        <div
      style={{
        width: isMobile ? '86vw' : '40vw',
        height: '35px',
       
        display: 'flex',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <button
        onClick={() => {
          handleSectionClick('.home')
          setSelectedSection('home')
        }}
        style={{
          cursor: 'pointer',
          flex: 1,
          background: '#f5f5f5',
          fontWeight: '400',
          transition: 'all 0.3s ease-in',
          borderRadius: '50px 0 0 50px',
          border: '1px solid #ccc',
          background: selectedSection === 'home' ? 'green' : '#f5f5f5',
          border: selectedSection === 'home' ? '1px solid green' : '1px solid #ccc',
          fontWeight: selectedSection === 'home' ? 'bold' : 'normal',
          color: selectedSection === 'home' ? '#f5f5f5' : '#333'
        }}
      >
        home
      </button>
      <button
        onClick={() => {
          handleSectionClick('.info')
          setSelectedSection('info')
        }}
        style={{
          cursor: 'pointer',
          flex: 1,
          transition: 'all 0.3s ease-in',
          background: selectedSection === 'info' ? 'green' : '#f5f5f5',
          border: selectedSection === 'info' ? '1px solid green' : '1px solid #ccc',
          fontWeight: selectedSection === 'info' ? 'bold' : 'normal',
          color: selectedSection === 'info' ? '#f5f5f5' : '#333'
        }}
      >
        info
      </button>
      <button
        onClick={() => {
          handleSectionClick('.subscribe')
          setSelectedSection('subscribe')
        }}
        style={{
          cursor: 'pointer',
          flex: 1,
          borderRadius: '0 50px 50px 0',
          transition: 'all 0.3s ease-in',
          background: selectedSection === 'subscribe' ? 'green' : '#f5f5f5',
          border: selectedSection === 'subscribe' ? '1px solid green' : '1px solid #ccc',
          fontWeight: selectedSection === 'subscribe' ? 'bold' : 'normal',
          color: selectedSection === 'subscribe' ? '#f5f5f5' : '#333'
        }}
      >
        subscribe
      </button>
    </div>

    </div>
  )
}

export default Navbar