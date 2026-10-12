import dayjs from "dayjs";

/**
 * Lays a date out the way people write it here.
 * formatDate("2026-03-15") -> "15/03/2026"
 *
 * @param {string} dateString a date like "2026-03-15"
 * @returns {string} the same date as DD/MM/YYYY
 */
export function formatDate(dateString) {
  return dayjs(dateString).format("DD/MM/YYYY");
}

/**
 * The year a date falls in, as a number.
 * yearOf("2026-03-15") -> 2026
 *
 * @param {string} dateString
 * @returns {number}
 */
export function yearOf(dateString) {
  return dayjs(dateString).year();
}

/**
 * Now you write the whole function.
 *
 * Write a function called `addDays`.
 *
 * Parameters: dateString and days
 * Returns: that many days later, as YYYY-MM-DD
 */
export function addDays(dateString, days) {
  return dayjs(dateString).add(days, "day").format("YYYY-MM-DD");
}

export const myPackage = "lodash";