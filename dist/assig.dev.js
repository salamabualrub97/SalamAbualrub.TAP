"use strict";

function find(nums, target) {
  var newnums = {};

  for (var i = 0; i < nums.length; i++) {
    var complement = target - nums[i];

    if (newnums[complement] !== undefined) {
      return [newnums[complement], i];
    }

    newnums[nums[i]] = i;
  }

  return [];
}

var nums = [2, 7, 11, 15];
var target = 9;
var result = find(nums, target);
console.log(result);