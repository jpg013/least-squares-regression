const { assert }       = require('chai');
const { leastSquares } = require('./least-squares');

const dataSet = [
  { x: 2, y: 4, },
  { x: 3, y: 5, },
  { x: 5, y: 7, },
  { x: 7, y: 10, },
  { x: 9, y: 15, },
];

describe('leastSquares', () => {
  it('exports', () => {
    assert.isFunction(leastSquares);
  });

  it('calculates the correct value', () => {
    const val = leastSquares(dataSet);

    assert.equal(val.slope.toFixed(4), 1.5183);
    assert.equal(val.intercept.toFixed(4), 0.3049);
    assert.isFunction(val.lineEquation);
  });
});
