import React from 'react'
import VideoItem from './VideoItem';

class VideoList extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.videos.length);
        const renderedList=this.props.videos.map((video)=>{
            return <VideoItem key={video.id.videoId}
             onVideoSelect={this.props.onVideoSelect}
             video={video} />
        });

        return (
            <div className="ui relaxed divided list">{renderedList}</div>
        );
    }
}

export default VideoList;