// You can work here or download the template!
// Array 1: Use splice() method
const array1 = [10, 20, 30, 40, 50];
// Modify array1 in place by removing and adding elements, then print the result

// Array 2: Use toSpliced() method
const array2 = ["x", "y", "z"];
// Create a modified copy of array2 and print both arrays

// 1.
array1.splice(2, 1, 35, 36);
console.log(array1);

// 2.
newArray = array2.toSpliced(1, 1, "b", "c");
console.log(array2);
console.log(newArray);
