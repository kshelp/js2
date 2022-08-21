// XMLHttpRequest is a built-in object in web browsers.
// If you really want to use XHR in Node.js then, install xhrs.
// c:\>npm install xhr2
const XMLHttpRequest = require('xhr2');

// XMLHttpRequest 객체 생성
const xhr = new XMLHttpRequest();

// HTTP 요청 초기화
//xhr.open("GET", "/users");
xhr.open("GET", "http://date.jsontest.com/");

// HTTP 요청 헤더 설정
// 클라이언트가 서버로 전송할 데이터의 MIME 타입 지정: json
xhr.setRequestHeader("content-type", "application/json");

// HTTP 요청 전송
xhr.send();
