import React from 'react';
import { useNavigate } from 'react-router-dom'

const Welcome = () => {

  const navigate=useNavigate();

  return (
    <div className='flex justify-center items-center h-[100vh]'>
        <div className='flex flex-col justify-center items-center w-1/2 h-[400px] bg-black rounded-2xl shadow-white shadow-xl text-white'>
          <p className='text-4xl font-bold mb-5'>Welcome to HomePage</p>
          <button onClick={()=> navigate("/")} className='px-5 py-3 bg-blue-500 rounded-2xl text-xl font-bold'>LOGOUT</button>
        </div>
    </div>
  )
}

export default Welcome