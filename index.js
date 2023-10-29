function isPalindrome(word) {
  // Write your algorithm here
  myString = word.split("").reverse().join("");
  return myString === word ? true : false
  /*let myString = ""
//   for (let i = word.length-1; i >= 0; i--) {
//   myString += word[i];*/
}

/* 
  Add your pseudocode here
 1.save word to a variable called myString 
 1.split the word into letters
 2.reverse the letters
 3.join the letters of the word
*/

/*
  Add written explanation of your solution here
  1.return ture if word reads the same forward & backword
  2.return false otherwise
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("dad"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("walk"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
