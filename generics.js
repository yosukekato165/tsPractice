// type タイプ名<型変数 extends 制約,...> = 型変数 extends 条件 ? 真の型 : 偽の型
var tomato = {
    size: 1,
    color: ["tomato", 1]
};
var test = function (e) { return e + 1; };
// Genericsを使用するときは制約をつける場合がある。
// 例えば下記の場合制約をつけないとeにnameが存在するか判断出来ないためである。
// Property 'name' does not exist on type 'T'.ts(2339)
var testError = function (e) { return e.name; };
// 制約の付け方として extends を使用する方法がある
var test1 = function (e) { return e.name; };
var John = {
    name: "John"
};
console.log(test1(John));
// https://qiita.com/k-penguin-sato/items/9baa959e8919157afcd4
var test2 = function (e) { return e.name; };
