let myText = "Hello how are you asad Hello";

let myArray = [];
let duplicateArray = [];
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

for(let eachCompare of myArray){
    if(eachCompare){
        duplicateArray.push(eachCompare)
    }
}

console.log(myArray);
console.log(myArray.length);
