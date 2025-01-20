"use strict";
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
