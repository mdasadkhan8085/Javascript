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

for (let index in myArray) {
    if (duplicateObject[myArray[index]]) {
      duplicateObject[myArray[index]] = duplicateObject[myArray[index]]+1;
    } else {
      duplicateObject[myArray[index]] = 1;
    }
  }

// for(let i =0; i < myArray.length; i++){
//     if (duplicateObject[myArray[i]]){
//         duplicateObject[myArray[i]] += 1
//     } else {
//         duplicateObject[myArray[i]] = 1
//     }
//    }

console.log(myArray);
console.log(duplicateObject);
