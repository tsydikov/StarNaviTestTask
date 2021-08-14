import React from 'react'
import './App.css'

function App() {
  return (
    <div className="container p-5">
      <div className="row ">
        <div className="col">
          <div className="row">
            <div className="col p-2">
              <select class="form-select p" aria-label="Default select example">
                <option selected>Pick mode</option>
                <option value="1">Easy</option>
                <option value="2">Normal</option>
                <option value="3">Hard</option>
              </select>
              <button type="button" class="btn btn-primary">START</button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              square
            </div>
          </div>
        </div>
        <div className="col">
          <h1>Hover Squares</h1>
          <div class="alert alert-warning" role="alert">
            A simple warning alert—check it out!
          </div>
            <div class="alert alert-warning" role="alert">
              A simple warning alert—check it out!
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
