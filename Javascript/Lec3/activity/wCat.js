const { setFlagsFromString } = require("v8");

let contents = process.argv.splice(2);
let fs = require("fs");

const flag = [];

const files = [];
 
for(let i in contents){
    if(contents[i].startsWith("-")){
        flag.push(contents[i]);
    }
    else{
        files.push(contents[i]);
    }
}
let data = ""
for(let i in files){
    if(!fs.existsSync(files[i])){
        console.log("file doesnt exist");
        return;
    }
    if(i == files.length - 1){
        data += fs.readFileSync("./"+files[i]);
    }else{
        data += fs.readFileSync("./"+files[i])+"\n";
    }
}

if(flag.includes("-s")){
    data = sFlag(data);
}

if(flag.includes("-b")){
    data  = bFlag(data);
}

else if(flag.includes("-n")){
    data = nFlag(data);
}

console.log(data);

function sFlag(data){
    let tokenize = data.split("\n");
    // console.log(tokenize);
    let tokensRemovedSpace = [];
    let emptyInclueded = false;
    for(let i in tokenize){
        if(tokenize[i] == "" && emptyInclueded == false){
            tokensRemovedSpace.push(tokenize[i]);
            emptyInclueded = true;
        }else if(tokenize[i] != ""){
            tokensRemovedSpace.push(tokenize[i]);
            emptyInclueded = false;
        }
    }
    spaceRemovedString = tokensRemovedSpace.join("\n");
    // console.log(tokensRemovedSpace);
    return spaceRemovedString;
}
 

 function bFlag(data){
     let tokenize = data.split("\n");
    
     let bApplied = [];
     var count = 1;
     for(let i in tokenize){
         if(tokenize[i] != ""){
             bApplied.push(count.toString()+". "+tokenize[i]);
             count++;
         }
         else{
             bApplied.push(tokenize[i]);
         }
     }
     let Bstring = bApplied.join("\n");
    //  console.log(Bstring);
     return Bstring;
 }

 function nFlag(data){
     let tokenize = data.split("\n");
     let nApplied = [];
     var count = 1;
     for(let i in tokenize){
         nApplied.push(count.toString()+". "+ tokenize[i]);
         count ++;
     }
     let nString = nApplied.join("\n");
     return nString;
 }
