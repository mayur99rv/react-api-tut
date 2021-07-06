import axios from "axios";

import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL,
} from "../api";

export const loadGames = () => async (dispatch) => {
  // Fetch withAxios
  const popularData = await axios.get(popularGamesURL());
  console.log(popularData);
  const upcomingData = await axios.get(upcomingGamesURL());
  const newData = await axios.get(newGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upComing: upcomingData.data.results,
      newGame: newData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameURL(game_name));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
