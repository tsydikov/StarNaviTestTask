import React,{useState} from 'react'
import './App.css'
// import Alert from './component/Alert';
// import Squares from './component/Squares';
// import GameMode from './component/GameMode';

 
function App() {
const [squares, setSquares] = useState(0)
 console.log(squares)
  async function start() {
  let data = await fetch('http://demo1030918.mockable.io/')
  console.log(data)
 }
  return (
    <div className="container p-3">
      <div className="row ">
        <div className="col">
          <div className="row">
              <div className="col p-2">
                <select className="form-select p" defaultValue="0" onChange={event => setSquares(event.target.value)}>
                  <option value="0">Pick mode</option>
                  <option value="1">Easy</option>
                  <option value="2">Normal</option>
                  <option value="3">Hard</option>
                </select>
                
                <button type="button" className="btn btn-primary" onClick={start}>START</button>
              </div>
            </div>
          {/* <GameMode /> */}
          <div className="row">
            <div className="col">
              <div className="containerSquares" id="board">
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
              </div>
            </div>
          </div>
          {/* <Squares /> */}
        </div>
        <div className="col">
          <h1>Hover Squares</h1>
          <div className="alert alert-warning" role="alert">
            A simple warning alert—check it out!
          </div>
            <div className="alert alert-warning" role="alert">
              A simple warning alert—check it out!
            </div>
        </div>
        {/* <Alert /> */}
      </div>
    </div>
  );
}

export default App;
