import React,{useState} from 'react'
import './App.css'
import GameMode from './components/GameMode'
import Squares from './components/Squares'
import Alert from './components/Alert'


function App() {
const [squares, setSquares] = useState([])
const [squaresNumber,setSquaresNumber]=useState('')
const [alerts, setAlerts] = useState([])

 function startGame(squaresNumber) {
  let squares = []
  setSquares(squares)
  let alerts = []
  drawSquares(squaresNumber)      
      setAlerts(alerts) 
 }

 function drawSquares(squaresNumber) {
  let squares = []
  setSquaresNumber(squaresNumber)
  for (let i = 0; i < squaresNumber; i++) {
    for (let j = 0; j < squaresNumber; j++) {
      squares.push({id:'row '+(i+1)+' col '+(j+1)})
    }
  }
  setSquares(squares)
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
