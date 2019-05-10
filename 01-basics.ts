function f() {
  var a = 10;
  return function g() {
    /*
    g captured the variable a declared in f. 
    At any point that g gets called, the value of a will be tied to the value of a in f. 
    Even if g is called once f is done running, it will be able to access and modify a.
    */
    var b = a + 1;
    return b;
  };
}
var g = f();
console.log(g()); // returns '11'

/*
Odd scoping rules for var 
 */
function example_1a(shouldInitialize: boolean) {
  if (shouldInitialize) {
    var x = 10;
  }

  return x;
}

console.log(example_1a(true)); // returns '10'
console.log(example_1a(false)); // returns 'undefined'

/*
The act of introducing a new name in a more nested scope is called shadowing.
Shadowing should usually be avoided in the interest of writing clearer code.
*/
function example_3a(condition, x) {
  if (condition) {
    let x = 100;
    return x;
  }
  
  return x;
}

console.log(example_3a(false, 0)); // returns '0'
console.log(example_3a(true, 0)); // returns '100'

/*
  Block-scoped variable capturing
*/
function example_4a() {
  let getCity;
  let state = "Washington";

  if (true) {
    let city = "Seattle";
    getCity = function() {
      return `${state} ${city}`;
    };
  }

  return getCity();
}

console.log(example_4a());
