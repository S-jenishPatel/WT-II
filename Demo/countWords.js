const fs = require("fs");

let words;

const data = fs.readFileSync("abc.txt", "utf-8");

words = data.split(/[\s\r\n]+/);

console.log(words.length);
