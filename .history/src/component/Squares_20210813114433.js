import React from "react";

// eslint-disable-next-line 
export default () => {
    console.log(document.querySelector('#board'))
    return (
        <div className="row">
            <div className="col">
              <div className="containerSquares" id="board">

              </div>
            </div>
          </div>
    )
}