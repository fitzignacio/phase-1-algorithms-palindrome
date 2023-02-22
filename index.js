function isPalindrome(word) {
  // Remove any non-letter characters from the string
  word = word.toLowerCase().replace(/[^a-z]/g, '');
  
  // Create a reversed version of the string
  var reversedStr = word.split('').reverse().join('');
  
  // Check if the reversed string matches the original string
  if (word === reversedStr) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
