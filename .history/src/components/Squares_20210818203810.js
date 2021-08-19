import React,{useState} from "react";
import '../App.css'

const Squares = (squaresNumber, squares, {hoverOnSquare}) => {
    
    const [className,setClassName] = useState('')

    switch (squaresNumber) {
        case 5:
          setClassName('square5');
        break;
        case 10:
          setClassName('square10');
        break;
        case 15:
          setClassName('square15');
        break;
        default: setClassName('');
      }
          for (let i = 0; i < squaresNumber; i++) {
            for (let j = 0; j < squaresNumber; j++) {
            squares.push({id:'row '+(i+1)+' col '+(j+1)})
          }
        }


    return(
        <div className="row">
            <div className="col">
              <div className="containerSquares" >
                {squares.map((square) => <div 
                  key={square.id} 
                  id={square.id} 
                  className={className} 
                  onMouseOver={hoverOnSquare} 
                />)}
              </div>
            </div>
        </div>    
              
    )
}

export default Squares;