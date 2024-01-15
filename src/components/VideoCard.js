const VideoCard = ({data}) => {
    const {snippet, statistics} = data;
    const {thumbnails, title, channelTitle} = snippet;
    const { viewCount } = statistics;

    function formatNumber(number) {
        // Check if the number is greater than or equal to 1 million
        if (number >= 1000000) {
            return (number / 1000000).toFixed(1) + 'M';
        }
        // Check if the number is greater than or equal to 1 thousand
        else if (number >= 1000) {
            return (number / 1000).toFixed(1) + 'K';
        }
        // For numbers less than 1000, simply return them as is
        else {
            return number.toString();
        }
    }

    return (
        <div className='w-[18.5rem] mx-1 my-2 p-2'>
            <img  className='rounded-lg' alt='thumbnail' src={thumbnails.medium.url} />
            <ul>
                <li className='text-base font-semibold py-2'>{title}</li>
                <li className='text-sm font-normal text-gray-500'>{channelTitle}</li>
                <li className='text-sm font-normal text-gray-500'>{formatNumber(viewCount)} views</li>
            </ul>
        </div>
    )
}

export default VideoCard;