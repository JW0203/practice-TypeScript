class Account{
    constructor(private _accountNumber:number,
                private _name:string,
                private _balance:number = 0){
    }

    get getName():string{
        return this._name;
    }

    get getAccountNumber():number{
        return this._accountNumber;
    }

    get getBalance():number{
        return this._balance;
    }

    deposit(value:number): void{
        this._balance += value
        console.log(`${value} 원 입금 되었습니다.`)
        console.log(`현재 잔고는 ${this._balance} 원 입니다. \n`)
    }

    withdraw(value:number): void {
        const currentBalance = this.getBalance;
        if (currentBalance <= 0 || currentBalance < value){
            console.log("계좌에 잔고가 충분하지 않습니다. \n");
        }
        if(currentBalance>=value ){
            this._balance -= value
            console.log(`${value}원 인출되었습니다.`);
            console.log(`현재 잔고는 ${this._balance} 원 입니다. \n`)
        }
    }
}

const myAccount = new Account(12356, "정우");
console.log(`계좌번호 : ${myAccount.getAccountNumber}`)
console.log(`현재 잔고 : ${myAccount.getBalance}`)

myAccount.deposit(1000)
myAccount.withdraw(2000)
myAccount.withdraw(1000)
