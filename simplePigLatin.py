"""
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
"""

import re
def pig_it(text):
    
    #your code here
    def piggy_word(word):
        if word.isalpha():
            return word[1:]+word[0]+'ay'
        else:
            return word
    result = ''
    
    for match in re.finditer(r'(\w+)|(\W+)', text):
        result += piggy_word(match.group(0))

    return result
