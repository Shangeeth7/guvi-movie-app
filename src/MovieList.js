import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { API } from "./global.js";

function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const fetchMovie = () => {
    fetch(`${API}/movies`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  };

  useEffect(() => fetchMovie(), []);

  const deleteMovie = (id) => {
    fetch(`${API}/movies/${id}`, {
      method: "DELETE",
    }).then(() => fetchMovie());
  };
  const navigate = useNavigate();
  return (
    <div className="movie-list">
      {movieList.map((mv) => (
        // index and key are used to clear error in console
        <Movie
          key={mv._id}
          movie={mv}
          id={mv._id}
          deleteButton={
            <Button
              onClick={() => {
                deleteMovie(mv._id);
              }}
              style={{ marginLeft: "auto" }}
            >
              <DeleteIcon color="error" />
            </Button>
          }
          editButton={
            <Button
              onClick={() => {
                navigate(`/movies/edit-movie/${mv._id}`);
              }}
            >
              <EditIcon color="secondary" />
            </Button>
          }
        />
      ))}
    </div>
  );
}
export { MovieList };
