{
    class BankAccount{
        constructor(
            private _balance:number=0,
            protected readonly name:string,
            protected readonly Accnumber:number,
            public readonly IFSC:string){}

        set balance(money:number){
            this._balance+=money;
        }

        get balance():number{
            return this._balance;
        }

        showDetails(){
            console.log(`name: ${this.name}, Accnum:${this.Accnumber}, Ifsc:${this.IFSC}, Balance:${this.balance}`);
        }
    }

    const User1 = new BankAccount(50,"anonymous",12121,"yza");
    User1.showDetails();
    console.log(User1.balance);
    User1.balance=1000;
    console.log(User1.balance);
}