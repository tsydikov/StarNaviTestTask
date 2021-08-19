import React from "react";

const StartGameButton = ({ getGameSettings }) => {
    
    
    return(
       
       <button type="button" className="btn btn-primary" onClick={getGameSettings}>START</button>
              
    )
}

export default StartGameButton;