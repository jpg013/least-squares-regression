function compose(...fns) {
  return fns.reduce((f, g) => (...args) => f(g(...args)));
}

const sumDataPoints = (data=[]) => {
  const base = {
    x: 0,
    y: 0,
    xx: 0,
    xy: 0,
    idx: 0
  };

  if (!data || !Array.isArray(data)) {
    return base;
  }

  return data.reduce((acc, curr) => {
    if (!Array.isArray(curr)) {
      return acc;
    }

    const x = parseInt(curr[0]);
    const y = parseInt(curr[1]);

    return {
      x: acc.x + (isNaN(x) ? 0 : x),
      y: acc.y + (isNaN(y) ? 0 : y),
      xx: acc.xx + (isNaN(x) ? 0 : Math.pow(x, 2)),
      xy: acc.xy + ((isNaN(x) || isNaN(y)) ? 0 : x * y),
      idx: acc.idx + 1,
    };
  }, base);
};

const calculateGradient = (data={}) => {
  const num = (data.idx * data.xy) - (data.x * data.y);
  const den = (data.idx * (data.xx)) - (Math.pow(data.x, 2));

  return {
    ...data,
    gradient: den > 0 ? (num / den) : 0
  };
};

const calculateYIntercept = (data={}) => {
  const { y, gradient, x, idx } = data;
  const yIntercept = idx > 0 ? (y - gradient * x) / idx : 0;

  return {
    ...data,
    yIntercept,
  };
};

const assembleEquation = (data={}) => {
  const { yIntercept, gradient } = data;

  const equation = x => {
    return {
      x,
      y: (gradient * x) + yIntercept,
    };
  };

  return {
    ...data,
    equation,
  };
};

const parseVal = (data={}) => {
  return {
    gradient: data.gradient,
    yIntercept: data.yIntercept,
    equation: data.equation,
  };
};

exports.leastSquares = compose(
  parseVal,
  assembleEquation,
  calculateYIntercept,
  calculateGradient,
  sumDataPoints,
);
exports.assembleEquation = assembleEquation;
exports.parseVal = parseVal;
exports.sumDataPoints = sumDataPoints;
exports.calculateGradient = calculateGradient;
exports.calculateYIntercept = calculateYIntercept;
