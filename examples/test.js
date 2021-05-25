function returnSum(a, b) {
  return a + b;
}

var anOjbect = {
  item1: 1,
  item2: 2
};

// console.log(
//   returnSum(5, 6)
//   );

function recursiveFunc(x) {
  if (x > 0) {
    // console.log(x);
    recursiveFunc(x - 1);
    console.log(x);
  }
}



console.log(recursiveFunc(10));

console.log(
  returnSum(
    returnSum(
      returnSum(anOjbect.item1, anOjbect.item2), 3
    ), 4
  )
);