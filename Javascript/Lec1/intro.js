 console.log("hello world");
 //to run js file => node filename

 //data types=>
 //primitive nonprimitive
 // javascript => number(int,float,double),Boolean , String,undefined, Null,Object
 //use let and const
let a = 10;//you have initialized a variable with name ans value;
//let keyword => block scoped
console.log(a);
if(true){
    let a = 20
    console.log(a);
}
console.log(a)
//Objects
let obj = {
    name: "steve rogers",
    place: "queens",
    movies: [1,2,3,{bestie : "bucky",
                nickname:"wintersoldier",
            partner:"falcon",
        weakness:["brainwash"]}],
    "full name": "what",

}
console.log(obj.name);
console.log(obj.movies);
let key = "place";
console.log(obj[key]);
console.log(obj["full name"]);

obj.place = "new york";
obj.skills = ["dance","singing"];
console.log(obj.movies[3].weakness[0].substring(5,9))
