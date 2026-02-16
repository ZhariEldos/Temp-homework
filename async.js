var now = new Date();

setTimeout(() => {
    console.log('Hello World!');
}, 2000); 

var i = 0;
const intervalId = setInterval(() => {
    now = new Date();
    console.log(now);
    i = i + 1;
    if(i>=5) {
        clearInterval(intervalId);
    }
}, 1000);
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data recieved!")
    }, 3000);
})
fetchData.then(result => console.log(result))
const fetchDataWithError = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Error!")
    }, 2000);
})
fetchDataWithError.catch(error => console.log(error))
async function fetchDataAsync() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data recieved!!!");
        }, 3000);
    })
    let result = await promise;
    return result
}
fetchDataAsync().then(result => console.log(result))

async function fetchDataAsyncError() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error!!!")
        }, 2000);
    })
    try {
        let result = await promise;
        console.log(result)
    } catch(error) {
        console.log(error)
    }
}
fetchDataAsyncError()

const task1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Everything good 1")
    }, 1000);
})
const task2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Everything good 2")
    }, 2000);
})
async function task12Control() {
    let result1 = await task1;
    console.log(result1)
    let result2 = await task2;
    console.log(result2)
}
task12Control()

const taskA = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Everything good 1")
    }, 2000);
})
const taskB = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Everything good 2")
    }, 3000);
})
Promise.all([taskA,taskB]).then(
    (value) => {console.log(value)}
)

async function delayedMessage(message, interval) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message)
        }, interval);
    })
    let result = await promise
    return result
}
delayedMessage("Delayed message", 1000).then(result => console.log(result))