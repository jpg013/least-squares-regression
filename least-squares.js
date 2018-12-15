function compose(...fns) {
  return fns.reduce((f, g) => (...args) => f(g(...args)));
}

const sumDataPoints = (data=[]) => {
  if (!data || !Array.isArray(data)) {
    throw new TypeError('least squares requires an array argument of { x, y } data points.');
  }

  return data.reduce((acc, curr) => {
    const x = parseInt(curr && curr.x);
    const y = parseInt(curr && curr.y);

    return {
      x: acc.x + (isNaN(x) ? 0 : x),
      y: acc.y + (isNaN(y) ? 0 : y),
      xx: acc.xx + (isNaN(x) ? 0 : Math.pow(x, 2)),
      xy: acc.xy + ((isNaN(x) || isNaN(y)) ? 0 : x * y),
      idx: acc.idx + 1,
    };
  }, { x: 0, y: 0, xx: 0, xy: 0, idx: 0 });
};

const calculateSlope = (data={}) => {
  const num = (data.idx * data.xy) - (data.x * data.y);
  const den = (data.idx * (data.xx)) - (Math.pow(data.x, 2));

  return {
    ...data,
    slope: (num / den)
  };
};

const calculateIntercept = (data={}) => {
  const intercept = (data.y - (data.slope * data.x)) / data.idx;

  return {
    ...data,
    intercept,
  };
};

const assembleLineEquation = (data={}) => {
  const { intercept, slope } = data;

  const lineEquation = x => {
    return {
      x,
      y: (slope * x) + intercept,
    };
  };

  return {
    ...data,
    lineEquation,
  };
};

const parseVal = (data={}) => {
  return {
    slope: data.slope,
    intercept: data.intercept,
    lineEquation: data.lineEquation,
  };
};

exports.leastSquares = compose(
  parseVal,
  assembleLineEquation,
  calculateIntercept,
  calculateSlope,
  sumDataPoints,
);
exports.assembleLineEquation = assembleLineEquation;
exports.parseVal = parseVal;
exports.sumDataPoints = sumDataPoints;
exports.calculateSlope = calculateSlope;
exports.calculateIntercept = calculateIntercept;
