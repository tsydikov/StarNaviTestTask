import React from "react";

const GameMode = ({ getGameSettings,onChange }) => {
    console.log(gameMode)
    return(
        <div className="row">
              <div className="col p-2">
                <select className="form-select p" defaultValue="0" onChange={event => onChange(event.target.value)}>
                  <option value="">Select Mode</option>
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