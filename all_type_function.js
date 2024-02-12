//Simple Function
function add1(){
    console.log(10+20);
}

//Function with parameter
function add2(a,b,c){
    console.log(a + b + c);
}

//Function with Parameter with retur value
function add3(x , y) {
    return x+y;
}

//Function with return value and with default value
function add4(x = 8, y = 42) {
    return x+y;
}

//All Type Function Call
add1();
add2(5,6,7);
let myFuncVal1 = add3(9,8);
let myFuncVal2 = add4(10);
console.log(myFuncVal1);
console.log(myFuncVal2);