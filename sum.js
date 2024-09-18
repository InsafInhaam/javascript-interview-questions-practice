function sumOfNaturalNumber(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}

// console.log(sumOfNaturalNumber(5));
// console.log(sumOfNaturalNumber(10));

//  Question 2

function sumOfDigits(num) {
  let sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return sum;
}

// console.log(sumOfDigits(1287));

// question 3: count the number of digits of a number

function countDigits(num) {
  num = Math.abs(num);
  let count = 0;

  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);
  return count;
}

console.log(countDigits(121));
console.log(countDigits(-1211141233131));

var isPalindrome = function(x){
    num = 1234
};

