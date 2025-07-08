// Primitive types -> 
let a:any;
a=12121;
console.log(typeof a); //-> number

let c:boolean;
c=true
console.log(typeof c)// -> boolean

let b:any;
console.log(typeof b); //-> undefined
b=3043;
b="dffdf";
console.log(typeof b); // -> string

// Function -> Simple calculator - Mini-Project
function add (x:number, y:number):number{
    return x+y;
}    

const mul = (x:number, y:number):number => x*y

const divide = (x:number, y:number):number =>{
    if(x<=0)return 0
    return x/y
}    

const substract = (x:number, y:number):number => x-y;

function result(x:Function,a:number, b:number):void{
    console.log(x(a,b));
}    

result(add,1,20); //   -> 21
result(substract,25,4); //   -> 21
result(mul,7,3); //   -> 21
result(divide,21,3); //   -> 7




