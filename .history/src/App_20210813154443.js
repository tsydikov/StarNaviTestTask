import React from 'react'
import './App.css'
import Alert from './component/Alert';
import Squares from './component/Squares';
import GameMode from './component/GameMode';

 
function App() {

  
  return (
    <div className="container p-3">
      <div className="row ">
        <div className="col">
          <div className="row">
              <div className="col p-2">
                <select className="form-select p" aria-label="Default select example" defaultValue="0">
                  <option value="0">Pick mode</option>
                  <option value="1">Easy</option>
                  <option value="2">Normal</option>
                  <option value="3">Hard</option>
                </select>
                
                <button type="button" className="btn btn-primary">START</button>
              </div>
            </div>
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
