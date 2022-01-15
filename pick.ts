type Parson2 = {
  name: string;
  age: number;
};

/// type Pick<T, K extends keyof T> = { [P in K]: T[P] };

const testPick = <T extends Pick<Parson2, "name">>(e: T): string => e.name;

const Johnson: Pick<Parson2, "name"> = {
  name: "Johnson",
};

testPick(Johnson);
