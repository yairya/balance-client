import React from 'react'
import "./LoginSection.css"
import LoginInputSection from '../LoginInputSection/LoginInputSection'
import LoginActionSection from '../LoginActionSection/LoginActionSection'




const LoginSection = () => {
  return (
    <div className='login-section'>
        <LoginInputSection/>
        <LoginActionSection/>
    </div>
  )
}

export default LoginSection 