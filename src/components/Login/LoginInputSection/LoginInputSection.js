import React from 'react'
import "./LoginInputSection.css"

const LoginInputSection = () => {
  return (
    <div className='login-input-section'>
        <input className='login-input' placeholder='Email' type='email'/>
        <input className='login-input' placeholder='Password' />
    </div>
  )
}

export default LoginInputSection