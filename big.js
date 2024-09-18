// Big O Notation - Data Structures and Algorithms

// const funnyNumber = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     if (i === 3) return array[i];
//   }
// };

// const funnyNumber = (array) => {
//     return array[3];
// }

// const nums = [420, 96, 12, 69, 77];

// console.time("funnyNumber")
// console.log(funnyNumber(nums));
// console.timeEnd("funnyNumber");

function someOperations(n) {
  return (n * (n + 5)) / 2;
}

console.log(someOperations(1000));

function GoingUpDown(n) {
  console.log("Going forward!");
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the End, Going back");
  for (var j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("At the start!");
}


console.log(GoingUpDown(3));

