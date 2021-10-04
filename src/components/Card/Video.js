import React from "react";
import video from "../../Assets/video.mp4";
const Video = () => {
  return (
    <div className="uk-cards" uk-scrollspy="cls: uk-animation-fade; target: .container; delay: 500; repeat: true">
      <div className="video-container">
          <video src={video} loop muted playsinline uk-video="autoplay: inview" className="video"></video>
      </div>
    </div>
      

  );
};

export default Video;
