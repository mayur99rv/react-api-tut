import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/actionGames";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Game from "../components/Game";
import { useLocation } from "react-router";
import GameDetail from "../components/GameDetail";

const Home = () => {
  const location = useLocation();
  // getting the last address part for routing and displaying card
  const pathId = !location.pathname.split("/")[2]
    ? ""
    : location.pathname.split("/")[2];
  console.log("from home.js: " + pathId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGame, upComing, searched } = useSelector(
    (state) => state.games
  );

  return (
    <GameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <h2>Searched Games</h2>
            <StyledGames>
              {searched.map((game) => {
                return <Game game={game} key={game.id} />;
              })}
            </StyledGames>
          </div>
        ) : (
          ""
        )}

        <h2>Popular Games</h2>
        <StyledGames>
          {popular.map((game) => {
            return <Game game={game} key={game.id} />;
          })}
        </StyledGames>
        <h2>New Games</h2>
        <StyledGames>
          {newGame.map((game) => {
            return <Game game={game} key={game.id} />;
          })}
        </StyledGames>
        <h2>Upcoming Games</h2>
        <StyledGames>
          {upComing.map((game) => {
            return <Game game={game} key={game.id} />;
          })}
        </StyledGames>
      </AnimateSharedLayout>
    </GameList>
  );
};
const GameList = styled(motion.div)`
  padding: 0 5rem;
  h2 {
    padding: 5rem 0;
  }
`;

const StyledGames = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 5rem;
`;
export default Home;
