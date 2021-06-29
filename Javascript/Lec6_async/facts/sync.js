const fs = require('fs');

console.log("start");

let f1kacontent = fs.readFileSync("./f1.txt");
console.log(f1kacontent+"");
console.log("end"); 