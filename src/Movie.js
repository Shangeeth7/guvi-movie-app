import { useState } from "react";
import { Counter } from "./Counter";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

export function Movie({ movie, id, deleteButton, editButton }) {
  let styles;
  if (movie.rating >= 8) {
    styles = {
      color: "green",
    };
  } else {
    styles = {
      color: "red",
    };
  }
  const [show, setShow] = useState(false);
  const paraStyles = {
    display: show ? "block" : "none",
  };
  const navigate = useNavigate();

  return (
    <div>
      <Card className="movie-container">
        <img src={movie.poster} alt={movie.name} className="movie-poster" />
        <CardContent className="movie-specs">
          <h2 className="movie-name">
            {movie.name}
            <IconButton
              className="toggle-btn"
              color="primary"
              aria-label="summary"
              onClick={() => setShow(!show)}
            >
              {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
            <IconButton>
              <InfoIcon
                aria-label="movie details"
                color="primary"
                onClick={() => navigate(`/movie-page/${id}`)}
              />
            </IconButton>
          </h2>

          <p style={styles} className="movie-rating">
            ⭐ {movie.rating}
          </p>
        </CardContent>
        <CardActions>
          {/* { Conditional styling } */}
          <p style={paraStyles} className="movie-summary">
            {movie.summary}
          </p>
        </CardActions>

        {/* conditional Rendering */}
        {/* {show ? (
            <p style={paraStyles} className="movie-summary">
              {movie.summary}
            </p>
          ) : null} */}
        <div>
          <CardActions>
            <Counter /> {deleteButton} {editButton}
          </CardActions>
        </div>
      </Card>
    </div>
  );
}

// const deleteMovie = (id) => {
//   fetch(`https://62b53c20da3017eabb1708a7.mockapi.io/movies/${id}`, {
//     method: "DELETE",
//   }).then((data) => data.json());
// };
