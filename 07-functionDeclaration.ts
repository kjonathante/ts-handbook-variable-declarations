type C = { a: string, b?: number }
function f1({ a, b }: C): void {
  console.log(a)
  console.log(b)
}
console.log("==> f1")
f1({a:"a", b: 1}) // a 1
f1({a:"a"}) // a undefined


/*
function f2({ a, b }?: {
  a?: string;
  b?: number;
}): void
*/
function f2({ a="a", b=0 } = {}): void {
  // example of type inference
  // destructuring, defaults
  console.log(a)
  console.log(b)
}
console.log("==> f2")
f2() // a 0
f2({}) // a 0
f2({a:"yes"}) // yes 0
f2({b:123}) // a 123

/*
function f3({ a: varname1, b: varname2 }?: {
  a: string;
  b?: number;
}): void
*/
function f3({ a: varname1, b: varname2 = 0 } = { a: "a" }): void {
  // destructuring, defaults, renaming
  console.log(varname1)
  console.log(varname2)
}
console.log("==> f3")
f3() // a 0
// f3({}) error
f3({a: "yes"}) // yes 0
// f3({b:123}) // error
