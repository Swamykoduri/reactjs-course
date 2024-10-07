import { useState } from 'react'

import './App.css'
import Bio from './Card'
import Fakeinfo from './Fakeinfo';
import data from './data'






function App() {

  return (
    <>
      <h1 className='text-3xl bg-blue-400 p-3 rounded-lg'>Welcome to Tailwind Props</h1>
      <Bio />

      <section className='grid grid-cols-3 gap-6'>
        <h1 className='text-3xl bg-blue-400 p-3 rounded-lg col-span-3 mb-20 mt-20'>Fake Data</h1>
        {
          data.map((eachObj) => {
            return <Fakeinfo
              key={eachObj.id}
              title={eachObj.title}
              image={eachObj.url}
              thumbnailUrl={eachObj.thumbnailUrl}
            />
          })
        }
      </section>
    </>
  )
}

export default App
