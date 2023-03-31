// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

// For example:

// hasUniqueChars("Monday");
// // -> True

// hasUniqueChars("Moonday");
// // -> False

function hasUniqueChars(word) {
    const seen = {};
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (seen[char]) {
        return false;
      }
      seen[char] = true;
    }
    return true;
  }
  
  console.log(hasUniqueChars("Monday"))
  console.log(hasUniqueChars("Moonday"))

    // Runtime: O(n)
    // because it's linear, looping over the word once