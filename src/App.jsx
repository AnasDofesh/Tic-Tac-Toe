import logo from "./logo.svg";
import "./App.css";
import Result from "./components/result/result.component";
import Game from "./components/game/game.component";
import { useEffect } from "react";
import { useState } from "react";
function App() {
  const [turn, setTurn] = useState("X");
  const [res ,setRes] =useState(JSON.parse(localStorage.getItem("finalRes"))
  || {x:0,o:0,d:0});
  return (
    <div className="App">
      <Result turn={turn} res={res} />
      <Game turn={turn} setTurn={setTurn} res={res}setRes={setRes}/>
    </div>
  );
}

export default App;
