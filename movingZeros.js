/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
    const noZeros = []
    const zeros = []
    arr.forEach(elem => {
      if(elem === 0){
        zeros.push(elem)
      }else{
        noZeros.push(elem)
      }
    })
    return noZeros.concat(zeros)
  }

  moveZeros([1,2,0,1,0,1,0,3,0,1])

  //Expected: [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
