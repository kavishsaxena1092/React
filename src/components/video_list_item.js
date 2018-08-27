import React,{Component} from 'react';

const VideoListItem = ({video,onVideoSelect})=>{
    const imageUrl = video.snippet.thumbnails.default.url;

    console.log(video);
    return (<li onClick={() => onVideoSelect(video)}
                className="li-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={imageUrl} />
                    </div>
                </div>
                <div className="media-body">
                        <div className="media-heading">
                        {video.snippet.title}
                        </div>
                </div>
            </li>);
}

export default VideoListItem;