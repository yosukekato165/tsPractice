type a = { a: string };
type b = { b: number; k: string };

type c = a | b;
type d = a & b;

// union　　型はどちらかの型が満たされていればOK
const union: c = {
  // a: "tomato",
  b: 2,
  k: "red",
};

// intersection 型は両方の型が満たされていればOK
const intersection: d = {
  a: "carrot",
  b: 2,
  k: "orange",
};
console.log(union);
console.log(intersection);
