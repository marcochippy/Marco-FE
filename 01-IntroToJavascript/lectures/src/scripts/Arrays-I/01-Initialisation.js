// 1.
myArray = [42, "Hello, world!", true, 3.14, "JavaScript"];

// 2.
console.log(myArray);

// 3.
for (i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// 4.
newValue = "Changed value";
myArray.splice(1, 1, newValue);
console.log(myArray);
