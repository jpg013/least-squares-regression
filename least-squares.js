function leastSquares(points=[]) {
  if (!points || !Array.isArray(points)) {
    throw new TypeError('least squares requires an array argument of { x, y } data points.');
  }

  const sums = points.reduce((acc, curr) => {
    const x = parseInt(curr && curr.x);
    const y = parseInt(curr && curr.y);

    return {
      x: acc.x + (isNaN(x) ? 0 : x),
      y: acc.y + (isNaN(y) ? 0 : x),
      xx: acc.xx + (isNaN(x) ? 0 : Math.pow(x, 2)),
      xy: acc.xy + ((isNaN(x) || isNaN(y)) ? 0 : x * y),
    };
  }, { x: 0, y: 0, xx: 0, xy: 0 });

  return sums;
}

exports.leastSquares = leastSquares;
