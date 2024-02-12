let myName = "Hello";

let eachCharArray = [];

for (let i of myName) {
    if (eachCharArray.includes(i)) {
        console.log("The character " + i + " is duplicate");
    } else {
        eachCharArray.push(i)
    }
}