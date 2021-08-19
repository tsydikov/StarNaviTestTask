import React from "react";

const GameMode = ({ options, defaultValue,getGameSettings }) => {
    
    
    return(
        <div className="row">
              <div className="col p-2">
              {/* defaultValue="0" onChange={event => gameMode=event.target.value} */}
                <select className="form-select p" >
                  <option value="">{defaultValue}</option>
                  {options.map(option =>
                        <option value={options.value}>
                            {options.name}
                        </option>
                    )}
                  {/* <option value="easyMode">Easy</option>
                  <option value="normalMode">Normal</option>
                  <option value="hardMode">Hard</option> */}
                </select>
                <button type="button" className="btn btn-primary" onClick={getGameSettings}>START</button>
              </div>
            </div>
    )
}

export default GameMode;