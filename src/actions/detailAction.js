import axios from "axios";
import { gameDetailsURL, gameScreenshotsURL } from "../api";

const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  const detailData = await axios.get(gameDetailsURL(id));
  const screenDetail = await axios.get(gameScreenshotsURL(id));
  dispatch({
    type: "GET_DETAIL",
    payload: { game: detailData.data, screen: screenDetail.data },
  });
};

export default loadDetail;
