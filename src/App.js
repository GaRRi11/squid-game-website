import React from 'react';
import './App.css';
import VideoPlayer from './VideoPlayer';

function App() {
  return (
    <div className="App">
      <div id="background"></div>
      <div className="video-container">
        <VideoPlayer />
      </div>
    </div>
  );
}

export default App;
