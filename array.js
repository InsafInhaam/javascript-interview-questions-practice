// 📚 Master Arrays & Single Linked Lists

const fruits = ["apple", "banana", "cherry"];

// Accesssing elements
console.log(fruits[0]); // apple
console.log(fruits[0]); // apple

// update elements
fruits[2] = "blueberry";
console.log(fruits);

// Find the number of elements
console.log(fruits.length) 

//## Dynamic Arrays in JS
// Javascript arrays are dynamic, meaning they can grow or shrink in size as needed
fruits.push("orange");
console.log(fruits);

fruits.push("strawberry");
console.log(fruits);

// Removing Elements
fruits.pop(); // Removes the elements, from the end
console.log(fruits);

fruits.shift();
console.log(fruits); // Removes the elements, from the start

// Common Algorithms
//  Traversing
for (let i =0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Inserting
// to ad an items at specific position
fruits.splice(2, 0, "kiwi");
console.log(fruits);

// Deleting
// to delete an item at specific position
fruits.splice(1, 1);
console.log(fruits);
