let salary = 180000;


if(salary < 30000){
    console.log("Youre not eligible for credit card")
} else if(salary >= 30000 && salary <= 50000 ){
    console.log("Youre eligible for bronze credit card")
}else if(salary >= 60000 && salary <= 70000){
    console.log("Youre eligible for silver credit card")
}else if(salary >= 80000 && salary <= 90000){
    console.log("Youre eligible for golden credit card")
}else if(salary >= 100000){
    console.log("Youre eligible for platinum credit card")
}else{
    console.log("Something wents wrong")
}