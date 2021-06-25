let extensionsMapping = require("./util.js");
console.log(extensionsMapping);
let path = "./Downloads"
let fs = require("fs");
let allFiles = fs.readdirSync(path);
console.log(allFiles);

function getExtension(file){
    let f = file.split(".");
    return f[1];
}
function nameFolder(ext){
    for(let key in extensionsMapping){
        let extensions = extensionsMapping[key];
        if(extensions.includes(ext)){
            return key;
        }
    }
}
function isFolderExist(folderName){
    let newPath = path + "/" + folderName;
    if(!fs.existsSync(newPath)){

        fs.mkdirSync(newPath);
        console.log("done");
    }
}

function moveFile(file,folderName){
    console.log(file);
    let souceFile = path + "/" + file;
    let destinationFile = path + "/" + folderName + "/" + file;
    fs.copyFileSync(souceFile,destinationFile);

    fs.unlinkSync(souceFile);
}

function sortFiles( file ){
    let ext = getExtension(file);
    // console.log(file)
    let folderName = nameFolder(getExtension(file));
    
    isFolderExist(folderName);

    moveFile(file,folderName);

}

for(let i in allFiles){
    let me = allFiles[i].split(".");
    // console.log(i);
    if(me.length==2){
        sortFiles(allFiles[i]);
    }
}