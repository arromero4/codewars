/**
 * There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
 */
function findUniq(arr) {
    let unique = arr.filter((item, index) =>(arr.indexOf(item) !== index))
  //arr.indexOf(item),item,index
  //  0                 3    0 => false
  //  1                 10   1 => false
  //  0                 3    2 => true
  //  0                 3    3 => true
  //  0                 3    4 => true
     console.log(unique) //[3,3,3]      
    return arr.filter((item)=> item !== unique[0])[0]
    //  3  3 => false
    //  10 3 => true
    //  3  3 => false
    //  3  3 => false
    //  3  3 => false
  }

  findUniq([ 1, 0, 0 ])
  findUniq([ 0, 1, 0 ])
  findUniq([ 0, 0, 1 ])
  findUniq([ 1, 1, 1, 2, 1, 1 ])