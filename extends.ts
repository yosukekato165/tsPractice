// type タイプ名<型変数 extends 制約,...> = 型変数 extends 条件 ? 真の型 : 偽の型

type extendsTest = string | object;

// Tがstringだったらnumber、それ以外ならbooleanに変換
type ChangeTypeIsStringToNumberIsNotStringToBoolean<
  T extends extendsTest
> = T extends string ? number : boolean;

type Test01A = ChangeTypeIsStringToNumberIsNotStringToBoolean<string>; //number
type Test01B = ChangeTypeIsStringToNumberIsNotStringToBoolean<object>; //boolean
// type Test01C = ChangeTypeIsStringToNumberIsNotStringToBoolean<number>;
