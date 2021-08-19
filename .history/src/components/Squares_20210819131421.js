import React from "react";
import '../App.css'

const Squares = (props) => {
  let className=''
    switch (props.squaresNumber) {
          case 5:
            className='square5';
          break;
          case 10:
            className='square10';
          break;
          case 15:
            className='square15';
          break;
          default: className='';
        }

    return(
        <div className="row">
            <div className="col">
              <div className="containerSquares" >
                {props.squares.map((square) => <div 
                  key={square.id} 
                  id={square.id} 
                  className={className} 
                  onMouseOver={props.hoverOnSquare} 
                />)}
              </div>
            </div>
        </div>         
    )
}

export default Squares;