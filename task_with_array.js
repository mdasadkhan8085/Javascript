let myAllNumbers = [100, 200, 300, 15210, 400, 500, 600, 700, 800, 900, 1000]

let highValue = 0;

for (let myVal of myAllNumbers) {
    if (highValue < myVal) {
        highValue = myVal;
    }

}
console.log(highValue);