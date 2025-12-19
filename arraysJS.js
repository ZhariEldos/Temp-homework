let fruits = ["apple", "banana", "orange"]
console.log(fruits)

console.log(fruits[0], fruits[2])
fruits.push("pear")
console.log(fruits)

fruits.pop()
fruits.shift()
console.log(fruits)

fruits.forEach((element) => {
    console.log(element)
})

let lengths = fruits.map(a => a.length)
console.log(lengths)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let evenNumbers = numbers.filter(num => num % 2 === 0)
console.log(evenNumbers)

console.log(numbers.reduce((acc, num) => acc + num, 0))

function numberHigherFive(element, index, array) {
    if (element > 5) {
        return element
    }
}
console.log(numbers.find(numberHigherFive))

let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr = arr1.concat(arr2)
console.log(arr)

console.log(fruits.includes("banana"))

let reverseFruits = fruits.reverse()
console.log(reverseFruits)