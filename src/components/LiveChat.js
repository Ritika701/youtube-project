import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName, makeRandomMessage } from '../utils/helper'

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState('');
    const dispatch = useDispatch()

    const chatMessages = useSelector((store) => store.chat.message)

    //polling data after 1500 ms
    useEffect(() => {
        const i = setInterval(() => {
            //Need to fetch the data(from api) and convert to json 

            dispatch(addMessage({
                name: generateRandomName(),
                message: makeRandomMessage(20)
            }))
        }, 1500);

        //garbage collection. Clean up of setInterval. (Always clear setInterval and setTimeout)
        return () => clearInterval(i);

    }, []);

    return (
        <>
            <h1 className='mx-2 font-medium py-1 px-2 border border-gray-300  bg-gray-50'>Top Chat</h1>
            <div className='w-full h-[500px] ml-2 p-2 border border-gray-300 bg-gray-50 overflow-y-scroll flex flex-col-reverse'>
                <div>
                    {chatMessages.map((c, j) => (
                        <ChatMessage key={j} name={c.name} message={c.message} />
                    ))}
                </div>
            </div>

            <form 
                className='p-2 ml-2 border border-gray-300' 
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addMessage({
                        name: 'Akshay Saini',
                        message: liveMessage,
                    }))
                    setLiveMessage('');
                }}
            >
                <input 
                    className='px-2 w-72 focus:outline-none' 
                    type='text' 
                    value={liveMessage}
                    onChange={(e) => setLiveMessage(e.target.value)}
                />
                <button className='px-2 py-1 rounded-lg ml-2 bg-gray-200'>Send</button>
            </form>
        </>
    )
}

export default LiveChat
