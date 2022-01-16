interface Test {
  foo: number;
}

const testAs = {} as Test;
testAs.foo = 123; // OK!!
