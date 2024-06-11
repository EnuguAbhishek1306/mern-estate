import React from 'react'
import {Link} from 'react-router-dom'
const Signup = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7 mx-4'>Sign Up</h1>
      <form action="" method="post" className='flex flex-col gap-4 '>
      <input type="text" className='border p-3 rounded ' id='username' placeholder='username' />
      <input type="text" className='border p-3 rounded ' id='email' placeholder='email' />
      <input type="text" className='border p-3 rounded ' id='password' placeholder='password' />
      <button className='bg-slate-700 text-white p-3 rounded  '>SIGN UP</button>
      
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account ?</p>
        <Link><span className='text-blue-800'>Sign In</span></Link>
      </div>
    </div>
    
  )
}

export default Signup