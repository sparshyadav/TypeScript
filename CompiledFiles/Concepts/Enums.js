"use strict";
// Numeric Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);
// String Enums
var Dir;
(function (Dir) {
    Dir["Up"] = "UP";
    Dir["Down"] = "Down";
    Dir["Left"] = "Left";
    Dir["Right"] = "Right";
})(Dir || (Dir = {}));
console.log(Dir.Up);
console.log(Dir.Down);
console.log(Dir.Left);
console.log(Dir.Right);
// Heterogeneous Enums
var Result;
(function (Result) {
    Result["Success"] = "SUCCESS";
    Result[Result["Failure"] = 0] = "Failure";
})(Result || (Result = {}));
console.log(Result.Success);
console.log(Result.Failure);
