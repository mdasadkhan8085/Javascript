let myArray = [
    "Zero", "One", "Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"
];

console.log(typeof myArray);

//For Length
console.log(myArray.length)

// For Convert Array Into String
myArray.push("Eleven")
console.log(myArray.toString())

// For Convert Array Into String
myArray.pop()


console.log(myArray.toString())

//Slicing
console.log(myArray.slice(0,5));

//Concat array
let oneArray = [1,2,3,4,5,6];
console.log(oneArray.at(2));
let twoArray = [7,8,9];
let threeArray = [10];
let fullArray = oneArray.concat(twoArray,threeArray);
console.log(fullArray)

//Marging the array
let arr = [['1', '2'], ['3', '4', '5',['6'], '7']];
console.log(arr.flat(Infinity));

//Unshift meaning add new items at first position
let newArray = [5,6,7,8,9];
newArray.slice(2);
console.log(newArray);
console.log(newArray);
newArray.unshift(12);
//shift remove first item from the Array
newArray.shift();
console.log(newArray);

//Join anything between the value
myArray.join("|");
console.log(myArray.join("|"));

//Only show an particular Range
let newArray2 = ["Apple", "Banana", "Kiwi", "Mango"];
let showArray=newArray2.copyWithin(0,2);
console.log(showArray);

