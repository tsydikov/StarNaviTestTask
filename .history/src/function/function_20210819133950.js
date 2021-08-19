export const createSquaresArray = (squaresNumber) =>{
    let squares = []
    for (let i = 0; i < squaresNumber; i++) {
        for (let j = 0; j < squaresNumber; j++) {
          squares.push({id:'row '+(i+1)+' col '+(j+1)})
        }
      }
    return squares;
}

export const 