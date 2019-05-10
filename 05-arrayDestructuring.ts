const example_1b = () => {
  let input = [1, 2];
  let [first, second] = input;
  console.log(first); // outputs 1
  console.log(second); // outputs 2  
  /*
  the long way
  first = input[0];
  second = input[1];
  */
}

const example_2b = () => {
  let input = [1, 2];
  let [first, second] = input;
  // swap variables
  [first, second] = [second, first];
  console.log(first); // outputs 1
  console.log(second); // outputs 2  
}

// destructing array parameter
const example_3b = ([first, second]: [number, number]) => {
  console.log(first);
  console.log(second);
}

const example_4b = () => {
  function sub1() {
    // ... remaining
    let [first, ...rest] = [1, 2, 3, 4];
    console.log(first); // outputs 1
    console.log(rest); // outputs [ 2, 3, 4 ]  
  }
  function sub2() {
    // just pick
    let [first] = [1, 2, 3, 4];
    console.log(first); // outputs 1
  }
  function sub3() {
    // just pick
    let [, second, , fourth] = [1, 2, 3, 4];
    console.log(second) // outputs 2
    console.log(fourth) // outputs 4
  }
  sub1()
  sub2()
  sub3()
}

console.log("example1")
example_1b()
console.log("example2")
example_2b()
console.log("example3")
example_3b([1, 2]);
console.log("example4")
example_4b()
