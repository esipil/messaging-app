import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  function handleSubmit (e) {
    e.preventDefault();
    const formData = {
      email: email, 
      password: password
    }
    console.log(formData)
    fetch('http://127.0.0.1:3000/login', {
      method: 'POST', 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    .then((res) => res.json())
    .then((res) => {
      console.log(res.jwt)
      localStorage.setItem('jwt', res.jwt);
      navigate('/home')
    })
  }

  return (
    <div className=' h-screen w-screen flex justify-center place-items-center '>
      <div className='h-80 w-80 border-2 border-gray-300 ' >
        <h3 className='text-center mt-5'>WELCOME BACK</h3>
        <form className='flex flex-col place-items-center  mt-10 space-y-7' >
          <input type='text' value={email} onChange={(e) => {setEmail(e.target.value)}} className='bg-gray-200 rounded-lg h-8 outline-none' placeholder='email'></input>
      <input type='password' value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder='password' className='bg-gray-200 rounded-lg h-8 outline-none'></input>
          <button  className='bg-regal w-16 rounded-lg' onClick={handleSubmit}>LOGIN</button>
        </form>
        <div className='flex justify-center mt-4 ' >
          <p className='text-sm text-extralight'>Don't have an account?</p>
          <Link className='text-sm ml-3 text-regal' to={'/signup'}>Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Login