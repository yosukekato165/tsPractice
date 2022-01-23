type myReadonly<T> = { readonly [K in keyof T]: T[K] };

type isNotMyReadonly<T> = { -readonly [K in keyof T]: T[K] };
