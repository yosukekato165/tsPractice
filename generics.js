var tomato = {
    size: 1,
    color: ["tomato", 1]
};
var test = function (e) { return e + 1; };
// 制約の付け方として extends を使用する方法がある
var test1 = function (e) { return e.name; };
var John = {
    name: "John"
};
console.log(test1(John));
// https://qiita.com/k-penguin-sato/items/9baa959e8919157afcd4
// const test2 = <T extends keyof Parson1>(e: T): string => e.name;
