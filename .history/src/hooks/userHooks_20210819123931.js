import { useState } from "react";

export const useSquaresNumber = (squaresNumber) =>{
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
        
      return className;
}