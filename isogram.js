/*DESCRIPTION:
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/
function isIsogram(str){
    console.log(str)
    let arr = str.toLowerCase().split('').sort()
    let isogram
    if(str ==="") return true
    str.match(/[\d+_-]/g) ? false : (isogram = arr.filter((item, index) =>arr.indexOf(item) !== index).length)
    return isogram === 0 ? true : false
  
  }

console.log(isIsogram("Dermatoglyphics"))
