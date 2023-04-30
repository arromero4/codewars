/**
 * Invert values
 * Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
*/

//Option 1
function invert(array) {
    var copy = array
    var newArr = []
    for(var i=0; i < copy.length; i++){
      let j = copy[i] * -1
      newArr.push(j)
    }
   return newArr
   
 }

 //Option 2
 function invert(array) {
    return array.map(item => item === 0 ? item : -item)
 }