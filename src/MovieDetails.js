import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";

export function MovieDetails({ movieList }) {
  const { id } = useParams();
  const movieDetailsPage = movieList[id];

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
          onClick={() => navigateBack(`/movie-page/${parseInt(id) - 1}`)}
          variant="outlined"
        >
          previous
        </Button>
        <Button
          onClick={() => navigateBack(`/movie-page/${parseInt(id) + 1}`)}
          variant="outlined"
        >
          next
        </Button>
      </div>
      <div className="back-movieDetailsPage">
        <Button onClick={() => navigateBack("/movie-page")} variant="outlined">
          back
        </Button>
      </div>
    </div>
  );
}
