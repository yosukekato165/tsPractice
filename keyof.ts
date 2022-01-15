type ParsonKeyof = {
  name: string;
  age: number;
};
type A = keyof ParsonKeyof;

type B = ParsonKeyof[keyof ParsonKeyof];
