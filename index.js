/**
       Given a string s, return the string reversed.

       Example 1:
       Input: s = "hello"
       Output: "olleh"

       Example 2:
       Input: s = "world"
       Output: "dlrow"
   **/

function reverseString(s) {
  var reverse = s.split("").reverse().join("");

  console.log(reverse);
}

// reverseString('hello');
// reverseString('world');

/**
       Given a string s, return true if it is a palindrome, and false otherwise.

       Example 1:
       Input: s = "racecar"
       Output: true

       Example 2:
       Input: s = "hello"
       Output: false
   **/

function isPalindrome(s) {
  var splitVal = s.toString();

  var reversed = splitVal.split("").reverse().join("");

  return splitVal === reversed;
}

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello"));

/**
       Given an array of integers nums, return the sum of all the elements.

       Example 1:
       Input: nums = [1, 2, 3, 4]
       Output: 10

       Example 2:
       Input: nums = [5, 5, 5, 5]
       Output: 20
   **/

function findSum(nums) {
  var sum = 0;

  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  console.log(sum);
}

// findSum([1, 2, 3, 4]);
// findSum([5, 5, 5, 5]);

/**
       Given an array of integers nums, return the maximum value in the array.

       Example 1:
       Input: nums = [1, 2, 3, 4]
       Output: 4

       Example 2:
       Input: nums = [10, 5, 8, 20]
       Output: 20
   **/

function findMax(num) {
  var maxVal = Math.max(...num);

  console.log(maxVal);
}

// findMax([1, 2, 3, 4]);

/**
    Given a string s, return the number of vowels in the string.

    Example 1:
    Input: s = "hello"
    Output: 2

    Example 2:
    Input: s = "javascript"
    Output: 3
**/

// vowels = ["a", "e", "i", "o", "u"];

function findVowels(something) {
  vowels = ["a", "e", "i", "o", "u"];

  var arr = [];

  for (i = 0; i < something.length; i++) {
    for (a = 0; a < vowels.length; a++) {
      if (something[i] == vowels[a]) {
        arr.push(something[i]);
      }
    }
  }

  //   for (i = 0; i < something.length; i++) {
  //     if (
  //         something[i] == vowels[0] ||
  //         something[i] == vowels[1] ||
  //         something[i] == vowels[2] ||
  //         something[i] == vowels[3] ||
  //         something[i] == vowels[4]
  //     ) {
  //       arr.push(something[i]);
  //     }
  //   }

  console.log(arr.length);
}

// findVowels("hello");
// findVowels("javascript");

/**
    Given an integer n, return the factorial of n.

    Example 1:
    Input: n = 5
    Output: 120

    Example 2:
    Input: n = 3
    Output: 6
**/

function Factorial(num) {
  var sum = 1;

  if (num === 0) {
    console.log("cannot be zero");
  } else if (num < 0) {
    console.log("cannot be negative");
  } else {
    for (i = 1; i < num; i++) {
      sum = sum * i;
    }

    console.log(sum);
  }
}

// Factorial(5);
// Factorial(3);

/**
    Given an integer n, return true if n is a prime number, and false otherwise.

    Example 1:
    Input: n = 7
    Output: true

    Example 2:
    Input: n = 4
    Output: false
**/

function PrimeNumber(num) {
  let isPrime = true;

  if (num === 1) {
    return "1 can be prime or not";
  } else if (num > 1) {
    // if (num % 2 == 0) {
    //   isPrime = false;
    // } else {
    //   isPrime = true;
    // }

    for (let i = 2; i < num; i++) {
      if (num % 2 == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      return `${num} is a prime number`;
    } else {
      return `${num} is a not prime number`;
    }
  }
}

// console.log(PrimeNumber(7));
// console.log(PrimeNumber(4));
// console.log(PrimeNumber(1));
// console.log(PrimeNumber(2));
// console.log(PrimeNumber(3));

/**
    Given an array of integers nums, return the minimum value in the array.

    Example 1:
    Input: nums = [1, 2, 3, 4]
    Output: 1

    Example 2:
    Input: nums = [10, 5, 8, 20]
    Output: 5
**/

function FindMin(num) {
  return (val = Math.min(...num));
}

// console.log(FindMin([1, 2, 3, 4]));
// console.log(FindMin([10, 5, 8, 20]));

/**
       Given two integers base and exponent, return base raised to the power of exponent.

       Example 1:
       Input: base = 2, exponent = 3
       Output: 8

       Example 2:
       Input: base = 5, exponent = 2
       Output: 25
   **/

function PowerCom(base, exponent) {
  let sum = 1;

  for (let i = 0; i < exponent; i++) {
    sum = sum * base;
  }

  console.log(sum);
}

// PowerCom(2, 3);
// PowerCom(5, 2);

/**
        Given an integer n, return the sum of its digits.

        Example 1:
        Input: n = 123
        Output: 6

        Example 2:
        Input: n = 456
        Output: 15
    **/

function findSumDigit(num) {
  let sum = 0;

  splitNum = num.toString().split("");

  for (let i = 0; i < splitNum.length; i++) {
    sum += parseInt(splitNum[i]);
  }

  console.log(sum);
}

// findSumDigit(123);
// findSumDigit(456);
