function greet() {
    console.log("Hello, world!")
}
greet()

function sayHello(name) {
    console.log("Hello, " + name)
}
sayHello("Eldos")
sayHello("Evan")

function sum(a, b) {
    return a + b
}
console.log(String(sum(1, 5)))

function isEven(number) {
    return (number % 2) == 0 ? true : false
}
console.log(isEven(12))
console.log(isEven(11))

function max(a, b) {
    if (a == b) {
        return "they are equal each other"
    }
    return a > b ? a : b
}
console.log(max(1, 3))
console.log(max(1, 1))
console.log(max(6, 1))

function square(a) {
    return a * a
}
console.log(String(square(124)))
function cube(a) {
    return square(a) * a
}
console.log(String(cube(124)))

const sum1 = (a, b) => a + b;
console.log(String(sum1(1, 5)))

function getFactorial(a) {
    return factorial(1, 1, a)
}
function factorial(i, b, a) {
    if (i <= a) {
        b = factorial(i+1, b * i, a)
    }
    return b
}
console.log(getFactorial(4))