{
    abstract class shape{
        abstract calcarea():number

        
    }
    class Triangle extends shape{
        constructor(public breadth:number,public  height:number){
            super()
        }

        calcarea(): number {
            return (0.5*this.height*this.breadth);
        }

    }
    class Rectangle extends shape{
        constructor(public length:number, public breadth:number){
            super();
        }

        calcarea(): number {
            return (this.breadth*this.length);
        }
    }

    const T = new Triangle(2,5);
    console.log(T.calcarea())

    const R = new Rectangle(5,5);
    console.log(R.calcarea())
}