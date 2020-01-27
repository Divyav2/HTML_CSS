var arr_max = 6;
var top = -1;
var array_stack = [];

function push(x) {
  if (top >= arr_max - 1) {
    console.log("Stack overflow");
  } else {
    array_stack[++top] = x;
    console.log(array_stack);
  }
}

function pop() {
  if (top < 0) {
    console.log("stack underflow");
  } else {
    x = array_stack[top];
    top = top - 1;
    console.log("top is" + top);
  }
}
function display() {
  for (var i = top; i >= 0; i--) {
    console.log(array_stack[i]);
  }
}
push(10);
push(30);
push(20);
push(60);

pop();
display();
