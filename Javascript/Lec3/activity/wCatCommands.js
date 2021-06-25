let fs = require("fs");
let f1Data = fs.readFileSync("./f1.txt","utf-8");

let f2Data = fs.readFileSync("./f2.txt","utf-8");

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

 

 let withoutS = sFlag(f1Data);
 console.log(withoutS);
 console.log(bFlag(withoutS));
 console.log(nFlag(withoutS));

 