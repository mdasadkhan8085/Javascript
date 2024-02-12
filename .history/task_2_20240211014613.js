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

for(let i =0; i < a.length; i++){ 
    if (counts[a[i]]){
    counts[a[i]] += 1
    } else {
    counts[a[i]] = 1
    }
   }  

console.log(myArray);
