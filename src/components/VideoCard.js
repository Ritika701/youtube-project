import React from 'react'

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    return (
        <div className='mr-4 mb-7 w-[25rem]'>
            <img className='rounded-lg w-[25rem]' alt='thumbnail' src={thumbnails.medium.url} />
            <ul>
                <li className='font-semibold py-2'>{title}</li>
                <li className='text-sm text-gray-500 font-medium'>{channelTitle}</li>
                <li className='text-sm text-gray-500 font-medium'>{statistics.viewCount} views</li>
            </ul>
        </div>
    )
}

export default VideoCard
