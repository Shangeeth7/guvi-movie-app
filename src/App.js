import { useState } from "react";
import "./App.css";

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
    {
      name: "Vikram",
      poster:
        "data:image/jpeg;base64,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",
      rating: "9.1",
      summary:
        "Members of a black ops team must track and eliminate a gang of masked murderers.",
    },
  ];
  const [movieList, setMovieList] = useState(initialMovieList);

  return (
    <div>
      <MovieList movieList={movieList} setMovieList={setMovieList} />
    </div>
  );
}

function MovieList({ movieList, setMovieList }) {
  const [movieName, setMovieName] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieSummary, setMovieSummary] = useState("");
  return (
    <div className="addMovie">
      <div className="addMovie1">
        <h3>ADD MOVIES HERE</h3>
        {/* onChange={(event)=>()} */}
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
        <p>name:{movieName}</p>
        <p>Poster:{moviePoster}</p>
        <p>Rating:{movieRating}</p>
        <p>Summary:{movieSummary}</p>

        <div className="input-addMovie-btn-div">
          <button
            onClick={() => {
              const newMovie = {
                name: movieName,
                poster: moviePoster,
                rating: movieRating,
                summary: movieSummary,
              };
              setMovieList([newMovie, ...movieList]);
              // console.log(newMovie);
              // console.log(...movieList);
              console.log([newMovie, ...movieList]);
            }}
            className="input-addMovie-btn"
          >
            add movie
          </button>
        </div>
      </div>
      <div className="movie-list">
        {movieList.map((data, index) => (
          // index and key are used to clear error in console
          <Movie key={index} movie={data} />
        ))}

        <AddColor />
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
