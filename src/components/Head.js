import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector((store) => store.search)
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            if(searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);
            } else {
                getSearchSuggestions();
            }
        }, 200);

        return () => {
            clearTimeout(timer);
        };

    }, [searchQuery])

    const getSearchSuggestions = async () => {
        // console.log("API CALL - " + searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        // console.log(json)
        setSuggestions(json[1]);

        //update cache
        dispatch(
            cacheResults({
                [searchQuery]: json[1],
            })
        )
    }

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className='grid grid-flow-col pt-2 px-5 pb-4 items-center'>
            <div className='flex col-span-1 items-center'>
                <img
                    className='h-7 cursor-pointer'
                    alt='hamburger_icon'
                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII='
                    onClick={toggleMenuHandler}
                />
                <a href='/'> 
                    <img
                        className='h-5 mx-5' 
                        alt='youtube_logo'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png'
                    />
                </a>
                {/* Inplace of 'a' we use use link */}
            </div>

            <div className='col-span-10 px-10'>
                <div>
                    <input 
                        className='w-1/2 border border-gray-400 py-2 px-5 rounded-l-full' 
                        type='text'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                    />
                    <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>Search</button>
                </div>
                {showSuggestions && (
                    <div className='fixed bg-white py-2 px-2 w-[33rem] shadow-lg rounded-xl border border-gray-100'>
                        <ul>
                            {suggestions.map((s) => <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>{s}</li>)}
                        </ul>
                    </div>
                )}
            </div>

            <div className='col-span-1'>
                <img
                    className='h-7'
                    alt='user_icon'
                    src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
                />
            </div>
        </div>
    )
}

export default Head
