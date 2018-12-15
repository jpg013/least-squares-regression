const { assert }       = require('chai');
const { leastSquares } = require('./least-squares');

const dataSet = [
  [2, 4],
  [3, 5],
  [5, 7],
  [7, 10],
  [9, 15],
];

describe('leastSquares', () => {
  it('exports', () => {
    assert.isFunction(leastSquares);
  });

  it('handles invalid input values', () => {
    const val = leastSquares(null);

    assert.equal(val.gradient, 0);
    assert.equal(val.yIntercept, 0);
    assert.deepEqual(val.equation(0), { x: 0, y: 0 });
  });

  it('returns the correct object props', () => {
    const val = leastSquares(dataSet);

    assert.hasAllKeys(val, ['gradient', 'yIntercept', 'equation']);
    assert.isFunction(val.equation);
  })

  it('calculates the correct value', () => {
    const val = leastSquares(dataSet);
    console.log(val);

    assert.equal(val.gradient.toFixed(4), 1.5183);
    assert.equal(val.yIntercept.toFixed(4), 0.3049);
    assert.isFunction(val.equation);
  });
});
