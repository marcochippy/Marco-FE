// 1. Objects literals
const book = {
  title: "The Lord of the Rings",
  author: "J. R. R. Tolkien",
  pages: 1216,
  isRead: true,
  summary() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, 
    Read: ${this.isRead ? "Yes" : "No"}.`;
  },
};

console.log(book.summary());

// 2. Destructuring
// You can work here or download the template!
// Initial array
const fruits = ["apple", "banana", "cherry", "date"];

// Initial object
const person = {
  name: "John Doe",
  age: 30,
  address: {
    city: "New York",
    zip: "10001",
  },
};
// Initial function
// function displayPerson(person) {
//   console.log(`Name: ${person.name}, Age: ${person.age}`);
// }

// Simple Array Destructuring
const [fruit1, fruit2] = fruits;
console.log(fruit1, fruit2);

// Skipping Elements in Array Destructuring
const [skipFruit1, , skipFruit3] = fruits;
console.log(skipFruit1, skipFruit3);

// Simple Object Destructuring
const {
  name,
  address: { city },
} = person;
//kinda wrong
const personName = person.name;
const personAge = person.age;
console.log(personName, personAge);

// Nested Object Destructuring
const personCity = person.address.city;
console.log(personCity);

// Destructuring in Function Parameters
function displayPerson({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
displayPerson(person);
