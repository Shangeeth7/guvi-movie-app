import * as React from "react";
import { useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { AddColorGame } from "./AddColorGame";
import { MovieList } from "./MovieList";
import { AddMovie } from "./AddMovie";
import { EditMovie } from "./EditMovie";
import { NotFound } from "./NotFound";
import { MovieDetails } from "./MovieDetails";
import { LightDarkExample } from "./lightDark";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import TicTacToe from "./ticTacToe";
import { Home } from "./Home";
import { BasicForm } from "./Form";

function App() {
  const navigate = useNavigate();

  const [themeColor, setThemeColor] = useState("dark");

  const theme = createTheme({
    palette: {
      mode: themeColor,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={{ minHeight: "100vh", borderRadius: "0px" }}>
        <div>
          <Box className="app-css" sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <Button onClick={() => navigate(`/`)} color="inherit">
                  Home
                </Button>
                <Button onClick={() => navigate(`/color-game`)} color="inherit">
                  Color Game
                </Button>
                <Button onClick={() => navigate(`/movie-page`)} color="inherit">
                  Movies
                </Button>
                <Button
                  onClick={() => navigate(`/movie-page/add-movie`)}
                  color="inherit"
                >
                  Add Movie
                </Button>
                <Button
                  onClick={() => navigate(`/tic-tac-toe`)}
                  color="inherit"
                >
                  Tic-tac-toe
                </Button>
                <Button onClick={() => navigate(`/light-dark`)} color="inherit">
                  🌕 🌑
                </Button>
                <Button onClick={() => navigate(`/basic-form`)} color="inherit">
                  Form
                </Button>
                <Button
                  style={{ marginLeft: "auto" }}
                  startIcon={
                    themeColor === "dark" ? (
                      <Brightness7Icon />
                    ) : (
                      <Brightness4Icon />
                    )
                  }
                  onClick={() =>
                    setThemeColor(themeColor === "light" ? "dark" : "light")
                  }
                  color="inherit"
                >
                  {themeColor === "light" ? "dark" : "light"} mode
                </Button>
              </Toolbar>
            </AppBar>
          </Box>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/color-game" element={<AddColorGame />} />
            <Route path="/light-dark" element={<LightDarkExample />} />
            <Route path="/tic-tac-toe" element={<TicTacToe />} />
            <Route path="/movie-page" element={<MovieList />} />
            <Route path="/movie-page/add-movie" element={<AddMovie />} />
            <Route path="/movie-page/edit-movie/:id" element={<EditMovie />} />
            <Route path="/error:404" element={<NotFound />} />
            <Route path="*" element={<Navigate replace to="/error:404" />} />
            <Route
              path="/flims"
              element={<Navigate replace to="/movie-page" />}
            />
            <Route path="/movie-page/:id" element={<MovieDetails />} />
            <Route path="/basic-form" element={<BasicForm />} />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
