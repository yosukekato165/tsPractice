/// type Pick<T, K extends keyof T> = { [P in K]: T[P] };
var testPick = function (e) { return e.name; };
var Johnson = {
    name: "Johnson"
};
testPick(Johnson);
