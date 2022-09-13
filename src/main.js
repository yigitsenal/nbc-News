
var data = null;

var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.collectapi.com/news/getNews?country=tr&tag=general");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("authorization", "apikey 3gkB08WSXmyqL7OzlMxrNf:4w8QETcoP6RTBlugE8K62P");

xhr.send(data);