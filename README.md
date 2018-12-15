regression
=============

Nodejs module for performing linear least squares methods.


Install
-------

### Node.js
    npm install --save regression

Method
-------

### regression(data)

- returns an object with the following properties:

props:
- `gradient`: slope of the least squares line
- `yIntercept`: y intercept of the least squares line
- `equation`: function that computes y = mx + b

Example
------

```js
const regression = require('regression');

const points = [
  [2, 4],
  [3, 5],
  [5, 7],
  [7, 10],
  [9, 15],
];

const results = regression.leastSquares(points);

console.log(results);

/*
{
  gradient: 1.5182926829268293,
  yIntercept: 0.30487804878048763,
  equation: [Function: equation]
}
*/

results.equation(0) // { x: 0, y: 0.30487804878048763 }
results.equation(2) // { x: 2, y: 3.341463414634146 }
```


License
-------

(MIT License)

Copyright 2018, Justin Graber <jpg013@gmail.com>
