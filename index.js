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

/**
        Given an array of integers nums, return the largest element in the array.

        Example 1:
        Input: nums = [1, 2, 3, 4, 5]
        Output: 5

        Example 2:
        Input: nums = [10, 9, 8, 7, 6]
        Output: 10
    **/

function FindMaxNum(num) {
  var sum = Math.max(...num);

  console.log(sum);
}

// FindMaxNum([1, 2, 3, 4, 5]);
// FindMaxNum([10, 9, 8, 7, 6]);

/**
        Given two strings s1 and s2, return true if s1 contains s2, and false otherwise.

        Example 1:
        Input: s1 = "hello", s2 = "ell"
        Output: true

        Example 2:
        Input: s1 = "world", s2 = "orl"
        Output: true

        Example 3:
        Input: s1 = "javascript", s2 = "java"
        Output: true

        Example 4:
        Input: s1 = "coding", s2 = "fun"
        Output: false
    **/

function MatchCon(s1, s2) {
  //   s1Split = s1.split("");
  //   s2Split = s2.split("");

  //   // console.log(s1Split, s2Split);

  //   for (let i = 0; i < s1Split.length; i++) {
  //     for (let a = 0; a < s2Split.length; a++) {
  //       if (s1Split[i] == s2Split[a]) {
  //         return true;
  //       }
  //     }
  //   }

  if (s1.includes(s2)) {
    return true;
  } else {
    return false;
  }
}

// console.log(MatchCon("hello", "ell"));
// console.log(MatchCon("coding", "fun"));
// console.log(MatchCon("javascript", "java"));
// console.log(MatchCon("world", "orl"));

/**
        Given a temperature in Celsius, return the temperature in Fahrenheit.

        Example 1:
        Input: celsius = 0
        Output: 32

        Example 2:
        Input: celsius = 100
        Output: 212
    **/

function Celsius(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;

  console.log(fahrenheit);
}

// Celsius(0);
// Celsius(100);

/**
        Given an integer n, return "even" if n is even, and "odd" if n is odd.

        Example 1:
        Input: n = 4
        Output: "even"

        Example 2:
        Input: n = 7
        Output: "odd"
**/

function OddOrEven(num) {
  if (num % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

// OddOrEven(4);
// OddOrEven(7);

/**
        Given a string s, return the length of the string.

        Example 1:
        Input: s = "hello"
        Output: 5

        Example 2:
        Input: s = "world"
        Output: 5
    **/

function strLength(str) {
  console.log(str.length);
}

// strLength("hello");
// strLength("world");

/**
        Given an array of integers nums, return true if the array is sorted in ascending order, and false otherwise.

        Example 1:
        Input: nums = [1, 2, 3, 4, 5]
        Output: true

        Example 2:
        Input: nums = [5, 4, 3, 2, 1]
        Output: false
**/

function Asc(num) {
  let sort_num = [...num].sort();

  //   console.log(num);
  //   console.log(sort_num);

  for (let i = 0; i < num.length; i++) {
    if (num[i] != sort_num[i]) {
      return false;
    } else {
      return true;
    }
  }
}

// console.log(Asc([1, 2, 3, 4, 5]));
// console.log(Asc([5, 4, 3, 2, 1]));

/**
        Given an array of integers nums, return the second largest element in the array.

        Example 1:
        Input: nums = [1, 2, 3, 4, 5]
        Output: 4

        Example 2:
        Input: nums = [10, 9, 8, 7, 6]
        Output: 9
    **/

function SecondLarge(nums) {
  // let a = [...nums].sort();

  // var newArray = new Float64Array(nums);

  // newArray = newArray.sort();

  nums = nums.sort((a, b) => a - b);

  let b = nums.length;

  // let first_largest = nums[0];
  // let second_largest = nums[0];

  // for (let i = 0; i < nums.length; i++) {
  //   if (first_largest < nums[i]) {
  //     second_largest = first_largest;
  //     first_largest = nums[i];
  //   } else if (second_largest < nums[i]) {
  //     second_largest = nums[i];
  //   }
  // }

  // for (let i = 0; i < nums.length; i++) {}

  console.log(nums[b - 2]);
  // console.log(b);
  // console.log(second_largest);
}

SecondLarge([1, 2, 3, 4, 5]);
SecondLarge([10, 9, 8, 7, 6]);

/**
        Given an array of integers nums and an integer target, return the index of target in nums. If target is not present, return -1.

        Example 1:
        Input: nums = [1, 2, 3, 4, 5], target = 3
        Output: 2

        Example 2:
        Input: nums = [10, 9, 8, 7, 6], target = 5
        Output: -1
    **/

function FindTarget(nums, target) {
  var a = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      a = i;
    }
    console.log(a);
  }
}

FindTarget([1, 2, 3, 4, 5], 3);

