import React,{useState} from 'react'
import './App.css'
import  {URL} from "./config";
 
function App() {
const [mode, setMode] = useState('0')
const [squares, setSquares] = useState([])
const [className,setClassName] = useState('')
const [alerts, setAlerts] = useState([])


async function getGameSettings() {
    if (mode !== '0') {
      try {
        const response = await fetch(URL)
        const data = await response.json()
        const squaresNumber = data[mode].field
        draw(squaresNumber)
      } catch (e) {
        console.log(e) 
      }
      
      } 
 }

 function draw (squaresNumber) {
  let squares = []
  setSquares(squares)
  let alerts = []
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
      setSquares(squares)
      setAlerts(alerts)
      
 }
 
 function hover(e) {
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
          {/* <GameMode /> */}
          <div className="row">
              <div className="col p-2">
                <select className="form-select p" defaultValue="0" onChange={event => setMode(event.target.value)}>
                  <option value="0">Pick mode</option>
                  <option value="easyMode">Easy</option>
                  <option value="normalMode">Normal</option>
                  <option value="hardMode">Hard</option>
                </select>
                <button type="button" className="btn btn-primary" onClick={getGameSettings}>START</button>
              </div>
            </div>
          {/* <Squares /> */}
          <div className="row">
            <div className="col">
              <div className="containerSquares" >
                {squares.map((square) => <div 
                  key={square.id} 
                  id={square.id} 
                  className={className} 
                  onMouseOver={hover} 
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
