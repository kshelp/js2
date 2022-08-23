// The fetch API is not implemented in Node.
// You need to use an external module for that, like node-fetch.
// D:\dev\workspace\github\js2\ch45>npm install node-fetch

import fetch from "node-fetch";

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => console.log(response));
