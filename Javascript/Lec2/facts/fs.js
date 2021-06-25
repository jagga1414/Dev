//fs => file system
const fs = require("fs");
// console.log(fs);
let f1Kadata = fs.readFileSync("./f1.txt")
console.log(f1Kadata + "");

fs.writeFileSync("index.html",f1Kadata);
