class Payment {
    public from: string;
    // public to: string;
    // amount: number;
    public balance: number;

    constructor(from:string, balance:number) {
        this.from = from;
        this.balance = balance;
    }

    protected sendMoney(public amount:number, to:string):string {
        // check if sender has sufficent balance
        if(amount > this.balance) {
            return `Insufficent fund, please load your account with money!`;
        }

       return `${this.from} sent $${amount} to ${this.to} on ${new Date().toLocaleString()}`;
    }

    protected viewBalance():number {
        return this.balance;
    }
}