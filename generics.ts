type Queue<T, K> = {
  size: T;
  color: (K | T)[] | undefined;
};

const tomato: Queue<number, string> = {
  size: 1,
  color: ["tomato", 1],
};

const test = (e: number): number => e + 1;

// Genericsを使用するときは制約をつける場合がある。
// 例えば下記の場合制約をつけないとeにnameが存在するか判断出来ないためである。
// Property 'name' does not exist on type 'T'.ts(2339)

// const testError = <T>(e: T): string => e.name;

type Parson1 = {
  name: string;
};

// 制約の付け方として extends を使用する方法がある
const test1 = <T extends Parson1>(e: T): string => e.name;

const John: Parson1 = {
  name: "John",
};

console.log(test1(John));

// https://qiita.com/k-penguin-sato/items/9baa959e8919157afcd4

// const test2 = <T extends keyof Parson1>(e: T): string => e.name;
