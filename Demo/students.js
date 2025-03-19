const fs = require("fs");
let data = "";
stdData = [];

try {
  data = fs.readFileSync("students.txt", "utf-8");
} catch (error) {
  throw error;
}

const students = data.split(/[\r\n]+/);

students.forEach((student) => {
  let std = student.split(",");
  stdData.push({
    ID: std[0],
    Name: std[1],
    EnrollmentNo: std[2],
    MobileNo: std[3],
    Department: std[4],
    SPI: std[5],
  });
});

console.log(stdData);

const filteredStd = stdData.filter((std, index) => parseInt(std.SPI) < 5);
console.log(filteredStd);
