let myWord = "Hello Mumbai";

function repeatWordFindFunction() {
    let checkWord = []
    for (let newVar of myWord) {
        if (checkWord.includes(newVar)) {
            console.log(newVar + " is repeated.") ;
        }else{
            checkWord.push(newVar);
        }
    }
}

repeatWordFindFunction();