import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ vedios, onVideoSelect }) => {
    const renderedList = vedios.map((vedio) => {
        return <VideoItem key={vedio.id.videoId} vedio={vedio} onVideoSelect={onVideoSelect}></VideoItem>
    });
    return (

        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    );
}

export default VideoList;