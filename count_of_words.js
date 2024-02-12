

let statementOne = "This is some paragraph";

myTempString = ""

for (let newVal of statementOne) {
    if (newVal !== " ") {
        myTempString = newVal;
    }
}