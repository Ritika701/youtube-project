import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const list = ['All', 'Gaming', 'Songs', 'Live', 'Soccer', 'Cricket', 'Cooking', 'News', 'Movies', 'Music', 'Podcasts', 'Trailers', 'Chess', 'Cars', 'Comedy', 'Laptop'];
    return (
        <div className='flex'>
            {
                list.map((li, index) => (
                    <Button key={li} name={li} index={index}/>
                ))
            }
        </div>
  )
}

export default ButtonList
