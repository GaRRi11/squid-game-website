import React, { useState, useEffect } from "react";
import ReactGA from "react-ga4";
import VideoPlayer from "./VideoPlayer";
import EpisodeSelector from "./EpisodeSelector";
import "./App.css";

const App = () => {
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ReactGA.initialize("G-MT4RXHCQJ5");
    ReactGA.send("pageview", window.location.pathname + window.location.search);

    fetchEpisodes();
  }, []);

  const fetchEpisodes = async () => {
    try {
      const response = await fetch("/episodes.json");
      const data = await response.json();

      if (!data.seasons || data.seasons.length === 0) {
        throw new Error("No seasons available.");
      }

      const firstEpisode = data.seasons[0].episodes[0];
      setSelectedEpisode(firstEpisode);
    } catch (error) {
      console.error("Error loading episodes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEpisodeSelect = (episode) => {
    setSelectedEpisode(episode);
    ReactGA.send("pageview", window.location.pathname + window.location.search);
  };

  return (
    <div className="App">
      <div id="background" />
      <EpisodeSelector onEpisodeSelect={handleEpisodeSelect} />
      <div className="video-container">
        {loading ? <p>Loading video...</p> : <VideoPlayer videoUrl={selectedEpisode?.video} />}
      </div>
    </div>
  );
};

export default App;
