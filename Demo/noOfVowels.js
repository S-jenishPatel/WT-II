const fs = require("fs");

let vowelCount = 0;

fs.readFile("abc.txt", "utf-8", (err, data) => {
  if (err) throw err;

  for (let i = 0; i < data.length; i++) {
    let ch = data[i];
    switch (ch) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
      case "A":
      case "E":
      case "I":
      case "O":
      case "U":
        vowelCount++;
        break;
      default:
        break;
    }
  }

  console.log("No of Vowels = " + vowelCount);
});
