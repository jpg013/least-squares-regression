const { assert } = require('chai');
const regression = require('./index');

describe('index', () => {
  it('exports', () => {
    assert.isObject(regression);
    assert.hasAllKeys(regression, ['leastSquares']);
    assert.isFunction(regression.leastSquares);
  });
});
