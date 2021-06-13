import React from "react";

const VideoDetail = (props) => {
  console.log(props.video);
  if (!props.video) {
    return <div>Loading...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;
  return (
    <div>
      <div classsName="ui embed">
        <iframe
          width="100%"
          height="445"
          title={props.video.title}
          src={videoSrc}
        ></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{props.video.snippet.title}</h4>
        <h5>Channel: {props.video.snippet.channelTitle}</h5>
        <p>{props.video.snippet.description}</p>
        
      </div>
    </div>
  );
};

export default VideoDetail;
