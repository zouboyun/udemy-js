function main() {
  var mapped = function(verb) {
    return function(subjects) {
      var results = [];
      for (var a=0; a<subjects.length; a++) {
        results.push(verb.apply(this, [subjects[a]]));
      }
      return results;
    }
  }
  var reduced = function(verb) {
    return function(seed, subjects) {
      var result = seed;
      for (var a=0; a<subjects.length; a++) {
        result = verb.apply(this, [result, subjects[a]]);
      }
      return result;
    }
  }
  var fib = [1, 2, 3, 5, 8];
  var double = function(number) { return number * 2; };
  var triple = function(number) { return number * 3; };
  var sum = function(a, b) { return a + b; };
  var product = function(a, b) { return a * b; };
  var doubledFib = mapped(double)(fib); // 2, 4, 6, 10, 16
  var sumOfDoubledFib = reduced(sum)(0, doubledFib); // 38
  alert(sumOfDoubledFib);
  alert(reduced(product)(1, doubledFib));
  alert(reduced(product)(1, mapped(triple)(fib))); // mapped triple fib -> 3, 6, 9, 15, 24
}
// Test Setup
// var Mocha = require('mocha')
// var assert = require('assert')
// var mocha = new Mocha()

// mocha.suite.emit('pre-require', this, 'solution', mocha)

/* your code here*/

// given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum

function pairsSum(numList, sum) {
  if (! (numList instanceof Array)) {
    throw new Error('Please input an array');
  }
  if (! (numList.every(x => typeof x == 'number'))) {
    throw new Error('Please input integers in your array');
  }
  if (Math.min(...numList) > sum) {
    return [];
  }
  if (Math.min(...numList) == sum) {
    return [Math.min(...numList)];
  }
  for (var i = 0; i < numList.length; i++) {
    for (var j = i + 1; j < numList.length; j++) {
      if (numList[i] + numList[j] == sum) {
        return [numList[i], numList[j]];
      }
    }
  }
}

console.log(pairsSum([1, 2, 3], 5)) // should return [1, 3]
// describe('Find Pairs of Sum Function', function() {
//   it('Should return true when input a list of non-negative integers', function() {
//     var testList = [1, 2, 3];
//     assert(pairsSum(testList));
//   })
// })

/* end of your code*/

// mocha.run();

