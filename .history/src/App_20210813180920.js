import React,{useState} from 'react'
import './App.css'
// import Alert from './component/Alert';
// import Squares from './component/Squares';
// import GameMode from './component/GameMode';

 
function App() {

const [mode, setMode] = useState('0')
const [squares, setSquares] = useState([])
const url ='https://demo1030918.mockable.io/'

async function start() {
    if (mode !== '0') { 
      const response = await fetch(url)
      const data = await response.json()
      const squaresNumber = data[mode].field
      console.log(squaresNumber)
      dwaw()
      console.log(squares)
      for (let i = 0; i < squaresNumber; i++) {
        squares.push({id:i})
      }
      setSquares(squares)
      console.log(squares)
      return squaresNumber
      } else console.log('net vubora')
  
 }

 function draw (squaresNumber) {
  console.log(squaresNumber)
 }

  return (
    <div className="container p-3">
      <div className="row ">
        <div className="col">
          <div className="row">
              <div className="col p-2">
                <select className="form-select p" defaultValue="0" onChange={event => setMode(event.target.value)}>
                  <option value="0">Pick mode</option>
                  <option value="easyMode">Easy</option>
                  <option value="normalMode">Normal</option>
                  <option value="hardMode">Hard</option>
                </select>
                <button type="button" className="btn btn-primary" onClick={start}>START</button>
              </div>
            </div>
          {/* <GameMode /> */}
          <div className="row">
            <div className="col">
              <div className="containerSquares" id="board">
                {squares.map(square =><div className="square" />)}
                {/* <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div> */}
              </div>
            </div>
          </div>
          {/* <Squares /> */}
        </div>
        <div className="col">
          <h1>Hover Squares</h1>
          <div className="alert alert-warning" role="alert">
            A simple warning alert???check it out!
          </div>
            <div className="alert alert-warning" role="alert">
              A simple warning alert???check it out!
            </div>
        </div>
        {/* <Alert /> */}
      </div>
    </div>
  );
}

export default App;
