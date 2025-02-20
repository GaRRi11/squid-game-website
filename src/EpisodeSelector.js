import React, { useState, useEffect } from "react";

const EpisodeSelector = ({ onEpisodeSelect }) => {
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch("/episodes.json")
      .then((response) => response.json())
      .then((data) => {
        if (!data.seasons || data.seasons.length === 0) return;
        setSeasons(data.seasons);
        const firstSeason = data.seasons[0];
        setSelectedSeason(firstSeason.id);
        setEpisodes(firstSeason.episodes);
        onEpisodeSelect(firstSeason.episodes[0]);
      })
      .catch((error) => console.error("Error loading seasons:", error));
  }, [onEpisodeSelect]);

  const handleSeasonChange = (seasonId) => {
    const season = seasons.find((s) => s.id === parseInt(seasonId));
    if (!season) return;
    setSelectedSeason(seasonId);
    setEpisodes(season.episodes);
    onEpisodeSelect(season.episodes[0]);
  };

  const handleEpisodeChange = (episodeId) => {
    const episode = episodes.find((e) => e.id === parseInt(episodeId));
    if (!episode) return;
    onEpisodeSelect(episode);
  };

  return (
    <div className="buttons-container">
      <select onChange={(e) => handleSeasonChange(e.target.value)} value={selectedSeason || ""}>
        {seasons.map((season) => (
          <option key={season.id} value={season.id}>
            სეზონი {season.id}
          </option>
        ))}
      </select>

      <select onChange={(e) => handleEpisodeChange(e.target.value)} value={episodes[0]?.id || ""}>
        {episodes.map((episode) => (
          <option key={episode.id} value={episode.id}>
            ეპიზოდი {episode.id}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EpisodeSelector;
