{
    // Generics
    function PrinT<T>(x:T):T{
        return x;
    }
    console.log(PrinT("hi"));
    console.log(PrinT(123));
    console.log(PrinT(true));
}

