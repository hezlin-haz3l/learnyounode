var fs = require("fs");

var data = fs.readFile(process.argv[2], function callback (err, data) {
if (err) return console.error(err);
var words = data.toString().split("\n");

console.log(words.length - 1)
});

