import React,{useState} from 'react'
import './App.css'
import GameMode from './components/GameMode'
import Squares from './components/Squares'


 
function App() {
const [squares, setSquares] = useState([])
const [className,setClassName] = useState('')
const [alerts, setAlerts] = useState([])

 function startGame(squaresNumber) {
  let squares = []
  setSquares(squares)
  let alerts = []

  drawSquares(squaresNumber)

  


      setSquares(squares)
      setAlerts(alerts) 
 }

 function drawSquares(squaresNumber) {
  switch (squaresNumber) {
    case 5:
      setClassName('square5');
    break;
    case 10:
      setClassName('square10');
    break;
    case 15:
      setClassName('square15');
    break;
    default: setClassName('');
  }
      for (let i = 0; i < squaresNumber; i++) {
        for (let j = 0; j < squaresNumber; j++) {
        squares.push({id:'row '+(i+1)+' col '+(j+1)})
      }
    }
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
          {/* <Squares /> */}
          {/* <Squares hoverOnSquare={hoverOnSquare} squares={squares=>setSquares(squares)} /> */}
          <div className="row">
            <div className="col">
              <div className="containerSquares" >
                {squares.map((square) => <div 
                  key={square.id} 
                  id={square.id} 
                  className={className} 
                  onMouseOver={hoverOnSquare} 
                />)}
              </div>
            </div>
          </div>    
        </div>
        {/* <Alert /> */}
        <div className="col">
          <h1>Hover Squares</h1>
            {alerts.map((alert) => <div 
                    key={alert.id}  
                    className="alert alert-warning"
                    role="alert" 
                  >{alert.id}</div>)}
        </div>
      </div>
    </div>
  );
}

export default App;
