import React from 'react'
import { useState } from 'react'
import './Login.css'
import isEmpty from 'validator/lib/isEmpty'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({})
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }


    const handleEmpty = () => {
        const msg = {}

        if(isEmpty(email)) {
            msg.email = "vui lòng nhập thông tin"
        }
        if(isEmpty(password)) {
            msg.password = "vui lòng nhập pass"
        }
        setError(msg)
        if(Object.length.keys(msg) > 1 ) return false
        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(!handleEmpty()) 
        return
    }

  return (
    <div className='test'>
        <div className='test1'>
        <form>
          <div className='d-flex justify-content-center'><h3>Login</h3></div>
            <div className='mb-2'>
                <label>email</label>
                <input className='input' placeholder='email' value={email} onChange={handleEmail}/>
                <p>{error.email} </p>
            </div>
            <div className='mb-2'>
                <label>password</label>
                <input className='input' placeholder='password' value={password} onChange={handlePassword} />
                <p>{error.password}</p>
            </div>
            <div className='mb-2'>
                <input type='checkbox'/>
                <span>Remember</span>
            </div>
            <button type='button' onClick={handleSubmit} className='btn btn-primary'>Submit</button>
        </form>
        </div>
    </div>
    
  )
}

export default Login
