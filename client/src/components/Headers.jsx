import React from 'react'
import { Link } from 'react-router-dom'
import {FaSearch} from  'react-icons/fa'
const Headers = () => {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className=" flex justify-between mx-auto p-3 items-center max-w-6xl">
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Abhishek</span>
            <span className='text-slate-700'>Estate</span>
        </h1>
        <form className='bg-slate-100 p-2 rounded-lg flex flex-row items-center'> 
            <input type="text" placeholder='search...' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
            <FaSearch></FaSearch>
        </form>
        <ul className='flex gap-4'>
            <Link to='/'><li className='hidden sm:inline text-slate-700 hover:underline'>Home</li></Link>
            <Link to='/about'><li className='hidden sm:inline text-slate-700 hover:underline'>About</li></Link>
            <Link to='/signin'><li className='hidden sm:inline text-slate-700 hover:underline'>Sign In</li></Link>
            
            
            
        </ul>
        </div>
        
    </header>
  )
}

export default Headers;