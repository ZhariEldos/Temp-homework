fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json())
.then(data => console.log(data.title, data.body))
.catch(error => console.error("error:", error))

const data = {
    title: "Новый пост",
    body: "Содержимое поста",
    userId: 1
}
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log(data.title, data.body))

fetch('https://jsonplaceholder.typicode.com/nonexistent')
.then(response => {
    if(!response.ok) {
        throw new Error(responce.status)
    }
    return response
})
.then(response => response.json())
.then(data => console.log(data.title, data.body))
.catch(error => console.error("error:", error))

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
})
.then(() => console.log('User deleted'))
.catch(error => console.error('error:', error));

const data1 = {
    title: "Новый пост",
    body: "Содержимое поста",
    userId: 1
}
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data1)
})
.then(response => response.json())
.then(data => console.log('Updated:', data))
.catch(error => console.error('error:', error));

async function fetchDataAsyncError() {
    const promise = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    try {
        const result = await promise.json();
        console.log(result)
    } catch(error) {
        console.log(error)
    }
}
fetchDataAsyncError()
fetch('https://jsonplaceholder.typicode.com/comments/1', {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
    },
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("error:", error))