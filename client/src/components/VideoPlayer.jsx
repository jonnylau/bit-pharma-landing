import React from 'react';
import Youtube from 'react-youtube';

const VideoPlayer = (props) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  }
  return (
    <div>
      <Youtube
        videoId='l6fyijImJww'
        opts={opts}
      />
    </div>
  )
}

export default VideoPlayer;