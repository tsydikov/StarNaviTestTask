import React,{useState} from "react";
import GetSquaresNumber from '../API/GetSquaresNumber'


const GameMode = ({ startGame }) => {
    const [gameMode, setMode] = useState('0')
    async function getGameSettings() {
        if (gameMode !== '0' ) {
            const squaresNumber = await GetSquaresNumber.get(gameMode)
            startGame(squaresNumber)
          }  
     }
     
    return(
        <div className="row">
            <div className="col p-2">
                <select className="form-select p" defaultValue="0" onChange={event => setMode(event.target.value)}>
                  <option disabled value="">Select Mode</option>
                  <option value="easyMode">Easy</option>
                  <option value="normalMode">Normal</option>
                  <option value="hardMode">Hard</option>
                </select>
                <button type="button" className="btn btn-primary" onClick={getGameSettings}>START</button>
            </div>
        </div>
              
    )
}

export default GameMode;