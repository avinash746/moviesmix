import React from "react";
import { useCommand } from "../../context/Context";
import "./Home.css";
import Button from "../utility/buttons/Button";

const Home = (props) => {
  const { handleHomeNext } = useCommand();

  return (
    <div className="home">
      <Button
        name="CLICK HERE TO ENTER THEATER"
        handleButtonClick={handleHomeNext}
      ></Button>
    </div>
  );
};

export default Home;
