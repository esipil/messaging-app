import React from 'react'
import Dashboard from './Dashboard'
import Chat from './Chat'
import Details from './Details'

function Home() {
  return (
    <div className='flex justify-center place-items-center w-screen h-screen bg-specialblack'>
          <div className='relative w-[90rem]  h-5/6 rounded-lg bg-regal'>
      < Dashboard />
      <Chat />
      <Details />
    </div>
    </div>

  )
}

export default Home