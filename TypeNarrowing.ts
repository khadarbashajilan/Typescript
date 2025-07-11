{
    // Typeof
    type numOrstr =string|number;

    function wttype(arg:numOrstr):void{
        if(typeof arg=="string"){
            console.log("It's a String");
        }else{
            console.log("It's a Number");
        }
    }

    wttype(10) 
    wttype("hi")
}

{
    // instanceOf
    class Dog{
        iam(){
            console.log("I'm a Dog");
        }
    }
    class Cat{
        iam(){
            console.log("I am a Cat");
        }
    }

    function Wtru(arg:Dog|Cat):void{
        if(arg instanceof Dog){
            arg.iam();
        }else{
            arg.iam();
        }
    }
    const D1 = new Dog;
    const C1 = new Cat;
    Wtru(D1); // -> I am a dog
    Wtru(C1); // -> i am a cat
}

{
    // intersection (&)

    class State{
        constructor(public district:string){}
    }
    class Country{
        constructor(public state:string){}
    }

    type cont = State& Country;

    const Contintent:cont = {
        state:"AnyState",
        district:"AnyDistrict"
    };

    console.log(Contintent);
}