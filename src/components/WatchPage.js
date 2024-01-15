import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constants";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideMenu } from "../utils/appSlice";

const WatchPage = () => {
    const dispatch = useDispatch();
    // const [watchVideo, setWatchVideo] = useState([]);
    const [searchParams] = useSearchParams();
    console.log(searchParams.get('v'));

    useEffect(() => {
        dispatch(hideMenu());
        fetchData();
    }, []);

    const fetchData = () => {
        // const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="+params+"&key="+GOOGLE_API_KEY);
        // const json = await data.json();
        // console.log(json);
        // setWatchVideo(json);
    } 

    return (
        <div className='col-span-11 px-5'>
            <iframe 
                width="1100" 
                height="500" 
                src={"https://www.youtube.com/embed/"+searchParams.get('v')}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
            >        
            </iframe>
        </div>
    )
}

export default WatchPage;