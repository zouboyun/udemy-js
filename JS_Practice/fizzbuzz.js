function fizzBuzzReloaded(start, stop, step, functions) {
  // your code
  var sequence = [];
  var stepNum = Math.abs((stop - start) / step);
  
  for (var i = 0; i <= stepNum; i++) {
    sequence.push(start + step * i);
  }
  
  var tranform = function (num) {
    // mapping between words and conditions
    // return words when conditions are satisfied
    // return num when no condition satisfied
    
    var wordNum = Array.from(functions.keys()).map(
      function(word) {
        if (functions.get(word)(num) === true) {
          return word;
        } else {
          return '';
        }
      }
    );
    wordNum = wordNum.join('');
    if (wordNum != '') {
      return wordNum;
    } else {
      return num;
    }
  }
  return sequence.map(tranform).join(' ');
}

