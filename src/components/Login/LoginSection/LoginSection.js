import React from 'react'
import "./LoginSection.css"




const LoginSection = () => {
  return (
    <div className='login-section'>
        <input className='login-input' placeholder='Email' type='email'/>
        <input className='login-input' placeholder='Password' />
    </div>
  )
}

export default LoginSection 