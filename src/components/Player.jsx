import React, { useEffect, useState } from 'react';

const Player = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [name,setName]=React.useState("");
  useEffect(() => {
    const storedTopic = sessionStorage.getItem('topic');
    if (storedTopic) {
        // Use the retrieved topic value as needed
        console.log('Retrieved topic:', storedTopic);
        setName(storedTopic);
    } else {
        console.log('No topic found in session storage');
    }
    // Fetch video URL from backend when component mounts
    fetch('http://127.0.0.1:8000/video')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch video URL');
        }
      })
      .then(data => {
        // Set the video URL fetched from the backend
        setVideoUrl(data.url);
      })
      .catch(error => {
        console.error('Error fetching video URL:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  return (
    <div style={{ height: "500px", width: "500px", margin: "100px auto 0 auto" ,color:"white"}}>
      <h1>Generated Video</h1>
      <h3>{name}</h3>
      {videoUrl ? (
        <video controls style={{ width: "100%" }}>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Player;
