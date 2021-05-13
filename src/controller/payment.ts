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
        } else {
            this.balance = this.balance - amount;
            return `${this.from} sent $${amount} to ${to} on ${new Date().toDateString()}`;
        }
    }

    protected viewBalance():number {
        return this.balance;
    }
}