let message = document.getElementById("message")
message.textContent = "Welcome to JavaScript!"

let div = document.getElementsByClassName("box")
for (let i = 0; i < div.length; i++) {
    div[i].style.backgroundColor = "red"
}

let paragraph = document.querySelector("#text")
paragraph.textContent = "hello"
let div2 = document.querySelectorAll(".box")
for (let i = 0; i < div2.length; i++) {
    div2[i].style.backgroundColor = "blue"
}
let highlight = document.querySelectorAll(".highlight")
console.log(highlight)
for (let i = 0; i < highlight.length; i++) {
    highlight[i].style.color = "red"
}