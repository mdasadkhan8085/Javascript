let myText = "Hello how are you asad";

let myArray = [];
let tempVar = "";

for (var myValue of myArray) {
  if (myValue != " ") {
    tempVar = myValue;
  }else{
    myArray.push(tempVar);
    tempVar = "";
  }
}

console.log(myArray);
