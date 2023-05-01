/**
 * Valid Parentheses
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= length of input <= 100

All inputs will be strings, consisting only of characters ( and ).
Empty strings are considered balanced (and therefore valid), and will be tested.
For languages with mutable strings, the inputs should not be mutated.

 */
function validParentheses(parenStr) {
    // Your code here
    if(parenStr==''){
      return true
    }
    
    const replaced = parenStr.replace(/\(\)/ig,'')
    if(replaced === parenStr){
      return false
    }
    
    return validParentheses(replaced)
  }

  function validParentheses(parens) {
  
    //n es el valor inicial para contar los parentesis
    var n = 0
    //almacena el conteo
    var parenArr = []
    
    //divide el string y mapea cada parentesis
    parens.split('').map((item)=>{
      // +1 por cada (
      if (item == '(') n++;
      // -1 por cada )
      if (item == ')') n--;
      //se añade el valor de n cada vez al arreglo
      parenArr.push(n)
    })
    
    //la funcion valida si n es -1
    const checkLessNumber = (n) => n < 0;
    //si alguno de los valores del arreglo es -1 retorna false
    if(parenArr.some(checkLessNumber)) return false
    
    //regresa true si n al final es cero
    return n == 0;
    
  }