import React from "react";

const YouTubePlayer = ({ videoId }) => {
  const videoUrl = `https://www.youtube.com/embed/3bJM3Sk9wy8`;

  return (
    <div>
      <h1>My Video Page</h1>
      <iframe
        width="640"
        height="390"
        src={videoUrl}
        title="YouTube Video Player"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubePlayer;
