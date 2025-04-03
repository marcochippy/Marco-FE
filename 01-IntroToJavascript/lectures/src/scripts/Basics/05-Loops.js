// You can work here or download the template!
// Array of animals in the zoo
const animals = ["lion", "tiger", "bear", "giraffe", "zebra", "monkey"];

// 1.
let totalAnimals = 0;

for (let i = 0; i < animals.length; i++) {
  totalAnimals++;
}

console.log(`The total amount of Animals is ${totalAnimals}`);

// 2. ChatGPT Help
let i = 0;
let longNames = 0;

while (i < animals.length) {
  if (animals[i].length >= 5) {
    longNames++;
  }
  i++;
}
console.log(`${longNames} animals have 5 or more letters.`);

// 3.
// let animalsCheck = [];
// index = 0;
// do {
//   animalsCheck = split(animals[index]);
// } while (condition);

const animalArray = animals.split(" ");
console.log(animalsCheck);
