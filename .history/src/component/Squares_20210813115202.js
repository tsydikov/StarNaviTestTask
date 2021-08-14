import React from "react";
const square = document.createElement('div')
// eslint-disable-next-line 
export default () => {
    square.classList.add('square')
    console.log(square)
    console.log(document.getElementById('#board'))
    
    return (
        <div className="row">
            <div className="col">
              <div className="containerSquares" id="board">
                square
              </div>
            </div>
          </div>
    )
}