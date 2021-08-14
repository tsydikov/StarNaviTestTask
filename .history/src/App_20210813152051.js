import React from 'react'
import './App.css'
import Alert from './component/Alert';
import Squares from './component/Squares';
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
  // const square = document.createElement('div')
  // square.classList.add('square')
  // console.log(square)
  
  return (
    <div className="container p-3">
      <div className="row ">
        <div className="col">
          <GameMode />
          <Squares />
          {/* {square} */}
          <div className="square"></div>
        </div>
        <Alert />
      </div>
    </div>
  );
}

export default App;
