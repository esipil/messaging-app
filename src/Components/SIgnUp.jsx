import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {

  const [user, setUser] = useState('')
  const [email, setEmail] =useState()
  const [password, setPassword] = useState('')
  const profile_photo = 'tobeupdated'
  const [username, setUserName] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const navigate = useNavigate()

  function handleSubmit (e) {
    e.preventDefault()
    console.log(email)
    fetch('http://127.0.0.1:3000/users',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
        password_confirmation: passwordConfirmation
      }),
    })
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      setUser(res)
      navigate('/')
    })
  }
  return (
    <div className=' h-screen w-screen flex justify-center place-items-center'> 
    <div className=' h-80 w-80 border-2 border-gray-300 '>
      <p className='text-center'>ORMARENGEI</p>
      <form className='flex flex-col justify-center place-items-center space-y-7 mt-8'>
        <input type='text' className='bg-gray-300 rounded-lg h-7 outline-none' placeholder='email' onChange={(e) => {setEmail(e.target.value)}}></input>
        <input type='text' className='bg-gray-300 rounded-lg h-7 outline-none' placeholder='username' onChange={(e) => {setUserName(e.target.value)}}></input>
        <input type='password' className='bg-gray-300 rounded-lg h-7 outline-none' placeholder='password' onChange={(e) => {setPassword(e.target.value)}} ></input>
        <input type='password' className='bg-gray-300 rounded-lg h-7 outline-none' placeholder='conform-pasword' onChange={(e) => {setPasswordConfirmation(e.target.value)}}></input>
        <button  className='bg-regal w-16 rounded-lg' onClick={handleSubmit}>SIGN UP</button>
      </form>
      <div className='flex justify-center mt-4 ' >
          <p className='text-sm text-extralight'>Already have an account?</p>
          <Link className='text-sm ml-3 text-regal' to={'/'}>Login</Link>
        </div>
    </div>
    </div>
  )
}

export default SignUp