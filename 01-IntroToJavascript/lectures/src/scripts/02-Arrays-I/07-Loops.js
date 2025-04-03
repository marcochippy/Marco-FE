numberArray = [10, 20, 30, 40, 50];
// forEach
numberArray.forEach((number) => {
  console.log(number);
});
// for Loop
for (i = 0; i < numberArray.length; i++) {
  console.log(`for Loop ${numberArray[i]}`);
}
// for of
for (const number of numberArray) {
  console.log(number);
}
