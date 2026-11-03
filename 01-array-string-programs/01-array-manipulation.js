/**
 * Demonstrates map, filter, and reduce with a small order dataset.
 */
const orders = [
  { id: 1, amount: 120, status: "PAID" },
  { id: 2, amount: 80, status: "PENDING" },
  { id: 3, amount: 200, status: "PAID" }
];

export const orderAmounts = orders.map(({ amount }) => amount);
export const paidOrders = orders.filter(({ status }) => status === "PAID");
export const paidTotal = paidOrders.reduce((sum, { amount }) => sum + amount, 0);

console.log({ orderAmounts, paidOrders, paidTotal });
