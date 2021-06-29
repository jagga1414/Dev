let files = ["../f1.txt","../f2.txt","../f3.txt"];
const fs = require("fs");

for(let i in files){
    let fKaPromise = fs.promises.readFile(files[i]);
    fKaPromise.then(function(data){
        console.log(data+"");
    })
}