import React from "react";

const GameMode = ({gameMode, getGameSettings}) => {
    const [gameMode, setMode] = useState('0')
    
    return(
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
    )
}

export default GameMode;