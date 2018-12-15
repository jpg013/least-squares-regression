least-squares-regression
=============

Nodejs Module for calculating ordinary least squares regression.


Install
-------

### Node.js
    npm install --save least-squares-regression

Method
-------

### leastSquaresRegression(data)

- returns an object with the following properties:

props:
- `slope`: slope of the least squares line
- `intercept`: intercept of the least squares line
- `lineEquation`: function that computes y = mx + b

Example
------

```js
const lsr = require('least-squares-regression');

const dataSet = [
  { x: 2, y: 4, },
  { x: 3, y: 5, },
  { x: 5, y: 7, },
  { x: 7, y: 10, },
  { x: 9, y: 15, },
];

const results = lsr(dataSet);

console.log(results);

/*
{
  slope: 1.5182926829268293,
  intercept: 0.30487804878048763,
  lineEquation: [Function: lineEquation]
}
*/

results.lineEquation(0) // { x: 0, y: 0.30487804878048763 }
results.lineEquation(2) // { x: 2, y: 3.341463414634146 }
```


License
-------

(MIT License)

Copyright 2018, Justin Graber <jpg013@gmail.com>
