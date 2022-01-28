type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

type TodoPreview = Omit<Todo, "description">;

const preview: TodoPreview = {
  title: "部屋の掃除",
  completed: false,
};
console.log(preview); //=> { title: '部屋の掃除', completed: false }
