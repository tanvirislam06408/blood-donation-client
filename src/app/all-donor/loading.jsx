import React from 'react'
import { RingLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-screen'><RingLoader color="#bb0d0d" /></div>
  )
}

export default Loading