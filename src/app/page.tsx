import Image from 'next/image'
import { Profiler } from 'react'

function Profile () {
  return(
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  )
}


export default function Gallery () {
  return(
    <div>
    <h1 className='text-center text-2xl'>Amazing scientists</h1>
    <div className='flex justify-center items-center gap-5 py-4'>
      <Profile />
      <Profile />
      <Profile />
    </div>
    </div>
  )
}
