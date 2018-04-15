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
main();

