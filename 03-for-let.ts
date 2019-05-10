/*
*/
function example_5a() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function () { console.log(i); }, 100 * i);
  }
}
example_5a()
