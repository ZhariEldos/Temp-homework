let a = parseInt(prompt("Write a number:"))
if (a > 10) {
    console.log("Number greater than 10")
} else {
    console.log("Number less or equal than 10")
}

let confirmToDelete = confirm("Delete this file?")
if (confirmToDelete) {
    console.log("file has been deleted")
} else {
    console.log("procces declined")
}
let age = parseInt(prompt("How old are you?"))
if (age < 18) {
    console.log("You are minor")
} else if (age < 30) {
    console.log("You are young adult")
} else {
    console.log("you are adult")
}

a = parseInt(prompt("Write a number:"))
let isItOddOrEven = ((a % 2) == 0) ? "It's even" : "It's odd"
console.log(isItOddOrEven)

let firstNumber = parseInt(prompt("Write first number:"))
let secondNumber = parseInt(prompt("Write second number:"))
if (firstNumber == secondNumber) {
    console.log("first number equal second")
} else if (firstNumber < secondNumber) {
    console.log("second number greater than first")
} else if (firstNumber > secondNumber) {
    console.log("first number greater than second")
}
console.log(firstNumber)
console.log(secondNumber)

let season = parseInt(prompt("Write a number of season:"))
switch(season) {
    case 11:
    case 12:
    case 1:
        console.log("Winter")
        break
    case 2:
    case 3:
    case 4:
        console.log("Spring")
        break
    case 5:
    case 6:
    case 7:
        console.log("Summer")
        break
    case 8:
    case 9:
    case 10:
        console.log("Fall")
        break
}