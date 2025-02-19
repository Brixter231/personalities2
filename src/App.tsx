import { useState } from "react";
import { artistList } from "./data";
import "./app.css";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const hasNext = index < artistList.length - 1;
  const hasPrevious = index > 0;

  function handleNextClick() {
    setIndex(hasNext ? index + 1 : 0);
  }

  function handleBackClick() {
    setIndex(hasPrevious ? index - 1 : artistList.length - 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let artist = artistList[index];

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">BEST OPM ARTISTS</h2>
      <p className="gallery-subtitle">Brixter Bondoc - C-PEITEL3</p>

      <div className="gallery-buttons">
        <button onClick={handleBackClick} className="gallery-btn">BACK</button>
        <button onClick={handleNextClick} className="gallery-btn">NEXT</button>
      </div>

      <div className="artist-container">
        <img src={artist.url} alt={artist.name} className="artist-image" />
        <h2 className="artist-name">{artist.name}</h2>
        <p className="artist-index">{index + 1} of {artistList.length}</p>
      </div>

      <button onClick={handleMoreClick} className="dropdown-btn">
        {showMore ? "▲" : "▼"}
      </button>

      {showMore && <p className="artist-description">{artist.description}</p>}
    </div>
  );
}
