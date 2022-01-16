type Parson2 = {
  name: string;
  age: number;
};

type myPick<T, K extends keyof T> = { [P in K]: T[P] };

// K extends keyof T することでKに代入している文字列をTのkeyと紐づけることで型安全を担保している
// [P in K]でKに代入された文字列の数ループしている

// T = Parson2 = {name: string, age: number};

// K extends keyof T
// K = name extends keyof Parson2
// P = name in K = name | age: T=Parson2[P = name]
const testPick = <T extends myPick<Parson2, "name">>(e: T): string => e.name;

const Johnson: myPick<Parson2, "name"> = {
  name: "Johnson",
};

testPick(Johnson);
