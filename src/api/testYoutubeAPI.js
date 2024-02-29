import React, { useState, useEffect } from "react";
import { YOUTUBE_API_KEY } from "../env";
import ReactPlayer from "react-player";
import axios from "axios";

const YouTubeComponent = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const playlistIds = ["PLgIS1MvgCaOVR07APOp8zfBLHbh7VGllX", "PLXMY36-jumXiA2oaUvxG_vSOL8jMatyHu"]; // Replace with your playlist IDs
        const apiKey = YOUTUBE_API_KEY; // Using environment variable
        const maxResults = 1000; // Number of videos to fetch

        const requests = playlistIds.map(async (playlistId) => {
          const response = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${apiKey}`);
          return response.data.items;
        });

        const result = await Promise.all(requests);
        setVideos(result.flat());
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  const handlePlay = (video) => {
    setCurrentVideo(video);
  };

  return (
    <div className='grid grid-cols-2 gap-4'>
      {videos.map((video) => (
        <div key={video.id} className='p-4 border border-gray-300 rounded'>
          <h3 className='text-lg font-semibold'>{video.snippet.title}</h3>
          <button onClick={() => handlePlay(video)}>Play</button>
        </div>
      ))}
      {currentVideo && <ReactPlayer className='hidden' url={`https://www.youtube.com/watch?v=${currentVideo.snippet.resourceId.videoId}`} playing={true} controls={true} onPause={() => setCurrentVideo(null)} />}
    </div>
  );
};

export default YouTubeComponent;
