'use strict';

var compare = function compare(left, right) {
  var leftParts = left.split('.'),
      rightParts = right.split('.');

  var max = Math.max(leftParts.length, rightParts.length);

  for (var i = 0; i < max; i++) {
    var leftVersion = 0,
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

var lessThan = function lessThan(left, right) {
  return compare(left, right) === -1;
};

var lessThanOrEqual = function lessThanOrEqual(left, right) {
  return compare(left, right) <= 0;
};

var equal = function equal(left, right) {
  return compare(left, right) === 0;
};

var greaterThanOrEqual = function greaterThanOrEqual(left, right) {
  return compare(left, right) >= 0;
};

var greaterThan = function greaterThan(left, right) {
  return compare(left, right) === 1;
};

module.exports = { compare: compare, lessThan: lessThan, lessThanOrEqual: lessThanOrEqual, equal: equal, greaterThanOrEqual: greaterThanOrEqual, greaterThan: greaterThan };