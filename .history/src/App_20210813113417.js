import React from 'react'
import './App.css'
import GameMode from './component/GameMode';


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
          <GameMode />
          <div className="row">
            <div className="col">
              <div className="containerSquares" id="board">

              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
