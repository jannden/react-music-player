import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ isNavOpen, setIsNavOpen }) => {
  const toggleNavHandler = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav>
      <h1>Waves App</h1>
      <button onClick={toggleNavHandler}>
        <FontAwesomeIcon icon={faMusic} /> Library
      </button>
    </nav>
  );
};

export default Nav;
