import React from 'react'
import SearchBar from './SearchBar'
import GoogleApi from '../api/GoogleApi'
import VideoDetails from './VideoDetails'
import VideoList from './VideoList'
import '../css/App.css'

class App extends React.Component {
    state = { 
        videos : [],
        videoSelected : null
    }
    onSearchSubmit = async (queryValue) =>{
        const response = await GoogleApi.get('/search',{
            params : {
                q : queryValue
            }
        })
        this.setState({ videos : response.data.items})
        this.setState({ videoSelected : response.data.items[0]})
        console.log(this.state.videos)
    }

    setSelectedVideo = (video) =>{
        this.setState({videoSelected : video})
        // console.log(video.snippet.title)
    }

    render(){
        return(
            <div className='global-container'>
                <div className='ui'>
                    <SearchBar onSubmit={this.onSearchSubmit} />
                </div>
                <div className='ui segment'>
                    <div className='ui grid'>
                        <div className='ui row'>
                            <div className='eleven wide column'>
                                <VideoDetails video={this.state.videoSelected}/>
                            </div>
                            <div className='five wide column'>
                                <VideoList videos={this.state.videos} onVideoSelect={this.setSelectedVideo}/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>            
        )
    }
}


export default App;