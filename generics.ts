// type タイプ名<型変数 extends 制約,...> = 型変数 extends 条件 ? 真の型 : 偽の型

type Queue<T, K> = {
  num: T;
  string: (K | T)[] | undefined;
};

const tomato: Queue<number, string> = {
  num: 1,
  string: ["tomato", 1],
};

const test = (e: number): number => e + 1;

const test1 = <T>(e: T): T => e;
