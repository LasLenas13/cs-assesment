// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

// For example:

// findLongestWord(["hi", "hello"]);
// // -> 5

function findLongestWord(words) {
    let longest = 0;
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longest) {
        longest = words[i].length;
      }
    }
    return longest;
  }
  
console.log(findLongestWord(["hi", "hello"]));

// Runtime: O(n)
// because it goes through the array of words once

