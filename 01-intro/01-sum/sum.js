function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Некорректный формат данных");
  }
  return a + b;
}

module.exports = sum;
