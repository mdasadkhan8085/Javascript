let myArray = ["ABC", "DEF", "GHI", "JKL"];

delete myArray[1];

// for (let elementIndex in myArray) {
//     console.log(elementIndex);
//     console.log("Hello " + myArray[elementIndex]);
// }


for (let elementIndex of myArray) {
    console.log(elementIndex);

}