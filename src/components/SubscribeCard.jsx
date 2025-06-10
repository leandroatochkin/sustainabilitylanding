import React from 'react'

const SubscribeCard = () => {
  return (
    <div
    style={{
        backgroundColor: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignContent: 'center',
        fontFamily: 'Inter, sans-serif',
        border: '1px solid red',
        height: '300px',
        width: '320px',
        color: '#333',
        padding: '5%',
        borderRadius: '2rem'
    }}
		>
            <form>
            <h4
            style={{
                fontSize: '2rem'
            }}
            >Stay Updated</h4>
			<p 
            style={{
                fontSize: '1.5rem'
            }}
            >Join thousands of readers making small changes that create a big impact. Weekly emails. No spam.</p>
			<input type="email" placeholder="Enter your email" required />
			<button type="submit">Subscribe Free</button>
			</form>
		</div>
  )
}

export default SubscribeCard