class Payment {
    public from: string;
    public balance: number = 100000;

    constructor(from:string) {
        this.from = from;
    }

    protected sendMoney(amount:number, to:string):string {
        // check if sender has sufficent balance
        if(amount > this.balance) {
            return `Insufficent fund, please load your account with money!`;
        } 

        if(this.from === to) {
            return `You can't send money to yourself`;
        }

        this.balance = this.balance - amount;
        return `${this.from} sent $${amount} to ${to} on ${new Date().toDateString()}`;
    }

    protected viewBalance():number {
        return this.balance;
    }
}

// A shop payment to inherit features from payment class

class ShopPay extends Payment {
    public balance:number = 200000;
    constructor(from:string, protected shopName:string) { 
        super(from); 
    }
    public get shopname():string {
        return this.shopName;
    }
}