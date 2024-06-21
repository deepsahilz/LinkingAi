import React from 'react'
import reactsvg from './assets/react.svg'

function App() {
  return (
    <div className='pt-36 flex justify-center flex-col text-4xl font-bold font-[neue]'>
      <img className='animate-spin-slow  mx-auto w-[8rem] mb-4' src={reactsvg}/>
      <h1 className='mx-auto'>//write the code buddy</h1>
    </div>
  )
}

export default App