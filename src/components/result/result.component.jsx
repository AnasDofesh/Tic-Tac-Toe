import "./result.css";
const Result = (props) => {
  return (
    <div className="result">
      <span>X : {props.res.x}</span>
      <span>O : {props.res.o}</span>
      <span>Draw : {props.res.d}</span>
      <span>Turn {props.turn}</span>
    </div>
  );
};
export default Result;
