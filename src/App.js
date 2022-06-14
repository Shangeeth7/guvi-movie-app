import { useState } from "react";
import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";

function App() {
  const initialMovieList = [
    {
      name: "RRR",
      poster:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    },
    {
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    },
    {
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    },
    {
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
    },
    {
      name: "The Avengers",
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    },
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    },
    {
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    },
  ];
  const [movieList, setMovieList] = useState(initialMovieList);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/color-game">COLOR GAME</Link>
          </li>
          <li>
            <Link to="/movie-page">MOVIES</Link>
          </li>
        </ul>
      </nav>
      {/* <MovieList movieList={movieList} setMovieList={setMovieList} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/color-game" element={<AddColor />} />
        <Route
          path="/movie-page"
          element={
            <MovieList movieList={movieList} setMovieList={setMovieList} />
          }
        />
        <Route path="/error:404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/error:404" />} />
        <Route path="/flims" element={<Navigate replace to="/movie-page" />} />
      </Routes>
    </div>
  );
}

function NotFound() {
  return (
    <div className="image-container" alt="error404">
      <p className="text"> 404 ERROR </p>
    </div>
  );
}

function Home() {
  return <h1>Welcome to main page</h1>;
}

function MovieList({ movieList, setMovieList }) {
  const [movieName, setMovieName] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieSummary, setMovieSummary] = useState();

  const addMovieFunction = () => {
    const newMovie = {
      name: movieName,
      poster: moviePoster,
      rating: movieRating,
      summary: movieSummary,
    };
    setMovieList([newMovie, ...movieList]);
  };
  return (
    <div className="addMovie">
      <div className="addMovie1">
        <h3>ADD MOVIES HERE</h3>

        <input
          onChange={(event) => setMovieName(event.target.value)}
          className="input-name"
          placeholder="movie name"
        />
        <input
          onChange={(event) => setMoviePoster(event.target.value)}
          className="input-poster-url"
          placeholder="poster (url)"
        />
        <input
          onChange={(event) => setMovieRating(event.target.value)}
          className="input-rating"
          placeholder="rating "
          type="number"
        />
        <input
          onChange={(event) => setMovieSummary(event.target.value)}
          className="input-summary"
          placeholder="summary"
        />
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
      <div className="movie-list">
        {movieList.map((data, index) => (
          // index and key are used to clear error in console
          <Movie key={index} movie={data} />
        ))}
      </div>
    </div>
  );
}

function AddColor() {
  const [color, setColor] = useState("red");
  let styles = {
    backgroundColor: color,
  };
  const colorList = ["blue", "red", "green", "black", "violet"];
  const [colorIn, setColorIn] = useState(colorList);

  return (
    <div>
      <input
        style={styles}
        onChange={(event) => {
          setColor(event.target.value);
        }}
        className="input-box"
        placeholder={"enter a color"}
        value={color}
      />
      <button onClick={() => setColorIn([...colorIn, color])}>Add Color</button>
      {colorIn.map((colorInList, index) => (
        // index and key are used to clear error in console
        <ColorBox key={index} colorBox={colorInList} />
      ))}
    </div>
  );
}
function ColorBox({ colorBox }) {
  const styles = {
    backgroundColor: colorBox,
    height: "25px",
    width: "250px",
    marginTop: "10px",
  };
  return <div style={styles}></div>;
}

function Movie({ movie }) {
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

  return (
    <div className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <div className="movie-specs">
        <h2 className="movie-name">{movie.name}</h2>

        <p style={styles} className="movie-rating">
          ⭐ {movie.rating}
        </p>
      </div>
      <button className="toggle-btn" onClick={() => setShow(!show)}>
        Toggle Summary{" "}
      </button>
      {/* { Conditional styling } */}
      <p style={paraStyles} className="movie-summary">
        {movie.summary}
      </p>

      {/* conditional Rendering */}
      {/* {show ? (
        <p style={paraStyles} className="movie-summary">
          {movie.summary}
        </p>
      ) : null} */}
      <Counter />
    </div>
  );
}

function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div className="counter">
      <button className="like-button" onClick={() => setLike(like + 1)}>
        👍 {like}
      </button>
      <button
        className="disLike-button"
        onClick={() => setDislike(dislike + 1)}
      >
        👎 {dislike}
      </button>
    </div>
  );
}
export default App;
