/*
Variable capturing quirks
*/
function example_2a() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function () { console.log(i); }, 100 * i);
  }
}
example_2a();
