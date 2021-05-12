class Payment {
    from: string;
    to: string;
    amount: number;

    constructor(from:string, to:string, amount:number) {
        this.from = from;
        this.to = to;
        this.amount = amount;
    }

    sendMoney():string {
       return `${this.from} sent ${$this.amount} to ${this.to} on ${new Date().toLocaleString()}`;
    }
}