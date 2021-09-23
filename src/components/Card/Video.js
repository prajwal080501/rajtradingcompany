import React from "react";
import video from "../../Assets/video.mp4";
const Video = () => {
  return (
      <div className="container">
          <video src={video} loop muted playsinline uk-video="autoplay: inview"></video>
      </div>

  );
};

export default Video;
