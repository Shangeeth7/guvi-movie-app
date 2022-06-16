import { useState } from "react";
import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { AddColorGame } from "./AddColorGame";
import { MovieList } from "./MovieList";
import { initialMovieListFunction } from "./InitialMovieList";
import { NotFound } from "./NotFound";
import { MovieDetails } from "./MovieDetails";

function App() {
  // imported from InitialMovieList.js
  const initialMovieList = initialMovieListFunction();
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/color-game" element={<AddColorGame />} />
        <Route
          path="/movie-page"
          element={
            <MovieList movieList={movieList} setMovieList={setMovieList} />
          }
        />
        <Route path="/error:404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/error:404" />} />
        <Route path="/flims" element={<Navigate replace to="/movie-page" />} />
        <Route
          path="/movie-page/:id"
          element={<MovieDetails movieList={movieList} />}
        />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to main page</h1>
    </div>
  );
}

export default App;
