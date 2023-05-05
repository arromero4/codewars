/**
 * Detect Pangram
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 */
function isPangram(string){
    //var alfabet = 'abcdefghijklmnopqrstuvwxyz'
    var newArr = []
    string.toLowerCase().split('').map(letra => {
      if(!letra.match(/[^a-zA-Z]/g)){
        newArr.push(letra)
      }
    })
    const mySet1 = new Set(newArr)
    const finalStr = [...mySet1]
    return finalStr.length == 26
    }

function isPangram(string){
    const str = string.toLowerCase().replace(/[^a-zA-Z]/gi,'')
    const set = [...new Set(str)]
    return set.length == 26
    }