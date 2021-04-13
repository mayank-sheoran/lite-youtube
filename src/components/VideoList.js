import React from 'react'


const VideoList = ({videos , onVideoSelect}) =>{

    const renderedList = videos.map((video) =>{
        return(
            <div onClick={() => onVideoSelect(video)} className='item' style={{margin : '2.5em'}}>
                <div class="content">
                    <img src={video.snippet.thumbnails.medium.url}></img>
                    <h4 class="header">{video.snippet.title}</h4>
                    {/* <div class="description">{video.snippet.description}</div> */}
                </div>
            </div>
        )
    })

    return(
        <div className='ui relaxed divided list'>
            {renderedList}
        </div>
    )


}


export default VideoList