import React from 'react'
import './NewsLetter.css'
export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Ofeers On Your Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
            <input type='email' placeholder='Enter Your Email Id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}
