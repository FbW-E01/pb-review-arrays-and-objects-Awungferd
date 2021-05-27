// # Review - Arrays and Objects

// NOTE! Pay close attention to creating code with good and consistent code style.

// 1. Create an array that contains three strings.

let triStringArray = ["firstString", "secondString", "thirdString"];
//==========================================
// 2. Create an array that contains one string, one number and one boolean.
let stringNumBoolean = ["thisIsString", 36, true];

//==========================================
// 3. Create an array that contains three empty arrays.
let triEmptyArray = [" ", " ", " "];

//==========================================
// 4. Create an empty object.
let emptyObject = {};

//==========================================
// 5. Create an object with three properties: id, email, password.
let triPropObj = {
  id: "OB1356",
  email: "schamutawrap@wraps.gastro",
  password: "wrapGamuts70AD",
};

//==========================================
// 6. Create an array that contains three objects. All objects should have a width and a height property.
let triObjArr = [
  {
    width: 35,
    length: 65,
  },
  {
    width: 26,
    length: 82,
  },
  {
    width: 23,
    length: 45,
  },
];

//==========================================
// 7. Create an object that contains three properties: a string, an array and an object. Invent your own property names and values.
let threePropsObj = [
  "Home is home",
  ["Home away from home is equally home"],
  { citizenship: 3615 },
];

//==========================================
// 8. Print the `type` of a variable that has an array value.
console.log("This type has array value:", String(threePropsObj));


// NB THIS METHOD IS FAULTY. IT DOES NOT DO WHAT I HOPED TO ACCOMPLISH
//==========================================
// 9. Print the `type` of a variable that has an object value.
console.log("This type has object value:");

//============================
// 10. Create an array with five random values.
let randomValArr = ["Honey", "Honeysuckle", "Drones", "Workers", "Queen"];

//==========================================
// 10.1. Add one value to the end of the array.
randomValArr.push("Wasp");
console.log("push adds to the end", randomValArr);

// 10.2. Add one thing to the beginning of the array.
randomValArr.unshift("Waspy"); // Add to start
console.log("new value inserted at array initial:", randomValArr);

//==========================================
// 10.4. Print the length of the array.
console.log("array length is:", randomValArr.length);

//==========================================
// 10.5. Take out one thing from the end of the array.
console.log(
  `'${randomValArr.pop()}' has been cut from the end of the array leaving: [${randomValArr}]`
);

//==========================================
// 10.6. Take out one the 2nd thing from the array.
for (let iterator = 0; iterator < randomValArr.length; iterator++) {
  if (randomValArr[iterator] === "Honeysuckle") {
    randomValArr.splice(iterator, 1);
  }
}
console.log("'Honeysuckle' has been spliced out leaving:", randomValArr);
