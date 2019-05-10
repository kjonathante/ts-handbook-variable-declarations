function example_1c() {
  let o = {
    a: "foo",
    b: 12,
    c: "bar"
  };
  let { a, b }: { a: string; b: number } = o;
  console.log(a, b);
}

function example_2c() {
  // variables declared before being assigned
  let a: string, b: number;
  ({ a, b } = { a: "baz", b: 101 });
  console.log(a, b);
}

function example_3c() {
  // Rest in Object Destructuring
  let o = {
    a: "foo",
    b: 12,
    c: "bar"
  };
  let { a, ...passthrough } = o;
  let total = passthrough.b + passthrough.c.length;
  console.log(a, passthrough);
}

function example_4c() {
  // Using a new Variable Name
  let o = {
    a: "foo",
    b: 12,
    c: "bar"
  };
  // property renaming
  let { a: newName1, b: newName2 } = o;
  console.log(newName1, newName2);
}

function example_5c() {
  // Using Default Values
  let o = {
    a: "foo"
  };
  // Default values
  let { a, b = 100 }: { a: string; b?: number } = o;
  console.log(a, b);
}

// function example_6() {
//   const person = {name: "Sarah", country: "Nigeria", job: "Developer"};
//   const {name:foo = "myName", friend: bar = "Annie"} = person;

//   console.log(foo);
//   console.log(bar);
// }

function example_7c() {
  // Computed Property Name
  const o = { name: "Sarah", country: "Nigeria", job: "Developer" };
  const prop = "name";
  const { [prop]: foo } = o;
  console.log(foo); // Sarah
}

function example_8c() {
  // Nesting in Object Destructuring
  const person = {
    name: "Sarah",
    place: {
      country: "Nigeria",
      city: "Lagos"
    },
    friends: ["Annie", "Becky"]
  };

  const {
    place: { country, city: capital }
  } = person;
  console.log(country); // Nigeria
  console.log(capital); // Lagos
}
example_1c();
example_2c();
example_3c();
example_4c();
example_5c();
example_7c();
example_8c();
