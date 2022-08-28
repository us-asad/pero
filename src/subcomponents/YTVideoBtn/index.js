import React from 'react';
import "./index.sass";

export default function YTVideoBtn() {
  return (
    <div className="overflow">
      <div id="play-button-container">
        <svg id="button-circle-svg" viewBox="0 0 100 100">
          <style type="text/css">
            {`
              .st0 {
                fill: #DDDDDD;
                stroke:#010101;
                stroke-width: 0px;
              }
            `}
          </style>
          <circle id="button-circle"
            className="st0" cx="50" cy="50" r="50" />
        </svg>
        <svg id="play-triangle-svg" viewBox="0 0 100 100">
          <style>
            {`
              #play-triangle {
                fill: black;
              }
              #triangle-tween-target {
                display: none;
              }
            `}
          </style>
          <polygon id="play-triangle" points="37,74.1 76.8,51.1 37,28.2 " />
          <rect id="triangle-tween-target" x="47.6" y="46.7" width="16" height="9" />
        </svg>
        <iframe
          id="youtube-video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Mh4f9AYRCZY?enablejsapi=1"
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          allowFullScreen
          title='Pero Youtube Video'
        ></iframe>
        <div className="video-text">
          Watch Video
        </div>
      </div>
    </div>
  )
}
