/*Write a function that takes an argument and returns that argument.*/
function identity(x)
{
  return x;// return same value
}
/*Write two binary functions, add and mul, that take two numbers and return their sum and product*/
function add(a,b)
{
  return a+b;
}
function mul(a,b)
{
  return a*b;
}
/*Write a function that takes an argument and returns a function that returns that argument.*/
function idf(x)
{
  return identity(x);
}
/*write a function that adds from two invocations*/
function adf(x){
  function addf(y){
    return x+y;
  }
  return addf;
}
/*write a function that takes a binary function and makes it callable with two invocations*/
function applyf(binaryf) {
  return function (y) {
    return function (z) {
      return binaryf(y, z);
    }
  }
}
/*write a function that takes a function and an argument, and returns a function that cans supply a second argument*/
function curry(binary, x) {
  return function(y) {
    return binary(x, y);
  }
}

/*write a function twice that takes a binary function and returns  a unary function  that passes its argument to the  binary function twice.*/
function twice(binary1)
{
  return function(x){
    return binary1(x,x);
  };
}
/*Write  methodize, a function that converts a binary function to a method.*/
function methodize(funct){
  return function(num){
    return funct(this,num);
  }
}
Number.prototype.add = methodize(add);


/*write a function composeu that takes two unary functions  and returns a unary function that can ball them both*/
function double(x){
  return x+x;
}
function square(x){
  return x*x;
}
function compose(double, square) {
  return function(x) {
    return square(double(x));
  }
}
//----------------------------------------------------------------//
console.log(identity(3));
console.log("----------");
console.log(add(3,4));
console.log(mul(3,4));
console.log("----------");
//Write a function that takes an argument and returns a function that returns that argument.
console.log("----------");
console.log(idf(9));
console.log("----------");
//write a function that adds from two invocations
var result;
console.log("----------");
result=adf(3)(4);
console.log(result);
console.log("----------");
/*write a function that takes a binary function and makes it callable with two invocations*/
console.log("----------");
console.log(applyf(add)(3)(10));
console.log(applyf(mul)(3)(10));
console.log("----------");

/*write a function that takes a function and an argument, and returns a function that cans supply a second argument*/
console.log("---------");
add3 = curry(add, 3);
console.log(add3(4));
console.log(curry(mul,5)(5));
console.log("----------");

/*write a function twice that takes a binary function and returns  a unary function  that passes its argument to the  binary function twice.*/
console.log("----------");
var d=twice(add);
console.log(d(11));
var d=twice(mul);
console.log(d(11));
console.log("----------");

/*Write  methodize, a function that converts a binary function to a method */
console.log("----------");
console.log((2).add(10));
console.log("----------");

/*write a function composeu that takes two unary functions  and returns a unary function that can ball them both*/
console.log("----------");
console.log(compose(double, square) (3));
console.log("----------");