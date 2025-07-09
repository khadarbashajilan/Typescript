{
    interface User{
        name:string;
        age:number;
        email?:string;
    }

    interface Admin extends User{
        role:string;
    }

    const ad:Admin = {
        name:"Boss",
        age:50,
        role:"Admin"
    };

    const us:User={
        name:"Bachcha",
        age:20,
    }

    console.log(us);
    console.log(ad);
}