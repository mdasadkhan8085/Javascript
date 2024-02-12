let myText = "Hello how are you asad Hello";

let myArray = [];
let duplicateObject = {};
let tempVar = "";

for (var myValue of myText) {
  if (myValue != " ") {
    tempVar = tempVar + myValue;
  } else {
    myArray.push(tempVar);
    tempVar = "";
  }
}

if (tempVar != "") {
  myArray.push(tempVar);
} else {
  tempVar = "";
}

for (let eachCompare in myArray) {
  if (eachCompare) {
    myArray[eachCompare] = eachCompare + 1
  }
}

console.log(myArray);
console.log(duplicateArray);
console.log(myArray.length);
