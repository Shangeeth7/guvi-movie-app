import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { API } from "./global.js";

export function MovieDetails() {
  const { id } = useParams();
  // const movieDetailsPage = movieList[id];
  const [movieDetailsPage, setMovieDetailsPage] = useState({});
  const fetchMovie = () => {
    fetch(`${API}/movie/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovieDetailsPage(mvs));
  };

  useEffect(() => fetchMovie(), []);

  let styles;
  if (movieDetailsPage.rating >= 8) {
    styles = {
      color: "green",
    };
  } else {
    styles = {
      color: "red",
    };
  }

  const navigateBack = useNavigate();

  return (
    <div>
      <iframe
        width="100%"
        height="650"
        src={movieDetailsPage.trailer}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
      ></iframe>
      <div className="movie-details-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movieDetailsPage.name}</h2>

          <p style={styles} className="movie-rating">
            ⭐ {movieDetailsPage.rating}
          </p>
        </div>
        <p>{movieDetailsPage.summary}</p>
      </div>
      <div className="previous-back-btn">
        <Button
          onClick={() => navigateBack(`/movies/${parseInt(id) - 1}`)}
          variant="outlined"
        >
          previous
        </Button>
        <Button
          onClick={() => navigateBack(`/movies/${parseInt(id) + 1}`)}
          variant="outlined"
        >
          next
        </Button>
      </div>
      <div className="back-movieDetailsPage">
        <Button onClick={() => navigateBack("/movies")} variant="outlined">
          back
        </Button>
      </div>
    </div>
  );
}
