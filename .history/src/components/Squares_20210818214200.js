import React from "react";
import '../App.css'

const Squares = (props) => {
    return(
        <div className="row">
            <div className="col">
              <div className="containerSquares" >
                {props.squares.map((square) => <div 
                  key={square.id} 
                  id={square.id} 
                  className={props.className} 
                  onMouseOver={props.hoverOnSquare} 
                />)}
              </div>
            </div>
        </div>    
              
    )
}

export default Squares;