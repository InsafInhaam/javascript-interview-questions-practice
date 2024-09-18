// Array - Decalaration

let person = {
  name: "Piyush",
  age: 25,
};

let arr = ["apple", "banana", "cherry", person];

// console.log(arr[3].name);
// console.log(arr.length);

// Array - add and remove elements

// Add end of the array
arr.push("orange");

// Remove from the end of the Array
arr.pop();
arr.pop();
// console.log(arr);

// Add to Top of the Array
arr.unshift("orange");

// Remove from the Array
arr.shift();
// console.log(arr);

// Looping an Array
for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

let i = 0;

while (i < arr.length) {
  //   console.log(arr[i]);

  i++;
}

// Inbuilt Loop Methods

const numbers = [1, 2, 3, 4, 5];

// map in javascript
numbers.map((item, index, array) => {
  return item + 5;
});

// filter in javascript
numbers.filter((item, index, array) => {
  return item > 3;
});

// reduce in javascript
const sum = numbers.reduce((prev, item) => {
  return prev + item;
}, 2);

// some in javascript
const some = numbers.some((item, index, array) => {
  return item > 3;
});

// every in javascript
const eve = numbers.every((item, index, array) => {
  return item < 10;
});

// find in javascript
const res = numbers.find((item, index, array) => {
  return item > 3;
});

// console.log(res);

// Spread and Rest Operators
const nums = [1, 2, 3];
const nums2 = [4, 5, 6, 7];

const finalNums = [...nums, ...nums2];

function sum2(...numbers) {
  return numbers;
}

// console.log(sum2(nums, nums2, 5, "hello"));

// More Array methods

// concat
nums.concat(nums2, arr);

// Slice
const newArr = arr.slice(0, 2);

// Splice


console.log(newArr);


