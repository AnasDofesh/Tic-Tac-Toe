import { useState } from "react";
import "./game.css";
const Game = (props) => {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [winner, setWinner] = useState("");
  const evaluate = (cells) => {
    // Winner in rows
    if (cells[0] !== "" && cells[0] === cells[1] && cells[1] === cells[2]) {
      return cells[0];
    }
    if (cells[3] !== "" && cells[3] === cells[4] && cells[4] === cells[5]) {
      return cells[3];
    }
    if (cells[6] !== "" && cells[6] === cells[7] && cells[7] === cells[8]) {
      return cells[6];
    }

    // winner in columns
    if (cells[0] !== "" && cells[0] === cells[3] && cells[3] === cells[6]) {
      return cells[0];
    }
    if (cells[1] !== "" && cells[1] === cells[4] && cells[4] === cells[7]) {
      return cells[1];
    }
    if (cells[2] !== "" && cells[2] === cells[5] && cells[5] === cells[8]) {
      return cells[2];
    }

    // winner in diagnoal
    if (cells[0] !== "" && cells[0] === cells[4] && cells[4] === cells[8]) {
      return cells[0];
    }
    if (cells[2] !== "" && cells[2] === cells[4] && cells[4] === cells[6]) {
      return cells[2];
    }
    // if there is an empty cell, then return no winner yet
    for (let i = 0; i < cells.length; i++) {
      if (cells[i] === "") return undefined;
    }
    return "draw";
  };
  const draw = (index) => {
    if (squares[index] !== "") {
      return;
    }

    const temp = [...squares];
    temp[index] = props.turn;
    setSquares(temp);
    const result = evaluate(temp);
    if (result) {
      setWinner(result);
      if(result==='X'){
        let finalRes={...props.res , x:props.res.x+1 , o:props.res.o , d:props.res.d};
        props.setRes(finalRes);
        localStorage.setItem("finalRes",JSON.stringify(finalRes));
      }
      else if (result==='O'){
        let finalRes={...props.res , x:props.res.x , o:props.res.o+1 , d:props.res.d};
        props.setRes(finalRes);
        localStorage.setItem("finalRes",JSON.stringify(finalRes));
      }
      else{
      let finalRes={...props.res , x:props.res.x , o:props.res.o , d:props.res.d+1};
      props.setRes(finalRes);
      localStorage.setItem("finalRes",JSON.stringify(finalRes));
    }
      // console.log("winner = ",winner);
    }
 
    props.setTurn(props.turn === "X" ? "O" : "X");
    console.log(result);
  };
  const restart=()=>{
    setSquares(['','','','','','','','','']);
    setWinner("");
  }
  return (
    <div className="container">
      {
      squares.map((squareValue, index) => (
        <div
          key={index}
          className={`cell ${squareValue}`}
          onClick={() => draw(index)}
        >
          {squareValue}
        </div>
      ))
      }

      {winner !== "" && (
        <div className="results">
          {winner === 'X'|| winner === 'O'? "Winner is " + winner :"Draw " }
          <br/> 
          <button onClick={restart}>Restart</button>
        </div>
      )}
    </div>
  );
};
export default Game;
