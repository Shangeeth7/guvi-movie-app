import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import Button from "@mui/material/Button";

function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const fetchMovie = () => {
    fetch("https://62b96bca41bf319d227c0882.mockapi.io/movie", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  };

  useEffect(() => fetchMovie(), []);

  const deleteMovie = (id) => {
    fetch(`https://62b96bca41bf319d227c0882.mockapi.io/movie/${id}`, {
      method: "DELETE",
    }).then(() => fetchMovie());
  };

  return (
    <div className="addMovie">
      <div className="movie-list">
        {movieList.map((mv, index) => (
          // index and key are used to clear error in console
          <Movie
            key={mv.id}
            movie={mv}
            id={mv.id}
            deleteButton={
              <Button
                onClick={() => {
                  deleteMovie(mv.id);
                }}
              >
                Delete
              </Button>
            }
          />
        ))}
      </div>
    </div>
  );
}
export { MovieList };
