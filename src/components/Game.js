import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useDispatch } from "react-redux";
import loadDetail from "../actions/detailAction";
import { smallImage } from "../util";
import { Link } from "react-router-dom";

const Game = (props) => {
  const dispatch = useDispatch();

  const { name, released, background_image, id } = props.game;
  const stringPathId = id.toString();

  const loadDetailHandler = (game_id) => {
    // to remove the outer-scrollbar
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(game_id));
    console.log("from game.js: " + game_id);
  };

  return (
    <StyledGame layoutId={stringPathId} onClick={() => loadDetailHandler(id)}>
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(background_image, 640)}
          alt="game_img"
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  /* border: 2px solid red; */
  min-height: 30vh;
  text-align: center;
  border-radius: 1rem;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  overflow: hidden;

  /* transition: all 0.3s; */
  h3 {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    padding: 2rem;
    text-overflow: ellipsis;
    &:hover {
      white-space: initial;
    }
  }
  img {
    width: 100%;
    height: 35vh;
    object-fit: cover;
  }
`;

export default Game;
