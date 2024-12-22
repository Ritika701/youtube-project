import React from 'react'
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    if(!isMenuOpen) return null; //early return pattern

    return (
        <div className='p-5 shadow-lg w-48'>
            <ul>
                <li className='font-semibold mb-3'>Home</li>
                <li className='mb-3'>Shorts</li>
                <li className='mb-3'>Subscriptions</li>
            </ul>

            <hr className='mb-3'/>

            <ul>
                <li className='mb-3'>You</li>
                <li className='mb-3'>History</li>
            </ul>

            <hr className='mb-3'/>

            <h1 className='font-semibold mb-3'>Explore</h1>
            <ul>
                <li className='mb-3'>Trending</li>
                <li className='mb-3'>Shopping</li>
                <li className='mb-3'>Music</li>
                <li className='mb-3'>Movies</li>
                <li className='mb-3'>Live</li>
                <li className='mb-3'>Gaming</li>
                <li className='mb-3'>News</li>
                <li className='mb-3'>Sports</li>
                <li className='mb-3'>Courses</li>
                <li className='mb-3'>Fasion & Beauty</li>
                <li className='mb-3'>Podcasts</li>
            </ul>

            <hr className='mb-3'/>

            <h1 className='font-semibold mb-3'>More From Youtube</h1>
            <ul>
                <li className='mb-3'>Youtube Premium</li>
                <li className='mb-3'>Youtube Music</li>
                <li className='mb-3'>Youtube Kids</li>
            </ul>

            <hr className='mb-3'/>

            <ul>
                <li className='mb-3'>Setting</li>
                <li className='mb-3'>Report history</li>
                <li className='mb-3'>Help</li>
                <li className='mb-3'>Send feedback</li>
            </ul>

            <hr className='mb-3'/>

            <ul>
                <li className='mb-3 font-medium text-sm'>About Press Copyright</li>
                <li className='mb-3 font-medium text-sm'>Contact us Creators</li>
                <li className='mb-4 font-medium text-sm'>Advertise Developers</li>
                <li className='mb-3 font-medium text-sm'>Terms Privacy Policy & Safety</li>
                <li className='mb-3 font-medium text-sm'>How YouTube works</li>
                <li className='mb-4 font-medium text-sm'>Test new features</li>
                <li className='mb-3 font-light text-xs'>2024 Google LLC Clone</li>
            </ul>
            
        </div>
    )
}

export default Sidebar
