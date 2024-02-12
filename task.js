let myWord = "Hello"
let newObj = {}



for (let i of myWord) {
    if (newObj[i]) {
        console.log("The " + i + " is duplicate")
    }
    else {
        newObj[i] = i;
    }
}