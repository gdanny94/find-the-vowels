function isVow(a){
    //layout the code chart # to vowel
    //return 
    const vowels = {
      
      97: 'a',
      101: 'e',
      105: 'i',
      111: 'o',
      117: 'u'
      
  
    }
    
    return a.map(num => vowels[num] ? vowels[num] : num)
    
    
  
  }
  
  // Explanation:
  // The function replaceVowelCodes accepts an array of numbers.
  // It creates an object vowels that maps the ASCII character codes of lowercase vowels (a, e, i, o, u) to their corresponding characters.
  // It uses the map method to iterate over each number in the array, replacing it with the corresponding vowel if the number matches a vowel's character code; otherwise, the number remains unchanged.
  // Finally, it returns the modified array.