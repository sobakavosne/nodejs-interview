const axios = require("axios");

const fetchAndTraceUserById =
  (userId: number) => axios
    .get('https://jsonplaceholder.typicode.com/users')
    // .then(res => console.log('Users:', res.data[userId]))
    .then(res => console.log('UserId:', userId))
    .then(() => setTimeout(() => console.log("Timeout: HTTP call is finished.")))
    .catch((err) => console.log('Error: ', err.message));

// Code to be executed in the next iteration
const promisedConsoleForUser =
  (userId: number) => Promise
    .resolve()
    .then(() => console.log('Promised Console:', userId));

fetchAndTraceUserById(0);

setImmediate(() => console.log("Immediate 1"));

setTimeout(() => console.log("Timeout 1"));

setTimeout(() => console.log("Timeout 2"));

setImmediate(() => Promise.resolve().then(() => fetchAndTraceUserById(1)));

// Code to be executed in the next iteration
Promise.resolve().then(() => fetchAndTraceUserById(2));

// Code to be executed in the next iteration
Promise.resolve().then(() => setImmediate(() => console.log("Immediate 2")));

// Code to be executed in the next iteration
process.nextTick(() => promisedConsoleForUser(1));

// Code to be executed in the next iteration
promisedConsoleForUser(0);

console.log("Console");
