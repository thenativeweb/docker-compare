'use strict';

const compare = function (left, right) {
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

const greaterThan = function (left, right) {
  return compare(left, right) === 1;
};

const greaterThanOrEqual = function (left, right) {
  return compare(left, right) >= 0;
};
