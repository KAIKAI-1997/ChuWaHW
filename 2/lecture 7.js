function sum() {
  let sum = 0;
  console.log(Array.isArray(arguments));
  console.log(arguments.length);
}

sum(3, 4, 5, 6, 7);
