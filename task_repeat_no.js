let myWord = "Hello World";

let myObj = {}
let duplicateCount = {}

for (let eachChar of myWord) {
    if (myObj[eachChar]) {
        if(duplicateCount[myObj[eachChar]]){
        duplicateCount[myObj[eachChar]] = duplicateCount[myObj[eachChar]] + 1
        }else{
            duplicateCount[myObj[eachChar]] =  2
        }
    } else {
        myObj[eachChar] = eachChar;
    }
}
console.log(duplicateCount)