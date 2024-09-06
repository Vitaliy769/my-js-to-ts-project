// index.js

// Example JavaScript code
function add(a, b) {
  return a + b;
}

const name = "John";
const age = 30;
const isStudent = false;

const greet = (name) => `Hello, ${name}`;

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num));

const person = {
  name: "Alice",
  age: 25,
  isStudent: true
};

console.log(greet(person.name));
console.log(`Age: ${person.age}`);
console.log(`Student: ${person.isStudent}`);
// index.js

/**
 * Додає два числа.
 * @param {number} a - Перше число.
 * @param {number} b - Друге число.
 * @returns {number} Сума двох чисел.
 */
function add(a, b) {
  return a + b;
}

const name = /** @type {string} */ ("John");
const age = /** @type {number} */ (30);
const isStudent = /** @type {boolean} */ (false);

/**
 * Вітає з ім'ям.
 * @param {string} name - Ім'я особи.
 * @returns {string} Вітання.
 */
const greet = (name) => `Hello, ${name}`;

const numbers = /** @type {number[]} */ ([1, 2, 3, 4, 5]);
numbers.forEach(num => console.log(num));

/**
 * Персонаж.
 * @typedef {Object} Person
 * @property {string} name - Ім'я.
 * @property {number} age - Вік.
 * @property {boolean} isStudent - Статус студента.
 */

/** @type {Person} */
const person = {
  name: "Alice",
  age: 25,
  isStudent: true
};

console.log(greet(person.name));
console.log(`Age: ${person.age}`);
console.log(`Student: ${person.isStudent}`);

