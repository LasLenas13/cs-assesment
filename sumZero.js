// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

// For example:

// addToZero([]);
// // -> False

// addToZero([1]);
// // -> False

// addToZero([1, 2, 3]);
// // -> False

// addToZero([1, 2, 3, -2]);
// // -> True

function addToZero(nums) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === 0) {
          return true;
        }
      }
    }
    return false;
  }

console.log(addToZero([]));
console.log(addToZero([1])); 
console.log(addToZero([1, 2, 3])); 
console.log(addToZero([1, 2, 3, -2])); 

  
  // Runtime: O(n^2)
//   because it is a nested loop
  