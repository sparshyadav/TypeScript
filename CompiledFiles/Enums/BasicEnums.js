"use strict";
//Define both Numeric and String enums in TypeScript. Then, create a function that accepts either a numeric or a string enum value and logs a specific message based on the enum value. Implement the function and demonstrate its usage.
// Explanation:
// Create a numeric enum called StatusCode with values 200, 404, and 500.
// Create a string enum called UserRole with values Admin, User, and Guest.
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["OK"] = 200] = "OK";
    StatusCode[StatusCode["Error"] = 404] = "Error";
    StatusCode[StatusCode["ServerError"] = 500] = "ServerError";
})(StatusCode || (StatusCode = {}));
var UserRole;
(function (UserRole) {
})(UserRole || (UserRole = {}));
