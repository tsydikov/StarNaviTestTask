export const useSquaresNumber = (squaresNumber) =>{
    switch (squaresNumber) {
        case 5:
            className='square5';
        break;
        case 10:
            className='square10';
        break;
        case 15:
            className='square15';
        break;
        default: 
        className='';
      }
      return className;
}