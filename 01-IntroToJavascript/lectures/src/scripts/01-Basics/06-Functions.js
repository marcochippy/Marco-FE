// You can work here or download the template!
// 1.
function greet() {
  console.log("Hello, World!");
}

greet();

// 2.
function square(number) {
  let squareValue = number * number;
  return squareValue;
}

let squareValue = square(5);
console.log(squareValue);

// 3. my way
const dayArray = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];
function getDayName(i) {
  console.log(`Number ${i} is day ${dayArray[i]}`);
}
getDayName(3);
// 3.
function getDay(i) {
  switch (i) {
    case 0:
      console.log("monday");
      break;
    case 1:
      console.log("tuesday");
      break;
    case 2:
      console.log("wednesday");
      break;
    case 3:
      console.log("thursday");
      break;
    case 4:
      console.log("friday");
      break;
    case 5:
      console.log("saturday");
      break;
    case 6:
      console.log("sunday");
      break;
    default:
      console.log("no");
  }
}
getDay(3);
