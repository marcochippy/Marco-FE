// 1.
// Creating an object literal
const person = {
  name: "Alice",
  age: 25,
  isStudent: true,
  // For now, it should suffice to say that the this keyword is a reference to the current object so we can reference its own properties
  sayHello() {
    return `${this.name} is ${this.age} years old.`;
  },
};

// Accessing properties
console.log(person.name); // Outputs: Alice
console.log(person.sayHello()); // Outputs: Alice is 25 years old
console.log(person["age"]); // Outputs: 25\
let key = "age";
console.log(person[key]); // Outputs: 25

// Adding new properties
person.email = "alice@example.com";
person["major"] = "Computer Science";

// Modifying properties
person.age = 26; // Alice has a birthday!

// Deleting properties
delete person.isStudent;

// Displaying the modified object
console.log(person);
/* 
 In case you haven't noticed... console is an object! that's why we can access its .log, 
 .warn, .error properties
*/

// 2.
console.info("Math");
console.log(Math.random()); // random number
console.log(Math.round(4.7)); // 5
console.log(Math.sqrt(16)); // 4
console.log(Math.pow(2, 3)); // 8

console.info("Date");
let now = new Date();
console.log(now.toDateString()); // current date
console.log(now.getFullYear()); // returns the year
console.log(Date.now()); // milliseconds since Jan 1, 1970

console.info("Arrays");
let fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Date"); // adds Date to the end
console.log(fruits); // Apple, Banana, Cherry, Date
let first = fruits.shift(); // removes Apple from the front
console.log(first); // Apple
console.log(fruits); // Banana, Cherry, Date

// 3.
// Array Destructuring
const array = [1, 2, 3, 4];

// Basic array destructuring
const [a, b] = array;
console.log(a); // Output: 1
console.log(b); // Output: 2

// Skipping elements
// const [first, , third] = array;
console.log(first); // Output: 1
console.log(third); // Output: 3

// Default values
const [x = 10, y = 20, z = 30] = [1];
console.log(x); // Output: 1
console.log(y); // Output: 20
console.log(z); // Output: 30

// Nested array destructuring
const nestedArray = [1, [2, 3], 4];
const [n1, [n2, n3], n4] = nestedArray;
console.log(n1); // Output: 1
console.log(n2); // Output: 2
console.log(n3); // Output: 3
console.log(n4); // Output: 4

// Object Destructuring
const person = {
  name: "Alice",
  age: 25,
  city: "New York",
  address: {
    street: "123 Main St",
    zipcode: "10001",
  },
};

// Basic object destructuring
const { name, age } = person;
console.log(name); // Output: Alice
console.log(age); // Output: 25

// Nested object destructuring
const {
  address: { street, zipcode },
} = person;
console.log(street);
console.log(zipcode);

// Be careful if a property is undefined
const { something } = person;
// This will simply yield undefined
console.log(something);
// but if we try to destructure from something...
try {
  const {
    something: { somethingElse },
  } = person;
} catch (e) {
  console.error(e);
}

// Renaming variables
const { name: fullName, age: years } = person;
console.log(fullName); // Output: Alice
console.log(years); // Output: 25

// Default values
const { name: n, country = "Unknown" } = person;

// Function parameters

// This function takes an object as a parameter. We can destructure the object directly in the parameter list!
function greet({ name, age }) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

greet(person); // Output: Hello, my name is Alice and I am 25 years old.
