import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";
const GameDetail = ({ pathId }) => {
  const history = useHistory();
  // console.log(history);
  console.log("from gameDetail.js: " + pathId);
  // Exit Detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  const detail = useSelector((state) => state.detail);
  // console.log(detail);
  const { screen, game, isLoading } = detail;
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p> Rating: {game.rating} </p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => {
                    return (
                      <h3 key={data.platform.id}>{data.platform.name} </h3>
                    );
                  })}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt="back-img"
              />
            </Media>
            <Description>
              <p>{game.description_raw} </p>
            </Description>
            <div className="gallery">
              {screen.results.map((img) => (
                <img
                  src={smallImage(img.image, 1280)}
                  key={img.id}
                  alt="indiv-img"
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  border: 5px solid green;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background-color: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  border: 3px solid red;
  img {
    width: 100%;
  }
  /* .description {
    margin: 4rem 0;
  } */
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* div {
    border: 3px solid red;
  } */
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;
const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;
export default GameDetail;
