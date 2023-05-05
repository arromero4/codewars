"""
 * Detect Pangram
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
"""
def is_pangram(s):
    #alfabeto = set('abcdefghijklmnopqrstuvwxyz')
    alfabet = set()
    for caracter in s.lower():
        if caracter.isalpha():
            alfabet.add(caracter)
    print(len(alfabet))
    return len(alfabet) == 26

import string
def is_pangram(s):
    alfabet = 'abcdefghijklmnopqrstuvwxyz'
    s = s.lower()
    
    for letter in alfabet:
        if letter not in s:
            return False
    return True


def is_pangram(s):
    #alfabeto = set('abcdefghijklmnopqrstuvwxyz')
    alfabet = set()
    #lista_car = []
    
    for caracter in s:
        if caracter.isalpha():
        #if caracter.isdigit() or not caracter.isalnum():
            alfabet.add(caracter.lower())
        #else:
             #lista_car.append(caracter)
    print(alfabet)

    return len(alfabet) == 26
    