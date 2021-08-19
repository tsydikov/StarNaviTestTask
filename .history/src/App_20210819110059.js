import React,{useState} from 'react'
import './App.css'
import GameMode from './components/GameMode'
import Squares from './components/Squares'
import Alert from './components/Alert'
import { useSquaresNumber } from './hooks/userHooks'

function App() {
const [squares, setSquares] = useState([])
const [className,setClassName] = useState('')
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
  // switch (squaresNumber) {
  //   case 5:
  //     setClassName('square5');
  //   break;
  //   case 10:
  //     setClassName('square10');
  //   break;
  //   case 15:
  //     setClassName('square15');
  //   break;
  //   default: setClassName('');
  // }
  setClassName(useSquaresNumber(squaresNumber))
  console.log(className)
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
          <Squares hoverOnSquare={hoverOnSquare} squares={squares} className={className}/>
        </div>
        <Alert alerts={alerts}/> 
      </div>
    </div>
  );
}

export default App;
