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
        if (this.from === to) {
            return `You can't send money to yourself`;
        }
        this.balance = this.balance - amount;
        return `${this.from} sent $${amount} to ${to} on ${new Date().toDateString()}`;
    }
    viewBalance() {
        return this.balance;
    }
}
// A shop payment to inherit features from payment class
class ShopPay extends Payment {
    constructor(from, shopName) {
        super(from);
        this.shopName = shopName;
        this.balance = 200000;
    }
    get shopname() {
        return this.shopName;
    }
}
