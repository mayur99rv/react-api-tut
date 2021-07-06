import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import logo from "../img/logo.svg";

//Redux and Routes
import { fetchSearch } from "../actions/actionGames";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Nav = () => {
  const [textInput, setTextInput] = useState("");
  const dispatch = useDispatch();
  // dispatch(fetchSearch('Assasins'))

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <StyledNav>
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <h1>Infinity</h1>
      </Logo>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitHandler} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 32%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background-color: #ff7676;
    color: white;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;
export default Nav;
