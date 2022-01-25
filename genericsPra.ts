const X: string[] = ["X", "Y", "Z"];



type A<T> = T[];

const tomato: A<string> = ['tomato']

type B<T extends string | number> = T[];

const carrot:B<string>  = ['carrot', 'carrot'];

const potato:B<number> = [1,2,3];

type C<T> = {[K in keyof T]?: T[K]};

type cObject = {
    name: string,
    age: number,
    place: string,
}

const John: C<cObject> = {
    name: "John",
    age: 18,
}


type D<T,K extends keyof T> = {[P in K]?: T[K]} & Omit<T, K>;
// type D<T,K extends keyof T> = {[P in K]?: T[K]} & {[P in keyof T]: T[P]};

const Tom: D<cObject, "age"> = {
    name: "Tom",
    age: 16,
    place: "Tokyo",
}