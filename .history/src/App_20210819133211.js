import React,{useState} from 'react'
import './App.css'
import GameMode from './components/GameMode'
import Squares from './components/Squares'
import Alert from './components/Alert'
import { createSquaresArray } from './function/function'


function App() {
const [squares, setSquares] = useState([])
const [squaresNumber,setSquaresNumber]=useState('')
const [alerts, setAlerts] = useState([])

 function startGame(squaresNumber) {
  setSquares([])
  setAlerts([])
  drawSquares(squaresNumber)
 }

 function drawSquares(squaresNumber) {
  setSquaresNumber(squaresNumber)
  setSquares(createSquaresArray(squaresNumber))
 }

 function hoverOnSquare(e) {
  if (e.target.style.background === 'blue') {
    e.target.style.background = 'white'
    alert(e.target.id, e.target.style.background)
  } else {
    e.target.style.background = 'blue'
    alert(e.target.id, e.target.style.background)
  }
}

function alert (key, style) {
  (style === 'blue') ? setAlerts(alerts.concat({id: ' '+key})) : setAlerts(alerts.filter(alert => alert.id !== ' '+key))
  }
  
  return (
    <div className="container p-3">
      <div className="row ">
        <div className="col">
          <GameMode startGame={startGame} />
          <Squares hoverOnSquare={hoverOnSquare} squares={squares} squaresNumber={squaresNumber}/>
        </div>
        <Alert alerts={alerts}/> 
      </div>
    </div>
  );
}

export default App;
