var row = require("readline");
var prompts = row.createInterface(process.stdin, process.stdout);
prompts.question("How many row you want to print ?", function(n) {
  function factorial(n) {
    var result = 1;

    for (var c = 1; c <= n; c++){ 
      result = result * c;
    }
    return result;

  }
  for (var i = 0; i < n; i++) {
    var space = " ";
    for (var j = 0; j <= n - i; j++) {
      space = space + " ";
    }

    for (var c = 0; c <= i; c++) {
      space = space +" "+((factorial(i) / (factorial(c) * factorial(i - c)) + " ")%10);
    }
    console.log(space);
  }
});
