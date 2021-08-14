import React from 'react'
import './App.css'

// const board = document.querySelector('#board')

function App() {
//   for (let i = 0; i < 5; i++) {
//     // for (let j = 0; j < 5; j++) {
//       const square = document.createElement('div')
//       square.classList.add('square')
//       board.append(square)
//     // }
// }
console.log(document.querySelector('#board'))
  return (
    <div className="container p-3">
      <div className="row ">
        <div className="col">
          <div className="row">
            <div className="col p-2">
              <select className="form-select p" aria-label="Default select example">
                <option value="0" selected>Pick mode</option>
                <option value="1">Easy</option>
                <option value="2">Normal</option>
                <option value="3">Hard</option>
              </select>
              <button type="button" className="btn btn-primary">START</button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="containerSquares" id="board">

              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <h1>Hover Squares</h1>
          <div className="alert alert-warning" role="alert">
            A simple warning alert—check it out!
          </div>
            <div className="alert alert-warning" role="alert">
              A simple warning alert—check it out!
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
