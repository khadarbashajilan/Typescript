function add (x:number, y:number):number{
    return x+y;
}

const mul = (x:number, y:number):number => x*y

const divide = (x:number, y:number):number =>{
    if(x<0)return 0
    return x/y
}

const substract = (x:number, y:number):number => x-y;

 function result(x:Function,a:number, b:number):void{
    console.log(x(a,b));
}

result(add,1,0);
