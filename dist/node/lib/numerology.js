"use strict";

function numberbaydin(num) {
  //Aung Myo Kyaw
  function numsplitreduce(a, b) {
    return Number(a) + Number(b);
  }
  var numsplit = num.toString().split("");
  var sum = numsplit.reduce(numsplitreduce);
  //console.log(sum);
  while (sum > 9) {
    numsplit = sum.toString().split("");
    sum = numsplit.reduce(numsplitreduce);
  }
  //console.log(sum);
  return sum;
}
module.exports = numberbaydin;