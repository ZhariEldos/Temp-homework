let firstVar = 10
const secondVar = 10
console.log(firstVar)
console.log(secondVar)
firstVar = 11
// secondVar = 11 <- Константу нельзя редактировать
console.log(firstVar)
console.log(secondVar)
var thirdVar = 10 /* <-- Считается усторевшим т.к. работает везде и является что-то 
 вроде глобальной переменной */
let numberVar = 1
let stringVar = 'Hello world!'
let booleanVar = true
let nullVar = null
let undefinedVar = undefined
let NaNVar = NaN
console.log(typeof(numberVar), typeof(stringVar), typeof(booleanVar), typeof(nullVar), typeof(undefinedVar), typeof(NaNVar))
let numberToString = String(153)
let stringToNumber = Number(40322)
console.log(numberToString)
console.log(stringToNumber)
let stringToNumber1 = Number(undefined)
let stringToNumber2 = Number(null)
console.log(stringToNumber1) /* undefined не определённый тип, поэтому при попытки его приобразовать 
число заместо значение отправляется NaN */
console.log(stringToNumber2) // null преобразуется в 0. Это сделано скорее всего потому, null - это пустой объект
let number = 100
number = number.toString()
console.log(number)
console.log(typeof(number))
let namevar = prompt("What's your name?")
let age = prompt("How old are you")
alert("Your name is " + namevar + ' and your age is ' + age)