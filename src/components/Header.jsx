import React from 'react'

export const Header = ({setToggle}) => {
  return (
    <div className='flex justify-around bg-green-500 text-white h-9 items-center shadow-2xl'>
        <h1>
            E-commerce
        </h1>
        <div>
            <ul className='flex space-x-3'>
                <li>About</li>
                <li>Contact</li>
                <li className= "cursor-pointer" onClick={()=>setToggle(true)}>Cart</li>
            </ul>
        </div>
    </div>
  )
}
