//functionName();
function fun(){
    console.log("fun says hi!!" );

}
//function call /invoke
fun();

let sayHi = function(){
    console.log("sayHI function says Hi");
}

// function passing
function callBack(){
    console.log("i ama king");
    return 5;
}

function highOrderFunction( cb ){
    let l = cb();
    console.log()
}

