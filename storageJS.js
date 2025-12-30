localStorage.setItem("greeting", "hello world!")
console.log(localStorage.getItem("greeting"))

localStorage.removeItem("greeting")
console.log(localStorage.getItem("greeting"))

let user = {
    name: "Eldos",
    age: 17,
    id: 10
}

localStorage.setItem("user", JSON.stringify(user))
console.log(JSON.parse(localStorage.getItem("user")))

user["country"] = "Kazakhstan"
localStorage.setItem("user", JSON.stringify(user))
console.log(JSON.parse(localStorage.getItem("user")))

if (localStorage.getItem("user") != null) {
    console.log(JSON.parse(localStorage.getItem("user")))
} else {
    localStorage.setItem("user", JSON.stringify(user))
}

localStorage.clear()
console.log(localStorage.getItem("greeting"))

let tasks = [
    {title: "get up", completed: true},
    {title: "eat breakfast", completed: true},
    {title: "walk outside", completed: false},
]
localStorage.setItem("tasks", JSON.stringify(tasks))
console.log(JSON.parse(localStorage.getItem("tasks")))

tasks = JSON.parse(localStorage.getItem("tasks"))
tasks[2].completed = true
localStorage.setItem("tasks", JSON.stringify(tasks))
console.log(JSON.parse(localStorage.getItem("tasks")))