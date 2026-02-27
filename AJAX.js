// AJAX - Позваляет загружать страницу постепенно, не загружая всю страницу, экономит трафик
// и увеличивая скорость загрузки необходимой информации
// AJAX используется в мессенджерах, соц сетях и других сайтов
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
xhr.onload = function() {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
    }
};

const xhr1 = new XMLHttpRequest();
xhr1.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
xhr1.onload = function() {
    if (xhr1.status === 200) {
        const data = JSON.parse(xhr1.responseText);
        user(data)
        user2(data)
        user3(data)
    }
};
xhr1.send();
function user(data) {
    const userList = document.getElementById('posts');
    data.forEach(post => {
        const listItem = document.createElement('li');
        listItem.textContent = post.title;
        userList.appendChild(listItem);
    });
}
function user2(data) {
    const userList = document.getElementById('posts2');
    data.forEach(post => {
        const listItemTitle = document.createElement('li');
        const listItemBody = document.createElement('li');
        const listItemId = document.createElement('li');
        const listOfList = document.createElement('ul');
        listItemTitle.textContent = post.title;
        listOfList.appendChild(listItemTitle);
        listItemBody.textContent = post.body;
        listOfList.appendChild(listItemBody);
        listItemId.textContent = post.userId;
        listOfList.appendChild(listItemId);
        userList.appendChild(listOfList);
    });
}
const xhr2 = new XMLHttpRequest();
xhr2.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
xhr2.onload = function() {
    if (xhr2.status === 200) {
        const data = JSON.parse(xhr2.responseText);
        console.log(data);
    } else {
        console.error("Error:", xhr2.status);
    }
};
xhr2.onerror = function() {
    console.error("Error of connection");
};
xhr2.send();
function user3(data) {
    const wait = document.getElementById('wait')
    const userList = document.getElementById('posts3');
    data.forEach(post => {
        const listItem = document.createElement('li');
        listItem.textContent = post.title;
        userList.appendChild(listItem);
    });
    wait.remove()
}