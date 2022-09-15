// var http = require("https");

// var options = {
//   "method": "GET",
//   "hostname": "api.collectapi.com",
//   "port": null,
//   "path": "/news/getNews?country=tr&tag=general",
//   "headers": {
//     "content-type": "application/json",
//     "authorization": "apikey 3gkB08WSXmyqL7OzlMxrNf:4w8QETcoP6RTBlugE8K62P"
//   }
// };

// var req = http.request(options, function (res) {
//   var chunks = [];

//   res.on("data", function (chunk) {
//     chunks.push(chunk);
//   });

//   res.on("end", function () {
//     var body = Buffer.concat(chunks);
//     console.log(body.toString());
//   });
// });

// req.end();