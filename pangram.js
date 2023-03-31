// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

// For example:

// isPangram("The quick brown fox jumps over the lazy dog!");
// // -> True

// isPangram("I like cats, but not mice");
// // -> False

function isPangram(sentence) {
    sentence = sentence.toLowerCase();
    for (let char of "abcdefghijklmnopqrstuvwxyz") {
      if (!sentence.includes(char)) {
        return false;
      }
    }
    return true;
  }
  
console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));

// Runtime: O(n)
// because it goes through each letter of the alphabet once

