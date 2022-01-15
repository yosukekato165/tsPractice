// type タイプ名<型変数 extends 制約,...> = 型変数 extends 条件 ? 真の型 : 偽の型

type Queue<T, K> = {
  size: T;
  color: (K | T)[] | undefined;
};

const tomato: Queue<number, string> = {
  size: 1,
  color: ["tomato", 1],
};

const test = (e: number): number => e + 1;

type Parson1 = {
  name: string;
};

const test1 = <T extends Parson1>(e: T): string => e.name;

const John: Parson1 = {
  name: "John",
};

console.log(test1(John));

// https://qiita.com/k-penguin-sato/items/9baa959e8919157afcd4

const test2 = <T extends keyof Parson1>(e: T): string => e.name;
