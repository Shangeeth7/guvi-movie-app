import { useState } from "react";
import { Counter } from "./Counter";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

function MovieList({ movieList, setMovieList }) {
  return (
    <div className="addMovie">
      <div className="movie-list">
        {movieList.map((data, index) => (
          // index and key are used to clear error in console
          <Movie key={index} movie={data} id={index} />
        ))}
      </div>
    </div>
  );
}
function Movie({ movie, id }) {
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
        <CardActions>
          <Counter />
        </CardActions>
      </Card>
    </div>
  );
}

function AddMovie({ movieList, setMovieList }) {
  const [movieName, setMovieName] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieSummary, setMovieSummary] = useState();
  const [movieInfo, setMovieInfo] = useState();

  const addMovieFunction = () => {
    const newMovie = {
      name: movieName,
      poster: moviePoster,
      rating: movieRating,
      summary: movieSummary,
      trailer: movieInfo,
    };
    setMovieList([...movieList, newMovie]);
  };
  return (
    <div className="addMovie1">
      <h3>ADD MOVIES HERE</h3>
      <div className="inputButtons-div">
        <TextField
          onChange={(event) => setMovieName(event.target.value)}
          label="movie name"
          variant="outlined"
          className="input-name"
        />
      </div>
      <div className="inputButtons-div">
        <TextField
          onChange={(event) => setMoviePoster(event.target.value)}
          className="input-poster-url"
          label="poster (url)"
          variant="outlined"
        />
      </div>
      <div className="inputButtons-div">
        <TextField
          onChange={(event) => setMovieRating(event.target.value)}
          className="input-rating"
          label="rating"
          variant="outlined"
          type="number"
        />
      </div>
      <div className="inputButtons-div">
        <TextField
          onChange={(event) => setMovieSummary(event.target.value)}
          className="input-summary"
          label="summary"
          variant="outlined"
        />
      </div>
      <div className="inputButtons-div">
        <TextField
          onChange={(event) => setMovieInfo(event.target.value)}
          className="input-summary"
          label="trialer"
          variant="outlined"
        />
      </div>
      {/* <p>name:{movieName}</p>
        <p>Poster:{moviePoster}</p>
        <p>Rating:{movieRating}</p>
        <p>Summary:{movieSummary}</p> */}

      <div className="input-addMovie-btn-div">
        <button onClick={addMovieFunction} className="input-addMovie-btn">
          add movie
        </button>
      </div>
    </div>
  );
}

export { Movie, MovieList, AddMovie };
