'use strict';
module.exports = function() {
  let ranNum = Math.random() * (1000000 - 0);
  return function secretNumber() {
    return ranNum;
  }
};