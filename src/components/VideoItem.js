import React from 'react';
import './VideoItem.css'
const VideoItem = ({ vedio, onVideoSelect , id}) => {
    
    return (
        <div className="video-item item" onClick={()=>{onVideoSelect(vedio)}}>
            <img className="ui image" src={vedio.snippet.thumbnails.medium.url}></img>
            <div className="content">
            <div className="header">{vedio.snippet.title}</div>
            </div>
        </div>
    );
}

export default VideoItem;