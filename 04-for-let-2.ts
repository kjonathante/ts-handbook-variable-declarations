/*
*/
function example_7a() {
  for (var i = 0; i < 3; i++) {
    let x = i
    setTimeout(function () { console.log(x); }, 100 * i);
    x++
  }
}
example_7a()

/*
lexical environment is a place where variables are stored during the program execution
lexical scope is a scope that is determined at compile time
source: https://blog.bitsrc.io/understanding-scope-and-scope-chain-in-javascript-f6637978cf53

globalLexicalEnvironment = {
  example_7a: <ref. to example_7a function>
  outer: <null>
}

// invoke example_7a
functionLexicalEnvironment = {
  i: 
  outer: <globalLexicalEnvironment>
}

// invoke the for loop code block because of let
blockLexicalEnvironment = {
  x:
  outer: <functionLexicalEnvironment>
}
// invoke anonymous function
functionLexicalEnvironment = {
  outer: <blockLexicalEnvironment>
}
*/


