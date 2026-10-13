// Checkpoint B — your behaviour. Built to checkpoint-b/spec.md.
//
// The data is given to you, and imported rather than copied:
import { items } from "./items.js";

/**
 * Draws an array of items into #list, replacing whatever was there.
 * Each item becomes <li class="product">{name} - {price} EGP</li>.
 *
 * @param {Array<{name: string, price: number}>} list
 * @returns {void}
 */
export function renderItems(list) {
  const listElement = document.querySelector("#list");

  // Empty it first, so a second call REPLACES the items (module 13).
  listElement.textContent = "";

  // One <li> per item (module 12): create, fill in, append.
  for (const item of list) {
    const li = document.createElement("li");
    li.classList.add("product");
    li.textContent = `${item.name} - ${item.price} EGP`;
    listElement.append(li);
  }
}

/**
 * Only the items over 100 EGP, as item objects (module 04's filter).
 * "Over 100" means strictly more than 100, so the 100 EGP calculator is out.
 *
 * @returns {Array<object>}
 */
export function matching() {
  return items.filter((item) => item.price > 100);
}

/**
 * Sets the page up:
 *   1. draws every item straight away, and
 *   2. on a click of #apply, redraws with only the matching items.
 *
 * @returns {void}
 */
export function start() {
  renderItems(items);

  // Hand the browser a function to call later, on each click (module 12).
  document.querySelector("#apply").addEventListener("click", () => {
    renderItems(matching());
  });
}
