import React from "react";

const GameMode = ({ onChange }) => {
    
    return(
        
                <select className="form-select p" defaultValue="0" onChange={event => onChange(event.target.value)}>
                  <option value="">Select Mode</option>
                   <option value="easyMode">Easy</option>
                  <option value="normalMode">Normal</option>
                  <option value="hardMode">Hard</option>
                </select>
                
              
    )
}

export default GameMode;