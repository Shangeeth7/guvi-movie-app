import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { API } from "./global.js";

export function AddMovie() {
  const [movieName, setMovieName] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieSummary, setMovieSummary] = useState("");
  const [movieTrailer, setMovieTrailer] = useState("");
  const navigate = useNavigate();

  const addMovieFunction = () => {
    const newMovie = {
      name: movieName,
      poster: moviePoster,
      rating: movieRating,
      summary: movieSummary,
      trailer: movieTrailer,
    };

    // setMovieList([...movieList, newMovie]);
    fetch(`${API}/movie`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: { "Content-Type": "application/json" },
    }).then(() => navigate("/allmovies"));
  };
  return (
    <div className="addMovie1">
      <h3>ADD MOVIES HERE</h3>
      <div className="inputButtons-div" action="/action_page.php">
        <TextField
          required
          onChange={(event) => setMovieName(event.target.value)}
          label="movie name"
          variant="outlined"
          className="input-name"
          type="text"
        />
      </div>
      <div className="inputButtons-div">
        <TextField
          onChange={(event) => setMoviePoster(event.target.value)}
          className="input-poster-url"
          label="poster (url)"
          variant="outlined"
          required
        />
      </div>
      <div className="inputButtons-div">
        <TextField
          required
          onChange={(event) => setMovieRating(event.target.value)}
          className="input-rating"
          label="rating"
          variant="outlined"
          type="number"
        />
      </div>
      <div className="inputButtons-div">
        <TextField
          required
          onChange={(event) => setMovieSummary(event.target.value)}
          className="input-summary"
          label="summary"
          variant="outlined"
        />
      </div>
      <div className="inputButtons-div">
        <TextField
          required
          onChange={(event) => setMovieTrailer(event.target.value)}
          className="input-summary"
          label="trailer"
          variant="outlined"
        />
      </div>
      {/* <p>name:{movieName}</p>
              <p>Poster:{moviePoster}</p>
              <p>Rating:{movieRating}</p>
              <p>Summary:{movieSummary}</p> */}

      <div className="input-addMovie-btn-div">
        <Button
          color="success"
          variant="outlined"
          onClick={addMovieFunction}
          className="input-addMovie-btn"
        >
          add movie
        </Button>
      </div>
    </div>
  );
}
