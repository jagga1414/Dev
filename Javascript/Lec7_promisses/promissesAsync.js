const fs = require("fs");
let f1KaData = fs.promises.readFile("./f1.txt");
let f2KaData = fs.promises.readFile("./f2.txt");
let f3KaData = fs.promises.readFile("./f3.txt");

f1KaData.then(function(data){
    console.log(data+"");
})
f2KaData.then(function(data){
    console.log(data+"");
})

f3KaData.then(function(data){
    console.log(data+"");
})