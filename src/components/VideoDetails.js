import React from 'react'


const VideoDetails = ({video}) =>{

    if(video==null){
        return <div></div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return(
        <div>
            <div className='ui embed'>
                <iframe src={videoSrc} />
            </div>
            <div className='ui segment'>
                <h2>{video.snippet.title}</h2>
                <p>{video.snippet.description}</p>
            </div>
        </div>
        
    )
}


export default VideoDetails