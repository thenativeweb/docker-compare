'use strict';

const compare = function (left, right) {
  const leftParts = left.split('.'),
        rightParts = right.split('.');

  const max = Math.max(leftParts.length, rightParts.length);

  for (let i = 0; i < max; i++) {
    let leftVersion = 0,
        rightVersion = 0;

    if (leftParts.length > i) {
      leftVersion = leftParts[i];
    }
    if (rightParts.length > i) {
      rightVersion = rightParts[i];
    }

    if (leftVersion > rightVersion) {
      return 1;
    }
    if (rightVersion > leftVersion) {
      return -1;
    }
  }

  return 0;
};

const lessThan = function (left, right) {
  return compare(left, right) === -1;
};

const lessThanOrEqual = function (left, right) {
  return compare(left, right) <= 0;
};

const equal = function (left, right) {
  return compare(left, right) === 0;
};

const greaterThanOrEqual = function (left, right) {
  return compare(left, right) >= 0;
};

const greaterThan = function (left, right) {
  return compare(left, right) === 1;
};

module.exports = { compare, lessThan, lessThanOrEqual, equal, greaterThanOrEqual, greaterThan };
