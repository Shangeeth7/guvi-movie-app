import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { API } from "./global.js";

export function EditMovie() {
  // start - from Movie Details Page
  const { id } = useParams();

  const [movieEditPage, setMovieEditPage] = useState(null);
  const fetchMovie = () => {
    fetch(`${API}/movie/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovieEditPage(mvs));
  };

  useEffect(() => fetchMovie(), []);
  //end - from Movie Details Page

  return movieEditPage ? (
    <EditMovieForm movieEditPage={movieEditPage} />
  ) : (
    "Loading"
  );
}

function EditMovieForm({ movieEditPage }) {
  const [movieName, setMovieName] = useState(movieEditPage.name);

  const [moviePoster, setMoviePoster] = useState(movieEditPage.poster);
  const [movieRating, setMovieRating] = useState(movieEditPage.rating);
  const [movieSummary, setMovieSummary] = useState(movieEditPage.summary);
  const [movieTrailer, setMovieTrailer] = useState(movieEditPage.trailer);
  const navigate = useNavigate();

  const editMovieFunction = () => {
    const updateMovie = {
      name: movieName,
      poster: moviePoster,
      rating: movieRating,
      summary: movieSummary,
      trailer: movieTrailer,
    };

    // setMovieList([...movieList, updateMovie]);
    fetch(`${API}/movie/${movieEditPage.id}`, {
      method: "PUT",
      body: JSON.stringify(updateMovie),
      headers: { "Content-Type": "application/json" },
    }).then(() => navigate("/movies"));
  };

  return (
    <div className="addMovie1">
      <h3>EDIT HERE</h3>
      <div className="inputButtons-div" action="/action_page.php">
        <TextField
          value={movieName}
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
          value={moviePoster}
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
          value={movieRating}
        />
      </div>
      <div className="inputButtons-div">
        <TextField
          required
          onChange={(event) => setMovieSummary(event.target.value)}
          className="input-summary"
          label="summary"
          variant="outlined"
          value={movieSummary}
        />
      </div>
      <div className="inputButtons-div">
        <TextField
          required
          onChange={(event) => setMovieTrailer(event.target.value)}
          className="input-summary"
          label="trailer"
          variant="outlined"
          value={movieTrailer}
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
          onClick={editMovieFunction}
          className="input-addMovie-btn"
        >
          save
        </Button>
      </div>
    </div>
  );
}
