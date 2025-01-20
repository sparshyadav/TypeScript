"use strict";
// Heterogeneous Enums
var Result;
(function (Result) {
    Result["Success"] = "SUCCESS";
    Result[Result["Failure"] = 0] = "Failure";
})(Result || (Result = {}));
console.log(Result.Success);
console.log(Result.Failure);
