const key = "0ae7f37b558b4b1484a759a6ca749159";
const base_url = `https://api.rawg.io/api/`;

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) return `0${month}`;
  else return `${month}`;
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) return `0${day}`;
  else return `${day}`;
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
// Current year/month/date
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_games = `games?key=${key}&dates=${lastYear},${currentDate}&ordering=-rating&page=2&page_size=10`;

const upcoming_games = `games?key=${key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

const new_games = `games?key=${key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => {
  return `${base_url}${popular_games}`;
};

export const upcomingGamesURL = () => {
  return `${base_url}${upcoming_games}`;
};

export const newGamesURL = () => {
  return `${base_url}${new_games}`;
};

export const gameDetailsURL = (game_id) => {
  return `${base_url}games/${game_id}?key=${key}`;
};
export const gameScreenshotsURL = (game_id) => {
  return `${base_url}games/${game_id}/screenshots?key=${key}`;
};

export const searchGameURL = (game_name) => {
  return `${base_url}games?key=${key}&search=${game_name}&page_size=10`;
};
