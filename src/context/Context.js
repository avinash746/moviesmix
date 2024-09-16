import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "../axios/Axios";
import fetchURL from "../axios/requests";

const Alancontext = React.createContext();

export function useCommand() {
  return useContext(Alancontext);
}

function ContextApi(props) {
  const [showCommand, setShowCommand] = useState(false);
  const [homeNextClicked, setHomeNextClicked] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movieType, setMovieType] = useState(null);
  const navigate = useNavigate(); // Use the useNavigate hook for navigation

  useEffect(() => {
    async function fetchData() {
      if (movieType === "Trending") {
        const request = await axios.get(fetchURL.fetchTrending);
        console.log("fetchTrending");
        setMovies(request.data.results);
        navigate("/trending-movies"); // Replace props.history.push with navigate
        setMovieType("");
        return request;
      } 
    }
    fetchData();
  }, [movieType, navigate]); // Replace props.history with navigate

  function showCommandHandler() {
    setShowCommand(!showCommand);
  }

  const handleHomeNext = () => {
    setHomeNextClicked(true);
    navigate("/genres-list"); // Replace props.history.push with navigate
  };

  const backToHome = () => {
    navigate("/"); // Replace props.history.push with navigate
  };

  const back = () => {
    navigate(-1); // Equivalent to props.history.goBack()
  };

  const forward = () => {
    navigate(1); // Equivalent to props.history.goForward()
  };

  const values = {
    showCommand,
    setShowCommand,
    homeNextClicked,
    setHomeNextClicked,
    setMovieType,
    movies,
    showCommandHandler: showCommandHandler,
    handleHomeNext: handleHomeNext,
    backToHome: backToHome,
    back: back,
    forward: forward,
  };

  return (
    <Alancontext.Provider value={values}>{props.children}</Alancontext.Provider>
  );
}

export default ContextApi;
