// Using JavaScript, compute the following:

// The product of 9 and 9
function product(x, y) {
  return x * y;
}
product(9, 9);

// The quotient of 56 and 12
function quotient(a, b) {
  return a / b;
}
quotient(56, 12);

// The remainder of 281 divided by 9
function remainder(num1, num2) {
  return num1 % num2;
}
remainder(281, 9);

// 18 divided by 0
function divide(x, y) {
  return x / y;
}
divide(18, 0);
// ============================================================================
// The sum of string 56 and string 92
function parse() {
  const num1 = parseInt("56", 10);
  const num2 = parseInt("92", 10);
  return num1 + num2;
}
parse();

//or without parseInt
function concatStringNum() {
  const year1 = "56";
  const year2 = "92";
  return year1 + year2;
}
concatStringNum();
// ===========================================================================

// Using any comparison operator you wish on the numbers 42 and 52, make it evaluate to false.
function comparisonOp() {
  const age1 = 42;
  const age2 = 52;
  const boolean = age1 > age2;
  console.log(boolean);
}
comparisonOp();
