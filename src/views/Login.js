import React from 'react'
import "./Login.css"
import LoginHeader from '../components/Login/LoginHeader/LoginHeader'
import LoginBody from '../components/Login/LoginBoby/LoginBody'

const Login = () => {
  return (
    <div className='Login-page'>
      <LoginHeader/>
      <LoginBody/>
    </div>
  )
}

export default Login