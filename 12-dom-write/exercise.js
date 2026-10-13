// 12-dom-write — your work goes in this file.
//
// The lesson is example.js:   npm run open 12
// See your own page with:     npm run open 12 exercise
// Check your work with:       npm test 12
//
// exercise.html is written for you and must not be edited. It gives you an
// empty <ul id="list">, an "Add a notebook" button (#add) and a "Reset"
// button (#reset).
//
// The first four are started for you. The LAST one has no code — you write it.
//
// Two of these need "the card whose h3 says X". There is no CSS selector for
// that, so it is the Array.from + find pattern from module 11's example.
// Writing it twice is fine; pulling it out into a small function of its own is
// also fine. Either way, remember it can come back undefined.

/**
 * A small helper used by removeProduct and markSoldOut: the card whose <h3>
 * text is exactly `name`, or undefined if there is none.
 *
 * #list is looked up every time rather than once at the top of the file, so
 * it always points at the list that is on the page right now.
 *
 * @param {string} name
 * @returns {Element|undefined}
 */
function findCard(name) {
  const cards = document.querySelectorAll("#list .card");
  return Array.from(cards).find(
    (card) => card.querySelector("h3").textContent === name
  );
}

/**
 * Adds one product card to the end of the list.
 *
 * The card must be an <li> with the class `card`, containing:
 *   an <h3> holding the name, and
 *   a <p class="price"> holding the price followed by " EGP".
 *
 * addProduct("Pen", 15) adds:
 *   <li class="card"><h3>Pen</h3><p class="price">15 EGP</p></li>
 *
 * @param {string} name
 * @param {number} price in EGP
 * @returns {void}
 */
export function addProduct(name, price) {
  // Build each piece in memory first. None of it is on the page yet.
  const card = document.createElement("li");
  card.classList.add("card");

  const heading = document.createElement("h3");
  heading.textContent = name;

  const priceText = document.createElement("p");
  priceText.classList.add("price");
  priceText.textContent = `${price} EGP`;

  // Put the pieces inside the card, then the card at the end of the list.
  // Only this last append makes it appear.
  card.append(heading, priceText);
  document.querySelector("#list").append(card);
}

/**
 * Removes the card with that name, if there is one.
 * Does nothing at all if there is not.
 *
 * @param {string} name
 * @returns {void}
 */
export function removeProduct(name) {
  const card = findCard(name);
  // No such card: do nothing instead of crashing on undefined.
  if (card) {
    card.remove();
  }
}

/**
 * Marks the card with that name as sold out, by adding the class `sold-out`.
 * Does nothing if there is no such card.
 *
 * @param {string} name
 * @returns {void}
 */
export function markSoldOut(name) {
  const card = findCard(name);
  if (card) {
    card.classList.add("sold-out");
  }
}

/**
 * Removes every card from the list, leaving it empty.
 *
 * @returns {void}
 */
export function clearProducts() {
  // Remove every card but keep the <ul id="list"> itself on the page.
  for (const card of document.querySelectorAll("#list .card")) {
    card.remove();
  }
}

/**
 * Now you write the whole function.
 *
 * Write a function called `wireButtons`.
 *
 *   Parameters: none.
 *   Returns:    nothing.
 *
 * It attaches two click listeners:
 *
 *   - clicking #add   adds a card named "Notebook" priced 45
 *   - clicking #reset empties the list
 *
 * Use the functions you wrote above rather than repeating their work.
 *
 * Calling `wireButtons()` twice would attach the listeners twice, so the
 * tests only ever call it once.
 *
 * Remember `export`.
 */

export function wireButtons() {
  // Hand the browser a function to call LATER, on each click. Nothing runs
  // now; wiring the buttons adds no cards by itself.
  document.querySelector("#add").addEventListener("click", () => {
    addProduct("Notebook", 45);
  });

  document.querySelector("#reset").addEventListener("click", () => {
    clearProducts();
  });
}
