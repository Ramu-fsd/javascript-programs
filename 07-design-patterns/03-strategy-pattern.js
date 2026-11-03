/**
 * Strategy pattern: the algorithm can be selected at runtime.
 */
const paymentStrategies = {
  card: amount => `Paid ${amount} using card`,
  upi: amount => `Paid ${amount} using UPI`,
  wallet: amount => `Paid ${amount} using wallet`
};

export class Checkout {
  constructor(strategy) { this.setStrategy(strategy); }

  setStrategy(strategy) {
    if (typeof strategy !== "function") throw new TypeError("Strategy must be a function");
    this.strategy = strategy;
  }

  pay(amount) {
    if (!Number.isFinite(amount) || amount <= 0) throw new RangeError("Amount must be positive");
    return this.strategy(amount);
  }
}

const checkout = new Checkout(paymentStrategies.upi);
console.log(checkout.pay(499));
