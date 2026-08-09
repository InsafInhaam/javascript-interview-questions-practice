// Reverse a string without using built-in methods.
function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

const originalString = "hello";
console.log(reverseString(originalString));

// Check if a string is a palindrome.
function isPalidrome(str) {
  function reverseString(s) {
    let reversed = "";

    for (let i = s.length - 1; i >= 0; i--) {
      reversed += s[i];
    }

    return reversed;
  }

  const cleanedStr = str.toLowerCase();
  return cleanedStr === reverseString(cleanedStr);
}

console.log(isPalidrome("level"));
console.log(isPalidrome("hello"));
console.log(isPalidrome("madam"));

// Count the occurrences of each character in a string.
function countCharacterOccurences(str) {
  const counts = {};

  for (let char of str) {
    if (counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }
  return counts;
}

const inputString = "google";
const characterCounts = countCharacterOccurences(inputString);
console.log(characterCounts);

// Find the longest word in a string.
function findLongestWord(sentence) {
  // split the sentence using space as delimeter
  const words = sentence.split(" ");

  // track longest word
  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

const sentence = "Find the longest word in this string";
console.log(findLongestWord(sentence));

// Remove duplicates from an array.
