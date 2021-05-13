"use strict";
class Payment {
    constructor(from) {
        this.balance = 100000;
        this.from = from;
    }
    sendMoney(amount, to) {
        // check if sender has sufficent balance
        if (amount > this.balance) {
            return `Insufficent fund, please load your account with money!`;
        }
        else {
            this.balance = this.balance - amount;
            return `${this.from} sent $${amount} to ${to} on ${new Date().toDateString()}`;
        }
    }
    viewBalance() {
        return this.balance;
    }
}
