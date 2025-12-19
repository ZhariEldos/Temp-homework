let person = {
    name: "Eldos",
    age: 16,
    city: "Astana",
    greet() {
        console.log("Hello, my name is ", this.name, " and I'm ", String(this.age))
    }
};
console.log(person)

console.log(person.name)
console.log(person.age)
person.city = "Almaty"
console.log(person.city)

person.greet()

let obj1 = {a: 10, b: 20}
let obj2 = {a: 10, b: 20}
console.log(obj1 == obj2)
console.log(obj1 === obj2)
/* Т.к. это два разных объекта с одинаковыми значениями, то что при obj1 == obj2, 
что при obj1 === obj2, ответ будет одинаковый: false */

let book = {
    title: "Games of Strategy: Game Theory",
    author: "Avinash Kamalakar Dixit",
    details: {
        year: 1999,
        pages: 688
    }
}
let bookCopy = Object.assign({}, book)
bookCopy.details.year = 2000
console.log(book)
console.log(bookCopy)
/* Копия лишь ссылается на объект, потому и при попытке изменить копию
мы изменяем только оригинал, а копия лишь повторяет свойства объект */

let calculator = {
    a: 10,
    b: 5,
    sum() {
        return this.a + this.b
    },
    multiply() {
        return this.a * this.b
    }
}
console.log(calculator.sum())
console.log(calculator.multiply())

const car = {
    brand: "Toyota",
    model: "AE86"
}
console.log(car)
car.brand = "Test"
console.log(car)
/* Это возможно, т.к. константой является сам объект, а не его свойства. А это значит
что свойства объекта можно спокойно менять */