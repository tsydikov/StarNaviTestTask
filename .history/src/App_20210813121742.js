import React from 'react'
import './App.css'
import Alert from './component/Alert';
import Squares from './component/Squares';
import GameMode from './component/GameMode';
import { render } from 'react-dom/cjs/react-dom.development';


// const board = document.querySelector('#board')

function addSquares() {
  const square = document.createElement('div')
  square.classList.add('square')
  console.log(square)
  return square
 }
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
          <Squares />
          {addSquares()}
        </div>
        <Alert />
      </div>
    </div>
  );
}

export default App;
