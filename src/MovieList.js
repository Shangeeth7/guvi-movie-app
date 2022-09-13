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
    fetch(`${API}/movie`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  };

  useEffect(() => fetchMovie(), []);

  const deleteMovie = (id) => {
    fetch(`${API}/movie/${id}`, {
      method: "DELETE",
    }).then(() => fetchMovie());
  };
  const navigate = useNavigate();
  return (
    <div className="movie-list">
      {movieList.map((mv) => (
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
              style={{ marginLeft: "auto" }}
            >
              <DeleteIcon color="error" />
            </Button>
          }
          editButton={
            <Button
              onClick={() => {
                navigate(`/allmovies/edit-movie/${mv.id}`);
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
