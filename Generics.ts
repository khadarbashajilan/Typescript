{
    // Generic Functions
    function PrinT<T>(x:T):T{
        return x;
    }
    console.log(PrinT("hi"));
    console.log(PrinT(123));
    console.log(PrinT(true));
}

{
    // Generic Interface
    interface KeyVal <T, U>{
        name:T;
        id:U;
    }

    class Unknown implements KeyVal <string, number> {

        constructor(public name:string, public id:number ){
            this.id=id;
            this.name=name;
        }
    }



    const U1= new Unknown("hi",122);
    console.log(U1);


}

{
    // Generic Classes
    class Store <T>{
        constructor(public data:T){};
    }

    const S1 = new Store("Something");
    console.log(S1);
}