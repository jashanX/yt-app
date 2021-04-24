import React from 'react';

const VideoDetail = ({video}) => {
    if(!video)
        return <div>Loading....</div>
    const iframeSrc = `https:youtube.com/embed/${video.id.videoId}`; 
    return(
        <div className=""> 
            <div className="ui embed">
                <iframe src={iframeSrc} title="iframe iframe"/>
            </div>
            <div className="ui segment">
                <h3 className="ui header">{video.snippet.title}</h3>
                <h4 className="ui header">{video.snippet.channelTitle}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;