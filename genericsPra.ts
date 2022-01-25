const X: string[] = ["X", "Y", "Z"];



type A<T> = T[];

const tomato: A<string> = ['tomato']

type B<T extends string | number> = T[];

const carrot:B<string>  = ['carrot', 'carrot'];

const potato:B<number> = [1,2,3];



