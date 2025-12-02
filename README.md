# Calculator Lab

A small calculator implementation with a simple calculations and records history.

Files
 `index.js` — calculator logic (addition, subtraction, multiplication, division) and recording of operations.


## Index.js 

This section documents the public functions and behavior provided by `index.js`.

   - `add(a, b)` — returns `a + b` and records the operation to the internal history array.
   - `subtract(a, b)` — returns `a - b` and records the operation.
   - `multiply(a, b)` — returns `a * b` and records the operation.
   - `divide(a, b)` — if `b === 0` returns the string `'Error: Division by zero'` and records the operation with `result: null`; otherwise returns `a / b` and records the operation.

- **History storage:**
   - Internally `index.js` records operations to an array named `history`.
   

node index.js
expected result are with a = 5 and b = 3 are:

 node index.js
5 + 3 = 8
5 - 3 = 2
5 * 3 = 15
5 / 0 = Error: Division by zero
5 / 2 = 2.5
history: [
  { num1: 5, num2: 3, operator: '+', result: 8 },
  { num1: 5, num2: 3, operator: '-', result: 2 },
  { num1: 5, num2: 3, operator: '*', result: 15 },
  { num1: 5, num2: 0, operator: '/', result: null },
  { num1: 5, num2: 2, operator: '/', result: 2.5 }
]


