type Parson = {
  name: string;
  age: number;
  gender: "Male" | "Female";
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
