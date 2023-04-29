/**
 * Convert string to camel case
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"


 */

function toCamelCase(str){
    let newStr = str.split('').map((elem)=> elem.replace(/[\W+_]/," ")).join('')
    return str.charAt(0).toLowerCase() ? 
                newStr.split(' ')[0] + newStr.split(' ').map(capitalize).slice(1).join(''): 
                newStr.split(' ').map(capitalize).join('')
    }
    
    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }