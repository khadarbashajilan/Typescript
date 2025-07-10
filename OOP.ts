
{
    // Parameter Properties - (constructor (public _ _, ....) with Optional parameter - (?)
    class Person{
        constructor(public name:string, public age:number,public gender?:string){}
    }
    const p1 = new Person("Unknown", 25);
    const p2 = new Person("Anonymous", 25, "Male");
    console.log(p1) //-> Person { name: 'Unknown', age: 25, gender: undefined }
    console.log(p2) //->Person { name: 'Anonymous', age: 25, gender: 'Male' }
}

{
    // Setters and Getters
    class Temp{
        public _celsius:number=0;

        get celsius():number{
            return this._celsius;
        }

        set celsius(val:number){
            if(val<=0){
                throw new Error (`${val} is less than 0`);
            }
            this._celsius=val;
        }
    }

    const t1 = new Temp();
    t1.celsius=10;
    console.log(t1.celsius); //-> 10
}

{
    
}