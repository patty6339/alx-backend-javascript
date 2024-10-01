This repo contains files for the backend specialization project (0x00. ES6 Basics)


### What ES6 is
ES6 (ECMAScript 6), also known as ECMAScript 2015, is a major update to JavaScript that introduced new features aimed at making code more concise, readable, and efficient. It is the sixth edition of the ECMAScript language specification.

### New Features Introduced in ES6
- **let** and **const** for block-scoped variables
- Arrow functions (`=>`)
- Default parameters in functions
- Rest and spread operators (`...`)
- Template literals (backtick strings for embedding variables)
- Destructuring assignment
- Classes and inheritance
- Modules (import/export)
- Promises for asynchronous programming
- Symbol data type
- Iterators and `for-of` loops

### The Difference Between a Constant and a Variable
- **Variable**: Declared with `var` or `let`, can have its value changed.
- **Constant**: Declared with `const`, and its value cannot be reassigned once initialized.

### Block-Scoped Variables
Variables declared with `let` and `const` are block-scoped, meaning they are only accessible within the block (e.g., within an `if` statement or loop) where they are declared. They are not hoisted like `var`.

### Arrow Functions and Function Parameters Default to Them
Arrow functions provide a more concise syntax for writing functions. They automatically bind the `this` value from their surrounding context, avoiding common scoping issues.
```js
const add = (a, b = 10) => a + b;
```
The above example shows default parameters, where `b` defaults to 10 if not provided.

### Rest and Spread Function Parameters
- **Rest operator** (`...args`): Allows a function to accept an indefinite number of arguments as an array.
- **Spread operator** (`...`): Expands elements of an iterable (like an array) into individual elements.

```js
const sum = (...args) => args.reduce((a, b) => a + b, 0);
```

### String Templating in ES6
Template literals use backticks (`` ` ``) and allow embedded expressions using `${}`.
```js
const name = 'John';
console.log(`Hello, ${name}!`);
```

### Object Creation and Their Properties in ES6
In ES6, object creation was simplified with **shorthand properties** and **method definitions**:
```js
const age = 25;
const person = { name, age, greet() { return "Hello"; } };
```
This creates an object where `name` and `age` use the variable names as keys and values.

### Iterators and for-of Loops
Iterators are objects that define a sequence and can return a value on each iteration. The `for-of` loop allows iterating over iterable objects (arrays, strings, maps, etc.).
```js
for (const value of [1, 2, 3]) {
  console.log(value);
}
```