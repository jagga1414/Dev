//npm init -y
//npm install cheerio

const fs = require("fs");

const cheerio = require("cheerio");

let htmlKaData = fs.readFileSync("./index.html","utf-8");

let myDocument = cheerio.load(htmlKaData);

let h1KaData = myDocument("h1").text();

console.log(h1KaData);
