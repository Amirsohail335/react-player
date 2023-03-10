import React from "react";
import Player from "./components/Player";
import Song from "./components/Song";

// import "./styles/app.scss";
import "./styles/app.css";
import "./styles/_player.css";
import "./styles/_song.css"

function App() {
  return (
    <div className="App">
      <h1>Music Player</h1>
      <Song />
      <Player />
    </div>
  );
}

export default App;
