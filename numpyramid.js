var row = require("readline");
var prompts = row.createInterface(process.stdin, process.stdout);
prompts.question("How many row you want to print ?", function(n) {
  for (var i = 0; i <= n; i++) {
    var sp = " ";
    for (var space = 0; space <= n - i; space++) {
      sp = sp + " " + " ";
    }
    j = i;

    for (var c = 1; c <= i; c++) {
      sp = sp + (j + " ");
      j++;
    }

    j = j - 2;
    for (var c = 1; c < i; c++) {
      sp = sp + (j + " ");

      j--;
    }

    console.log(sp);
  }
});
