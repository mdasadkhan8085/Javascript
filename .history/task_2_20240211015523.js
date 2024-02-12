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

for (let valCount in myArray) {
    if (duplicateObject[myArray[valCount]]) {
      duplicateObject[myArray[valCount]] = duplicateObject[myArray[valCount]]+1;
    } else {
      duplicateObject[myArray[valCount]] = 1;
    }
  }


  (duplicateObject >= 2) ?console.log(duplicateObject) :
console.log(myArray);
console.log(duplicateObject);
