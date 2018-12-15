const { assert }       = require('chai');
const { leastSquares } = require('./least-squares');

describe('leastSquares', () => {
  it('exports', () => {
    assert.isFunction(leastSquares);
  });
});
