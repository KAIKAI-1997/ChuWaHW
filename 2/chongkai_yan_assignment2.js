// P1:
// ● Given the array, implement a function for generating a new array which doubles the
// quantity and price in each object.
// ● Given the array, implement a function for generating a new array which contains item
// quantity > 2 and price > 300 only.
// ● Given the array, implement a function to calculate the total value of the items.

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

function double(arr) {
  return arr.map((ele) => ({
    quantity: ele.quantity * 2,
    price: ele.price * 2,
  }));
}

console.log(double(itemsObject));

const filterArr = itemsObject.filter((ele) => {
  return ele.price > 300 && ele.quantity > 2;
});

console.log(filterArr);

const sum = itemsObject.reduce((pre, cur) => pre + cur.quantity * cur.price, 0);

console.log(sum);

// P2
// Given the string, implement a function to remove all the non-alphabet characters and
// extra space in the string and convert the string to all lowercase.

const string =
  " Perhaps The Easiest-to-understand Case   For Reduce Is   To Return The Sum Of   All The Elements In An Array ";

function clear(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z]/g, " ")
    .replace(/[ ]+/g, " ");
}

console.log(clear(string));
