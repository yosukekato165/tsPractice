type Parson = {
  name: string;
  age: number;
  gender: "Male" | "Female";
};

type Body = {
  weight: number;
  height?: number;
};

type Human = Parson & Body;

const Tom: Human = {
  name: "Tom",
  age: 18,
  gender: "Female",
  weight: 55,
  height: 165,
};

// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };

type ParsonOptional = Partial<Parson>;

// type ParsonOptional = {
//   name?: string;
//   age?: number;
//   gender?: "Male" | "Female";
// };
