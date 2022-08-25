//const fetch = require('node-fetch');
import fetch from "node-fetch";

const foo = async () => {
  const wrongUrl = 'https://wrong.url';

  const response = await fetch(wrongUrl);
  const data = await response.json();
  return data;
};

foo()
  .then(console.log)
  //.catch(function(err) { console.log("캐치한 에러: " + err);});
  .catch( err => console.log("캐치한 에러: " + err));
