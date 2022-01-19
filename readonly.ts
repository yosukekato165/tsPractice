type myReadonly<T> = { readonly [K in keyof T]: T[K] };
