import React from 'react'

const Button = ({label, children}) => {
  return (
    <button 
    className='text-white mt-5 font-semibold 
    bg-gradient-to-r from-indigo-500 to-violet-500
    hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500
    hover:shadow-md hover:shadow-indigo-700/80
    w-[120px] h-[45px] rounded-sm'> {label?? children}</button>
  )
}

export default Button;