import React from 'react'
import MailBox from './icons/MailBox'

const SubscribeCard = () => {
  return (
    <div
    style={{
        backgroundColor: '#f5f5f5',
        fontFamily: 'Inter, sans-serif',
        height: '400px',
        width: '320px',
        color: '#333',
        padding: '5%',
        borderRadius: '2rem',
    }}
		>
            <form
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around'
            }}
            >
            <div
            style={{
                width: '60px',
                height: '60px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                padding: '5%',
                background: 'linear-gradient(145deg, #cacaca, #f0f0f0)',
                boxShadow:  `20px 20px 60px #bebebe,
             -20px -20px 60px #ffffff`,
             marginBottom: '10%' 
            }}
            >
                <MailBox/>
            </div>
            <h4
            style={{
                fontSize: '2rem',
                margin: 0
            }}
            >Stay Updated</h4>
			<p 
            style={{
                fontSize: '1.5rem'
            }}
            >Join thousands of readers making small changes that create a big impact. Weekly emails. No spam.</p>
			<input 
            type="email" 
            placeholder="Enter your email" 
            required 
            style={{
                width: '100%',
                height: '30px',
                borderRadius: '25px',
                border: 'none',
                marginBottom: '5%'
            }}
            />
			<button 
            type="submit"
            style={{
                width: '100%',
                height: '30px',
                borderRadius: '25px',
                border: 'none',
                background: 'green',
                color: '#f5f5f5',
                fontWeight: 'bold'
                }}
            >subscribe free</button>
			</form>
		</div>
  )
}

export default SubscribeCard