//it should perform this sum operation
function sum(...args) {
  if (arguments.length === 0) {
    return "sum invoked without arguments";
  } else if (arguments.length === 1) {
    return "sum functions needs atleast 2 arguments";
  }
  a = Number(a);
  b = Number(b);

  let result = Number((a, b)).toFixed(1);

  return result;
}

module.exports = sum;
