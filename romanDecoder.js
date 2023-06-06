/**
 * 
 * Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000


	doTest('XXI', 21);
		doTest('I', 1);
		doTest('IV', 4);
		doTest('MMVIII', 2008);
		doTest('MDCLXVI', 1666);
 */

function solution (roman) {
    // complete the solution by transforming the 
    // string roman numeral into an integer
  let romanLen = char_to_int(roman.charAt(0))
  var num,num2,num3
  
    if(roman.length <= 1 ){
       return num = char_to_int(roman.charAt(0))
    }else{
        for(var i =1; i < roman.length; i++){
            num2 = char_to_int(roman.charAt(i))
            num3 = char_to_int(roman.charAt(i-1))
           //M M X C I X
          
           if(num2 <= num3 ){
             console.log(num2, " <= ", num3)
             romanLen+=num2
           }else{
            console.log(romanLen," - ",num2," - ",num3)
            romanLen = romanLen - num3*2 + num2;
  
             console.log(romanLen)
           }
                    
        }
  return romanLen
    }
  }
  function char_to_int(c){
  switch (c){
  case 'I': return 1;
  case 'V': return 5;
  case 'X': return 10;
  case 'L': return 50;
  case 'C': return 100;
  case 'D': return 500;
  case 'M': return 1000;
  default: return -1;
  }
  
  }