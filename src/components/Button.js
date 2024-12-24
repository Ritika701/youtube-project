import React from 'react'

const Button = ({ name, index }) => {
    return (
        <div className='mb-4'>
            <button className={`py-1.5 px-2 m-2 ${index === 0 ? 'text-white bg-black' : 'bg-gray-100'} rounded-lg font-semibold`}>{name}</button>
        </div>
  )
}

export default Button
