import React from "react";
import "./GenresList.css";
import GenreCard from "../genresList/genresCard/GenreCard";
import genres from "./genresTypes";

const GenresList = () => {

  return (
    <div className="genreList">

      <div className="genreList__movies">
       {genres.map((genre) => (
         <div key={genre.keyword}>
          <GenreCard
           img="https://cdn.pixabay.com/photo/2015/10/31/12/31/course-1015601_960_720.jpg"
           keyword= {genre.keyword}/>
          </div>
        ))}
      </div>

    </div>
  );
};

export default GenresList;
