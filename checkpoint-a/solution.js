// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";

/**
 * 1. Every order in the database.
 * async, because the database answers after a delay (module 08).
 *
 * @returns {Promise<object[]>}
 */
export async function loadOrders() {
  const orders = await findAllOrders();
  return orders;
}

/**
 * 2. Only the orders that are from Alexandria AND still pending.
 * Not async: it is handed the list, so it is a plain filter (module 04).
 *
 * @param {object[]} orders
 * @returns {object[]}
 */
export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Alexandria" && order.status === "pending"
  );
}

/**
 * 3. The total number of items: quantity added up across every order.
 * reduce (module 04), starting from 0 so an empty list gives 0.
 *
 * @param {object[]} orders
 * @returns {number}
 */
export function summarize(orders) {
  return orders.reduce((total, order) => total + order.quantity, 0);
}

/**
 * 4. A label for one order: "{quantity} x {item} for {student}".
 * findOrderById rejects for an unknown id, so try/catch (module 08) turns that
 * into "Could not find order {id}". This function never throws.
 *
 * @param {number} id
 * @returns {Promise<string>}
 */
export async function describeOrder(id) {
  try {
    const { quantity, item, student } = await findOrderById(id);
    return `${quantity} x ${item} for ${student}`;
  } catch (error) {
    return `Could not find order ${id}`;
  }
}

/**
 * 5. JSON text for the orders, keeping only `student` then `item`.
 * map builds the smaller objects (the key order is the order they are written
 * in), then JSON.stringify with no indenting (module 05).
 *
 * @param {object[]} orders
 * @returns {string}
 */
export function toJsonLines(orders) {
  const trimmed = orders.map(({ student, item }) => ({ student, item }));
  return JSON.stringify(trimmed);
}
