import React from 'react'


function Fakeinfo(props) {
  const { image, title, thumbnailUrl } = props
  return (
    <article className='flex flex-col items-center p-8 max-w-xs h-96 justify-between bg-gray-500 rounded-lg shadow-md dark:bg-gray-800 hover:-translate-y-2 hover:translate-x-2 duration-300'>
      <img src={image} alt="photo" className='w-60 h-40 rounded-lg'/>
      <h2 className='text-base '>{title}</h2>
      <a href={thumbnailUrl}><button>Details</button></a>
    </article>
  )
}
export default Fakeinfo;