import React from "react";

const YouTubePlayer = ({ videoId }) => {
  const videoUrl = `https://www.youtube.com/embed/3bJM3Sk9wy8`;

  return (
    <div>
      <h1 className="text-2xl font-bold dark:text-white p-2 text-center">
        Promotional video
      </h1>
      <iframe
        className="md:w-2/3 w-full mx-auto"
        height="390"
        src={videoUrl}
        title="YouTube Video Player"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubePlayer;
