'use strict';

const contract = (fn, ...types) => (...args) => {
  for (let i = 0; i < args.length; i++) {
    const argType = typeof args[i];
    const expectedType = types[i].name.toLowerCase();
    if (argType !== expectedType) {
      throw new TypeError(`expected type ${expectedType}`);
    }
  }
  const res = fn(...args);
  const resType = typeof res;
  const expectedType = types[types.length - 1].name.toLowerCase();
  if (resType !== expectedType) {
    throw new TypeError(`expected type ${expectedType}`);
  }
  return res;
};

module.exports = { contract };
