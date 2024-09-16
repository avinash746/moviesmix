import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom"; // Use Routes instead of Switch
import GenresList from "./components/genresList/GenresList";
import MovieList from "./components/moviesList/MovieList";

function App() {
  return (
    <Routes>
      <Route path="/genres-list" element={<GenresList />} /> {/* Update component to element */}
      <Route path="/" element={<Home />} /> {/* Use element instead of component */}
      <Route path="/:id" element={<MovieList />} /> {/* Use element here as well */}
    </Routes>
  );
}

export default App;
