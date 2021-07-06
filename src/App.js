import React from "react";
import Home from "./pages/home";
import GlobalStyle from "./components/GlobalStyles";
import Nav from "./components/Nav";
import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav></Nav>
      <Route path={["/game/id", "/"]}>
        <Home></Home>
      </Route>
      {/* <Route path="games/:id">
        <GameDetail />
      </Route> */}
    </div>
  );
}

export default App;
