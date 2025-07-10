
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
    // static
    class Math{
        static pi:number=3.145;

        static CalcArea(r:number):number{
            return Math.pi*r*r;
        }

    }

    class Bio extends Math{
        display():number{
            return Math.pi;
        }
    }

    // const m1 = new Math; -> not needed to acess pi (coz, its a static)
    console.log(Math.pi); //-> 3.14
    console.log(Math.CalcArea(4)) //->50.13
    const b1 = new Bio();
    console.log(b1.display()); //->3.145
}

{
    // abstract and super
    abstract class shape{
        //The shape class is declared as abstract, which means it can't be instantiated directly.

        abstract calcArea():number;

        displayArea():void{
            console.log(`Area: ${this.calcArea()}`);
        }
    }
    class Rect extends shape{
        constructor(private h:number, private w:number){
            super(); // ->must needed when a class is deriving from a class. It will get the parents methods/ ?? why
                    // lets understand clearly, Why super() is needed : 
                    //Initializes the parent class's properties and methods
                    //Sets up the correct prototype chain for inheritance
                    //Even if the parent constructor is empty, it's required by JavaScript's class inheritance mechanism
        }

        calcArea(): number {
            return this.h*this.w;
        }
    }
    const r1 = new Rect(2,2);
    console.log(r1.calcArea());

}