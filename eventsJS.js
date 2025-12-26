let jsButton = document.getElementById("jsButton")
jsButton.addEventListener('click', () => {
    console.log('Event happend by js');
});

let myDiv = document.getElementById("myDiv")
myDiv.addEventListener('click', () => {
    myDiv.style.backgroundColor = "blue"
});
myDiv.addEventListener('mouseover', () => {
   console.log("element hover")
});

let input = document.getElementById("textInput")
input.addEventListener('keydown', (event) => {
    console.log(event.target.value)
});

let myLink = document.getElementById("myLink")
myLink.addEventListener('click', (event) => {
	event.preventDefault();
    console.log("Link canceled")
});

let list = document.getElementById("list")
for (let i = 0; i < list.children.length; i++) {
    list.children[i].addEventListener('click', (event) => {
        console.log(event.target.textContent)
    });
}

let keyboardInput = document.getElementById("keyboardInput")
keyboardInput.addEventListener('keydown', (event) => {
    console.log(event.key)
});
